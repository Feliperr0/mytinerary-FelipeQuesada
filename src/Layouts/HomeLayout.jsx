import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";


export default function HomeLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-black">
      <Header />
      <Sidebar />
      </div>
      <main className="flex-1 mt-1"> {/* Ajusta el margen superior aquí */}
        <Outlet />
      </main>
      <Footer ></Footer>
      </div>
  );
}