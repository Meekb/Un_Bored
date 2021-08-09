import React from 'react';
import './Showcase.css';

export const Showcase = ({ setSavedView, setSearch, showcaseView, showcasedActivities }) => {

  const completedCards = showcasedActivities.map(card => {
    return (
      <div className='completed-card' key={card[0].key} id={card[0].key}>
        <h2>{card[0].activity}!</h2>
        <h3>Completed on: {card[0].dateCompleted}</h3>
          <p>Category: {card[0].type}</p>
          <p>Participants: {card[0].participants}</p>
          {card[0].price === 0 ? <p>FREE!</p> : <p>Estimated cost: ${(card[0].price * 10).toFixed(2)}</p>}
          {card[0].link ? <a href={card[0].link} src={card[0].link} /> : null}
      </div>
    )
  });


  return (
    <section className='showcase'>

      <h3 className='head'>✨ Showcase ✨</h3>
        
      <section>
        {showcasedActivities.length ?
        <section className='showcase-area'>    
          {completedCards}   
        </section> : <p className='nothing-to-see'>Nothing to see here 😳 Generate an activity to get started!</p> 
        }
      </section>

    </section>
  );

}