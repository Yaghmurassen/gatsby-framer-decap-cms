import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../style/framerGpt.scss"; // Assurez-vous d'ajouter les styles dans un fichier CSS

const FramerGpt = () => {
  const { scrollYProgress } = useViewportScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Parallaxe pour le premier élément
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]); // Parallaxe pour le deuxième élément

  return (
    <div className="landing-page">
      <motion.div
        className="hero-section"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(75% at 50% 50%)" }}
        transition={{ duration: 1.5 }}
      >
        <h1>Bienvenue sur ma Landing Page</h1>
        <p>Explorez les animations et les effets de parallaxe.</p>
      </motion.div>

      <motion.div className="parallax-section" style={{ y: y1 }}>
        <motion.img
          src="/img/1.jpg"
          alt="Image 1"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </motion.div>

      <motion.div className="parallax-section" style={{ y: y2 }}>
        <motion.img
          src="/img/2.jpg"
          alt="Image 2"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 10 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </motion.div>

      <footer className="footer-section">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Merci de votre visite !</h2>
          <p>Revenez nous voir bientôt.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default FramerGpt;
