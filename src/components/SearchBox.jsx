"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { RiMic2Line } from "react-icons/ri";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const [term, setTerm] = useState(searchTerm || "");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!term.trim()) return;
    // router.push(`/search/web?searchTerm=${term}`);

    router.push(
      `/search/${
        pathname === "/search/image" ? "image" : "web"
      }?searchTerm=${term}`
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center sm:max-w-4xl w-screen px-5"
    >
      <div
        htmlFor="search"
        className="flex items-center gap-2 w-full bg-gray-50 shadow-md text-gray-900 text-sm rounded-full px-4 pl-0 overflow-hidden"
      >
        <input
          type="text"
          id="search"
          className="flex-1 w-full h-full bg-transparent outline-none p-3 py-4 focus:bg-transparent ps-6"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <button onClick={() => setTerm("")} type="button">
          <HiMiniXMark className="text-xl text-gray-600 " />
        </button>

        <button type="button" className="hidden sm:inline-flex">
          <RiMic2Line className="text-2xl text-blue-600 border-l-2 pl-1.5" />
        </button>

        <button type="button" onClick={handleSubmit}>
          <HiOutlineSearch className="text-lg text-blue-600 " />
        </button>
      </div>
    </form>
  );
}
