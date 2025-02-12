import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";



export default function HomeLayout() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-yellow-400">
      <div className="bg-black">
      <Header />
 
      </div>
      <main className="flex-1 mt-1"> 
        <Outlet />
      </main>
      <Footer ></Footer>
      </div>
      </>
  );
}