import { FragmentType, graphql, getFragmentData } from "#/gql";
import Link from "next/link";
import { PageLinkFieldsFragment } from "../page";

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

const Navigation = (props: NavigationProps) => {
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
    <>
      {items?.length && (
        <nav>
          <ul>
            {items.map(
              (menuItem) =>
                menuItem && (
                  <li key={menuItem.sys.id}>
                    {!menuItem.link ? (
                      menuItem.groupName
                    ) : (
                      <Link
                        href={`/${
                          getFragmentData(PageLinkFieldsFragment, menuItem.link)
                            .slug
                        }`}
                      >
                        {menuItem.groupName}
                      </Link>
                    )}
                    {!menuItem.link && menuItem?.children && (
                      <ul>{renderGroupLinks(menuItem.children)}</ul>
                    )}
                  </li>
                )
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
