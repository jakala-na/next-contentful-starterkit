import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
export async function GET(request: Request) {
  draftMode().disable()
  redirect('/')
  // Trick TypeScript into thinking we're returning a Response, even if redirect will throw an exception.
  return new Response(null, { status: 307 })
}
