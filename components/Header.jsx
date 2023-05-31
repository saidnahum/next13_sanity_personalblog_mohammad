'use client'

import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";

import { useSession, signIn, signOut } from 'next-auth/react';


const Header = () => {

  const { data: session } = useSession({
    //required: true
  });

  return (
    <header className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image
              src={logoDark} alt="logoDark"
              width={80}
              height={80}
            />
          </div>
        </Link>

        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            <li className="headerLi"><Link href='/'>Home</Link></li>
            <li className="headerLi"><Link href='/protected/server'>Protected (server)</Link></li>
            <li className="headerLi"><Link href='/protected/client'>Protected (client)</Link></li>
            {
              session && (
                <li className="headerLi"><Link href='/profile'>Profile</Link></li>
              )
            }
            {/* <li className="headerLi">Posts</li> */}
            {/* <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li> */}

          </ul>
        </div>

        <div className="flex items-center gap-8 text-lg">
          {
            session ? (
              <div className="flex items-center gap-1">
                <Image
                  className="rounded-full"
                  src={session?.user?.image}
                  alt="logo"
                  width={32}
                  height={32}
                />
                <p className="text-sm font-medium">
                  {session?.user?.name}
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <Image
                  className="rounded-full"
                  src='https://via.placeholder.com/600/92c952'
                  alt="logo"
                  width={32}
                  height={32}
                />
                <p className="text-sm font-medium">
                  Hello Stranger!!
                </p>
              </div>
            )
          }

          {
            session ? (
              <button
                onClick={() => signOut()}
                className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
              >
                Sign In
              </button>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
