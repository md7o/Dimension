import React from "react";

function WebDevolopment() {
  const Features = [
    {
      id: 1,
      img: "/images/direction.png",
      text: "مرونة مع متطلبات العمل"
    },
    {
      id: 2,
      img: "/images/notepad.png",
      text: "متابعة مميزة مع العميل"
    },
    {
      id: 3,
      img: "/images/work-team.png",
      text: "فريق خبير ومبدع"
    },
    {
      id: 4,
      img: "/images/present-tag.png",
      text: "أسعار مناسبة"
    },
    {
      id: 5,
      img: "/images/hourglass.png",
      text: "التزام بالوقت"
    },
    {
      id: 6,
      img: "/images/settings.png",
      text: "مواكبة لتطور السوق"
    }
  ];

  return (
    <div>
      <h1
        data-aos={"zoom-in"}
        className="text-center  text-Co1 lg:text-6xl text-5xl font-bold"
      >
        بماذا تتميز خدماتنا في خدمة تطوير المواقع الالكترونية
      </h1>
      <div
        data-aos={"zoom-in"}
        className="grid 2xl:grid-cols-3  justify-center items-center py-52"
      >
        {Features.map((Features) => (
          <div className="m-16" key={Features.id}>
            <img
              className=" hover:w-36 duration-500 mx-auto"
              src={process.env.PUBLIC_URL + Features.img}
              width={200}
            />
            <p className="text-center text-3xl text-Co1 font-semibold pt-12">
              {Features.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WebDevolopment;
