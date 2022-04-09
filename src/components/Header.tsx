import React from "react";
import { Link } from "react-router-dom";

import routes from "../data/routes";

const Header = () => (
  <header className="header">
    <nav className="links">
      <ul>
        {routes.map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
