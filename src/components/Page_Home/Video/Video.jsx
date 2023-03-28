import React from 'react';
import { ReactComponent as Play } from '../../../images/video/Play.svg';
import styles from './Video.module.scss';

export default function Video () {
  return (
    <section className={styles.video}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.play}>
            <Play />
          </div>
        </div>
      </div>
    </section>
  );
}
