import React from "react";
import Links from "./components/Links";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();

  return (
    <>
      <Links />
    </>
  );
}
export default App;
