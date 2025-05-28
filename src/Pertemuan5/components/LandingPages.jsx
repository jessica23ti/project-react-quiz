import React from "react";

export default function LandingPages() {
  return (
    // bg-gradient-to-r from-green-200 from-green-400 to-green-100 h-screen
    <div className="flex justify-center items-center h-screen">
      <div className="flex mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="flex flex-col justify-center w-full sm:w-1/2 sm:text-left text-center">
          <img
            src="/img/Screenshot_2025-05-28_181024-removebg-preview.png"
            alt=""
            className="rounded-lg w-full h-auto"
          />
          <div className="absolute inset-28 mt-25 mr-170 ml-0">
            <p className="text-blue-900 sm:text-xl">
              Selamat Datang di Toko Sedap kami ❗{" "}
            </p>
            <h1 className="text-shadow-lg font-poppins-extrabold text-indigo-900 text-6xl sm:text-8xl leading-tight">
              GOOD FOOD SEDAPNYE
            </h1>
            <p className="mb-6 text-blue-900 sm:text-2xl text-3xl">
              Temukan beragam pilihan makanan lezat, segar, dan siap menggoyang
              lidah Anda setiap hari.
            </p>

            <div className="flex justify-center sm:justify-start">
              <button className="bg-indigo-800 hover:bg-indigo-200 mr-4 px-6 py-2 rounded-md text-white text-lg transition">
                Explore
              </button>
              <button className="bg-white hover:bg-indigo-200 px-6 py-2 border-2 border-indigo-800 rounded-md text-indigo-800 text-lg transition">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:block mt-0 sm:w-1/2">
          <img
            src="/img/Screenshot_2025-05-15_074031-removebg-preview.png" // ada di public. edit aja agar jauh lebih menarik di figma
            alt="Landing Page Image"
            className="mt-0 ml-20 w-2xl h-160 object-cover transition-transform animate-parallax duration-1000 ease-in-out"
          />
        </div>
      </div>{" "}
    </div>
  );
}
