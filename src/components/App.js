import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Services from "./Service/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/Services" element={Services} />
    </div>
  );
}
export default App;
