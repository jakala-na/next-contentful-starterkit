import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { AssetFieldsFragment } from '../asset';
import Image from 'next/image';
import { RichText } from '../richText';

export const ProductFieldsFragment = graphql(/* GraphQL */ `
  fragment ProductItem on Product {
    sys {
      ...SysItem
    }
    slug
    title
    description {
      json
    }
    price
    image {
      ...AssetItem
    }
  }
`);

export const ProductListQuery = graphql(/* GraphQL */ `
  query ProductList {
    productCollection(limit: 1000, preview: false) {
      items {
        ...ProductItem
      }
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
  const { title, price, description } = product;

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
      {description && <RichText json={description.json} />}
    </>
  );
};

export default Product;
