import React from 'react';
import { NavLink } from 'react-router-dom';
import './Activity.css';

export const Activity = ({ activity, id, loading, type, participants, price, accessibility, savedView, setSavedView, search, sendToSaved, suggestedActivity }) => {

  const saveActivityInfo = (e) => { 
    e.preventDefault()
    const infoToSave = {
      activity: activity, 
      type: type, 
      participants: participants, 
      price: price, 
      key: id,
      accessibility: accessibility,
    };
    setSavedView(true);
    sendToSaved(infoToSave)
  }
  
  const displayAccessibility = (accessibility) => {
    
    let display;

    const options = {
      zero: 'Wow, this one would be easy!',
      easy: 'Come on! You can probably make this happen if we\'re being honest here...',
      lessEasy: 'Maybe it\'ll be productive, or warm someones heart. Go for it!',
      medium: 'Do it for your country!',
      hard: 'How bad do you want it?!',
      difficult: 'This is something that should be in your Showcase!',
      veryDifficult: 'If you do it, the masses will be inspired.'
    }

    switch (accessibility) {
      case 0:
        display = options.zero
        break
      case 0.2:
        display = options.easy
        break
      case 0.3:
        display = options.lessEasy
        break
      case 0.4:
        display = options.medium
        break
      case 0.5:
        display = options.medium
        break
      case 0.6:
        display = options.hard
        break
      case 0.8:
        display = options.difficult
        break
      case 0.9:
        display = options.veryDifficult
        break 
      default:
        display = 'Go get em, tiger!' 
    }

    return (
      <p className='display'>{display}</p>
    );
  }

  if (suggestedActivity.length === 0 && search) {
    return (
      <section className='now-go'>
        <p className='now-go'>Now go complete a saved activity!</p>
      </section>
    );
  }

  return (
    <section className='generated-activity'>
        {loading && <h3>Loading...</h3>}
        {(search && !savedView) ? 
        <div className='activity-card' key={id}>
          <h2 className='title'>{activity}!</h2>
          <p className='category'>Category: {type}</p>
          <p className='participants'>Participants: {participants}</p>
          {price === 0 ? <p className='cost'>Estimated cost: FREE!</p> : <p className='cost'>Estimated cost: ${(price * 10).toFixed(2)}</p>}
          {displayAccessibility(accessibility)}
          <NavLink to='/:type'>
            <button className='save-btn' onClick={(e) => saveActivityInfo(e)}>Save Activity</button>
          </NavLink>
        </div> : null
        }
        
    </section>
  );  
}