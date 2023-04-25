import { FragmentType, graphql, useFragment } from '#/gql';
import Image from 'next/image';
import { AssetFieldsFragment } from './asset';

type ImageAssetProps = {
  asset: FragmentType<typeof AssetFieldsFragment>;
};

const ImageAsset = (props: ImageAssetProps) => {
  const asset = useFragment(AssetFieldsFragment, props.asset);
  const { sys, title, url, width, height, description } = asset;

  if (!sys?.id) return null;

  return (
    <>
      {asset && url && width && height && (
        <Image
          src={url}
          width={width / 2}
          height={height / 2}
          alt={description || title || 'Untitled'}
        />
      )}
    </>
  );
};

export default ImageAsset;
