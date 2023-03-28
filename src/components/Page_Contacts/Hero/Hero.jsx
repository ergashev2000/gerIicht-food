import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon1 } from '../../../images/Page-contacts/Hero/icon.svg';
import styles from './Hero.module.scss';
import { GerichtContext } from './../../Context';

export default function Hero ({ title, page, page2 = undefined, page3 = undefined }) {
  const { ref } = useContext(GerichtContext);
  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.wrapperText}>
          <Link to="/" className={styles.text}>Home</Link>
          <Icon1 className={styles.icon} />
          <p className={styles.text}>{page}</p>
          {page2 ? <Icon1 className={styles.icon} /> : null}
          {page2 ? <p className={styles.text}>{page2}</p> : null}
          {page3 ? <Icon1 className={styles.icon} /> : null}
          {page3 ? <p className={styles.text}>{page3}</p> : null}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  page2: PropTypes.string,
  page3: PropTypes.string
};
