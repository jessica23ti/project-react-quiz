import { BiLogOut } from "react-icons/bi";
import { CgLogIn } from "react-icons/cg";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { Link } from "react-router-dom";
import "../assets/tailwind.css";
export default function Header() {
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative w-full max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="bg-white p-2 pr-10 border border-gray-100 rounded-md outline-none w-full max-w-lg"
        />
        <FaSearch
          id="search-icon"
          className="top-1/2 right-4 absolute text-gray-300 -translate-y-1/2 transform"
        />
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        {/* Icons */}
        <div
          id="notification-icon"
          className="relative bg-blue-100 p-3 rounded-2xl text-blue-500 cursor-pointer"
        >
          <FaBell />
          <span
            id="notification-badge"
            className="top-0 right-0 absolute bg-blue-200 px-2 py-1 rounded-full text-xs -translate-y-1/2 translate-x-1/2 transform"
          >
            {" "}
            50
          </span>
        </div>
        <div
          id="chart-icon"
          className="bg-blue-100 p-3 rounded-2xl cursor-pointer"
        >
          <Link to="/login">
            {" "}
            <CgLogIn />{" "}
          </Link>
        </div>
        <div
          id="settings-icon"
          className="bg-red-100 p-3 rounded-2xl text-red-500 cursor-pointer"
        >
          <Link to="/">
            {" "}
            <BiLogOut />{" "}
          </Link>
        </div>

        {/* Profile Section */}
        <div
          id="profile-container"
          className="flex items-center space-x-4 pl-4 border-gray-300 border-l"
        >
          <span id="profile-text" className="">
            Hello, <b>Jessica Nathania</b>
          </span>
          <img
            id="profile-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
}
