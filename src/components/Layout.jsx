import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer';
import { GerichtContext } from './Context';

export default function Layout () {
  const { openMenu, setOpenMenu } = useContext(GerichtContext);
  return (
    <>
      <Header />
      <main className={openMenu ? 'hidden' : 'main'} onClick={() => setOpenMenu(false)}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
