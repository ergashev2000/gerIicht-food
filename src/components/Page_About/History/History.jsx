import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Image from 'react-image-webp';
import Icon from '../../../images/Hero/iconLogo.svg';
import styles from './History.module.scss';
import Title from './../../Title/Title';

export default function History () {
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
    <section className={styles.history}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.historyTitle}>
            <Title text="Our History" title="serving customers for over a decade" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.historyContent}>
            <motion.div
              variants={animatedLeft}
              className={styles.contentLeft}>
              <div className={styles.leftText}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
              </div>
              <div className={styles.leftImg}>
                <Image
                  src={require('../../../images/Page-About/History/01.jpg')}
                  webp={require('../../../images/Page-About/History/01.webp')}
                  alt="Our History" />
              </div>
            </motion.div>
            <motion.div
              variants={animatedRight}
              className={styles.contentRight}>
              <div className={styles.rightImg}>
                <Image
                  src={require('../../../images/Page-About/History/02.jpg')}
                  webp={require('../../../images/Page-About/History/02.webp')}
                  alt="Our History" />
              </div>
              <div className={styles.rightContent}>
                <h3 className={styles.rightTitle}>Over the years</h3>
                <ul className={styles.rightList}>
                  <Item number="30+" text="Breakfast Options" />
                  <Item number="50+" text="Dinner Options" />
                  <Item number="8" text="New Locations" />
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Item = ({ number, text }) => (
  <li className={styles.rightItem}>
    <p className={styles.itemNumber}>{number}</p>
    <div className={styles.itemIcon}>
      <img src={Icon} alt="logo" />
    </div>
    <p className={styles.itemText}>{text}</p>
  </li>
);

Item.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
