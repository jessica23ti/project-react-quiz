import React from "react";

export default function LupaPassword() {
  return (
    <div>
      <h2 className="mb-2 font-semibold text-gray-700 text-2xl text-center">
        Forgot Your Password?
      </h2>

      <p className="mb-6 text-gray-500 text-sm text-center">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

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
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg w-full font-semibold text-white transition duration-300"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
