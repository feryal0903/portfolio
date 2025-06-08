import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const categories = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/projets" },
  { name: "CV", path: "/cv" },
  { name: "À propos", path: "/a-propos" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-categories">
        {categories.map((cat) => (
          <NavLink
            key={cat.path}
            to={cat.path}
            end={cat.path === "/"}
            // className="nav-link"
            // activeClassName="active-category"
            className={({ isActive }) =>
                "nav-link" + (isActive ? " active-category" : "")
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}