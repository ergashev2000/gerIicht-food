import React from 'react';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import quotes from '../../../images/Chefs/“.png';
import signature from '../../../images/Chefs/Kevin Luo.svg';
import './ChefsSlider.scss';
import Title from '../../Title/Title';
import styles from './Chefs.module.scss';

export default function Chefs () {
  return (
    <section className={styles.chefs}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.image}>
            <Swiper
              direction={'vertical'}
              modules={[EffectCreative, Autoplay]}
              effect={'creative'}
              creativeEffect={{ prev: { shadow: false, translate: [0, 0, 0] }, next: { translate: [0, '-100%', 0] } }}
              slidesPerView={1}
              loop={true}
              allowTouchMove={false} // No finger swipe
              autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
              speed={1500}
              className={styles.chefsSlider}>
              <SwiperSlide>
                <Image src={require('../../../images/Chefs/01.jpg')} webp={require('../../../images/Chefs/01.webp')} alt="slide1" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={require('../../../images/Chefs/02.jpg')} webp={require('../../../images/Chefs/02.webp')} alt="slide2" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.contant}>
            <Title className={styles.chefsTitle} text="Chef’s Word" title="What we believe in" />
            <div className={styles.contantText}>
              <div className={styles.textTitle}>
                <img src={quotes} alt="quotes" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
              </div>
              <p className={styles.text}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            </div>
            <div className={styles.contantName}>
              <h6 className={styles.name}>Kevin Luo</h6>
              <p className={styles.position}>Chef & Founder</p>
            </div>
            <div className={styles.signature}>
              <img src={signature} alt="Kevin Luo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
