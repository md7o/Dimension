import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Service/Services";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="App" element={<App />} />
      <Route path="/" element={<Main />} />
      <Route path="services" element={<Services />} />
    </Routes>
  </BrowserRouter>
);
