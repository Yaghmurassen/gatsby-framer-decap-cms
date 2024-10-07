import * as React from "react";
import { Link } from "gatsby";
import logoBarreau from "../img/logo-barreau-de-paris.jpg";

const Footer = () => {
  const footerData = {
    adresse: {
      title: "Cabinet de Paris",
      value: "212 rue La Fayette 75010 Paris",
      transport: "Louis Blanc (ligne 7 et 7B) Jean Jaurès (ligne 2, 5 et 7B)",
    },
    contact: {
      phone: "01 44 32 13 94",
      phoneTo: "tel:0144321394",
      fax: "01 44 32 13 94",
      mail: "cabinet@dgtavocats.fr",
      mailto: "mailto:cabinet@dgtavocats.fr",
    },
    description: "Luc-Moussa Bassole pour vous servir",
    mentions: "© Mentions légales zebi airlines, All Right Reserved",
  };

  return (
    <footer className="container-footer">
      <section className="footer-section-1 ">
        <div>
          <img
            src={logoBarreau}
            alt="logo Barreau de paris"
            className="m-auto max-w-40 rounded-md"
          />
        </div>
        <ul>
          <li>
            <Link className="navbar-item" to="/news">
              Actualités / Presse
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/articles">
            Articles
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <p className="mb-2 font-bold">{footerData.adresse.title}</p>
          <ul>
            <li className="my-2">
              <span className="italic font-bold"> Adresse : </span>
              {footerData.adresse.value} <br /> {footerData.adresse.transport}
            </li>
            <li className="my-2">
              <a href={footerData.contact.phoneTo}>
                <span className="italic font-bold">Téléphone : </span>
                {footerData.contact.phone}
              </a>
            </li>
            <li className="my-2">
              <span className="italic font-bold">Fax : </span>
              {footerData.contact.fax}
            </li>
            <li className="my-2">
              <a href={footerData.contact.mailto}>
                <span className="italic font-bold">E-mail : </span>
                {footerData.contact.mail}
              </a>
            </li>
          </ul>
        </div>
        <div>{footerData.description}</div>
      </section>
      <section className="footer-section-2">
        <div className="mentions">{footerData.mentions}</div>
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
