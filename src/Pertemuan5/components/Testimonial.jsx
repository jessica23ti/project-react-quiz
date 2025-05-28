import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import testimoniData from "../testimonial.json";

export default function Testimonial() {
  const testimoniClass =
    "flex flex-col items-center bg-purple-100 shadow p-6 rounded-lg h-full shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300";

  return (
    <div className="bg-white mr-50 ml-40 py-10 rounded-xl w-300 text-center">
      <h2 className="py-10 font-poppins-extrabold text-indigo-800 text-4xl sm:text-7xl text-center leading-tight">
        Testimoni 🚀
      </h2>
      <div className="relative mx-auto px-4 max-w-6xl">
        <div className="gap-6 grid md:grid-cols-3">
          {testimoniData.map((item, index) => (
            <div key={index} className="p-5">
              <div className={testimoniClass}>
                <FaQuoteLeft className="mb-4 text-indigo-600 text-3xl" />
                <p className="text-lg italic">"{item.pesan}"</p>
                <div className="mt-5 mb-4">
                  <img
                    src={item.foto}
                    className="shadow-md mx-auto rounded-full w-24 h-24"
                    alt={item.nama}
                  />
                </div>
                <p className="font-semibold text-gray-600">- {item.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
