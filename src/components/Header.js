import React from "react";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="flex justify-between items-center bg-Co1 font-Cai font-bold text-2xl p-5  text-white">
        <div>
          <h1 className="text-4xl">DIMENSION</h1>
        </div>

        <div className="flex justify-center items-center">
          <nav>
            <Link className="hover:text-Co2 duration-150" to="/">
              Invoices
            </Link>{" "}
            |{" "}
            <Link className="hover:text-Co2 duration-150" to="/services">
              Expenses
            </Link>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Header;
