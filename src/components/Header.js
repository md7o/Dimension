import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const nav = [
    {
      id: 1,
      text: "Home",
      t: "/design-app"
    },
    {
      id: 2,
      text: "Services",
      t: "/design-app/Services"
    },
    {
      id: 3,
      text: "Contacts",
      t: "/Services"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center bg-Co1 font-Cai font-bold text-2xl p-5  text-white">
        <div>
          <h1 className="text-4xl">DIMENSION</h1>
        </div>

        <div className="flex justify-center items-center">
          {nav.map((nav) => (
            <NavLink
              key={nav.id}
              to={`${nav.t}`}
              className="p-4 hover:text-Co2 duration-150"
              href="#"
            >
              {nav.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Header;
