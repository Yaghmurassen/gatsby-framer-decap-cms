import React, { useEffect, useRef, useInsertionEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Script, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import {
  motion,
  useViewportScroll,
  useTransform,
  useInView,
} from 'framer-motion';
import { Reveal } from '../components/utils/Reveal';
import Layout from '../components/Layout';
import Adresse from '../components/Adresse';
import '../style/tw-custom.scss';

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
  const heroImage = getImage(heroImg);
  const heroImage2 = getImage(heroImg2);
  const bckgRef = useRef();
  const heroRef = useRef(null);
  const categoryRef = useRef();

  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.5], [1, 6]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 1.5]);
  const translateY = useTransform(scrollYProgress, [10, 0.6], ['100%', 100]);

  // const [isInView, setIsInView] = useState(false);

  // const isInView = useInView(heroRef, { once: false, amount: 0.5 }); // Déclenche si au moins 50% est visible

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsInView(true);
  //       } else {
  //         setIsInView(false); // Remet à false pour rejouer l'animation
  //       }
  //     },
  //     {
  //       root: null, // Observe par rapport à la fenêtre
  //       rootMargin: '0px',
  //       threshold: 0.3, // Déclenche quand 30% est visible
  //     }
  //   );
  //   if (heroRef.current) observer.observe(heroRef.current);

  //   return () => {
  //     if (heroRef.current) observer.unobserve(heroRef.current);
  //   };
  // }, [isInView]);

  // max-w-[calc(100%-80px)] max-w-[calc(100%-290px)]
  return (
    <div className="lg:max-w-[calc(100%-290px)] ml-auto max-lg:px-4 lg:px-20">
      {/* <section className="hero">
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
              maxWidth: '100%',
              backgroundColor: 'transparent',
            }}
          />
        </motion.div>

        <div className="hero__cnt">
          <h1 className="max-xs:text-2xl xs-md:text-3xl md:text-5xl max-xs:px-12 max-md:px-4 md:px-16 md:py-4 ">
            {title}
          </h1>
        </div>
      </section> */}
      <section className="hero mt-20">
        <motion.div
          initial={{
            clipPath: 'polygon(0px 0px, 0px 100%, 0% 100%, 0% 0px)',
          }}
          animate={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          key={heroImage2}
          className="overflow-hidden"
          ref={heroRef}
        >
          <motion.div
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <GatsbyImage
              image={heroImage2}
              alt="hero Img"
              imgStyle={{
                maxWidth: '100%',
                backgroundColor: 'transparent',
                overflow: 'hidden',
              }}
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="container-fluid presentation">
        <Reveal>
          <div className="grid items-center profil-img">
            {/* <GatsbyImage
              image={heroImage2}
              alt="profil Img"
              imgStyle={{
                objectFit: 'contain',
                backgroundColor: 'none',
              }}
            /> */}

            <div className="presentation">
              {/* <h1 className="title text-4xl xs-md:text-2xl max-xs:text-xl max-xs:leading-none font-bold mb-12 max-xs:mb-6 max-xs:mt-8">
                {intro.heading}
              </h1> */}
              <p>{intro.d1}</p>
              <p>{intro.d2}</p>
              <p>{intro.d3}</p>
              <p>{intro.d4}</p>
            </div>
          </div>
        </Reveal>
      </section>
      <p className="border-none h-[2px] bg-black w-4/5 m-auto"></p>
      <section className="container-fluid text-center card-glass items-center">
        <div className="mainpitch text-base text-justify">
          {/* <h1 className="title text-4xl xs-md:text-2xl max-xs:text-xl max-xs:leading-none font-bold mb-12 max-xs:mb-6">
            {mainpitch.title}
          </h1> */}
          <p>{mainpitch.c1}</p>
          <p>{mainpitch.c2}</p>
          <p>{mainpitch.c3}</p>
          <p>{mainpitch.c4}</p>
          <p>{mainpitch.description}</p>
        </div>
      </section>
      <section className="container-fluid text-center mt-24">
        <motion.div
          ref={categoryRef}
          style={{ translateY }}
          className="category grid grid-cols-2 gap-14 mb-24 max-md:grid-cols-1"
        >
          {intro.blurbs.map((category) => (
            <div key={category.title}>
              {/* <GatsbyImage
                image={getImage(category.image)}
                alt="category Img"
                imgStyle={{
                  objectFit: 'contain',
                  backgroundColor: 'none',
                }}
              /> */}
              <h3 className="font-bold">{category.title}</h3>
              <ul>
                {category?.competences.map((competence) => (
                  <li key={competence}>{competence}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>
      <Adresse />
      {/* <Features gridItems={intro.blurbs} />
        <Link className="btn" to="/products">
          See all products
        </Link>
        <BlogRoll /> */}
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
              gatsbyImageData(width: 800, layout: CONSTRAINED)
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
                gatsbyImageData(width: 600, layout: CONSTRAINED)
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
