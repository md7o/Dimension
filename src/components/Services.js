import React from "react";
import Header from "./Header";
import LastWork from "./Service/LastWork";
import Customers from "./Service/Customers";
import Numbers from "./Service/Numbers";
import Contant from "./Service/Contant";
import Fotter from "./Fotter";

function Services() {
  return (
    <div>
      <Header />
      <LastWork />
      <Customers />
      <Numbers />
      <Contant />
      <Fotter />
    </div>
  );
}

export default Services;
