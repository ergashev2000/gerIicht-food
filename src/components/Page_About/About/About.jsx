import React from 'react';
import { ReactComponent as Play } from '../../../images/video/Play.svg';
import styles from './About.module.scss';
import Title from './../../Title/Title';

export default function About () {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.title}>
            <Title text="About Us" title="Happy Hours with Us" />
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          </div>
          <div className={styles.video}>
            <div className={styles.play}>
              <Play />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
