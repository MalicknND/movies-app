import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Favoris
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>Movies</h1>
    </div>
  );
};

export default Header;
