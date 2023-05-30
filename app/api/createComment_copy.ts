import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zvd89llc",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-25",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
  const { _id, name, email, comment } = JSON.parse(req.body);
  
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
    return res.status(500).json({message: "Couldn't submut comment", error})
  }

  console.log("Comment Submitted")
  return res.status(200).json({ message: "Comment Submitted!!!" })
}