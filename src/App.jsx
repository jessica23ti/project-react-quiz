// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./Pertemuan5/pages/Orders";
// import HomePage from "./Pertemuan5/pages/homePage";
import MainLayouts from "./Pertemuan5/layouts/MainLayouts";
import Login from "./Pertemuan5/pages/auth/Login";
import Regrister from "./Pertemuan5/pages/auth/Regrister";
import LupaPassword from "./Pertemuan5/pages/auth/LupaPassword";
import AuthLayouth from "./Pertemuan5/layouts/AuthLayouth";
import { Suspense } from "react";
import Loading from "./Pertemuan5/components/Loading";
import React from "react";
import HomeLayouts from "./Pertemuan5/layouts/HomeLayouts";
// import Testimoni from "./Pertemuan5/components/Testimoni";
// import ProductBest from "./Pertemuan5/pages/ProductBest";
// import CekKeanggotaan from "./Pertemuan4/CekKeanggotaan";

const Dashboard = React.lazy(() => import("./Pertemuan5/pages/Dashboard"));
const Customers = React.lazy(() => import("./Pertemuan5/pages/Customers"));
const CustomersForm = React.lazy(() =>
  import("./Pertemuan5/pages/CustomersForm")
);
const NotFound = React.lazy(() => import("./Pertemuan5/pages/NotFound"));
const OrdersForm = React.lazy(() => import("./Pertemuan5/pages/OrdersForm"));
const User = React.lazy(() => import("./Pertemuan5/pages/User"));
const FormUser = React.lazy(() => import("./Pertemuan5/pages/UserForm"));
const AboutUsPage = React.lazy(() => import("./Pertemuan5/pages/AboutUsPages"));
const ProductBest = React.lazy(() => import("./Pertemuan5/pages/ProductBest"));
const Testimoni = React.lazy(() => import("./Pertemuan5/pages/Testimoni"));
const HomePage = React.lazy(() => import("./Pertemuan5/pages/HomePage"));
const CekKeanggotaan = React.lazy(() => import("./Pertemuan5/pages/CekKeanggotaan"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/formOrders" element={<OrdersForm />} />
            <Route path="/formCust" element={<CustomersForm />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/User" element={<User />} />
            <Route path="/FormUser" element={<FormUser />} />
            <Route path="/FormCekAnggota" element={<CekKeanggotaan />} />
            <Route path="/error/:code" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route element={<AuthLayouth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/regrister" element={<Regrister />} />
            <Route path="/forgot" element={<LupaPassword />} />
          </Route>
          <Route element={<HomeLayouts />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<AboutUsPage />} />
            <Route path="/testimoni" element={<Testimoni />} />
            <Route path="/bestProduct" element={<ProductBest />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
