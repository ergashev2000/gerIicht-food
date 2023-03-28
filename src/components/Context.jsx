import React, { useState, useRef, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const GerichtContext = createContext();

const Context = (props) => {
  const ref = useRef(null); // hook for scrolling up the page
  const reservationRef = useRef(null); // scroll anchor to the reservation section
  const location = useLocation(); // stores location data
  const [openBlogDetail, setOpenBlogDetail] = useState(null); // data to draw the BlogDetail page
  const [openMenu, setOpenMenu] = useState(false); // burger menu opening status
  const value = {
    ref,
    reservationRef,
    location,
    openBlogDetail,
    setOpenBlogDetail,
    openMenu,
    setOpenMenu
  };

  return (
    <GerichtContext.Provider value={value}>{props.children}</GerichtContext.Provider>
  );
};

export default Context;

Context.propTypes = {
  children: PropTypes.array.isRequired
};
