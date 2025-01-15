import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import getPageSlug from '#/lib/get-page-slug';

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const locale = searchParams.get('locale');

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug || !locale) {
    return new Response('Invalid token', { status: 401 });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const page = await getPageSlug(slug, locale, true);

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!page?.slug) {
    return new Response('Invalid slug', { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  (await draftMode()).enable();

  // Set the __prerender_bypass as secure for local environment.
  // Will work only in next dev mode.
  // https://github.com/vercel/next.js/issues/49927
  if (process.env.NODE_ENV === 'development') {
    const cookieStore = await cookies();
    const cookie = cookieStore.get('__prerender_bypass');
    (await cookies()).set({
      name: '__prerender_bypass',
      value: cookie?.value ?? '',
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'none',
    });
  }

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(`/${page.slug}`);
}
