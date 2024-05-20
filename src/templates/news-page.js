import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import DecisionCard from "../components/DecisionCard";
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
  // const [showDecision, setShowDecision] = useState(false);

  const decisions = [
    {
      title:
        "Poitiers : accusé de viol sur personne vulnérable, un chauffeur de taxi remis en liberté",
      img: "https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/64ca891c00852afb4c8b45c6.jpg",
      alt: "illustration article Poitiers",
      description:
        "Âgé de 57 ans, un chauffeur de taxi est mis en examen pour viol sur personne vulnérable depuis juillet 2022. Il était en détention provisoire depuis un an. Il a été remis en liberté, ce mardi 1er août 2023.",
      url: "https://www.lanouvellerepublique.fr/poitiers/poitiers-accuse-de-viol-sur-personne-vulnerable-un-chauffeur-de-taxi-remis-en-liberte",
      link: "https://www.lanouvellerepublique.fr",
      pdf: "/img/cv24.pdf",
    },
    {
      title:
        "Violences sexuelles : le premier procès de la cour criminelle départementale de Tulle annulé et reporté",
      img: "/img/plj-fr3.jpg",
      alt: "illustration article Tulle",
      description:
        "Coup de théâtre au procès d'un homme poursuivi pour viols et agressions sexuelles sur mineurs. Le verdict était attendu ce vendredi 7 avril devant la cour criminelle de Corrèze à Tulle. Un procès annulé et reporté concernant des faits qui se seraient déroulés en 2019 en relation avec un club de patinage de Brive.",
      url: "https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/correze/tulle/violences-sexuelles-le-premier-proces-de-la-cour-criminelle-departementale-de-tulle-annule-et-reporte-2749198.html",
      link: "https://france3-regions.francetvinfo.fr/",
      pdf: "/img/cv24.pdf",
    },
    {
      title:
        "Trafic de drogue : à Poitiers, la justice éteint le « four » de la rue de Slovénie",
      img: "/img/drogue-poitiers.webp",
      alt: "illustration article Poitiers Drogue",
      description:
        "Les six principaux acteurs d’un trafic de drogue démantelé début décembre rue de Slovénie à Poitiers ont été condamnés ce mercredi 18 janvier 2023. Trois sont maintenus en détention. La drogue irrigue Poitiers. Même le préfet de la Vienne en convient très ouvertement à la surprise de certains.",
      url: "https://www.lanouvellerepublique.fr/poitiers/trafic-de-drogue-a-poitiers-la-justice-eteint-le-four-de-la-rue-de-slovenie",
      link: "https://www.lanouvellerepublique.fr",
      pdf: "/img/cv24.pdf",
    },
  ];

  console.log("decisions ", decisions);

  return (
    <section className="container-fluid !flex-col">
      <h1 className="section-title">Décisions</h1>
      <h2 className="text-xl mb-4 font-medium uppercase italic">
        La presse en parle
      </h2>
      <section>
        {decisions.map(function (decisionItem, index) {
          return <DecisionCard decision={decisionItem} />;
        })}
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
