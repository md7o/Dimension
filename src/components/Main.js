import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Fotter from "./Fotter";
import Interface from "./Interface";
import Features from "./Features";
import Social from "./Social";
import WebDevolopment from "./WebDevolopment";

function Main() {
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
          <Interface />;
          <Features />
          <Social />
          <WebDevolopment />
          <Fotter />
        </div>
      )}
    </div>
  );
}

export default Main;
