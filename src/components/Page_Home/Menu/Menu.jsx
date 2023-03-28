import React from 'react';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import styled from 'styled-components';
import styles from './Menu.module.scss';
import 'swiper/css/effect-fade';

const Wrapper = styled.div`
.swiper {
    height: 100%;
  }

  .swiper-pagination {
    position: absolute;
    left: 1.625rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    z-index: 10;

    @media screen and (max-width:480px) {
      row-gap: 2rem;
    }
  }

  .swiper-pagination-bullet {
    display: flex;
    font-family: 'Cormorant Upright';
    font-weight: 600;
    font-size: 4rem;
    line-height: 130%;
    letter-spacing: 0.03em;
    color: #fff;

    @media screen and (max-width:480px) {
      font-size:2.5rem;
    }
  }

  .swiper-pagination-bullet-active {
    text-decoration: underline;
    text-underline-offset: 0.625rem;
  }
`;

export default function Menu () {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className, text = ['Bar Menu', 'Desserts Menu', 'Food Menu']) {
      return '<span class="' + className + '">' + (text[index]) + '</span>';
    }
  };

  return (
    <section className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.bgIcon}></div>
        <Wrapper>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            effect={'fade'}
            centeredSlides={true}
            autoplay={{ delay: 1500, stopOnLastSlide: false, disableOnInteraction: true }}
            speed={800}
            pagination={pagination}
            modules={[Autoplay, EffectFade, Pagination]}
            loop={true}
            className={styles.menuSwiper}>
            <SwiperSlide className={styles.wrapperImg}>
              <Image src={require('../../../images/Menu/bar.jpg')} webp={require('../../../images/Menu/bar.webp')} alt="bar" />
            </SwiperSlide>
            <SwiperSlide className={styles.wrapperImg}>
              <Image src={require('../../../images/Menu/desert.jpg')} webp={require('../../../images/Menu/desert.webp')} alt="desert" />
            </SwiperSlide>
            <SwiperSlide className={styles.wrapperImg}>
              <Image src={require('../../../images/Menu/food.jpg')} webp={require('../../../images/Menu/food.webp')} alt="food" />
            </SwiperSlide>
          </Swiper>
        </Wrapper>
      </div>
    </section>
  );
}
