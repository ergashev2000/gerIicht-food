import React from 'react';
import styles from './About.module.scss';
import Title from './../../Title/Title';
import Button from './../../Button/Button';

export default function About () {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.title}>
            <Title text="Serving Quality" title="We at Gericth are serving our customers for over a decade." />
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          </div>
          <div className={styles.buttons}>
            <Button text="Read More" />
            <Button text="Contact Us" link="/contacts" className={ styles.aboutBtn} />
          </div>
        </div>
      </div>
    </section>
  );
}
