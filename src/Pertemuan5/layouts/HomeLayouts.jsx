import React from "react";
import Footers from "../components/Footers";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
export default function HomeLayouts() {
  return (
    <div>
      <header className="to-[#260269] shadow text-indigo-800">
        <nav className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-11xl">
          {/* Logo */}
          <div className="pl-0">
            <h1 className="mr-43 ml-0 font-poppins-extrabold text-3xl">
              SedapNy3.
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex gap-25 mr-50 font-medium text-xl">
            <Link
              to="/"
              className="font-poppins hover:text-indigo-200 transition">
              Beranda
            </Link>
            <Link
              to="/bestProduct"
              className="font-poppins hover:text-indigo-200 transition"
            >
              Produk
            </Link>
            <Link
              to="/tentang"
              className="font-poppins hover:text-indigo-200 transition"
            >
              Tentang
            </Link>
            <Link
              to="/testimoni"
              className="font-poppins hover:text-indigo-200 transition"
            >
              Testimoni 
            </Link>
          </div>

          {/* Login/Register */}
          <div className="flex space-x-4 mr-1.5">
            <Link
              to="/login"
              className="bg-white hover:bg-indigo-100 px-4 py-2 rounded-lg font-poppins font-semibold text-xl transition"
            > 
              Login
            </Link>
            <Link
              to="/regrister"
              className="bg-white hover:bg-indigo-100 px-4 py-2 rounded-lg font-poppins font-semibold text-xl transition"
            >
              Register
            </Link>
          </div>
          <div
            id="profile-container"
            className="flex items-center border-gray-300 border-l"
          >
          
            <img
              id="profile-avatar"
              src="https://avatar.iran.liara.run/public/28"
              className="rounded-full w-10 h-10"
            />
          </div>
        </nav>
      </header>
      <Outlet />
     <Footers/>
    </div>
  );
}
