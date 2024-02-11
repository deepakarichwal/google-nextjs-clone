"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RiMic2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function HomeMain() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;
    router.push(`/search/web?searchTerm=${search}`);
  }

  async function randomSearch() {
    setIsLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();

    router.push(`/search/web?searchTerm=${data[0]}`);
    setIsLoading(false);
  }

  return (
    <main className=" flex flex-col justify-center items-center  w-full">
      <section className="flex flex-col gap-6 items-center  p-4 max-w-xl w-screen mt-16">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          className="w-72"
          alt="Google logo"
          width={600}
          height={200}
          priority
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center w-full"
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiOutlineSearch className="text-xl text-gray-600" />
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <RiMic2Line className="text-xl text-gray-600" />
            </button>
          </div>
        </form>
        <div className="space-x-4">
          <button
            onClick={handleSubmit}
            type="submit"
            className="inline-flex items-center py-2.5 px-3  text-sm font-medium rounded-md bg-gray-200 hover:ring-gray-400 hover:ring-1"
          >
            Google Search
          </button>

          <button
            onClick={randomSearch}
            type="submit"
            className="inline-flex items-center py-2.5 px-3 text-sm font-medium rounded-md bg-gray-200 hover:ring-gray-400 hover:ring-1"
          >
            {isLoading ? "Searching..." : "I'm Feeling Lucky"}
          </button>
        </div>
      </section>
    </main>
  );
}
