import { FragmentType, graphql, useFragment } from '#/gql';
import Image from 'next/image';

const ProductFieldsFragment = graphql(/* GraphQL */ `
  fragment ProductItem on Product {
    sys {
      id
    }
    slug
    title
    price
    image {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
  }
`);

const ProductBySlugQuery = graphql(/* GraphQL */ `
  fragment ProductBySlugQuery on Query {
    productCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        __typename
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
  const { sys, title, price, image } = product;

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
