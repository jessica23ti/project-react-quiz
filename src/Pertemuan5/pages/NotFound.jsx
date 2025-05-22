import { BsBackspaceFill } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
export default function NotFound() {
  const { code } = useParams();

  const errorCode = {
    400: "Bad Request",
    401: "UnAuthorized",
    403: "Forbidden",
  };
  const Image = {
    400: "/img/404_Error_Pages___Community__page-0001-removebg-preview.png",
    401: "/img/404_Error_Pages___Community___2__page-0001-removebg-preview.png",
    403: "/img/404_Error_Pages___Community__page-0001-removebg-preview.png",
  };
  const message = errorCode[code] || "Page Not Found";

  return (
    <>
      <div id="sidebar-menu" className="t-10">
        <h1 className="mt-15 font-poppins-extrabold text-[100px] text-gray-900 text-center">
          {code || 404}
        </h1>
        <p className="text-gray-500 text-center">{message} </p>
        <img
          src={
            Image[code] ||
            `/img/404_Error_Pages___Community___3__page-0001-removebg-preview.png`
          }
          alt=""
          width={280}
          className="block mx-auto mt-15"
        />
        <div className="flex justify-center mt-10">
          <button
            id="add-button"
            className="flex items-center gap-1 mt-10 px-10 py-2 border border-blue-500 rounded-full text-green-500">
            <BsBackspaceFill /> <Link to="/">Kembali</Link>
          </button>
        </div>
      </div>
    </>
  );
}
