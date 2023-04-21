import { FragmentType, graphql, useFragment } from '#/gql';
import { ProductItemFragment } from '#/gql/graphql';
import Product from './product';

export const ProductBySlugQuery = graphql(/* GraphQL */ `
  fragment ProductBySlugQuery on Query {
    productCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        __typename
        ...ProductItem
      }
    }
  }
`);

export const AllProductQuery = graphql(/* GraphQL */ `
  fragment AllProductQuery on Query {
    productCollection(preview: false) {
      items {
        __typename
        ...ProductItem
      }
    }
  }
`);

type ProductListProps = {
  query:
    | FragmentType<typeof ProductBySlugQuery>
    | FragmentType<typeof AllProductQuery>;
  fragment: typeof ProductBySlugQuery | typeof AllProductQuery;
};

const ProductList = (props: ProductListProps) => {
  const productList = useFragment(props.fragment, props.query);

  if (!productList.productCollection?.items.length) return null;

  return (
    <>
      {productList.productCollection?.items.map((item) => {
        return (
          item && (
            <Product
              key={(item as ProductItemFragment).sys.id}
              product={item}
            />
          )
        );
      })}
    </>
  );
};

export default ProductList;
