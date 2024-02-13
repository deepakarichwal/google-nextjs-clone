"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Error() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  return (
    <section className="w-full">
      <div className="flex flex-col gap-1 mt-16 w-full max-w-5xl m-auto px-4">
        <h1 className="text-xl">
          No result found for <quote>&quot;{searchTerm}&quot;</quote>
        </h1>
        <p className="text-md mb-2">
          Please try some other words like &quot;Cake recipes&quot; instead of
          &quot;How to make a cake&quot;.
        </p>
        <p className="text-md">
          <span className="font-semibold">Need Help?</span> Take a look at{" "}
          <Link
            href={
              "https://support.google.com/websearch/answer/134479?hl=en-IN&sa=X&ved=2ahUKEwjz0o_99qeEAxWNZWwGHfCtCvYQjfsDegQICBAC"
            }
            target="_blank"
            className="text-blue-600"
          >
            other tips
          </Link>{" "}
          for searching on Google.
        </p>
      </div>
    </section>
  );
}
