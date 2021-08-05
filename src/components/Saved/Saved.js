import React, { useState } from 'react';
import './Saved.css';

export const Saved = ({ activity, accessibility, id, link, participants, price, type, savedActivities, savedView }) => {

  const savedActs = savedActivities.map(activity => {
    return (
      <div key={id} id={id}>
        <h2>{activity.activity}!</h2>
        <p>Category: {activity.type}</p>
        <p>Participants: {activity.participants}</p>
        {activity.price === 0 ? <p>FREE!</p> : <p>${activity.price}</p>}
        {activity.link ? <a href={activity.link} src={activity.link} /> : null}
        <button>Complete and Showcase</button>
      </div>
    );
  });

  return (
    <section className='saved'>
      {savedView ? {savedActs} : null}
    </section>
  );
}