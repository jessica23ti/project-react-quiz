import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import "../assets/tailwind.css";
import { Link } from "react-router-dom";
import LandingPages from "../components/LandingPages";
import AboutUs from "../components/AboutUs";
import Produk from "../components/Produk";
import Testimoni from "../components/Testimonial";

export default function HomePage() {
  return (
    <div id="dashboard-container  ">
     
      <LandingPages />
      <AboutUs/>
      <br /><br /><br /><br />
      <hr className="text-gray-200"/>
     <Produk/>
    
     <Testimoni/>
      <div
        id="dashboard-grid"
        className="gap-4 grid sm:grid-cols-2 md:grid-cols-4 p-5"
      ></div>
    </div>
  );
}
