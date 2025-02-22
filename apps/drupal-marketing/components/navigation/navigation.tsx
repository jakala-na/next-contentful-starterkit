/* eslint-disable react/no-unstable-nested-components -- this is a sample nav, unstable nested components are fine */
import Link from 'next/link';

import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { LanguageSelector } from '#/components/language-selector';
import { Button } from '@repo/ui/components/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@repo/ui/components/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@repo/ui/components/sheet';
import { cn } from '@repo/ui/lib/utils';
import { getI18n } from '#/locales/server';

import { Icons } from '../icons';

export const MenuItemFragment = graphql(`
  fragment MenuItem on MenuItem {
    title
    url
    children {
      title
      url
    }
  }
`);

export const MainNavigationFragment = graphql(
  `
    fragment MainNav on Menu {
      items {
        ...MenuItem
      }
    }
  `,
  [MenuItemFragment]
);

export interface NavigationProps {
  data: FragmentOf<typeof MainNavigationFragment>;
}

export async function Navigation(props: NavigationProps) {
  const data = readFragment(MainNavigationFragment, props.data);
  const items = data.items;
  const t = await getI18n();

  function MainMenuDesktop() {
    return (
      <div className="hidden md:flex">
        {items && items.length > 0 ? (
          <NavigationMenu>
            <NavigationMenuList>
              {items
                .map((i) => readFragment(MenuItemFragment, i))
                .map((menuItem) => (
                  <NavigationMenuItem key={menuItem.url}>
                    {menuItem.children.length ? (
                      <>
                        <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {menuItem.children.map((child) => (
                            <div key={child.url} className="block px-4 py-2 text-sm">
                              <Link href={child.url ?? ''}>{child.title}</Link>
                            </div>
                          ))}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={menuItem.url ?? ''} className={cn('px-4 py-2 text-sm')}>
                        {menuItem.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}
      </div>
    );
  }

  function MainMenuMobile() {
    return (
      <div>
        {items && items.length > 0 ? (
          <nav>
            <ul>
              {items
                .map((i) => readFragment(MenuItemFragment, i))
                .map((menuItem) => (
                  <li key={menuItem.url} className="py-1.5">
                    <Link href={menuItem.url ?? ''}>{menuItem.title}</Link>
                    {menuItem.children?.length ? (
                      <ul className="pl-5">
                        {menuItem.children.map((child) => (
                          <li key={child.url}>
                            <Link href={child.url ?? ''}>{child.title}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
            </ul>
          </nav>
        ) : null}
      </div>
    );
  }

  function Search() {
    return (
      <div className="flex items-center rounded-md p-2">
        <svg
          className="size-5"
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
        <input className="ml-2 w-full p-1.5 text-sm" placeholder={t('search')} type="search" />
      </div>
    );
  }

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center justify-center sm:justify-start">
          <Link href="/">
            <Icons.Logo className="size-8 md:mr-10" />
          </Link>
          <MainMenuDesktop />
        </div>
        <div className="flex items-center justify-center sm:justify-end">
          <div className="hidden md:block">
            <Search />
          </div>
          <LanguageSelector />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <svg
                  className="size-6"
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
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
              </SheetHeader>
              <SheetDescription className="mt-2">
                <strong>
                  Your inbox is as quiet as a wizard's spell book at midnight. Check back later for magical updates,
                  order statuses, or special offers from The Alchemist's Vault.
                </strong>
              </SheetDescription>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <svg
                  className="size-6"
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
              </Button>
            </SheetTrigger>
            <SheetContent>
              <Search />
              <hr className="my-5" />
              <MainMenuMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
