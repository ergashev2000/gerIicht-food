import React from 'react';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import styles from './HappyHours.module.scss';

export default function HappyHours () {
  return (
    <section className={styles.happyHours}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.title}>Happy Hours</h4>
          <p className={styles.text}>Monday - Friday (4:00 Pm - 7:00 pm)</p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          effect={'fade'}
          centeredSlides={true}
          autoplay={{ delay: 1500, stopOnLastSlide: false, disableOnInteraction: true }}
          speed={800}
          modules={[Autoplay, EffectFade]}
          loop={true}
          className={styles.happyHoursSwiper}>
          <SwiperSlide>
            <Image
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              src={require('../../../images/Page_Services/Happy_Hours/01.jpg')}
              webp={require('../../../images/Page_Services/Happy_Hours/01.webp')}
              alt="bar" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              src={require('../../../images/Page_Services/Happy_Hours/02.jpg')}
              webp={require('../../../images/Page_Services/Happy_Hours/02.webp')}
              alt="bar" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              src={require('../../../images/Page_Services/Happy_Hours/03.jpg')}
              webp={require('../../../images/Page_Services/Happy_Hours/03.webp')}
              alt="bar" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              src={require('../../../images/Page_Services/Happy_Hours/04.jpg')}
              webp={require('../../../images/Page_Services/Happy_Hours/04.webp')}
              alt="bar" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
