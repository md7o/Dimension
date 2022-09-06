import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Service/Services";
function App() {
  AOS.init();
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
export default App;
