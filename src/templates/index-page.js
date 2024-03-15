import React from "react";
import PropTypes from "prop-types";
import { Script, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Adresse from "../components/Adresse";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

import "../style/tw-custom.scss";

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
  // const profilImage = getImage(image) || image;
  const heroImage = getImage(heroImg) || heroImg;
  const heroImage2 = getImage(heroImg2) || heroImg2;

  return (
    <div>
      <section className="hero">
        <div className="hero__bg">
          <picture>
            <img src={heroImage} alt="hero background" />
          </picture>
          {/* <h1>{title2}</h1> */}
        </div>

        <div className="hero__cnt">
          <h1>LMB</h1>
        </div>
      </section>

      {/* refacto component presentation */}

      <section className="container-fluid presentation">
        <div className="grid grid-cols-4/1 max-md:grid-cols-1 gap-16 max-xs:gap-y-8 items-center">
          <GatsbyImage
            image={heroImage2}
            alt="profil Img"
            imgStyle={{
              objectFit: "contain",
              maxWidth: "max-width: clamp(100px, 20rem, 600px)",
              backgroundColor: "none",
            }}
          />

          {/* <picture>
              <source srcSet={heroImage2.images.sources[0].srcSet} />
              <img
                src={heroImage2}
                alt={mainpitch.title}
                loading="lazy"
                decoding="async"
              />
            </picture> */}
          <div className="presentation">
            <h1 className="title text-4xl xs-md:text-2xl max-xs:text-xl max-xs:leading-none font-bold mb-8 max-xs:mb-6">
              {intro.heading}
            </h1>
            <p>{intro.d1}</p>
            <p>{intro.d2}</p>
            <p>{intro.d3}</p>
            <p>{intro.d4}</p>
          </div>

          <div className="mainpitch">
            <h1 className="title text-4xl xs-md:text-2xl max-xs:text-xl max-xs:leading-none font-bold mb-8 max-xs:mb-6">
              {mainpitch.title}
            </h1>
            <p>{mainpitch.p1}</p>
            <p>{mainpitch.p2}</p>
            <p>{mainpitch.p3}</p>
            <p>{mainpitch.p4}</p>
            <h3 className="subtitle text-pretty text-justify max-md:text-xs text-sm">
              {mainpitch.description}
            </h3>
          </div>

          <div className="category">
            {intro.blurbs.map((category) => (
              <div key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div>
            <h3 className="">{heading}</h3>
            <p>{description}</p>
          </div>

          <Features gridItems={intro.blurbs} />

          <div>
            <Link className="btn" to="/products">
              See all products
            </Link>
          </div>

          <div>
            <h3 className="">
              Latest stories
            </h3>

            <BlogRoll />

            <div className=">
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </div> */}
      </section>
      <Adresse />
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

  console.log("intro :::: ", frontmatter.intro.blurbs);

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
              # gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          title
          description
          p1
          p2
          p3
          p4
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            title
            text
          }
          heading
          d1
          d2
          d3
          d4
          description
        }
      }
    }
  }
`;
