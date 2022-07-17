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
      <div className={styles.banner_row}>
        <div className={styles.row_col}>
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
          className={styles.row_col}>
          <span className={styles.row_message}>
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </span>
        </motion.div>
      </div>
    );
  };

  const BannerRowBottom = ({ title }) => {
    return (
      <div className={`${styles.banner_row} ${styles.center}`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className={styles.scroll}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}>
            scroll
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}>
            down
          </motion.span>
        </motion.div>
        <AnimatedLetters title={title} />
      </div>
    );
  };
  
  const BannerRowCenter = ({ title, playMarquee }) => {
    return (
      <div className={`${styles.banner_row} ${styles.marquee}  ${playMarquee && styles.animate}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className={styles.marquee_inner}>
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} disabled />
        </motion.div>
      </div>
    );
  };

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setPlayMarquee(true);
        }, 2000);
      }, []);
    return (
        <motion.div className={styles.banner} variants={banner}>
          <BannerRowTop title={"brand"} />
          <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
          <BannerRowBottom title={"studio"} />
        </motion.div>
      );
}

export default Banner