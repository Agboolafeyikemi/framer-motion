import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box2() {
  const [isAnimating, setIsAnimating] = useState();
  return (
    <div className="box-container">
      <motion.div
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
        className="box"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      ></motion.div>
    </div>
  );
}
