import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

import "../style/navbar.scss";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;
    let throttleWait;

    const throttle = (callback, time) => {
      if (throttleWait) return;
      throttleWait = true;

      setTimeout(() => {
        callback();
        throttleWait = false;
      }, time);
    };

    const navbarControl = () => {
      if (window.scrollY < 50) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", () => throttle(navbarControl, 500));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", throttle);
    };
  }, [scrollDirection]);

  return (
    <nav role="navigation" aria-label="main-navigation">
      <div
        className={`nav ${
          scrollDirection === "down" ? "mainDiv  isScrollingDown" : "mainDiv"
        }`}
      >
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Logo" style={{ width: "88px" }} />
        </Link>

        <ul className="flex gap-4 max-md2:hidden">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </ul>
        {/* Button Burger Menu */}
        <div
          className="menu-toggle flex md2:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
            <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
            <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
          </div>
        </div>
        {/* <div className="flex md2:hidden">|||</div> */}
      </div>
      <div
        className="nav-overlay"
        style={{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0s" : "0s",
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
