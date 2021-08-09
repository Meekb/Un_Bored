import React, { useEffect } from 'react';
import './Saved.css';

export const Saved = ({ checkSavedView, completeActivity, deleteActivity, id, savedActivities, showcaseView }) => {

  useEffect(() => {
    checkSavedView()
  })

  const savedActs = savedActivities.map(activity => {
    return (
      <div className='saved-card' key={activity.key} id={activity.key}>
        <h2>{activity.activity}!</h2>
        <p>Category: {activity.type}</p>
        <p>Participants: {activity.participants}</p>
        {activity.price === 0 ? <p>FREE!</p> : <p>Estimated cost: ${(activity.price * 10).toFixed(2)}</p>}
        <button className='complete-btn' onClick={(e) => completeActivity(activity.key)}>Complete</button>
        <button className='delete-btn' onClick={(e) => deleteActivity(activity.key)}>Delete</button>
      </div>
    );
  });

  return (
    <section className='saved'>
        <div className='no-saved-text'>
          {(savedActivities.length === 0 && !showcaseView) ? <div className='no-saved'><p>You have no saved activities...</p></div> : null }
        </div>
      <section className='saved-area'>
        {savedActs}
      </section>
    </section>
  );
}