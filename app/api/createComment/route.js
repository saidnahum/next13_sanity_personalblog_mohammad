import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zvd89llc",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-25",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});

export async function POST(request) {
  const { _id, name, email, comment } = await request.json();

  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref:_id,
      },
      name,
      email,
      comment
    });
  } catch (error) {
    return NextResponse.json({message: "Couldn't submut comment", error})
  }

  console.log("Comment Submitted")
  return NextResponse.json({ message: "Comment Submitted!!!" })
};