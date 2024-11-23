import React from "react";
import Carousel from "../Components/Carousel";
import CTA from "../Components/CTA";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch ()

  useEffect(() => {

    const params = new URLSearchParams(window.location.search)
    const token = params.get("token")
    if (token) {
      localStorage.setItem("token", token)
      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }))
      })
    }
    navigate("/")
  }, [dispatch, navigate])


  return (
    <>
      <main className="flex flex-col items-center">
        <CTA />
      </main>
      <section className=" py-10 max-w-screen-xl mx-auto">
        <div className="">
          <Carousel />
        </div>

      </section>
    </>
  );
}

