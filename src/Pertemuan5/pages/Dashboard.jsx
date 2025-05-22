import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import "../assets/tailwind.css";
export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader
        title="Dashboard"
        breadcrumb={["Dashboard", "HomePage"]}
        children={
          <>
            {" "}
            <button
              id="add-button"
              className="bg-hijau mr-2 px-4 py-2 rounded-lg text-white"
            >
              Add Button
            </button>
            <button
              id="add-button"
              className="bg-merah mr-2 px-4 py-2 rounded-lg text-white"
            >
              {" "}
              Export
            </button>
            <button
              id="add-button"
              className="bg-biru mr-2 px-4 py-2 rounded-lg text-white"
            >
              Kembali
            </button>{" "}
          </>
        }
      />
      <div
        id="dashboard-grid"
        className="gap-4 grid sm:grid-cols-2 md:grid-cols-4 p-5"
      >
        <div
          id="dashboard-orders"
          className="flex items-center space-x-5 bg-white shadow-md p-4 rounded-lg"
        >
          <div id="orders-icon" className="bg-hijau p-4 rounded-full">
            <FaShoppingCart />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="font-bold text-2xl">
              {" "}
              75
            </span>
            <span
              id="orders-text"
              className="font-poppins-extrabold text-[15px] text-gray-900"
            >
              Total Orders
            </span>
          </div>
        </div>

        <div
          id="dashboard-delivered"
          className="flex items-center space-x-5 bg-white shadow-md p-4 rounded-lg"
        >
          <div id="delivered-icon" className="bg-biru p-4 rounded-full">
            <FaTruck />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="font-bold text-2xl">
              175
            </span>
            <span
              id="delivered-text"
              className="font-poppins-extrabold text-[15px] text-gray-900"
            >
              Total Delivered
            </span>
          </div>
        </div>

        <div
          id="dashboard-canceled"
          className="flex items-center space-x-5 bg-white shadow-md p-4 rounded-lg"
        >
          <div id="canceled-icon" className="bg-merah p-4 rounded-full">
            <FaBan />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="font-bold text-2xl">
              40
            </span>
            <span
              id="canceled-text"
              className="font-poppins-extrabold text-[15px] text-gray-900"
            >
              Total Canceled
            </span>
          </div>
        </div>

        <div
          id="dashboard-revenue"
          className="flex items-center space-x-5 bg-white shadow-md p-4 rounded-lg"
        >
          <div id="revenue-icon" className="bg-kuning p-4 rounded-full">
            <FaDollarSign />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="font-bold text-2xl">
              Rp.128
            </span>
            <span
              id="revenue-text"
              className="font-poppins-extrabold text-[15px] text-gray-900"
            >
              Total Revenue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
