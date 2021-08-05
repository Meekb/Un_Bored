import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = ({ savedView, setSavedView }) => {

  useEffect(() => {
    
  })

  return (
    <div className='footer'>
      <NavLink to='/Saved'>
        <button className='saved-btn' onClick={() => setSavedView(true)}>Saved Activities</button>
      </NavLink>
      <button className='showcase-btn'>Showcase</button>
    </div>
  );
}