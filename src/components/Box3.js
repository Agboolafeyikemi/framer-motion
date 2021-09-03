import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box3() {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate="visible"
        initial="hidden"
        variants={boxVariant}
      >
        {[1, 2, 3].map((box, index) => {
          return (
            <motion.li
              className="boxItem"
              variants={listVariant}
              key={index}
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}
