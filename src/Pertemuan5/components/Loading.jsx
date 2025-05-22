import React from "react";
import "../assets/tailwind.css";
export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen">
      <div className="mb-4 border-4 border-green-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      <p className="text-green-600 text-lg">Loading...</p>
    </div>
  );
}
