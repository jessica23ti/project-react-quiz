import React from "react";

import { Link } from "react-router-dom";

export default function Regrister() {
  return (
    <div>
      <h2 className="mb-6 font-semibold text-gray-700 text-2xl text-center">
        Create Your Account ✨
      </h2>

      <form>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-1 font-medium text-gray-700 text-sm"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 shadow-sm px-4 py-2 border border-gray-300 rounded-lg w-full placeholder-gray-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-gray-700 text-sm"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 shadow-sm px-4 py-2 border border-gray-300 rounded-lg w-full placeholder-gray-400"
            placeholder="********"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-1 font-medium text-gray-700 text-sm"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-gray-50 shadow-sm px-4 py-2 border border-gray-300 rounded-lg w-full placeholder-gray-400"
            placeholder="********"
          />
        </div>
        <p className="mb-6 text-blue-500 text-right underline">
          <Link to="/login">Already Have Account?</Link>
        </p>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg w-full font-semibold text-white transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
