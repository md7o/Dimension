import React from "react";
import { Route, Routes, Link } from "react-router-dom";
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
          <div className="">
            <nav>
              <ul className="flex justify-center items-center select-none	">
                <li>
                  <Link className="hover:text-Co2 duration-150 px-2" to="/">
                    Home
                  </Link>
                </li>
                <span className="cursor-default select-none"> |</span>
                <li>
                  <Link
                    className="hover:text-Co2 duration-150 px-2"
                    to="/services"
                  >
                    Services
                  </Link>
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
