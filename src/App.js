import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./components/Main";
function App() {
  AOS.init();
  return (
    <div>
      <Main />
    </div>
  );
}
export default App;
