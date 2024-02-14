import React from "react";

export default function loading() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 w-full py-8 px-4">
      <div className="space-y-2 animate-pulse">
        <div className="h-60 w-full bg-gray-200 rounded-xl"></div>
        <div className="h-2.5 max-w-[200px] bg-gray-200 rounded-full"></div>
        <div className="h-3 w-full bg-blue-200 rounded-full"></div>
      </div>

      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="space-y-2 animate-pulse hidden sm:block ">
          <div className="h-60 w-full bg-gray-200 rounded-xl"></div>
          <div className="h-2.5 max-w-[200px] bg-gray-200 rounded-full"></div>
          <div className="h-3 w-full bg-blue-200 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}
