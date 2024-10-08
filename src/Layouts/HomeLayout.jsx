import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";


export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-400">
      <div className="bg-black">
      <Header />
      <Sidebar />
      </div>
      <main className="flex-1 mt-2"> {/* Ajusta el margen superior aquí */}
        <Outlet />
      </main>
      <Footer ></Footer>
      </div>
  );
}