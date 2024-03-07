import { ComponentRenderer } from "#/components/component-renderer";
import onSubscribeFormAction from "#/components/forms/server-actions/subscription.action";
import { SubscriptionForm } from "#/components/forms/SubscriptionForm";
import { graphql } from "#/gql";
import { graphqlClient } from "#/lib/graphqlClient";
import { draftMode } from "next/headers";

const getPage = async (slug: string, locale: string, preview = false) => {
  const pageQuery = graphql(/* GraphQL */ `
    query PageQuery($slug: String, $locale: String, $preview: Boolean) {
      pageCollection(
        locale: $locale
        preview: $preview
        limit: 1
        where: { slug: $slug }
      ) {
        items {
          topSectionCollection(limit: 10) {
            items {
              ...ComponentHeroBannerFields
              ...ComponentDuplexFields
            }
          }
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
  ).pageCollection?.items?.[0];
};

export default async function LandingPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug?.join("/") ?? "home";

  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPage(slug, "en-US", isDraftMode);

  const topComponents = pageData?.topSectionCollection?.items;

  return (
    <div>
      <>Page slug: {slug}</>
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
      <div className="mx-auto max-w-xl py-4">
        <SubscriptionForm onFormAction={onSubscribeFormAction} />
      </div>
    </div>
  );
}
