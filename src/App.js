import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <Routes>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/Services">
        <Services />
      </Route>
    </Routes>
  );
}
export default App;
