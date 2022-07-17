import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  
const Banner = () => {
  return (
    <div>Banner</div>
  )
}

export default Banner