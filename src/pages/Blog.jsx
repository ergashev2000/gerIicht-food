import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './../components/Page_Contacts/Hero/Hero';
import Main from './../components/Page_Blog/Main/Main';
import { GerichtContext } from './../components/Context';

export default function Blog () {
  const { location } = useContext(GerichtContext);
  return (
    <>
      {
        location.pathname === '/blog'
          ? <article>
            <Hero title="Our Blogs" page="Our Blogs- With sidebar" />
            <Main />
          </article>
          : <Outlet />
      }
    </>
  );
};
