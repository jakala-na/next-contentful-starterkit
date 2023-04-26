import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { AssetFieldsFragment } from '../asset';
import Image from 'next/image';

const ProductFieldsFragment = graphql(/* GraphQL */ `
  fragment ProductItem on Product {
    sys {
      ...SysItem
    }
    slug
    title
    price
    image {
      ...AssetItem
    }
  }
`);

type ProductProps = {
  product: FragmentType<typeof ProductFieldsFragment>;
};

const Product = (props: ProductProps) => {
  const product = useFragment(ProductFieldsFragment, props.product);
  const sys = useFragment(SysFieldsFragment, product.sys);
  const image = useFragment(AssetFieldsFragment, product.image);
  const { title, price } = product;

  return (
    <>
      <h1>{title}</h1>
      <div>Id: {sys.id}</div>
      <div>Price: {`$${price}`}</div>
      {image && image.url && image.width && image.height && (
        <div>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.description || image.title || 'Untitled'}
          />
        </div>
      )}
    </>
  );
};

export default Product;
