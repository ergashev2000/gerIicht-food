import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from '../../Button/Button';
import Title from '../../Title/Title';
import { wine, cocktails } from '../../TextsDB';
import styles from './Today.module.scss';

export default function Today () {
  const animatedLeft = {
    hidden: {
      x: '-100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0, duration: 0.8 }
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
      transition: { delay: 0, duration: 0.8 }
    }
  };

  return (
    <section id="today" className={styles.today}>
      <div className="container">
        <div className={styles.container}>
          <Title text="Menu that fits you palatte" title="Today’s Special" />
          <div className={styles.contant}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              className={styles.wine}>
              <motion.h4
                variants={animatedLeft}
                className={styles.wineTitle}>Wine & Beer</motion.h4>
              <motion.ul
                variants={animatedLeft}
                className={styles.wineList}>
                {wine.map(i =>
                  <ItemMenu
                    key={Math.random() * 10}
                    name={i.name}
                    composition={i.composition}
                    price={i.price}
                    styles={styles}
                  />)}
              </motion.ul>
            </motion.div>
            <div className={styles.image}></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              className={styles.cocktails}>
              <motion.h4
                variants={animatedRight}
                className={styles.cocktailsTitle}>Cocktails</motion.h4>
              <motion.ul
                variants={animatedRight}
                className={styles.cocktailsList}>
                {cocktails.map(i =>
                  <ItemMenu
                    key={Math.random() * 10}
                    name={i.name}
                    composition={i.composition}
                    price={i.price}
                  />)}
              </motion.ul>
            </motion.div>
          </div>
          <div className={styles.button}>
            <Button text="View More" />
          </div>
        </div>
      </div>
    </section>
  );
}

const ItemMenu = ({ name, composition, price }) => (
  <li className={styles.wrapperItem}>
    <div className={styles.ItemTitle}>
      <h6 className={styles.name}>{name}</h6>
      <p className={styles.price}>{price}</p>
    </div>
    <p className={styles.composition}>{composition}</p>
  </li>
);

ItemMenu.propTypes = {
  name: PropTypes.string.isRequired,
  composition: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
