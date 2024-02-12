"use client";

import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { RiMic2Line } from "react-icons/ri";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  function handleSubmit() {}

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center sm:max-w-2xl w-screen px-5"
    >
      <div className="relative w-full">
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 pr-28 p-2.5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setSearch("")}
          type="button"
          className="absolute inset-y-0 right-16 end-0 flex items-center pe-3"
        >
          <HiMiniXMark className="text-xl text-gray-600" />
        </button>

        <button
          type="button"
          className="absolute inset-y-0 right-8 end-0 flex items-center pe-3"
        >
          <RiMic2Line className="text-xl text-gray-600" />
        </button>

        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <HiOutlineSearch className="text-xl text-gray-600" />
        </button>
      </div>
    </form>
  );
}
