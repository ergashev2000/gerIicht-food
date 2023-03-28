import React from 'react';
import Reservation from './../components/Page_Home/Reservation/Reservation';
import Menu from './../components/Page_Home/Menu/Menu';
import HappyHours from './../components/Page_Services/HappyHours/HappyHours';
import Hero from './../components/Page_Contacts/Hero/Hero';
import About from './../components/Page_Services/About/About';

export default function OurHistory () {
  return (
    <article className="OurHistory">
      <Hero title="What We offer" page="Our Services" />
      <About />
      <Menu />
      <Reservation />
      <HappyHours />
    </article>
  );
}
