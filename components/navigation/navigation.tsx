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
        <li
          key={page.sys.id}
          className={cn(
            "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
          )}
        >
          <Link href={page.slug}>{page.pageName}</Link>
        </li>
      );
    });
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-800">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center justify-center sm:justify-start">
          <Link href="/">
            <Icons.logo className="w-8 h-8" />
          </Link>
          {items && items.length > 0 && (
            <nav>
              <ul className="hidden sm:flex ml-10">
                {items?.map(
                  (menuItem) =>
                    menuItem &&
                    menuItem.groupName && (
                      <li
                        key={menuItem.sys.id}
                        className="group ml-10 relative"
                      >
                        {menuItem.link ? (
                          <Link
                            href={`/${
                              getFragmentData(
                                PageLinkFieldsFragment,
                                menuItem.link
                              ).slug
                            }`}
                            className={cn(
                              "block text-sm font-medium text-gray-900 dark:text-gray-100"
                            )}
                          >
                            {menuItem.groupName}
                          </Link>
                        ) : (
                          <span
                            className={cn(
                              "block text-sm font-medium text-gray-900 dark:text-gray-100"
                            )}
                          >
                            {menuItem.groupName}
                          </span>
                        )}
                        {!menuItem.link && menuItem?.children && (
                          <ul
                            className={cn(
                              "absolute left-0 mt-0 w-48 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md shadow-lg py-2 invisible group-hover:visible"
                            )}
                          >
                            {renderGroupLinks(menuItem.children)}
                          </ul>
                        )}
                      </li>
                    )
                )}
              </ul>
            </nav>
          )}
        </div>
        <div className="flex items-center justify-center sm:justify-end">
          <div className="flex items-center bg-gray-100 dark:bg-zinc-700 rounded-md p-2">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              className="ml-2 bg-transparent text-sm text-gray-600 dark:text-gray-300"
              placeholder="Search"
              type="search"
            />
          </div>
          <svg
            className=" h-6 w-6 ml-6 text-gray-500 dark:text-gray-200"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <svg
            className=" h-6 w-6 ml-6 text-gray-500 dark:text-gray-200"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
          </svg>
          <svg
            className=" h-6 w-6 ml-6 text-gray-500 dark:text-gray-200 sm:hidden"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </div>
    </header>
  );
};
