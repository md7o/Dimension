import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
{
  /* <Routes>
  <Route path="App" element={<App />} />
  <Route path="/" element={<Main />} />
  <Route path="services" element={<Services />} />
  <Route path=":services" element={<Services />} />
</Routes>; */
}
