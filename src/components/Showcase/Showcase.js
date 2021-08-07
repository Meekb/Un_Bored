import React from 'react';
import './Showcase.css';

export const Showcase = ({ setSavedView, setSearch, showcaseView, showcasedActivities }) => {


  const showCards = () => {

    const cards = showcasedActivities.map(card => {
      return (
        <div>
          <h2>{card.activity}!</h2>
            <p>Category: {card.type}</p>
            <p>Participants: {card.participants}</p>
            {card.price === 0 ? <p>FREE!</p> : <p>${card.price}</p>}
            {card.link ? <a href={card.link} src={card.link} /> : null}
        </div>
      )
    })
  }

  return (
    <section className='showcase-area'>
      {showcaseView ?      
      <div>
        <h3>Showcase the Shit I've Done</h3>
        {showCards}
      </div> : null}
    </section>
  );

}