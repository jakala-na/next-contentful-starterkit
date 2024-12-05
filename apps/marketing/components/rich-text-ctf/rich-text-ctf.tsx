/* eslint-disable -- TODO: Rework this file to fix types and ESLINT errors */

import { useMemo } from 'react';

import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, type Block as RichtextBlock } from '@contentful/rich-text-types';

import { TopicPersonClient } from '#/components/topic-person/topic-person-client';
import { type OmitRecursive, tryget } from '#/lib/utils';

import { AssetCtf, type AssetFieldsFragment } from '../asset-ctf';

export interface RichTextProps {
  json: any;
  links?: {
    entries?: {
      block?: any;
      inline?: any;
    } | null;
    assets?: {
      block?: any;
    } | null;
  } | null;
}

interface Block extends RichtextBlock {
  __typename: string;
  sys: { id: string };
}

type Asset = OmitRecursive<typeof AssetFieldsFragment, '__typename'>;

export function RichTextCtf(props: RichTextProps) {
  const { json, links } = props;

  const entryBlocks = useMemo(
    () => tryget(() => links!.entries!.block!.filter((b: any) => Boolean(b)), [] as Block[])!,
    [links]
  );

  const assetBlocks = useMemo(
    () => tryget(() => links!.assets!.block!.filter((b: any) => Boolean(b)), [] as Asset[])!,
    [links]
  );

  const options = useMemo(() => {
    const opts: Options = {};
    opts.renderNode = {
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const id = tryget(() => node.data.target.sys.id);

        return <>{`${node.nodeType} ${id}`}</>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const id = tryget(() => node.data.target.sys.id);
        if (id) {
          const entry = entryBlocks.find((block: any) => block.sys?.id === id);
          const entryComponent = (
            <>
              <div>Entry:</div>
              <pre>{JSON.stringify(entry, null, 2)}</pre>
            </>
          );

          if (entry) {
            switch (entry.__typename) {
              case 'TopicPerson':
                return (
                  <div className="not-wysiwyg py-5">
                    <TopicPersonClient data={entry} />
                  </div>
                );
            }

            return entryComponent;
          }
        }
        return <>{`${node.nodeType} ${id}`}</>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const id = tryget(() => node.data.target.sys.id);
        if (id) {
          const asset = assetBlocks.find((block: any) => block!.sys.id === id);
          return asset && <AssetCtf data={asset} />;
        }

        return <>{`${node.nodeType} ${id}`}</>;
      },
    };

    return opts;
  }, [entryBlocks, assetBlocks]);

  return <>{documentToReactComponents(json, options)}</>;
}
