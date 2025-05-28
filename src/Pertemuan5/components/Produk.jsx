import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { BiBookmarkPlus } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import produkData from "../produk.json";
import "../../index.css";
export default function Produk() {
  return (
    <div className="relative mb-150 h-screen">
      <h1 className="mt-8 mb-1 py-20 font-poppins-extrabold text-indigo-800 sm:text-7xl text-9xl text-center leading-tight">
        PRODUK
      </h1>

      <div className="gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pr-20 pl-20">
        {produkData.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-90 object-cover hover:scale-110 transition-transform duration-500"
            />{" "}
            <div className="top-0 right-0 absolute bg-indigo-600 px-2 py-1 rounded-bl-lg font-semibold text-white text-xl">
              Populer
            </div>
            <div class="flex justify-between ms-auto mt-10">
              <h3 className="mb-2 pl-8 font-semibold text-gray-800 text-2xl">
                {product.name}
              </h3>
              <div class="flex justify-end ms-auto mt-0 pr-8 text-warning text-2xl">
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
              </div>
            </div>
            <div className="p-6 text-left">
              <p className="mb-4 text-gray-600 line-clamp-2">{product.desc}</p>
              <span className="font-bold text-indigo-600 text-lg">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
