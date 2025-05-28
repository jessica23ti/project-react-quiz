import { GiFoodChain } from "react-icons/gi";
import React from "react";

export default function AboutUs() {
  return (
    <div className="px-6 lg:px-24 py-1">
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:space-x-12">
        <div className="flex justify-center mb-10 lg:mb-0 w-full lg:w-1/2">
          <img
            src="/img/10371044-removebg-preview.png"
            alt="About Illustration"
            className="mt-0 max-w-6xl"
          />
        </div>
        <img
          src="/img/Screenshot_2025-05-28_193548-removebg-preview.png"
          alt=""
          className="-mt-8 w-full h-125"
        />
        <div className="absolute">
          <div className="ml-170 w-full lg:w-1/2 lg:text-righ text-left">
            <h2 className="mb-4 font-poppins-extrabold font-bold text-indigo-900 text-7xl">
              Tentang Kami
            </h2>
            <p className="text-gray-700 text-2xl leading-relaxed">
              Kami adalah tim yang berfokus pada pengembangan solusi digital
              yang ringan, cepat, dan responsif. Template ini siap digunakan
              tanpa perlu banyak konfigurasi ulang, sehingga kamu bisa langsung
              membangun aplikasi atau situs dengan mudah dan efisien.
            </p>
          </div>
        </div>
      </div>
      <br />
      <img
        src="/img/Screenshot_2025-05-28_230543-removebg-preview.png"
        alt=""
        className="absolute mt-11 mr-2 -ml-18 w-500"
      />
      <div className="relative flex md:flex-row flex-col md:justify-center gap-10 shadow-purple-400/50 shadow-xl mt-70 -ml-0 pb-20 rounded-2xl">
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="bg-white shadow hover:shadow-2xl rounded-xl h-80 overflow-hidden transition-all duration-500">
            <p className="absolute -mt-38 py-9 object-cover text-[180px] hover:scale-110 transition-transform translate-x-5/32 duration-500">
              🍔
            </p>
            <h4 className="mt-40 mb-1 font-poppins-extrabold font-semibold text-indigo-800 text-3xl">
              Makanan Sedap
            </h4>
            <p className="mt-7 pl-5 font-poppins text-gray-600 text-smr-5">
              Makanan Indonesia bercita rasa indonesia ini sangat lah enak !
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center max-w-xs text-center">
          <div className="bg-white shadow hover:shadow-2xl rounded-xl h-80 overflow-hidden transition-all duration-300">
            <p className="left-1/2 absolute -mt-35 object-cover text-[200px] hover:scale-110 transition-transform -translate-x-1/2 duration-500">
              💸
            </p>
            <h4 className="mt-40 mb-1 font-poppins-extrabold font-semibold text-indigo-800 text-3xl">
              Murah
            </h4>
            <p className="mt-8 pl-5 font-poppins text-gray-600 text-sm">
              Kalau ini udah pasti kesukaan orang indonesia yang suka murah
              -murah nih!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="bg-white shadow hover:shadow-2xl rounded-xl h-80 overflow-hidden transition-all duration-300">
            <p className="left-1/2 absolute -mt-22 object-cover text-[169px] hover:scale-110 transition-transform translate-x-63 duration-500">
              🤩
            </p>
            <h4 className="mt-40 mb-1 font-poppins-extrabold font-semibold text-indigo-800 text-3xl">
              Promo
            </h4>
            <p className="mt-7 pr-2 pl-2 font-poppins text-gray-600 text-sm">
              Udah pasti promosi kalau beli disini, selain banyak promo kalian
              bisa daftar jadi member loh untuk dapatkan banyak promo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
