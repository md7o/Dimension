import React from "react";
import { Route, Routes, Link } from "react-router-dom";
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
export default App;
