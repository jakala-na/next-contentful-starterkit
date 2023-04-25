import { FragmentType, useFragment } from '#/gql';
import { AssetFieldsFragment } from './asset';
import Image from 'next/image';

type ImageAssetProps = {
  asset: FragmentType<typeof AssetFieldsFragment>;
};

const ImageAsset = (props: ImageAssetProps) => {
  const asset = useFragment(AssetFieldsFragment, props.asset);
  const { title, url, width, height, description } = asset;

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
