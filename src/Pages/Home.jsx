import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Carousel from "../Components/Carousel";
import CTA from "../Components/CTA";
import { setUser } from "../store/actions/LogActions"; // Asegúrate de que esta acción esté correctamente importada


export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      loginWithToken(token)
        .then((user) => {
          dispatch(setUser({ user, token }));
        })
        .catch((error) => {
          console.error("Error logging in with token:", error);
        })
        .finally(() => {
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, [dispatch, navigate]);
  return (
    <>
      <main className="flex flex-col items-center">
        <CTA />
      </main>
      <section className="py-10 max-w-screen-xl mx-auto">
        <div className="">
          <Carousel />
        </div>
      </section>
    </>
  );
}
