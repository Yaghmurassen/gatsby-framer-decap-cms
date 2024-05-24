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
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line

export const NewsPageTemplate = (blurbs) => {
  // const [showDecision, setShowDecision] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const decisionList = Object.values(blurbs).map(function (blbs, i) {
  //   return blbs.map((decision, i) => Array.of(decision).map((d, i) => d));
  // });

  const decisionList = Object.values(blurbs).map(function (blbs, i) {
    return blbs;
  });

  console.log("decisionList ", decisionList);

  // const decisions = [
  //   {
  //     title:
  //       "Poitiers : accusé de viol sur personne vulnérable, un chauffeur de taxi remis en liberté",
  //     img: "https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/64ca891c00852afb4c8b45c6.jpg",
  //     alt: "illustration article Poitiers",
  //     description:
  //       "Âgé de 57 ans, un chauffeur de taxi est mis en examen pour viol sur personne vulnérable depuis juillet 2022. Il était en détention provisoire depuis un an. Il a été remis en liberté, ce mardi 1er août 2023.",
  //     url: "https://www.lanouvellerepublique.fr/poitiers/poitiers-accuse-de-viol-sur-personne-vulnerable-un-chauffeur-de-taxi-remis-en-liberte",
  //     link: "https://www.lanouvellerepublique.fr",
  //     pdf: "/img/cv24.pdf",
  //   },
  //   {
  //     title:
  //       "Violences sexuelles : le premier procès de la cour criminelle départementale de Tulle annulé et reporté",
  //     img: "/img/plj-fr3.jpg",
  //     alt: "illustration article Tulle",
  //     description:
  //       "Coup de théâtre au procès d'un homme poursuivi pour viols et agressions sexuelles sur mineurs. Le verdict était attendu ce vendredi 7 avril devant la cour criminelle de Corrèze à Tulle. Un procès annulé et reporté concernant des faits qui se seraient déroulés en 2019 en relation avec un club de patinage de Brive.",
  //     url: "https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/correze/tulle/violences-sexuelles-le-premier-proces-de-la-cour-criminelle-departementale-de-tulle-annule-et-reporte-2749198.html",
  //     link: "https://france3-regions.francetvinfo.fr/",
  //     pdf: "/img/cv24.pdf",
  //   },
  //   {
  //     title:
  //       "Trafic de drogue : à Poitiers, la justice éteint le « four » de la rue de Slovénie",
  //     img: "/img/drogue-poitiers.webp",
  //     alt: "illustration article Poitiers Drogue",
  //     description:
  //       "Les six principaux acteurs d’un trafic de drogue démantelé début décembre rue de Slovénie à Poitiers ont été condamnés ce mercredi 18 janvier 2023. Trois sont maintenus en détention. La drogue irrigue Poitiers. Même le préfet de la Vienne en convient très ouvertement à la surprise de certains.",
  //     url: "https://www.lanouvellerepublique.fr/poitiers/trafic-de-drogue-a-poitiers-la-justice-eteint-le-four-de-la-rue-de-slovenie",
  //     link: "https://www.lanouvellerepublique.fr",
  //     pdf: "/img/cv24.pdf",
  //   },
  // ];

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
      <h2 className="text-xl mb-4 font-medium uppercase italic">
        La presse en parle
      </h2>
      <section>
        {isMobile ? (
          <Slider {...settings}>
            {decisionList &&
              decisionList.map(function (decisionItem) {
                return decisionItem.map((dI, i) => {
                  return <DecisionCard key={i} decision={dI} />;
                });
              })}
          </Slider>
        ) : (
          decisionList &&
          decisionList.map(function (decisionItem) {
            return decisionItem.map((dI, i) => {
              return <DecisionCard key={i} decision={dI} />;
            });
          })
        )}
      </section>
      {/* <section>
        {isMobile ? (
          <Slider {...settings}>
            {decisions.map(function (decisionItem, index) {
              return <DecisionCard key={index} decision={decisionItem} />;
            })}
          </Slider>
        ) : (
          decisions.map(function (decisionItem, index) {
            return <DecisionCard key={index} decision={decisionItem} />;
          })
        )}
      </section> */}
      {/* <section>
        {isMobile ? (
          <Slider {...settings}>
            {blurbs &&
              Object.values(blurbs)[0].forEach(function (decisionItem, index) {
                return <DecisionCard key={index} decision={decisionItem} />;
              })}
          </Slider>
        ) : (
          blurbs &&
          Object.values(blurbs)[0].forEach(function (decisionItem, index) {
            return <DecisionCard key={index} decision={decisionItem} />;
          })
        )}
      </section> */}
    </section>
  );
};

NewsPageTemplate.propTypes = {
  title: PropTypes.string,
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  alt: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
  // pdf: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const NewsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("frontmatter from NewsPage ", frontmatter);
  return (
    <Layout>
      <NewsPageTemplate blurbs={frontmatter.blurbs} />
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
  query NewsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        blurbs {
          title
          # image {
          #   childImageSharp {
          #     gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          #   }
          # }
          alt
          description
          url
          link
          # pdf {
          #   childImageSharp {
          #     gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          #   }
          # }
        }
      }
    }
  }
`;
