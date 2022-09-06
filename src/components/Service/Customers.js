import React from "react";

function Customers() {
  const company = [
    {
      id: 1,
      img: "/images/graphic-design.png"
    },
    {
      id: 2,
      img: "/images/graphic-design.png"
    },
    {
      id: 3,
      img: "/images/graphic-design.png"
    },
    {
      id: 4,
      img: "/images/graphic-design.png"
    },
    {
      id: 5,
      img: "/images/graphic-design.png"
    },
    {
      id: 6,
      img: "/images/graphic-design.png"
    }
  ];

  return (
    <div className="font-Cai">
      <h1
        data-aos={"zoom-in"}
        className=" text-4xl text-center pt-14 font-bold"
      >
        عملائنا
      </h1>

      <div
        data-aos={"fade"}
        className="xl:flex grid lg:grid-cols-3 grid-cols-2 gap-16 justify-evenly items-center px-24 py-14"
      >
        {company.map((company) => (
          <div className="mx-auto" key={company.id}>
            <img
              className=""
              width={150}
              src={process.env.PUBLIC_URL + company.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;
