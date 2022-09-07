import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import LastWork from "./LastWork";
import Customers from "./Customers";
import Numbers from "./Numbers";
import Contant from "./Contant";
import Fotter from "../Fotter";

function Services() {
  const [loading, stateLoading] = useState(false);

  useEffect(() => {
    stateLoading(true);
    setTimeout(() => {
      stateLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="load">
      {loading ? (
        <div className="flex justify-center items-center w-full h-Hll">
          <PuffLoader color={"#299F8A"} loading={loading} size={200} />
        </div>
      ) : (
        <div>
          <LastWork />
          <Customers />
          <Numbers />
          <Contant />
          <Fotter />
        </div>
      )}
    </div>
  );
}

export default Services;
