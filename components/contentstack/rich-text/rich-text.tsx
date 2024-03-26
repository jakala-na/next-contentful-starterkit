import { useMemo } from 'react'
// import {
//   Block as RichtextBlock,
//   BLOCKS,
//   INLINES,
// } from "@contentful/rich-text-types";//@TODO Implement Contentstack Alternative.
// import {
//   documentToReactComponents,
//   Options,
// } from "@contentful/rich-text-react-renderer";//@TODO Implement Contentstack Alternative.
import { OmitRecursive, tryget } from '#/lib/utils'

import { Asset, AssetFieldsFragment } from '#/components/contentstack/asset'

export interface RichTextProps {
  json: any
  links?: {
    entries?: {
      block?: any
      inline?: any
    } | null
    assets?: {
      block?: any
    } | null
  } | null
}

interface Block {
  __typename: string
  sys: { id: string }
}

type Asset = OmitRecursive<typeof AssetFieldsFragment, '__typename'>

export const RichText = (props: RichTextProps) => {
  const { json, links } = props

  const entryBlocks = useMemo(
    () => tryget(() => links!.entries!.block!.filter((b: any) => !!b), [])!,
    [links]
  )

  const assetBlocks = useMemo(
    () => tryget(() => links!.assets!.block!.filter((b: any) => !!b), [])!,
    [links]
  )

  const options = useMemo(() => {
    //@TODO Implement Contentstack Alternative.
    // const opts: Options = {};
    //  opts.renderNode = {
    //    [INLINES.EMBEDDED_ENTRY]: (node) => {
    //      const id = tryget(() => node.data.target.sys.id);
    //      return <>{`${node.nodeType} ${id}`}</>;
    //    },
    //    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
    //      const id = tryget(() => node.data.target.sys.id);
    //      if (id) {
    //        const entry = entryBlocks.find((block: any) => block!.sys.id === id);
    //
    //        if (entry) {
    //          return (
    //            <>
    //              <div>Entry:</div>
    //              <pre>{JSON.stringify(entry, null, 2)}</pre>
    //            </>
    //          );
    //        }
    //      }
    //      return <>{`${node.nodeType} ${id}`}</>;
    //    },
    //    [BLOCKS.EMBEDDED_ASSET]: (node) => {
    //      const id = tryget(() => node.data.target.sys.id);
    //      if (id) {
    //        const asset = assetBlocks.find((block: any) => block!.sys.id === id);
    //        return asset && <Asset data={asset} />;
    //      }
    //
    //      return <>{`${node.nodeType} ${id}`}</>;
    //    },
    //  };
    //
    //  return opts;
    return null
  }, [entryBlocks, assetBlocks])

  return <></> //return <>{documentToReactComponents(json, options)}</>;
}
