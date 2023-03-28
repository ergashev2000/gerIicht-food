import React, { useContext } from 'react';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper';
import styled from 'styled-components';
import logo from '../../../images/Hero/iconLogo.svg';
import Button from '../../Button/Button';
import styles from './Hero.module.scss';
import 'swiper/css';
import { GerichtContext } from './../../Context';

const Wrapper = styled.div`
  flex: 0 1 50%;
  display: grid;
  align-items: center;
  justify-content: start;
  position: relative;

   @media screen and (max-width:992px) {
    place-content: center;
   }

  .hero__slider{
    max-height: 51.75rem;
    position: relative;
    padding-bottom: 5.75rem;

     @media screen and (max-width:768px) {
      width: 80vw;
      max-height: 100vw;
     }

    &::after,
    &::before {
      content: '';
      width: 68%;
      height: 55%;
      background: #dcca87;
      position: absolute;
      z-index: 0;
    }

    &::after {
      right: 0;
      top: 0;
      z-index: -1;
    }

    &::before {
      left: 0;
      bottom: 5.625rem;
    }
  }

  .hero__slide{
    max-width: 38.6875rem;
    padding: 1.5rem;
    position: relative;
    transform: translateX(0.625rem);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default function Hero () {
  const { ref } = useContext(GerichtContext);
  const pagination = {
    type: 'fraction',
    clickable: true,
    renderFraction: function (currentClass, totalClass) {
      return '0<span class="' + currentClass + '"></span>' + ' - 0' + '<span class="' + totalClass + '"></span>';
    }
  };

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.contant}>
            <div className={styles.logo}>
              <p className={styles.logoText}>Chase the new Flavour</p>
              <div className={styles.logoImg}><img src={logo} alt="logo" /></div>
            </div>
            <h2 className={styles.title}>The key to Fine dining</h2>
            <p className={styles.text}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <Button text="Explore Menu" anchor="/#today" />
          </div>
          <Wrapper>
            <Swiper
              className="hero__slider"
              direction={'vertical'}
              // centeredSlides={true}
              modules={[Pagination, EffectCreative, Autoplay, Navigation]}
              effect={'creative'}
              creativeEffect={{
                prev: { shadow: false, translate: [0, 0, 0] },
                next: { translate: [0, '-100%', 0] }
              }}
              spaceBetween={50} // indent between sliders
              slidesPerView={1} // number of sliders
              pagination={pagination}
              loop={true} // infinity
              allowTouchMove={false} // No finger swipe
              autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
              speed={1500}>
              <SwiperSlide className="hero__slide">
                <Image src={require('../../../images/Hero/slide1.jpg')} webp={require('../../../images/Hero/slide1.webp')} alt="slide1" />
              </SwiperSlide>
              <SwiperSlide className="hero__slide">
                <Image src={require('../../../images/Hero/slide2.jpg')} webp={require('../../../images/Hero/slide2.webp')} alt="slide2" />
              </SwiperSlide>
              <SwiperSlide className="hero__slide">
                <Image src={require('../../../images/Hero/slide3.jpg')} webp={require('../../../images/Hero/slide3.webp')} alt="slide3" />
              </SwiperSlide>
            </Swiper>
            <span className={styles.scroll}>Scroll</span>
          </Wrapper>
        </div>
      </div>
    </section >
  );
}
