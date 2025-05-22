import { AiFillTwitterCircle } from "react-icons/ai"; 
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
export default function Footers() {
  return (
    <>
      <footer className="bg-[#f7f6f6] py-12 text-[#4a0057]">
        <div className="gap-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4">
          <div>
            <h3 className="mb-3 font-bold text-xl">Contact</h3>
            <p className="mb-1">Alamat : Jalan Rowosari,Rumbai,Pekanbaru 🗺️</p>
            <p className="mb-1">No HP : 051346546891231 📞</p>
            <p className="mb-1">Disamping Politeknik Caltex Riau ya  !</p>
            <p className="mb-3 text-[#fbfbfb] text-sm">
              Do you have any question? Feel free to reach out.
            </p>
            <a href="#" className="hover:text-[#2a2a8a] text-lg underline">
              Ayok Chat ‼️
            </a>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-xl">Our Page </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tentang" className=" hover:underline">
                  {" "}
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link to="/Testimoni" className=" hover:underline">
                  {" "}
                  Testimoni{" "}
                </Link>
              </li>
              <li>
                <li>
                  <Link to="/bestProduct" className=" hover:underline">
                    {" "}
                    Produk Best!{" "}
                  </Link>
                </li>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-xl">Our Page </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tentang" className=" hover:underline">
                  {" "}
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link to="/Testimoni" className=" hover:underline">
                  {" "}
                  Testimoni{" "}
                </Link>
              </li>
              <li>
                <li>
                  <Link to="/bestProduct" className=" hover:underline">
                    {" "}
                    Produk Best!{" "}
                  </Link>
                </li>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-xl">Sosial Media </h3>
            <div className="flex space-x-4 mb-6">
              <BsFacebook className="text-3xl  text-indigo-800" />
              <FaInstagramSquare  className="text-3xl  text-indigo-800" />
              <AiFillTwitterCircle  className="text-3xl text-indigo-800" />
            </div>
            <h3 className="mb-2 font-bold text-xl">Patner Kami </h3>
            <p className="text-sm">Dadang Syarif (Politeknik Caltex Riau)  🏫</p>
            <p className="text-sm">Erzi(Politeknik Caltex Riau)  🏫</p>
            <p className="text-sm">HId Syarif (Politeknik Caltex Riau)  🏫</p>
          </div>
        </div>
      </footer>
    </>
  );
}
