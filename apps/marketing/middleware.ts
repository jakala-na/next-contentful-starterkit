import { createI18nMiddleware } from 'next-international/middleware';
import { type NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  // Uncomment the next setting (urlMappingStrategy) in order to use this starterkit without localization.
  // It will open default language without locale prefix, e.g. will open  /products instead of /en/products
  // urlMappingStrategy: 'rewriteDefault',
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
