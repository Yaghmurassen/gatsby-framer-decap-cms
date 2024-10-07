import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import logoJustice from "../img/logo-justice.png";
import "../style/navbar.scss";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const threshold = 0;
  // impossible d'acceder a la window en SSR durant le build ..
  let lastScrollY;
  if (typeof window !== "undefined") {
    lastScrollY = window.scrollY;
  } else {
    lastScrollY = 0;
  }
  let ticking = false;
  let throttleWait;

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

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
  }, [scrollDirection, navOpen]);

  return (
    <nav
      role="navigation"
      aria-label="main-navigation"
      style={{
        overflow: navOpen ? "hidden" : "auto",
      }}
    >
      <div
        className={`nav ${
          scrollDirection === "down" && navOpen === false
            ? "mainDiv  isScrollingDown"
            : "mainDiv"
        }`}
      >
        <div>
          <Link
            to="/"
            className="navbar-item flex items-center gap-2"
            title="Logo"
          >
            <img
              src={logoJustice}
              alt="logo Justice"
              className="m-auto max-w-12"
            />
            <span>LMB</span>
          </Link>
        </div>

        <ul className="flex gap-4 max-md2:hidden">
          <Link className="navbar-itemus" to="/">
            Présentation
          </Link>
          <Link className="navbar-itemus" to="/competences">
            Compétences
          </Link>
          <Link className="navbar-itemus" to="/decisions">
            Décisions
          </Link>
          <Link className="navbar-itemus" to="/articles">
            Articles
          </Link>
          <Link className="navbar-itemus" to="/contact">
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
          top: navOpen ? "0%" : "-108%",
          transitionDelay: navOpen ? "0s" : "0s",
        }}
      >
        <ul className="nav-links flex gap-4">
          <li className="nav-item">
            <Link
              className="navbar-itemus"
              to="/"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}
            >
              Présentation
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              className="navbar-itemus"
              to="/competences"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.9s" : "0s",
              }}
            >
              Compétences
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              className="navbar-itemus"
              to="/decisions"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1s" : "0s",
              }}
            >
              Décisions
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              className="navbar-itemus"
              to="/articles"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.1s" : "0s",
              }}
            >
              Articles
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              className="navbar-itemus"
              to="/contact"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.1s" : "0s",
              }}
            >
              Contact
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
        </ul>

        <div className="nav-footer">
          <div
            className="location"
            style={{
              bottom: navOpen ? "0" : "-20px",
              opacity: navOpen ? "1" : "0",
              transitionDelay: navOpen ? "1.2s" : "0s",
            }}
          >
            Paris
          </div>
          <div className="nav-social-media">
            <ul>
              <li>
                <a
                  href="#"
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.3s" : "0s",
                  }}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.4s" : "0s",
                  }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.5s" : "0s",
                  }}
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
