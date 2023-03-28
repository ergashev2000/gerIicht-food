import React from 'react';
import styles from './Form.module.scss';
import ChefsWordSlider from './../../Page_Home/ChefsWord/ChefsWordSlider';
import Button from './../../Button/Button';

export default function Form () {
  return (
    <section className={styles.form}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.contentForm}>
            <input className={styles.name} type="text" placeholder="Full Name" />
            <input className={styles.email} type="text" placeholder="Email Address" />
            <input className={styles.message} type="text" placeholder="Message" />
            <Button text="Subscribe" className={styles.contactsBtn} />
          </div>
          <div className={styles.slider}>
            <ChefsWordSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
