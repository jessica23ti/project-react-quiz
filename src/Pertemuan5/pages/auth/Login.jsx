import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  /* navigate, state & handleChange*/
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  /* process form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        // Jika status bukan 200, tampilkan pesan error
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // Redirect ke dashboard jika login sukses
        navigate("/Dashboard");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  /* error & loading status */
  const errorInfo = error ? (
    <div className="flex items-center bg-red-200 mb-5 p-5 rounded font-light text-gray-600 text-sm">
      <BsFillExclamationDiamondFill className="me-2 text-red-600 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="flex items-center bg-gray-200 mb-5 p-5 rounded text-sm">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;
  return (
    <div>
      <div>
        <h2 className="mb-6 font-semibold text-gray-700 text-2xl text-center">
          Welcome Back 👋
        </h2>
        {errorInfo}
        {loadingInfo}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700 text-sm">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 shadow-sm px-4 py-2 border border-gray-300 rounded-lg w-full placeholder-gray-400"
              placeholder="you@example.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 shadow-sm px-4 py-2 border border-gray-300 rounded-lg w-full placeholder-gray-400"
              placeholder="********"
              name="password"
              onChange={handleChange}
            />
          </div>
          <p className="text-blue-500 text-right underline">
            <Link to="/forgot"> Lupa Password?</Link>
          </p>
          <br />
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg w-full font-semibold text-white transition duration-300"
            >
              Login
            </button>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg w-full font-semibold text-white transition duration-300"
            >
              <Link to="/regrister"> Regrister </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
