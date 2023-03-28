import React from 'react';
import Hero from '../components/Page_Contacts/Hero/Hero';
import PhotoGallery from '../components/Page_Home/PhotoGallery/PhotoGallery';
import Testimony from '../components/Page_Home/Testimony/Testimony';
import Chefs from '../components/Page_Home/Chefs/Chefs';
import History from '../components/Page_About/History/History';
import About from '../components/Page_About/About/About';

export default function AboutUs () {
  return (
    <article>
      <Hero title="Welcome to Gerícht" page="About Us" />
      <History />
      <About />
      <Chefs />
      <Testimony />
      <PhotoGallery />
    </article>
  );
}
