import React from "react";

function LastWork() {
  const Work = [
    {
      id: 1,
      img: "/images/store.png",
      title: "MDSTORE",
      to: "View >",
      href: "https://md7o.github.io/store/"
    },
    {
      id: 2,
      img: "/images/inno.png",
      title: "INNOVIRTUAL",
      to: "View >",
      href: "https://astorm.net/innoVirtual/#"
    },
    {
      id: 3,
      img: "/images/quastion.png",
      title: "qGame",
      to: "View >",
      href: "https://astorm.net/questionGame/#"
    }
  ];

  const OurService = [
    {
      id: 1,
      img: "/images/animation.png",
      title: "MDSTORE"
    },
    {
      id: 2,
      img: "/images/branding.png",
      title: "INNOVIRTUAL"
    },
    {
      id: 3,
      img: "/images/social-marketing.png",
      title: "qGame"
    },
    {
      id: 4,
      img: "/images/web-development.png",
      title: "qGame"
    },
    {
      id: 5,
      img: "/images/content.png",
      title: "qGame"
    },
    {
      id: 6,
      img: "/images/tablet.png",
      title: "qGame"
    }
  ];

  return (
    <div className="font-Cai">
      <div className="bg-Co1">
        <h1
          data-aos={"zoom-in"}
          className="text-white text-3xl text-center py-8 font-bold"
        >
          اخر الأعمال
        </h1>
        <div
          data-aos={"zoom-in"}
          className="2xl:flex grid justify-center items-center"
        >
          {Work.map((Work) => (
            <div className="px-5 text-center " key={Work.id}>
              <img
                className="border-4 border-Co2"
                width={500}
                src={process.env.PUBLIC_URL + Work.img}
              />
              <div className="py-3">
                <h2 className="text-white text-2xl font-bold">{Work.title}</h2>
                <a
                  href={Work.href}
                  className="underline text-Co2 cursor-pointer hover:text-white duration-150"
                >
                  {Work.to}
                </a>
              </div>
            </div>
          ))}
        </div>
        <h1
          data-aos={"zoom-in"}
          className="text-white text-4xl text-center pt-64 font-bold"
        >
          خدماتنا
        </h1>
        <div data-aos={"zoom-in"} className="grid 2xl:grid-cols-3 grid-cols-2 ">
          {OurService.map((OurService) => (
            <div className="mx-auto py-12 text-center" key={OurService.id}>
              <img
                className="2xl:w-48 sm:w-44"
                src={process.env.PUBLIC_URL + OurService.img}
              />
              <h2 className="text-white text-2xl pt-4">{OurService.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LastWork;
