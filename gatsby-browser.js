import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./src/style/tw.css";

export const wrapPageElement = ({ element }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return <AnimatePresence>{element}</AnimatePresence>;
};
