import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../Button/Button';
import logo from '../../../images/Hero/iconLogo.svg';
import styles from './About.module.scss';

export default function About () {
  const animatedLeft = {
    hidden: {
      x: '-100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const animatedRight = {
    hidden: {
      x: '100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  return (
    <section className={styles.about}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className={styles.container}>
          <motion.div
            variants={animatedLeft}
            className={styles.aboutUs}>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.text}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            </div>
            <Button text="Know More" link="about" />
          </motion.div>
          <motion.div
            variants={animatedRight}
            className={styles.history}>
            <h2 className={styles.title}>Our History</h2>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.text}>
              <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            </div>
            <Button text="Know More" link="history" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
