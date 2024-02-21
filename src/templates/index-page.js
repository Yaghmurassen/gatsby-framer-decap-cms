import React from "react";
import PropTypes from "prop-types";
import { Link, Script, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

import "../style/tw-custom.scss";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  heroImg,
  heroImg2,
  title,
  title2,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const profilImage = getImage(image) || image;
  const heroImage = getImage(heroImg) || heroImg;
  const heroImage2 = getImage(heroImg2) || heroImg2;

  console.log("heroImage2  ::::", heroImage2);

  return (
    <div>
      <div className="hero">
        <div className="hero__bg">
          <picture>
            <img src={heroImage} />
          </picture>
          {/* <h1>{title2}</h1> */}
        </div>

        <div className="hero__cnt">
          {/* <GatsbyImage
            image={profilImage}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              maxHeight: height,
            }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          /> */}
          <h1>LMB</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <GatsbyImage
              image={heroImage2}
              alt="profil Img"
              heigh={"100%"}
              width={"100%"}
            />
            <h1 className="title">{mainpitch.title}</h1>
            <h3 className="subtitle">{mainpitch.description}</h3>
            <p>{mainpitch.petitMot}</p>
          </div>

          <div>
            <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
            <p>{description}</p>
          </div>

          <Features gridItems={intro.blurbs} />

          <div>
            <Link className="btn" to="/products">
              See all products
            </Link>
          </div>

          <div>
            <h3 className="has-text-weight-semibold is-size-2">
              Latest stories
            </h3>

            <BlogRoll />

            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroImg2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  title2: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log("frontmatter :::: ", frontmatter);

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heroImg={frontmatter.heroImg}
        heroImg2={frontmatter.mainpitch.heroImg2}
        title={frontmatter.title}
        title2={frontmatter.title2}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        title2
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heroImg
        heading
        subheading
        mainpitch {
          heroImg2 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
