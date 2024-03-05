import * as React from "react";
import PropTypes from "prop-types";
import { Link, Script, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import logoBarreau from "../img/logo-barreau-de-paris.jpg";
//Bug build si import depuis dossier public
// import logoBarreau from "../../public/img/logo-barreau-de-paris.jpg";

export const FooterTemplate = ({ logo }) => {
  const logoImg = getImage(logo) || logo;

  console.log("logo from footer ::: ", logoImg);

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
        <div>
          <p className="mb-2 font-bold">Cabinet de Paris</p>
          <ul>
            <li className="my-2">
              <span className="italic font-bold"> Adresse :</span> 212 rue La
              Fayette 75010 Paris <br />
              Louis Blanc (ligne 7 et 7B) Jean Jaurès (ligne 2, 5 et 7B)
            </li>
            <li className="my-2">
              <a href="tel:0144321394">
                <span className="italic font-bold">Téléphone : </span>01 44 32
                13 94
              </a>
            </li>
            <li className="my-2">
              <span className="italic font-bold">Fax : </span>01 44 32 13 94
            </li>
            <li className="my-2">
              <a href="mailto:cabinet@dgtavocats.fr">
                <span className="italic font-bold">E-mail :</span>{" "}
                cabinet@dgtavocats.fr
              </a>
            </li>
          </ul>
        </div>
        <div>Luc-Moussa Bassole pour vous servir</div>
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

const Footer = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log("frontmatter from templates/footer.jsx :::: ", frontmatter);

  return <FooterTemplate logo={frontmatter.logo} />;
};

FooterTemplate.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Footer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Footer;

export const pageQuery = graphql`
  query FooterTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "footer" } }) {
      frontmatter {
        logo
        # image {
        #   childImageSharp {
        #     gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        #   }
        # }
      }
    }
  }
`;
