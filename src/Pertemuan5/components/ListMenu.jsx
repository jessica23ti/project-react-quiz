import { BiError } from "react-icons/bi";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
  ${
    isActive
      ? "text-hijau bg-green-200 font-extrabold"
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
  }`;
  return (
    <>
      <div id="sidebar-menu" className="t-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/Orders" className={menuClass}>
              <IoReorderFour /> Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/Customers" className={menuClass}>
              <RiCustomerService2Fill /> Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/error/400" className={menuClass}>
              <BiError /> Page Error 400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-5" to="/error/401" className={menuClass}>
              <BiError /> Page Error 401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-6" to="/error/403" className={menuClass}>
              <BiError /> Page Error 403
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-7" to="/user" className={menuClass}>
              <BiError /> Data User
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-8" to="/FormCekAnggota" className={menuClass}>
              <BiError /> Cek Anggota
            </NavLink>
          </li>
          <li>
            <NavLink to="/Product-Sedap" className={menuClass}>
              Produk - Sedap
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={menuClass}>
              Notes
            </NavLink>
          </li>

          <br />
        </ul>
      </div>
    </>
  );
}
