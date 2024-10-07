import React, { useState, useEffect } from "react";
import PropTypes, { object } from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import DecisionCard from "../components/DecisionCard";
// import { useMobile } from "../composables/helpers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line

export const DecisionsPageTemplate = ({ blurbs }) => {
  const [isMobile, setIsMobile] = useState(false);

  console.log("blurbsblurbsblurbsblurbsblurbsblurbsblurbsblurbs ", blurbs);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleBlurbs = () => {
    // Object.values(blurbs).forEach(function (value, index) {
    //   console.log("key : blurbs[key] ", value, typeof [value[index]]);
    // });
    Object.values(blurbs)[0].forEach(function (value, index) {
      console.log("value.title ", value.title, value.link);
    });
  };

  useEffect(() => {
    if (window.screen.width < 800) {
      setIsMobile(true);
    }
    // handleBlurbs();
  }, []);

  return (
    <section className="container-fluid !flex-col">
      <h1 className="section-title">Décisions</h1>
      {/* <h2 className="text-xl mb-4 font-medium uppercase italic">
        La presse en parle
      </h2> */}
      <section>
        {isMobile ? (
          <Slider {...settings}>
            {blurbs &&
              blurbs.map(function (decisionsItem, index) {
                return <DecisionCard key={index} decision={decisionsItem} />;
              })}
          </Slider>
        ) : (
          blurbs &&
          blurbs.map(function (decisionsItem, index) {
            return <DecisionCard key={index} decision={decisionsItem} />;
          })
        )}
      </section>
    </section>
  );
};

DecisionsPageTemplate.propTypes = {
  title: PropTypes.string,
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  alt: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
  // pdf: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const DecisionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("data from DecisionsPage ", data);
  console.log("frontmatter from DecisionsPage ", frontmatter);
  return (
    <Layout>
      <DecisionsPageTemplate blurbs={frontmatter.blurbs} />
    </Layout>
  );
};

DecisionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default DecisionsPage;

export const DecisionsPageQuery = graphql`
  query DecisionsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "decisions-page" } }) {
      frontmatter {
        blurbs {
          title
          alt
          description
          url
          link
        }
      }
    }
  }
`;
