import client from '@/data/sanity/client.config';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'realestate' && title != null]{
            "id": _id,
            "type": _type,
            title,
            price,
            "image": img.asset->url,
            excerpt,
            "body": body[]{
              ..., 
              asset->{
                ...,
                "_key": _id
              }
            },
            youtube,
            tcount,
            "category": category[]->title,
            "gallery": gallery[]{
            "image": asset->url
            },
            lot,
            beds,
            baths,
            garage,
            location,
            proptype
      }
      `
    );

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
