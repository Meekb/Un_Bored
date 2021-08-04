import React from 'react';
import './Activity.css';

export const Activity = ({ activity, type, participants, price, link, accessibility }) => {

  const saveActivityInfo = (e) => {
    e.preventDefault()
    console.log(true) 
    // let infoToSave = { activity: activity, type: type, participants: participants, price: price, link: link, accessibility: accessibility};
    // console.log('infoToSave', infoToSave)
  }
  
  const displayAccessibility = (accessibility) => {
    let display;
    const options = {
      easy: 'Come on! You can probably make this happen if we\'re being honest here...',
      lessEasy: 'Would this be productive for you? Then you probably should.',
      medium: 'Do it for your country!',
      hard: 'How bad do you want it?!',
      difficult: 'Uhhh...if you do it then it\'s going in the Showcase!'
    }
    if (accessibility < .15) {
      display = options.easy
    }
    if (accessibility > .15 && accessibility < .30) {
      display = options.lessEasy
    }
    if (accessibility >= .30 && accessibility < .50) {
      display = options.medium
    }
    if (accessibility > .50 && accessibility < .65) {
      display = options.hard
    } 
    if (accessibility > .65 && accessibility < .85) {
      display = options.difficult
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
      <p>{displayAccessibility(accessibility)}</p>
      <button onClick={(e) => saveActivityInfo(e)} >Save this shit!</button>
    </section>
  );  
}