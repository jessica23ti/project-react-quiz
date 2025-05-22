import { BsFillBookmarkPlusFill } from "react-icons/bs"; 
import { BiBookmarkPlus } from "react-icons/bi"; 
import { AiFillStar } from "react-icons/ai";
import React from "react";
import produkData from "../produk.json"; 
import "../../index.css";
export default function Produk() {
  return (
    <div className="mb-150 h-screen">
      <h1 className="mt-8 mb-1 py-20 font-poppins-extrabold text-indigo-800 text-4xl sm:text-7xl text-center leading-tight">
        BEST SELLER {" "} 🌟‼️
      </h1>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {produkData.map((product) => (
          <div key={product.id} className="bg-white product-card">
             <div class="flex justify-between ms-auto">
              <p className="mb-5 font-poppins-extrabold text-gray-500 text-xl text-left">
               Makanan Khas Daerah
              </p>
              <BsFillBookmarkPlusFill className="text-indigo-500 text-3xl"/>
              </div>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />{" "}
            <h1 className="font-poppins-extrabold text-indigo-700 text-center product-name">
              {" "}
              {product.name}
            </h1>
            <hr className="mb-4 text-purple-300" />
            <div class="flex justify-between ms-auto">
              <p className="mb-5 font-poppins text-gray-500 text-xl text-right">
                Price
              </p>
              <p className="mb-2 text-red-700 text-right">
                {product.price}
              </p>
             
            </div>
               <div class="flex justify-between ms-auto">
             <p className="mb-0 font-poppins text-indigo-700 text-xl text-left">
                Bintang
              </p>
            <div class="flex justify-end ms-auto mt-0 text-warning">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
            </div>
             
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
