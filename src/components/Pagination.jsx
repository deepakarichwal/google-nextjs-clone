"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function SuspensePagination() {
  const router = useRouter();
  const pathanme = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;

  function prevPage(val) {
    router.push(
      `${pathanme}?searchTerm=${searchTerm}&start=${startIndex - val}`
    );
  }

  function nextPage(val) {
    router.push(
      `${pathanme}?searchTerm=${searchTerm}&start=${startIndex + val}`
    );
  }

  function customPagination(val) {
    router.push(`${pathanme}?searchTerm=${searchTerm}&start=${val}`);
  }

  return (
    <div className="flex flex-row items-center sm:gap-6 gap-32 text-gray-600 justify-center py-10">
      {startIndex > 10 && (
        <button onClick={() => prevPage(10)}>
          <AiOutlineDoubleLeft className="text-3xl" />
        </button>
      )}

      <div className="space-x-6 hidden sm:inline-flex">
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index}
            className={`${
              startIndex === index * 10 + 1
                ? "text-white bg-blue-600 h-10 w-10 rounded-full"
                : ""
            }`}
            onClick={() => customPagination(index * 10 + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button onClick={() => nextPage(10)}>
        <AiOutlineDoubleRight className="text-3xl" />
      </button>
    </div>
  );
}

export default function Pagination() {
  return (
    <Suspense>
      <SuspensePagination />
    </Suspense>
  );
}
