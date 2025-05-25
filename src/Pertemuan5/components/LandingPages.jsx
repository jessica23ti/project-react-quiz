import React from "react";

export default function LandingPages() {
  return (
    // bg-gradient-to-r from-green-200 from-green-400 to-green-100 h-screen
    <div className="flex justify-center items-center h-screen">
      <div className="flex mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="flex flex-col justify-center w-full sm:w-1/2 sm:text-left text-center">
          <p className="mb-6 text-blue-900 sm:text-xl">
            Selamat Datang di Toko Sedap kami ❗{" "}
          </p>
          <h1 className="mb-4 font-poppins-extrabold text-indigo-900 text-6xl sm:text-8xl leading-tight">
            GOOD FOOD, SEDAPNY3 😋{" "}
          </h1>
          <p className="mb-6 text-blue-900 sm:text-2xl text-3xl">
            Temukan beragam pilihan makanan lezat, segar, dan siap menggoyang
            lidah Anda setiap hari.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="bg-blue-700 hover:bg-blue-600 mr-4 px-6 py-2 rounded-md text-white text-lg transition">
              Explore
            </button>
            <button className="bg-white hover:bg-purple-100 px-6 py-2 border-2 border-blue-700 rounded-md text-blue-700 text-lg transition">
              Learn more
            </button>
          </div>
        </div>

        <div className="hidden sm:block flex justify-center items-center sm:w-1/2">
          <img
            src="/img/Screenshot_2025-05-15_074031-removebg-preview.png" // ada di public. edit aja agar jauh lebih menarik di figma
            alt="Landing Page Image"
            className="w-full h-auto"
          />
        </div>
      </div>
      //{" "}
    </div>
  );
}
