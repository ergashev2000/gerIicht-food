import React from 'react';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width : 100%;
  position: relative;

   &::before {
    width: 75%;
    height: 55%;
    content: '';
    background-image: url('../../../images/ChefsWord/G.png');
    background-size: 100% 100%;
    position: absolute;
    left: -16%;
    bottom: 0;
    z-index: 5;
  }

  .chefsWordSlider{
    height: 100%; 
    width : 100%;
  }

  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default function ChefsWordSlider () {
  return (
    <Wrapper>
      <Swiper
        modules={[EffectCreative, Autoplay]}
        effect={'creative'}
        creativeEffect={{ prev: { shadow: false, translate: [0, 0, 0] }, next: { translate: ['100%', 0, 0] } }}
        slidesPerView={1}
        loop={true}
        allowTouchMove={false} // No finger swipe
        autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
        speed={1500}
        className="chefsWordSlider">
        <SwiperSlide>
          <Image src={require('../../../images/ChefsWord/01.jpg')} webp={require('../../../images/ChefsWord/01.webp')} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={require('../../../images/ChefsWord/02.jpg')} webp={require('../../../images/ChefsWord/02.webp')} alt="slide2" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}
