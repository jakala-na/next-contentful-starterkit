import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import Link from 'next/link';
import { Converter } from 'showdown';

// export const revalidate = 3;

// export const dynamicParams = false;

const converter = new Converter();

const ProductListQuery = graphql(/* GraphQL */ `
  query ProductList {
    productCollection(limit: 1000, preview: false) {
      items {
        ...ProductItem
        sys {
          id
        }
      }
    }
  }
`);

const Page = async () => {
  // Get the list of Blog Posts
  const result = await graphqlClient.request(ProductListQuery);
  const products = result.productCollection?.items;

  return (
    <>
      <h1>Products</h1>
      {products
        ? products.map((product) => {
            if (!product) return;
            return (
              <div key={product.sys.id}>
                <h2>
                  <Link href={`/parallel-routes/${product.slug}`}>
                    {product.title}
                  </Link>
                </h2>
                {product.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(product.description)
                    }}
                  />
                )}
              </div>
            );
          })
        : 'No products yet.'}
    </>
  );
};

export default Page;
