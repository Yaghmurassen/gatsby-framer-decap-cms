import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const NewsPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;
  const fullWidthImage = getImage(fullImage) || fullImage;

  const [showDecision, setShowDecision] = useState(false);

  const openDecision = () =>
    setShowDecision((showDecision) => {
      console.log("showDecisionshowDecision ", showDecision);
      return !showDecision;
    });

  return (
    <section className="section-page mx-6">
      <h1 className="section-title">Décisions</h1>
      <h2 className="text-xl mb-4">La presse en parle</h2>

      <section>
        <div className="card">
          <h3 className="mb-4">
            Poitiers : accusé de viol sur personne vulnérable, un chauffeur de
            taxi remis en liberté
          </h3>
          <img
            src="https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/64ca891c00852afb4c8b45c6.jpg"
            alt="article 1"
            className="mb-4"
          />
          <p>
            Âgé de 57 ans, un chauffeur de taxi est mis en examen pour viol sur
            personne vulnérable depuis juillet 2022. Il était en détention
            provisoire depuis un an. Il a été remis en liberté, ce mardi 1er
            août 2023.
          </p>

          <button onClick={openDecision} className="my-4">
            {showDecision ? <span>Cacher</span> : <span>Voir</span>} la décision
          </button>
          {showDecision && (
            <div className="h-[100vh]">
              <object
                data="/img/cv24.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="button"
              >
                <p>
                  Unable to display PDF file.{" "}
                  <a href="/img/cv24.pdf">Download</a>
                  instead.
                </p>
              </object>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

NewsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const NewsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <NewsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default NewsPage;

export const NewsPageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        testimonials {
          author
          quote
        }

        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
