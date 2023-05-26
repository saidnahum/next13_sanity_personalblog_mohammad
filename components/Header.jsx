import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";

const Header = () => {
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
            <li className="headerLi">Home</li>
            <li className="headerLi">Posts</li>
            <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <Image
              className="rounded-full"
              src="https://via.placeholder.com/150/92c952"
              alt="logo"
              width={32}
              height={32}
            />
            <p className="text-sm font-medium">Hello Stranger!</p>
          </div>

          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
