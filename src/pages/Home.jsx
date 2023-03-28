import React from 'react';
import Hero from '../components/Page_Home/Hero/Hero';
import About from '../components/Page_Home/About/About';
import Reservation from '../components/Page_Home/Reservation/Reservation';
import Menu from '../components/Page_Home/Menu/Menu';
import Today from '../components/Page_Home/Today/Today';
import Chefs from '../components/Page_Home/Chefs/Chefs';
import Testimony from '../components/Page_Home/Testimony/Testimony';
import Video from '../components/Page_Home/Video/Video';
import ChefsWord from '../components/Page_Home/ChefsWord/ChefsWord';
import Blog from '../components/Page_Home/Blog/Blog';
import PhotoGallery from '../components/Page_Home/PhotoGallery/PhotoGallery';

export default function Home () {
  return (
    <article>
      <Hero />
      <About />
      <Reservation />
      <Menu />
      <Today />
      <Chefs />
      <Testimony />
      <Video />
      <ChefsWord />
      <Blog />
      <PhotoGallery />
    </article>
  );
}
