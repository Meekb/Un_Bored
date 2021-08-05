import React from 'react';
import './Activity.css';

export const Activity = ({ activity, id, type, participants, price, link, accessibility, search, sendToSaved }) => {

  const saveActivityInfo = (e) => {
    e.preventDefault()
    const infoToSave = { 
      id: id,
      activity: activity, 
      type: type, 
      participants: participants, 
      price: price, 
      link: link, 
      accessibility: accessibility};
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
        display = 'Go get em\', tiger!' 
    }

    return (
      <p>{display}</p>
    );
  }

  return (
    <section className='generated-activity'>
      {!search && 
        <div key={id} id={id}>
          <h2>{activity}!</h2>
          <p>Category: {type}</p>
          <p>Participants: {participants}</p>
          {price === 0 ? <p>FREE!</p> : <p>${price}</p>}
          {link ? <a href={link} src={link} /> : null}
          {displayAccessibility(accessibility)}
          <button onClick={(e) => saveActivityInfo(e)}>Save Activity</button>
        </div>
      }
    </section>
  );  
}