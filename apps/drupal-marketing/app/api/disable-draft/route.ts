import { disableDraftMode } from 'next-drupal/draft';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';

export async function GET(_: NextRequest) {
  await disableDraftMode();
  redirect('/');
}
