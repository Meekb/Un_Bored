import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import homeIcon from '../../images/homeIcon.svg';

export const Header = ({ setSavedView, setSearch, setShowcaseView }) => {

  const changeViewToHome = () => {
    setSavedView(false)
    setSearch(false)
  }

  const changeViewToSaved = () => {
    setSavedView(true);
    setSearch(false);
  }

  const changeViewFromLogo = () => {
    setSearch(false);
    setSavedView(false);
  }

  const changeViewToShowcase = () => {
    setSearch(false);
    setSavedView(false);
    setShowcaseView(true);
  }

  return (
    <section className='header'>

      <div className='title'> 
        <NavLink 
            to='/Home'
            style={{ textDecoration: 'none' }}
            onClick={() => changeViewFromLogo()}
          >
            <h1 className='app-name'>GET Un-Bored Activity Generator</h1>
          </NavLink>
      </div>


      <div className='nav-btns'>
        <NavLink to='/Saved'>
          <button className='saved-btn' onClick={() => changeViewToSaved()}>Saved</button>
        </NavLink>

        <NavLink to='/Showcase'>
          <button className='showcase-btn' onClick={() => changeViewToShowcase()}>Showcase</button>
        </NavLink>
        
        <div className='home-img'>
          <NavLink to='/Home'>
            <img src={homeIcon} alt='Go Home' className='home-icon' onClick={() => changeViewToHome()} />
          </NavLink>
        </div>    
      </div>

    </section>
  );
}