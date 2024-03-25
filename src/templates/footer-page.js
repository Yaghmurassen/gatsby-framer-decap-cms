import * as React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import logoBarreau from "../img/logo-barreau-de-paris.jpg";
// import logoBarreau from "../../public/img/logo-barreau-de-paris.jpg"; ====> Bug build si import depuis dossier public

export const FooterTemplate = ({ title, alt }) => {
  console.log("title from FooterTemplate :::: ", title, alt);

  return (
    <footer className="container-footer">
      {/* <h1>{data.markdownRemark.frontmatter.footer.title}</h1> */}
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
              Fayette 75010 Paris <br /> Louis Blanc (ligne 7 et 7B) Jean Jaurès
              (ligne 2, 5 et 7B)
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
                <span className="italic font-bold">E-mail : </span>
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

FooterTemplate.propTypes = {
  title: PropTypes.string,
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const FooterPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log("frontmatter from FooterPage :::: ", frontmatter);

  return (
    <Layout>
      <FooterTemplate
        title={frontmatter.footer.title}
        alt={frontmatter.footer.alt}
      />
    </Layout>
  );
};

FooterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FooterPage;

export const pageQuery = graphql`
  query FooterTemplate {
    markdownRemark {
      frontmatter {
        footer {
          title
          alt
        }
      }
    }
  }
`;
