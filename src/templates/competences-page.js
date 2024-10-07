import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import {
  motion,
  useViewportScroll,
  useElementScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import Layout from "../components/Layout";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Reveal } from "../components/utils/Reveal";
// import Content, { HTMLContent } from "../components/Content";

import "../style/tw-about.scss";

// eslint-disable-next-line
export const CompetencesPageTemplate = ({ mainpitch, intro }) => {
  const categoryRef = useRef();
  const { scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollYProgress, [10, 0.6], ["100%", 100]);
  // const PageContent = contentComponent || Content;

  return (
    <section className="section-page">
      <div className="container">
        {/* bg-gradient-to-r from-sky-500 to-indigo-500  */}
        <div className="bg-competences bg-cover absolute top-[51px] left-0 right-0 z-0 h-[75vh]" />
        {/* <GatsbyImage
          image={}
          alt="category Img"
          imgStyle={{
            objectFit: "contain",
            backgroundColor: "none",
          }}
        /> */}
        {/* <PageContent className="content" content={content} /> */}
        <Reveal>
          <h1 className="section-title mt-16 text-white text-6xl">
            {mainpitch.title}
          </h1>
          <section className="container-fluid text-center card-glass items-center max-md:p-8 p-12 min-h-[30vh] mt-8 max-md:max-w-full max-w-[75%] m-auto mb-12">
            <div className="mainpitch font-semibold italic text-white">
              <p>{mainpitch.c1}</p>
              <p>{mainpitch.c2}</p>
              <p>{mainpitch.c3}</p>
              <p>{mainpitch.c4}</p>
              <h3 className="subtitle max-md:text-xs">
                {mainpitch.description}
              </h3>
            </div>
          </section>
        </Reveal>

        <section className="container-fluid text-center">
          <div className="category grid grid-cols-2 max-md:grid-cols-1">
            {intro.blurbs.map((category) => (
              <Reveal>
                <div key={category.title}>
                  <GatsbyImage
                    image={getImage(category.image)}
                    alt="category Img"
                    imgStyle={{
                      objectFit: "contain",
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
              </Reveal>
            ))}
          </div>
        </section>

        {/* <section className="container-fluid text-center">
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
      </div>
    </section>
  );
};

CompetencesPageTemplate.propTypes = {
  // title: PropTypes.string.isRequired,
  // content: PropTypes.string,
  // contentComponent: PropTypes.func,
  mainpitch: PropTypes.object,
  // description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const CompetencesPage = ({ data }) => {
  // const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CompetencesPageTemplate
        // contentComponent={HTMLContent}
        // title={post.frontmatter.title}
        // content={post.html}
        mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

// AboutPage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

CompetencesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CompetencesPage;

// export const aboutPageQuery = graphql`
//   query AboutPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

export const CompetencesPageQuery = graphql`
  query CompetencesPage {
    markdownRemark(frontmatter: { templateKey: { eq: "competences-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
          c1
          c2
          c3
          c4
        }
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
        }
      }
    }
  }
`;
