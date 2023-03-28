import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import Title from '../../Title/Title';
import { testimonyBD } from '../../TextsDB';
import styles from './Testimony.module.scss';

const animation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 }
  })
};

export default function Testimony () {
  return (
    <section className={styles.testimony}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <Title text="Testimony" title="Happy customers" />
          <div className={styles.contant}>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.05, once: true }}
              className={styles.contantList}>
              {testimonyBD.map((el, i) =>
                <MTestimonyItem
                  custom={i + 1}
                  variants={animation}
                  key={Math.random() * 10}
                  photo={el.photo}
                  photoWebp={el.photoWebp}
                  text={el.text}
                  author={el.author}
                  position={el.position}
                />)}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonyItem = forwardRef(({ photo, photoWebp, text, author, position }, ref) => (
  <li className={styles.contantItem} ref={ref}>
    <div className={styles.itemPhoto}>
      {isWebpSupported()
        ? <img src={photoWebp} alt="author" />
        : <img src={photo} alt="author" />}
    </div>
    <div className={styles.itemContant}>
      <p className={styles.itemText}>{text}</p>
      <h4 className={styles.itemAuthor}>{author}</h4>
      <p className={styles.itemPosition}>{position}</p>
    </div>
  </li>
));

TestimonyItem.displayName = 'TestimonyItem';

TestimonyItem.propTypes = {
  photo: PropTypes.string.isRequired,
  photoWebp: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

const MTestimonyItem = motion(TestimonyItem);
