"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

function SuspenseSearchOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function selectTab(tab) {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }

  const selectedPathStyle = "!border-b-4 !border-blue-500 !text-blue-500";

  return (
    <div className="flex gap-2 items-center justify-center sm:justify-start max-w-5xl w-full m-auto  ">
      <button
        onClick={() => selectTab("All")}
        className={`inline-flex gap-1 items-center pb-2 px-2 border-b-4 border-transparent ${
          pathname === "/search/web" ? selectedPathStyle : ""
        }`}
      >
        <AiOutlineSearch />
        <span>All</span>
      </button>

      <button
        onClick={() => selectTab("Images")}
        className={`inline-flex gap-1 items-center pb-2 px-2 border-b-4 border-transparent ${
          pathname === "/search/image" ? selectedPathStyle : ""
        }`}
      >
        <AiOutlineCamera />
        <span>Images</span>
      </button>
    </div>
  );
}

export default function SearchOptions() {
  return (
    <Suspense>
      <SuspenseSearchOptions />
    </Suspense>
  );
}
