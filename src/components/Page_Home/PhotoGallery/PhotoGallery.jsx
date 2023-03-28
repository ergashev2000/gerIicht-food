import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'react-image-webp';
import Button from '../../Button/Button';
import Title from '../../Title/Title';
import styles from './PhotoGallery.module.scss';
import './GallerySlider.scss';

export default function PhotoGallery () {
  return (
    <section className={styles.photoGallery}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <Title className={styles.galleryTitle} text="Instagram" title="Photo Gallery" />
            <div className={styles.contentText}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            </div>
            <div className={styles.galleryButton}>
              <Button className={styles.galleryBtn} text="View More" />
            </div>

          </div>
          <div className={styles.gallery}>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
              speed={1500}
              slidesPerView={1}
              spaceBetween={32}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1
                },
                540: {
                  slidesPerView: 2
                },
                996: {
                  slidesPerView: 3
                },
                1280: {
                  slidesPerView: 5.3
                }
              }}
              className="gallery-slider">
              <SwiperSlide>
                <Image className={styles.sliderImg} src={require('../../../images/Gallery/01.jpg')} webp={require('../../../images/Gallery/01.webp')} alt="slider" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={styles.sliderImg} src={require('../../../images/Gallery/02.jpg')} webp={require('../../../images/Gallery/02.webp')} alt="slider" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={styles.sliderImg} src={require('../../../images/Gallery/03.jpg')} webp={require('../../../images/Gallery/03.webp')} alt="slider" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={styles.sliderImg} src={require('../../../images/Gallery/04.jpg')} webp={require('../../../images/Gallery/04.webp')} alt="slider" />
              </SwiperSlide>
              <SwiperSlide>
                <Image className={styles.sliderImg} src={require('../../../images/Gallery/05.jpg')} webp={require('../../../images/Gallery/05.webp')} alt="slider" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  );
}
