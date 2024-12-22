import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerButton = ({ isOpen, color }) => {

  const lineVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    open: {
      rotate: 45,
      width: "1.2rem",
      y: 3.6,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, },
    },
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: {
      opacity: 1,
      transform: "translate(-10px, 0.1px)",
    },
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    open: {
      rotate: -45,
      width: "1.2rem",
      y: -3.6,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <button
        // onClick={toggleMenu}
        className="relative gap-1.5 flex flex-col justify-between items-center group"
      >
        <motion.span
        style={{backgroundColor : color}}
          className={`block w-8 h-1`}
          animate={isOpen ? "open" : "closed"}
          variants={lineVariants}
          transition={{duration : 0.3, delay : 0.1}}
        />
        <motion.span
        style={{backgroundColor : color}}
          className={`block w-8 h-1`}
          animate={isOpen ? "open" : "closed"}
          variants={line2Variants}
          transition={{duration : 0.3, delay : 0}}
        />
        <motion.span
        style={{backgroundColor : color}}
          className={`block w-8 h-1`}
          animate={isOpen ? "open" : "closed"}
          variants={line3Variants}
          transition={{duration : 0.3, delay : 0.1}}
        />
      </button>
    </div>
  );
};

export default HamburgerButton;
