import React from "react";

function Social() {
  const myStyle2 = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/BackGround2.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className="my-80 bg-Co1">
      <div className=" w-full h-sll text-center font-Cai" style={myStyle2}>
        <h1
          data-aos={"zoom-in"}
          className="pt-40 text-Co2 sm:text-6xl text-4xl font-bold"
        >
          خدمة تطوير المواقع الإلكترونية
        </h1>
        <div data-aos={"zoom-in"} className="flex justify-center items-center">
          <button className="flex justify-center items-center sm:text-4xl text-2xl mr-12 mt-24 font-bold text-white sm:border-8 border-4 border-Co2 hover:bg-Co2 duration-150 rounded-full sm:px-14 px-6 py-3 ">
            <img
              className="mr-5 lg:w-16 w-8"
              src={process.env.PUBLIC_URL + "/images/email.png"}
            />
            Email
          </button>
          <button className="flex justify-center items-center sm:text-4xl text-2xl  mt-24 font-bold text-white sm:border-8 border-4 border-Co2 hover:bg-Co2 duration-150 rounded-full sm:px-14 px-6 py-3 ">
            <img
              className="mr-5 lg:w-16 w-8"
              src={process.env.PUBLIC_URL + "/images/whatsapp.png"}
            />{" "}
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
export default Social;
