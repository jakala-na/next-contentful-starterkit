import { FragmentType, graphql, getFragmentData } from "#/gql";
import Link from "next/link";
import { PageLinkFieldsFragment } from "../page";
import { cn } from "#/lib/utils";
import { Icons } from "../icons";

const MenuGroupFeaturedPagesFragment = graphql(/* GraphQL */ `
  fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {
    items {
      ...PageLinkFields
    }
  }
`);

const NavigationFieldsFragment = graphql(/* GraphQL */ `
  fragment NavigationFields on NavigationMenuCollection {
    items {
      menuItemsCollection {
        items {
          __typename
          sys {
            id
          }
          groupName
          link: groupLink {
            ...PageLinkFields
          }
          children: featuredPagesCollection {
            ...MenuGroupFields
          }
        }
      }
    }
  }
`);

export type NavigationProps = {
  data: FragmentType<typeof NavigationFieldsFragment>;
};

export const Navigation = (props: NavigationProps) => {
  const data = getFragmentData(NavigationFieldsFragment, props.data);
  const items = data.items[0]?.menuItemsCollection?.items;

  // Fragment Masking is forcing us to split fragments to match our components or our helper functions.
  // https://github.com/dotansimha/graphql-code-generator/discussions/8554#discussioncomment-4131776
  const renderGroupLinks = (
    group: FragmentType<typeof MenuGroupFeaturedPagesFragment>
  ) => {
    const collection = getFragmentData(MenuGroupFeaturedPagesFragment, group);
    return collection?.items?.map((menuItem) => {
      // const page = getFragmentData(PageLinkFieldsFragment, menuItem);
      if (!menuItem) return null;

      const page = getFragmentData(PageLinkFieldsFragment, menuItem);

      if (!page.slug) return null;
      return (
        <li key={page.sys.id}>
          <Link href={page.slug}>{page.pageName}</Link>
        </li>
      );
    });
  };

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="w-8 h-8" />
        <span className="inline-block font-bold">
          {"Next 13 Contentful Starter"}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (menuItem) =>
              menuItem &&
              menuItem.groupName && (
                <>
                  {menuItem.link ? (
                    <Link
                      key={menuItem.sys.id}
                      href={`/${
                        getFragmentData(PageLinkFieldsFragment, menuItem.link)
                          .slug
                      }`}
                      className={cn("flex items-center text-sm font-medium")}
                    >
                      {menuItem.groupName}
                    </Link>
                  ) : (
                    <span className="flex items-center text-sm font-medium">
                      {menuItem.groupName}
                    </span>
                  )}
                  {!menuItem.link && menuItem?.children && (
                    <ul>{renderGroupLinks(menuItem.children)}</ul>
                  )}
                </>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
};
