"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <section className="w-full">
      <div className="flex flex-col gap-2 items-center mt-16">
        <h1 className="text-xl ">Something went wrong!</h1>
        <button className="text-md text-blue-600" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </section>
  );
}
