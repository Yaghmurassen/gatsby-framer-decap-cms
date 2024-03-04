import * as React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import logoBarreau from "../img/logo-barreau-de-paris.jpg";
// import logoBarreau from "../../public/img/logo-barreau-de-paris.jpg";

const Footer = () => {
  return (
    <footer className="container-footer">
      <section className="footer-section-1 ">
        <div>
          <img
            src={logoBarreau}
            alt="logo Barreau de paris"
            className="m-auto max-w-40"
          />
        </div>
        <ul>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div>Hell world</div>
        <div>Hell world</div>
      </section>
      <section className="footer-section-2">
        <div className="mentions">
          © Mentions légales zebi airlines, All Right Reserved
        </div>
        <div>
          <a
            className="navbar-item"
            href="/admin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
