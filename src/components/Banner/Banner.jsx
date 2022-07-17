import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from './Banner.module.css'

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

  const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
      className={styles.row_title}
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'>
      {[...title].map((letter) => (
        <motion.span
          className={styles.row_letter}
          variants={disabled ? null : letterAni}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );

  const BannerRowTop = ({ title }) => {
    return (
      <div className={"banner-row"}>
        <div className='row-col'>
          <AnimatedLetters title={title} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className='row-col'>
          <span className='row-message'>
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </span>
        </motion.div>
      </div>
    );
  };
  

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

  return (
    <div>Banner</div>
  )
}

export default Banner