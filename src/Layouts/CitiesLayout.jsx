import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";




export default function CitiesLayout() {


    return (
        <>

<div className="bg-gray-100 min-h-screen flex flex-col">
       
      
        <main className="flex-1 mt-2"> 
          <Outlet />
        </main>
        <Footer ></Footer>
      </div>
        </>
    )
}