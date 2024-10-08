import React from "react";
import { AnimatePresence } from "framer-motion";
import "./src/style/tw.css";

export const wrapPageElement = ({ element }) => {
  console.log("salut je suis partout ======= ", element);
  return <AnimatePresence>{element}</AnimatePresence>;
};
