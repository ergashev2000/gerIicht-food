import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/Hero/iconLogo.svg';
import styles from './Title.module.scss';

export default function Title ({ text, className, title }) {
  return (
    <div className={className ? `${className} ${styles.title}` : `${styles.title}`}>
      <p>{text}</p>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
