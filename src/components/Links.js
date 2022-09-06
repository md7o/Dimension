import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Main from "./Main";
import Services from "./Service/Services";

function App() {
  return (
    <>
      <div className="flex justify-between items-center bg-Co1 font-Cai font-bold text-2xl p-5  text-white">
        <div>
          <h1 className="text-4xl">DIMENSION</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
export default App;
