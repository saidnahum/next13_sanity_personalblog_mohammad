import { sanityClient, urlFor } from "@/lib/sanity";
import { Post } from "@/typings";
import { groq } from "next-sanity";
import Image from "next/image";
import PortableText from "react-portable-text";

import CodeBlock from "@/components/CodeBlock";
import YoutubeBlock from "@/components/YoutubeBlock";
import Table from "@/components/Table";
import Link from "next/link";
import Form from "@/components/Form";

type Props = {
  params: {
    slug: String;
  }
};

export const revalidate = 60;

export async function generateStaticParams() {
  const queryParams = groq`
    *[_type == 'post']
    {
      slug
    }
  `;

  const slugs: Post[] = await sanityClient.fetch(queryParams);
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug
  }))
}

const query = groq`
  *[_type == 'post' && slug.current == $slug][0]{
    ...,
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }
`;

const PostPage = async ({ params: { slug } }: Props) => {

  const post: Post = await sanityClient.fetch(query, { slug });

  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          src={urlFor(post.mainImage).url()}
          alt="Post Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Article */}
      <div className="max-w-4xl mx-auto mb-10">
        <article className="w-full mx-auto p-5 bg-secondaryColor/10">
          <h1 className="font-titleFont font-medium text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3">{post.title}</h1>
          <h2 className="font-bodyFont text-[18px] text-gray-500 mb-2">{post.description}</h2>
          <div className="flex items-center gap-5">
            <div className="relative w-12 h-12">
              <Image
                src={urlFor(post.author.image).url()}
                alt="Author Image"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <p className="font-bodyFont text-base">
              Blog post by <span className="text-secondaryColor">{post.author.name}</span> - Published at {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-10 flex justify-center" >
            <PortableText
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              content={post.body}
              className="prose max-w-3xl mx-auto text-justify"
              serializers={{
                h1: (props: any) => (<h1 className="text-3xl font-bold my-5 font-titleFont" {...props} />),
                h2: (props: any) => (<h2 className="text-2xl font-bold font-titleFont" {...props} />),
                h3: (props: any) => (<h3 className="text-xl font-bold font-titleFont" {...props} />),
                h4: (props: any) => (<h4 className="text-lg font-bold font-titleFont" {...props} />),
                h5: (props: any) => (<h5 className="text-md font-bold font-titleFont" {...props} />),
                h6: (props: any) => (<h6 className="text-sm italic font-titleFont" {...props} />),
                blockquote: (props: any) => (<blockquote className="bg-gray-100 py-5 px-3 border-gray-500 rounded-md not-italic" {...props}/>),
                code: (props: any) => (<span className="bg-gray-300 text-violet-500 rounded-sm px-2 py-[3px]" {...props}/>),
                //li: ({children}: any) => (<li className="ml-4 list-disc">{children}</li>),
                link: ({ href, children }: any) => (
                  <Link href={href} target="_blank" className="text-cyan-500 hover:underline">
                    {children}
                  </Link>
                ),
                myCodeField: (props: any) => (
                  <CodeBlock codeText={props.code} language={props.language} />
                ),
                youtube: (props: any) => (
                  <YoutubeBlock props={props}/>
                ),
                chart: (props: any) => (
                  <Table props={props}/>
                )
              }}
            />
          </div>
        </article>

        <hr className="my-5 max-w-lg mx-auto border-[1px] border-secondaryColor"/>

        <div>
          <p className="text-xs text-secondaryColor uppercase font-titleFont font-bold">Enjoy this article?</p>
          <h3 className="font-titleFont text-3xl font-bold">Leave a Comment below!</h3>
          <hr className="py-3 mt-2"/>

          {/* form */}
          <Form postId={post._id}/>
        </div>
      </div>
    </div>
  )
}

export default PostPage