import React from 'react';
import './Activity.css';

export const Activity = ({ activity, type, participants, price, link, accessibility }) => {

  const saveActivityInfo = (e) => {
    e.preventDefault()
    // console.log(true) 
    // let infoToSave = { activity: activity, type: type, participants: participants, price: price, link: link, accessibility: accessibility};
    // console.log('infoToSave', infoToSave)
  }
  
  const displayAccessibility = (accessibility) => {
    let display;

    const options = {
      zero: 'If you do it, the people will be inspired.',
      easy: 'Come on! You can probably make this happen if we\'re being honest here...',
      lessEasy: 'Maybe it\'s productive, or it will warm someones heart. Go for it!',
      medium: 'Do it for your country!',
      hard: 'How bad do you want it?!',
      difficult: 'This is something that should be in your Showcase!',
      veryDifficult: 'Only the wisest shall pass...'
    }

    switch (accessibility) {
      case 0:
        display = options.zero
        break
      case 0.1:
        display = options.easy
        break
      case 0.2:
        display = options.lessEasy
        break
      case 0.3:
        display = options.lessEasy
        break
      case 0.4:
        display = options.lessEasy
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
    )
  }

  return (
    <section>
      <h2>{activity}!</h2>
      <p>Category: {type}</p>
      <p>Participants: {participants}</p>
      {price === 0 ? <p>FREE!</p> : <p>${price}</p>}
      {link !== "" ? <a href={link} src={link} /> : null}
      {displayAccessibility(accessibility)}
      <button onClick={(e) => saveActivityInfo(e)} >Save this shit!</button>
    </section>
  );  
}