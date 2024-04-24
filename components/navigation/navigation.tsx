import { FragmentOf, graphql, readFragment } from "gql.tada";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "#/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet"
import { PageLinkFieldsFragment } from "../page";
import { cn } from "#/lib/utils";
import { Icons } from "../icons";
import { Button } from "#/components/ui/button";

const MenuGroupFeaturedPagesFragment = graphql(
  `
    fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {
      items {
        ...PageLinkFields
      }
    }
  `,
  [PageLinkFieldsFragment]
);

export const NavigationFieldsFragment = graphql(
  `
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
  `,
  [PageLinkFieldsFragment, MenuGroupFeaturedPagesFragment]
);

export type NavigationProps = {
  data: FragmentOf<typeof NavigationFieldsFragment>;
};

export const Navigation = (props: NavigationProps) => {
  const data = readFragment(NavigationFieldsFragment, props.data);
  const items = data.items[0]?.menuItemsCollection?.items;

  // Fragment Masking is forcing us to split fragments to match our components or our helper functions.
  // https://github.com/dotansimha/graphql-code-generator/discussions/8554#discussioncomment-4131776
  const getGroupLinks = (
    group: FragmentOf<typeof MenuGroupFeaturedPagesFragment>
  ) => {
    const collection = readFragment(MenuGroupFeaturedPagesFragment, group);
    return collection?.items?.map((menuItem) => {
      // const page = getFragmentData(PageLinkFieldsFragment, menuItem);
      if (!menuItem) return null;

      const page = readFragment(PageLinkFieldsFragment, menuItem);

      if (!page.slug) return null;

      return {
        id: page.sys.id,
        slug: page.slug,
        name: page.pageName,
      }
    });
  };

  const MainMenuDesktop = () => (
    <div className="hidden md:flex">
      {items && items.length > 0 && (
        <NavigationMenu>
          <NavigationMenuList>
            {items?.map(
              (menuItem, index) => {
                const groupLinks = !menuItem?.link && menuItem?.children && getGroupLinks(menuItem.children);

                return (
                  menuItem &&
                  menuItem.groupName && (
                    <NavigationMenuItem
                      key={menuItem.sys.id}
                    >
                      {menuItem.link ? (
                        <Link
                          href={`/${
                            readFragment(
                              PageLinkFieldsFragment,
                              menuItem.link
                            ).slug
                          }`}
                          className={cn(
                            "px-4 py-2 text-sm"
                          )}
                        >
                          {menuItem.groupName}
                        </Link>
                      ) : (
                        <NavigationMenuTrigger>{menuItem.groupName}</NavigationMenuTrigger>
                      )}
                      {groupLinks && (
                        <NavigationMenuContent>
                          {groupLinks.map(subMenuItem => (
                            <div key={subMenuItem?.id}
                                 className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                              {subMenuItem?.slug && (
                                <Link href={subMenuItem.slug}>
                                  {subMenuItem?.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </NavigationMenuContent>
                      )}
                    </NavigationMenuItem>
                  )
                )
              }
            )}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );

  const MainMenuMobile = () => (
    <div>
      {items && items.length > 0 && (
        <nav>
          <ul>
            {items?.map(
              (menuItem) => {
                const groupLinks = !menuItem?.link && menuItem?.children && getGroupLinks(menuItem.children);

                return (
                  menuItem &&
                  menuItem.groupName && (
                    <li
                      key={menuItem.sys.id}
                      className="py-1.5"
                    >
                      {menuItem.link ? (
                        <Link
                          href={`/${
                            readFragment(
                              PageLinkFieldsFragment,
                              menuItem.link
                            ).slug
                          }`}
                        >
                          {menuItem.groupName}
                        </Link>
                      ) : (
                        <span>{menuItem.groupName}</span>
                      )}
                      {groupLinks && (
                        <ul className="pl-5">
                          {groupLinks.map(subMenuItem => (
                            <li key={subMenuItem?.id}>
                              {subMenuItem?.slug && (
                                <Link href={subMenuItem.slug}>
                                  {subMenuItem?.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )
              }
            )}
          </ul>
        </nav>
      )}
    </div>
  );

  const Search = () => (
    <div className="items-center bg-gray-100 dark:bg-zinc-700 rounded-md p-2 flex">
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
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
      <input
        className="ml-2 bg-transparent text-sm text-gray-600 dark:text-gray-300 p-1.5 w-full"
        placeholder="Search"
        type="search"
      />
    </div>
  );

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-800">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center justify-center sm:justify-start">
          <Link href="/">
            <Icons.logo className="w-8 h-8 md:mr-10"/>
          </Link>
          <MainMenuDesktop/>
        </div>
        <div className="flex items-center justify-center sm:justify-end">
          <div className="hidden md:block">
            <Search/>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <svg
                  className="h-6 w-6 text-gray-500 dark:text-gray-200"
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
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
              </SheetHeader>
              <SheetDescription className="mt-2">
                This is an example of the shadcn/ui <a className="font-bold"
                                                       href="https://ui.shadcn.com/docs/components/sheet">Sheet</a> component
                used to display a notification sidebar.
              </SheetDescription>
            </SheetContent>
          </Sheet>


          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <svg
                  className="h-6 w-6 text-gray-500 dark:text-gray-200"
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
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <Search/>
              <hr className="my-5"/>
              <MainMenuMobile/>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
