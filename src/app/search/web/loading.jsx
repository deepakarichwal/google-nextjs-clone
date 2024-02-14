import React from "react";

export default function loading() {
  return (
    <div className="w-full max-w-5xl m-auto space-y-8 py-8 px-4">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="space-y-2 animate-pulse">
          <div className="h-2.5 max-w-48 bg-gray-200 rounded-full"></div>
          <div className="h-4 max-w-[500px] bg-blue-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-3 max-w-[400px] bg-gray-200 rounded-full"></div>
            <div className="h-3 max-w-[350px] bg-gray-200 rounded-full"></div>
            <div className="h-3 max-w-[380px] bg-gray-200 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
