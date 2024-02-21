import React from "react";
import PropTypes from "prop-types";
import { Link, Script, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
// import FullWidthImage2 from "../components/FullWidthImage2";

import "../style/tw-custom.scss";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  // heroImg,
  title,
  title2,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const profilImage = getImage(image) || image;
  // const heroImage = getImage(heroImg) || heroImg;

  // console.log("heroImage  ::::", heroImage);

  return (
    <div>
      <div className="hero">
        <div className="hero__bg">
          {/* <GatsbyImage
            image={heroImage}
            alt="hero Img"
            heigh={"100%"}
            width={"100%"}
          /> */}
          <h1>{title2}</h1>
          {/* <picture>
            <img src="https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2594&q=80" />
          </picture> */}
          {/* <FullWidthImage img={profilImage} title={title} subheading={subheading} />
           */}
        </div>

        <div className="hero__cnt">
          {/* <picture><img src={profilImage} /></picture> */}
          <GatsbyImage
            image={profilImage}
            alt="profil Img"
            heigh={"100%"}
            width={"100%"}
          />
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
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                    <div className="litle-word">
                      <p>{mainpitch.petitMot}</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
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
              </div>
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
  // heroImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        // heroImg={frontmatter.heroImg}
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
        # heroImg {
        #   childImageSharp {
        #     gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        #   }
        # }
        heading
        subheading
        mainpitch {
          # heroImg {
          #   childImageSharp {
          #     gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          #   }
          # }
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
