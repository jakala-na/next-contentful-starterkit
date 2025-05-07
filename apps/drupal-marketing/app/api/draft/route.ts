import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';

const DRAFT_MODE_COOKIE_NAME = '__prerender_bypass';

export async function GET(request: NextRequest) {
  // Validate the draft request.
  // TODO: Check for secret value.
  // const response = await drupal.validateDraftUrl(request.nextUrl.searchParams);

  // If validation fails, don't enable draft mode.
  // if (!response.ok) {
  //   return response;
  // }

  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');
  const token = searchParams.get('token'); // GraphQL Preview

  if (!path) {
    return new Response('Invalid path', { status: 401 });
  }

  const cookieStore = await cookies();
  // Enable Draft Mode by setting the cookie
  const draft = await draftMode();
  draft.enable();

  // Override the default SameSite=lax.
  // See https://github.com/vercel/next.js/issues/49927
  const draftModeCookie = cookieStore.get(DRAFT_MODE_COOKIE_NAME);
  if (draftModeCookie) {
    cookieStore.set({
      ...draftModeCookie,
      sameSite: 'none',
      secure: true,
    });
  }

  // Send Drupal's data to the draft-mode page.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { secret, scope, plugin, ...draftData } = Object.fromEntries(searchParams.entries());
  // cookieStore.set({
  //   ...draftModeCookie,
  //   name: DRAFT_DATA_COOKIE_NAME,
  //   sameSite: 'none',
  //   secure: true,
  //   value: JSON.stringify(draftData),
  // });

  if (token) {
    redirect(`${path}?token=${token}`);
  }

  // Redirect to the path from the fetched post. We can safely redirect to the
  // path since this has been validated on the server.
  redirect(path);
}
