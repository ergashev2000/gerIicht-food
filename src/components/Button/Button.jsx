import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string,
  anchor: PropTypes.string
};
export default function Button ({ text, className = false, link = false, anchor = false }) {
  return (
    <button className={className ? `${styles.button} ${className}` : `${styles.button}`}>
      {anchor && <a href={anchor}>{text}</a>}
      {link && <Link to={link}>{text}</Link>}
      {!link && !anchor && <Link to="/">{text}</Link>}
    </button>
  );
}
