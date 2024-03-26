import getPageSlug from '#/lib/getPageSlug'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const locale = searchParams.get('locale')

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug || !locale) {
    return new Response('Invalid token', { status: 401 })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const page = await getPageSlug(slug, locale, true)

  // If the slug doesn't exist prevent draft mode from being enabled
  // if (!page || !page.slug) {
  //   return new Response("Invalid slug", { status: 401 });
  // }@TODO

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  //redirect("/" + page.slug);@TODO
}
