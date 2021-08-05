import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import homeIcon from '../../images/homeIcon.svg';

export const Footer = ({ setSavedView, setSearch }) => {

  return (
    <div className='footer'>

      <NavLink to='/Saved'>
        <button className='saved-btn' onClick={() => setSavedView(true)}>Saved Activities</button>
      </NavLink>

      <button className='showcase-btn'>Showcase</button>

      <NavLink to='/'>
        <img src={homeIcon} alt='Go Home' className='home-icon' onClick={() => setSearch(false)} />
      </NavLink>
    </div>
  );
}