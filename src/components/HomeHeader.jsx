"use client";

import Link from "next/link";
import { useState } from "react";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

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

        <div className="relative">
          <TbGridDots
            onClick={() => setShowDropdown((show) => !show)}
            className="text-4xl ml-2 cursor-pointer bg-transparent hover:bg-slate-200 p-2 rounded-full"
          />
          {showDropdown && (
            <div className="absolute top-12 -right-20 bg-gray-200 grid grid-cols-3 gap-4 w-72 p-3 rounded-2xl text-center">
              <Link href={""}>Search</Link>
              <Link href={""}>Maps</Link>
              <Link href={""}>YouTube</Link>
              <Link href={""}>Gmail</Link>
              <Link href={""}>Play</Link>
              <Link href={""}>Drive</Link>
            </div>
          )}
        </div>

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
