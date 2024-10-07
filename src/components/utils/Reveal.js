import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

// interface Props {
//     children: JSX.Element;
//     width?: "fit-content" | "100%";
// }

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log("useInView ::: ", isInView);
    // Fire the animation
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Overlay background color */}
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "white",
          zIndex: 20,
        }}
      /> */}
    </div>
  );
};
