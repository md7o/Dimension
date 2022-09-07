import React from "react";

function Interface() {
  const myStyle = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/BackGround1.png')`,
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div>
      <div className=" w-full h-xll " style={myStyle}>
        <div data-aos={"zoom-in"} className="text-center font-Cai">
          <h1 className="pt-64 text-white lg:text-8xl text-5xl ">
            خدمة تطوير المواقع الإلكترونية
          </h1>
          <p className="pt-12 text-white lg:text-5xl text-4xl">
            نوفر لك كل ما تحتاجه لتحقيق تواجد رقمي مميز
          </p>
          <button className=" mt-24 font-bold text-white border-8 border-Co2 hover:bg-Co2 duration-150 rounded-full px-16 py-3 text-4xl ">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
}
export default Interface;
