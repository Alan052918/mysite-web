import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./home/Home";
import About from "./about/About";
import Cover from "./blogs/Cover";
import Gallery from "./photos/Gallery";
import Dashboard from "./devs/Dashboard";

import "./Header.css";

interface NavLinkProps {
  path: string;
  name: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <div className="navlink">
      <Link to={props.path}>{props.name}</Link>
    </div>
  );
};

class Navbar extends React.Component {
  renderNavLink(path: string, name: string) {
    return <NavLink path={path} name={name} />;
  }

  render() {
    return (
      <nav className="navbar">
        {this.renderNavLink("/", "home")}
        {this.renderNavLink("/about", "about")}
        {this.renderNavLink("/blogs", "blogs")}
        {this.renderNavLink("/devs", "devs")}
        {this.renderNavLink("/photos", "photos")}
      </nav>
    );
  }
}

const Header = () => {
  return (
    <header className="header">
      <BrowserRouter>
        <div className="header-navbar">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Cover />} />
            <Route path="/devs" element={<Dashboard />} />
            <Route path="/photos" element={<Gallery />} />
          </Routes>
        </div>
      </BrowserRouter>
    </header>
  );
};

export default Header;
