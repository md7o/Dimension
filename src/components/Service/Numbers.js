import React from "react";

function Numbers() {
  const Num = [
    {
      id: 1,
      img: "/images/countries.png",
      value: "9+ Countries",
      display: "flex",
      flexDirection: "row-reverse"
    },
    {
      id: 2,
      img: "/images/blueprint.png",
      value: "255+ Projects",
      display: "flex",
      flexDirection: "row-reverse"
    },
    {
      id: 3,
      img: "/images/prototype.png",
      value: "12+ Industries",
      display: "flex",
      flexDirection: "row-reverse"
    }
  ];
  return (
    <div className="bg-Co1 font-Cai ">
      <h1
        data-aos={"zoom-in"}
        className="text-white text-3xl text-center py-8 font-bold"
      >
        أرقام
      </h1>
      <div
        data-aos={"zoom-in"}
        className="flex justify-evenly items-center pt-14 "
      >
        {Num.map((Num) => (
          <div className="" key={Num.id}>
            <img
              className=""
              width={150}
              src={process.env.PUBLIC_URL + Num.img}
            />
            <p className="text-white mx-auto text-center py-8 text-2xl break-normal	max-w-min">
              {Num.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;
