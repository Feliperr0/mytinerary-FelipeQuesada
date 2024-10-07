import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";



export default function CitiesLayout() {


    return (
        <>

<div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <Sidebar />
        <main className="flex-1 mt-2"> {/* Ajusta el margen superior aquí */}
          <Outlet />
        </main>
        <Footer ></Footer>
      </div>
        </>
    )
}