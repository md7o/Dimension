import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Links from "./Links";
import Fotter from "./Fotter";
import Interface from "./Interface";
import Features from "./Features";
import Social from "./Social";
import WebDevolopment from "./WebDevolopment";

function Main() {
  AOS.init();
  return (
    <div>
      <Links />
      <Interface />
      <Features />
      <Social />
      <WebDevolopment />
      <Fotter />
    </div>
  );
}
export default Main;
