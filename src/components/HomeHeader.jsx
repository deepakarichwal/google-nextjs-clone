import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
export default function HomeHeader() {
  return (
    <header>
      <div className="flex gap-3  items-center justify-end  px-4 py-4 ">
        <Link
          href={"https://mail.google.com"}
          className="hover:underline text-sm"
        >
          Gmail
        </Link>

        <Link
          href={"https://image.google.com"}
          className="hover:underline text-sm"
        >
          Images
        </Link>

        <TbGridDots className="text-4xl ml-2 cursor-pointer bg-transparent hover:bg-slate-300 p-2 rounded-full" />

        <button
          type="button"
          className="text-sm bg-blue-600 px-5 py-1 rounded-md text-white hover:brightness-105 hover:shadow-md transition-shadow"
        >
          Sign in
        </button>
      </div>
    </header>
  );
}
