import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../../static/img/marteau.jpg";
import Picture2 from "../../static/img/plj.jpg";
import Picture3 from "../../static/img/justice.jpg";
import Picture4 from "../../static/img/law.jpg";
import Picture5 from "../../static/img/salle-tribunal.jpg";
import Picture6 from "../../static/img/tribunal.jpg";
import Picture7 from "../../static/img/palais-justice.jpg";
import "../style/ZoomParallax.scss";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                <img src={src} alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
