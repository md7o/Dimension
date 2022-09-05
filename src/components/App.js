import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Services from "./Service/Services";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/design-app" element={<Main />} />
          <Route exact path="/design-app/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
