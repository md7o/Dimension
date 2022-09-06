import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Main from "./components/Main";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
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
// process.env.PUBLIC_URL +
