import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import homeIcon from '../../images/homeIcon.svg';

export const Footer = ({ savedView, setSavedView, setSearch }) => {

  useEffect(() => {
    console.log('SavedView', savedView)
  })

  const changeViewToHome = () => {
    setSavedView(false)
    setSearch(false)
  }

  const changeViewToSaved = () => {
    setSavedView(true);
    setSearch(false);
  }

  return (
    <div className='footer'>

      <NavLink to='/Saved'>
        <button className='saved-btn' onClick={() => changeViewToSaved()}>Saved</button>
      </NavLink>

      <button className='showcase-btn'>Showcased</button>

      <NavLink to='/'>
        <img src={homeIcon} alt='Go Home' className='home-icon' onClick={() => changeViewToHome()} />
      </NavLink>
    </div>
  );
}