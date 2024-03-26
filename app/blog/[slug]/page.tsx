import { ComponentRenderer } from "#/components/component-renderer";
import { graphql } from "#/lib/graphql";
import { graphqlClient } from "#/lib/graphqlClient";
import { draftMode } from "next/headers";
import * as Utils from "@contentstack/utils";
import {renderOption} from "#/gql/requests/getHeaderRes";
import parse from 'html-react-parser';
import { format } from 'date-fns';

const getPage = async (slug: string, locale: string, preview = false) => {

  const pageQuery = graphql(/* GraphQL */ `query BlogPostQuery {
      all_blog_post(where: {url: "/blog/${slug}"}) {
          total
          items {
              body {
                  json
              }
              title
              url
              seo {
                  canonical_url
                  description
                  no_follow
                  no_index
                  title
              }
              date
          }
      }
  }
  `);



  return (
    await graphqlClient(preview).request(pageQuery, {
      locale,
      preview,
      slug,
    })
  ).all_blog_post ?? null;

};

export default async function LandingPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPage(slug, "en-US", isDraftMode);

  const topComponents = pageData?.items;

  Utils.GQL.jsonToHTML({
    entry: pageData?.items?.[0],
    paths: ["body"],
    renderOption: renderOption,
  });

  return (
    <div>
      <h1 className="text-lg font-bold">{pageData?.items?.[0]?.title} (Blog Page Slug: {slug})</h1>
      <div className="my-8 italic">
        {format(pageData?.items?.[0]?.date, 'MMMM dd, yyyy, HH:mm')}
      </div>
      <div className="my-8">
        {parse(pageData?.items?.[0]?.body)}
      </div>
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
    </div>
  );
}

