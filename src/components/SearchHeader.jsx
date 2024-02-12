import Image from "next/image";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchOptions from "./SearchOptions";

export default function SearchHeader() {
  return (
    <header className="sticky bg-white w-full border-gray-200">
      <div className="flex sm:flex-row flex-col sm:gap-12 gap-3 py-5 sm:px-9 px-5 items-center justify-between relative">
        <Link href={"/"} className="self-start">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            className="w-28 max-w-xl"
            alt="Google logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        <div className="flex-1">
          <SearchBox />
        </div>

        <div className="flex gap-4">
          <div className="sm:flex items-center hidden">
            <RiSettings3Line className="text-2xl  cursor-pointer" />

            <TbGridDots className="text-4xl ml-2 cursor-pointer bg-transparent hover:bg-slate-200 p-2 rounded-full" />
          </div>

          <button
            type="button"
            className="text-sm bg-blue-600 px-5 py-2 rounded-md text-white hover:brightness-105 hover:shadow-md transition-shadow sm:static absolute top-5 right-5"
          >
            Sign in
          </button>
        </div>
      </div>

      <SearchOptions />
    </header>
  );
}
