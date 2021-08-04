import React from 'react';
import './Activity.css';

export const Activity = ({ activity, type, participants, price, link, accessibility }) => {

  const saveActivityInfo = (e) => {
    e.preventDefault()
    console.log(true) 
    // let infoToSave = { activity: activity, type: type, participants: participants, price: price, link: link, accessibility: accessibility};
    // console.log('infoToSave', infoToSave)
  }

  return (
    <section>
      <h2>{activity}!</h2>
      <p>Category: {type}</p>
      <p>Participants: {participants}</p>
      <p>${price}</p>
      {/* {link !== "" ? <a href={link} src={link} /> : null} */}
      <p>Accessibility: {accessibility}</p>
      <button onClick={(e) => saveActivityInfo(e)} >Save this shit!</button>
    </section>
  );
}