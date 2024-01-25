import React from "react";
import { AnimatePresence } from "framer-motion";
import "./src/style/tw.css";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence>{element}</AnimatePresence>
);
