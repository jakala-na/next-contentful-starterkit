import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET() {
  draftMode().disable();

  // Set __prerender_bypass expire date to past.
  if (process.env.NODE_ENV === 'development') {
    const cookieStore = cookies();
    const cookie = cookieStore.get('__prerender_bypass')!;
    cookies().set({
      name: '__prerender_bypass',
      value: cookie?.value,
      expires: new Date(0), // Set expiration date to the past
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'none',
    });
  }
  redirect('/');
  // Trick TypeScript into thinking we're returning a Response, even if redirect will throw an exception.
  return new Response(null, { status: 307 });
}
