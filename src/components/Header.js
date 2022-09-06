import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="flex justify-between items-center bg-Co1 font-Cai font-bold text-2xl p-5  text-white">
        <div>
          <h1 className="text-4xl">DIMENSION</h1>
        </div>

        <div className="flex justify-center items-center">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Books</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Header;
