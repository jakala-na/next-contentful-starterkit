import { FragmentType, useFragment } from '#/gql';
import { AssetFieldsFragment } from './asset';
import Image, { ImageProps } from 'next/image';

type ImageAssetProps = {
  asset: FragmentType<typeof AssetFieldsFragment>;
};

const ImageAsset = (props: ImageAssetProps) => {
  const { asset, ...rest } = props;
  const image = useFragment(AssetFieldsFragment, asset);
  const { title, url, width, height, description } = image;

  return (
    <>
      {asset && url && width && height && (
        <Image
          src={url}
          width={width / 2}
          height={height / 2}
          alt={description || title || 'Untitled'}
          {...rest}
        />
      )}
    </>
  );
};

export default ImageAsset;
