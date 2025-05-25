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

   
        <div className="w-full lg:w-1/2 lg:text-left text-center">
          <h2 className="mb-4 font-poppins-extrabold font-bold text-indigo-900 text-7xl">
            Tentang Kami
          </h2>
          <p className="text-gray-700 text-2xl leading-relaxed">
            Kami adalah tim yang berfokus pada pengembangan solusi digital yang
            ringan, cepat, dan responsif. Template ini siap digunakan tanpa
            perlu banyak konfigurasi ulang, sehingga kamu bisa langsung
            membangun aplikasi atau situs dengan mudah dan efisien.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:justify-center gap-12 mt-16">
    
        <div className="flex flex-col items-center max-w-xs text-center">
          <p className="text-9xl">🍔</p>

         
          <h4 className="mt-15 mb-1 font-poppins-extrabold font-semibold text-indigo-800 text-3xl">
            Makanan Sedap
          </h4>
          <p className="mt-8 font-poppins text-gray-600 text-sm">
            Makanan Indonesia bercita rasa indonesia ini sangat lah enak ! 
          </p>
        </div>

  
        <div className="flex flex-col items-center max-w-xs text-center">
          <p className="text-9xl">💹</p>
          <h4 className="mt-15 mb-1 font-poppins-extrabold font-semibold text-indigo-800 text-3xl">Murah</h4>
          <p className="mt-8 font-poppins text-gray-600 text-sm">
          Kalau ini udah pasti kesukaan orang indonesia yang suka murah - murah nih! 
          </p>
        </div>

      
        <div className="flex flex-col items-center max-w-xs text-center">
       <p className="text-9xl">🤤</p>
          <h4 className="mt-15 mb-1 font-poppins-extrabold font-semibold text-indigo-800 text-3xl">Promo</h4>
          <p className="mt-8 font-poppins text-gray-600 text-sm">
            Udah pasti promosi kalau beli disini, selain banyak promo kalian bisa daftar jadi member loh untuk dapatkan banyak promo 
          </p>
        </div>
      </div>
    </div>
  );
}
