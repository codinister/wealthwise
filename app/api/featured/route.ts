import client from '@/data/sanity/client.config';
import { groq } from 'next-sanity';
import {  NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'featured' && title != null]{
      title,
      excerpt,
      'image': image.asset->url,
      "slug": slug.current
      }
      `
    );

    return NextResponse.json(res)
  } catch (err) {
    console.log(err);
  }
}
