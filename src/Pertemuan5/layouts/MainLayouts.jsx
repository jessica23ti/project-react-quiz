import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
export default function MainLayouts() {
  return (
    <div>
      <div id="app-container" className="flex bg-white-100 min-h-screen">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
            <Header />
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
