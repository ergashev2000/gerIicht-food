import React, { useContext } from 'react';
import Title from '../Title/Title';
import logo from '../../images/Hero/iconLogo.svg';
import { ReactComponent as Icon1 } from '../../images/Footer/icon01.svg';
import { ReactComponent as Icon2 } from '../../images/Footer/icon02.svg';
import { ReactComponent as Icon3 } from '../../images/Footer/icon03.svg';
import styles from './Footer.module.scss';
import { GerichtContext } from './../Context';

export default function Footer () {
  const { ref, setOpenMenu } = useContext(GerichtContext);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className={styles.footer} onClick={() => setOpenMenu(false)}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <a className={styles.toTop} onClick={handleClick}>Top</a>
          <div className={styles.newsletter}>
            <Title className={styles.footerTitle} text="Newsletter" title="Subscribe to Our Newsletter" />
            <div className={styles.newsletterText}>
              <p>And never miss latest Updates!</p>
            </div>
            <form className={styles.subscribe} name="subscribe" data-netlify="true" method="POST">
              <input type="hidden" name="form-name" value="subscribe" />
              <input type="text" name="email" placeholder="Email Address" className={styles.subscribeInput} required />
              <button type="submit" className="btn__submit">Subscribe</button>
            </form>
          </div>
          <div className={styles.content}>
            <div className={styles.contacts}>
              <h4 className={styles.contactsTitle}>Contact Us</h4>
              <p className={styles.contactsText}>9 W 53rd St, New York, NY 10019, USA</p>
              <a className={styles.contactsPhone} href="tel:+12123441230">+1 212-344-1230</a>
              <a className={styles.contactsPhone} href="tel:+12125551230">+1 212-555-1230</a>
            </div>
            <div className={styles.contentLogo}>
              <h2 className={styles.logoTitle}>Gerícht</h2>
              <p className={styles.logoText}><q>The best way to find yourself is to lose yourself in the service of others.</q></p>
              <div className={styles.logoImg}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styles.logoIcons}>
                <Icon1 />
                <Icon2 />
                <Icon3 />
              </div>
            </div>
            <div className={styles.schedule}>
              <h4 className={styles.scheduleTitle}>Working Hours</h4>
              <p className={styles.weekdays}>Monday-Friday:</p>
              <p className={styles.businessHours}>08:00 am -12:00 am</p>
              <p className={styles.weekdays}>Saturday-Sunday:</p>
              <p className={styles.businessHours}>07:00am -11:00 pm</p>
            </div>
          </div>
          <div className={styles.footerText}>
            <p>2021 Gerícht. All Rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
