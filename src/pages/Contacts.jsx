import React from 'react';
import Hero from './../components/Page_Contacts/Hero/Hero';
import Map from './../components/Page_Contacts/Map/Map';
import Form from './../components/Page_Contacts/Form/Form';

export default function Contacts () {
  return (
    <article>
      <Hero title="contact Us" page="contact Us" />
      <Map />
      <Form />
    </article>
  );
}
