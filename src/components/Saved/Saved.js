import React, { useEffect } from 'react';
import './Saved.css';

export const Saved = ({ completeActivity, deleteActivity, id, savedActivities }) => {

  const savedActs = savedActivities.map(activity => {
    console.log('KEY=', activity.key)
    return (
      <div className='saved-card' key={activity.key} id={activity.key}>
        <h2>{activity.activity}!</h2>
        <p>Category: {activity.type}</p>
        <p>Participants: {activity.participants}</p>
        {activity.price === 0 ? <p>FREE!</p> : <p>${activity.price}</p>}
        {activity.link ? <a href={activity.link} src={activity.link} /> : null}
        <button className='complete-btn' onClick={(e) => completeActivity(activity.key)}>Complete</button>
        <button className='delete-btn' onClick={(e) => deleteActivity(activity.key)}>Delete</button>
      </div>
    );
  });

  return (
    <section className='saved'>
        <div className='no-saved-text'>
          {savedActivities.length === 0 && <div className='no-saved'><h4>You have no saved activities...</h4></div>  }
        </div>
      <section className='saved-area'>
        {savedActs}
      </section>
    </section>
  );
}