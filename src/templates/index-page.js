import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Script, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
  motion,
  useViewportScroll,
  useElementScroll,
  useTransform,
  useMotionValue,
  useInView,
  useAnimation,
} from "framer-motion";
import { Reveal } from "../components/utils/Reveal";
import Layout from "../components/Layout";
import "../style/tw-custom.scss";
// import ZoomParallax from "../components/ZoomParallax";

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
  const heroImage = getImage(heroImg) || heroImg;
  const heroImage2 = getImage(heroImg2) || heroImg2;
  const bckgRef = useRef();
  const categoryRef = useRef();

  // let scrollYProgress = 0;
  // console.log("categoryRef ", categoryRef);
  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.5], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const translateY = useTransform(scrollYProgress, [10, 0.6], ["100%", 100]);

  // const { scrollYProgress } = useViewportScroll();
  // const { scrollYProgress } = useElementScroll(bckgRef);

  // const { scrollYProgress } = useElementScroll({
  //   target: bckgRef.current,
  //   offset: ["0 1", "1.33 1"],
  // });

  // const x = useMotionValue(scrollYProgress);

  // const scale = useTransform(scrollYProgress, [0, 0.3], [1, 2]);
  // const opacity = useTransform(scrollYProgress, [1, 0], [0.3, 0]);

  useEffect(() => {
    console.log("categoryRef useEffect ", categoryRef.current);
  }, []);

  return (
    <div>
      <section className="hero">
        <motion.div
          className="hero__bg"
          ref={bckgRef}
          style={{
            scale,
            opacity,
          }}
        >
          <GatsbyImage
            image={heroImage}
            alt="hero Img"
            imgStyle={{
              maxWidth: "100%",
              backgroundColor: "transparent",
            }}
          />
        </motion.div>

        <div className="hero__cnt">
          <h1>{title}</h1>
        </div>
      </section>
      {/* h-[75vh] */}
      <section className="container-fluid presentation ">
        <Reveal>
          <div className="grid grid-cols-4/1 max-md:grid-cols-1 gap-16 max-xs:gap-y-8 items-center profil-img">
            <GatsbyImage
              image={heroImage2}
              alt="profil Img"
              imgStyle={{
                objectFit: "contain",
                backgroundColor: "none",
              }}
            />

            <div className="presentation">
              <h1 className="title text-4xl xs-md:text-2xl max-xs:text-xl max-xs:leading-none font-bold mb-12 max-xs:mb-6 max-xs:mt-8">
                {intro.heading}
              </h1>
              <p>{intro.d1}</p>
              <p>{intro.d2}</p>
              <p>{intro.d3}</p>
              <p>{intro.d4}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* <section className="container-fluid text-center card-glass items-center p-12">
        <div className="mainpitch">
          <h1 className="title text-4xl xs-md:text-2xl max-xs:text-xl max-xs:leading-none font-bold mb-12 max-xs:mb-6">
            {mainpitch.title}
          </h1>
          <p>{mainpitch.c1}</p>
          <p>{mainpitch.c2}</p>
          <p>{mainpitch.c3}</p>
          <p>{mainpitch.c4}</p>
          <h3 className="subtitle max-md:text-xs">{mainpitch.description}</h3>
        </div>
      </section>

      <section className="container-fluid text-center">
        <motion.div
          ref={categoryRef}
          style={{ translateY }}
          className="category grid grid-cols-2 max-md:grid-cols-1"
        >
          {intro.blurbs.map((category) => (
            <div key={category.title}>
              <GatsbyImage
                image={getImage(category.image)}
                alt="category Img"
                imgStyle={{
                  objectFit: "contain",
                  // maxWidth: "13rem",
                  backgroundColor: "none",
                }}
              />
              <h3 className="font-bold">{category.title}</h3>
              <ul>
                {category?.competences.map((competence) => (
                  <li key={competence}>{competence}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section> */}

      {/* <ZoomParallax /> */}

      {/* 
        <Features gridItems={intro.blurbs} />
        <Link className="btn" to="/products">
          See all products
        </Link>
        <BlogRoll />
      */}
      {/* <Adresse /> */}
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
        heroImg {
          childImageSharp {
            gatsbyImageData(quality: 100, backgroundColor: "transparent")
          }
        }
        heading
        subheading
        mainpitch {
          heroImg2 {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
            }
          }
          title
          description
          c1
          c2
          c3
          c4
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            title
            competences
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
