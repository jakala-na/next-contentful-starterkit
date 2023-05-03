import { ProductItemFragment, SysItemFragment } from '#/gql/graphql';
import { graphqlClient } from '#/lib/graphqlClient';
import { ProductListQuery, ProductCard } from '#/ui/product';

// export const revalidate = 3;
// export const dynamicParams = false;

const Page = async () => {
  // Get the list of Products
  const result = await graphqlClient.request(ProductListQuery);
  const products = result.productCollection?.items;

  return (
    <>
      <h1>Products</h1>
      {products ? (
        products.map(
          (product) =>
            product && (
              <ProductCard
                key={
                  ((product as ProductItemFragment).sys as SysItemFragment).id
                }
                product={product}
              />
            )
        )
      ) : (
        <p>No products yet.</p>
      )}
    </>
  );
};

export default Page;
