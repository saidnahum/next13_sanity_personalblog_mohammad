import Banner from '@/components/Banner'
import BannerBottom from '@/components/BannerBottom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { groq } from 'next-sanity'
import { sanityClient, urlFor } from '../lib/sanity';
import { Post } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'

const query = groq`
  *[_type == 'post']{
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

const Home = async () => {

  const posts:[Post] = await sanityClient.fetch(query);
  console.log(posts[0])
  
  return (
    <div>
      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
        <Header />
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        <Banner />
        {/* ============ Banner End here ============== */}
        <div className="max-w-7xl mx-auto h-60 relative">
        <BannerBottom />
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
          {
            posts.map(post => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className='border-[1px] border-secondaryColor border-opacity-40 h-[450px] group'>
                  <div className='h-3/5 w-full overflow-hidden'>
                    <Image
                      src={urlFor(post.mainImage).url()}
                      width={380}
                      height={350}
                      alt='Main Image'
                      className='w-full h-full object-cover duration-300 group-hover:scale-105'
                    />
                  </div>
                  
                  <div className='h-2/5 w-full flex flex-col justify-center'>
                    <div className='flex items-center justify-between px-4 py-1 border-b-[1px] border-b-gray-500'>
                      <h1>{post.title}</h1>
                      <Image
                        src={urlFor(post.author.image).url()}
                        alt='Profile picture'
                        width={60}
                        height={60}
                        className='rounded-full w-12 h-12 object-cover'
                      />
                    </div>
                    
                    <p className='py-2 px-4 text-base'>
                      {post.description.substring(0, 60)}... by -{" "} 
                      <span className='font-semibold'>{post.author.name}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  )
};

export default Home;
