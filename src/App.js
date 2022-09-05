import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <Router>
      <Route path="/Services" element={Services} />
      <Route path="/" exact component={Main} />
    </Router>
  );
}
export default App;
