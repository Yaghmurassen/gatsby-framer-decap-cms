import { useElementScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import Picture1 from "../../static/img/1.jpeg";
import Picture2 from "../../static/img/2.jpeg";
import Picture3 from "../../static/img/3.jpg";
import Picture4 from "../../static/img/4.jpg";
import Picture5 from "../../static/img/5.jpg";
import Picture6 from "../../static/img/6.jpg";
import Picture7 from "../../static/img/7.jpeg";

import "../style/ZoomParallax.scss";

export default function ZoomParallax() {
  const container = useRef();
  const { scrollYProgress } = useElementScroll(container);

  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale2,
    },
    {
      src: Picture2,
      scale: scale3,
    },
    {
      src: Picture3,
      scale: scale4,
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
      scale: scale7,
    },
    {
      src: Picture7,
      scale: scale8,
    },
  ];

  return (
    <div ref={container} className="container_parallax">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                <img src={src} fill="true" alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
