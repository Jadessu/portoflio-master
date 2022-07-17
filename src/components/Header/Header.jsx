import styles from './Header.module.css'
import { motion } from "framer-motion";
const Header = () => {
    return (
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.6,
          }}
          className={styles.header}>
          <div className={styles.header_inner}>
            <div className={styles.logo}>Ollie</div>
            <nav className={styles.nav}>
              <li>
                <a href='/design'>Design</a>
              </li>
              <li>
                <a href='/strategy'>Strategy</a>
              </li>
              <li>
                <a href='/cases'>Cases</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/why'>Why work with us?</a>
              </li>
            </nav>
            <div className={styles.contact}>
              <a href='/contact'>Let's work together</a>
            </div>
            <div className={styles.hamburger_menu}>
              <span></span>
              <span></span>
            </div>
          </div>
        </motion.div>
      );
}

export default Header