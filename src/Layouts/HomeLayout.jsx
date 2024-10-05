import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';


export default function HomeLayout() {


    return (
        <>

            <div className="bg-gray-100 min-h-screen flex flex-col">
                <Header></Header>
                <Sidebar></Sidebar>
                <main>
                    <Outlet />
                </main>
                <Footer></Footer>



            </div>
        </>
    )
}