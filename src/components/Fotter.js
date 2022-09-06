import React from "react";

function Fotter() {
  return (
    <div>
      <div className="font-Cai pt-32 h-sll bg-Co1 text-white text-center">
        <h1 className="text-5xl font-bold cursor-pointer">DIMENSION</h1>

        <p className="text-4xl font-bold mx-auto pt-20 pb-8 max-w-4xl">
          Unleash your ideas, Expose your brand, and let your visuals Beat!
        </p>

        <div className="flex justify-center items-center">
          <img src={process.env.PUBLIC_URL + "/images/email.png"} width={50} />{" "}
          <p className="text-3xl px-3 ">md7ohe@gmail.com</p>
        </div>
        <p className="text-xl mt-16">© 2022 Dimension | All Rights Reserved</p>
      </div>
    </div>
  );
}
export default Fotter;
