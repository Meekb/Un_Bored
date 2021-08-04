import React, { useEffect, useState } from 'react';
import './Form.css'

export const Form = ({ generateActivity, setActiveData, activeData, setSearchCategory }) => {

  const [category, setCategory] = useState('');

  // const [participants, setParticipants] = useState(1);

const submitSearch = (e, category) => {
  e.preventDefault();
  generateActivity(category);
  setActiveData(true)
} 

useEffect(() => {
})

  return (
    <main>
      <form>
        <label>Category:</label>
        <select className='activity' onChange={(e) => setCategory(e.target.value)}>
          <option value='null'></option>
          <option value='education'>Education</option>
          <option value='recreational'>Recreation</option>
          <option value='social'>Social</option>
          <option value='diy'>DIY</option>
          <option value='charity'>Charity</option>
          <option value='cooking'>Cooking</option>
          <option value='relaxation'>Relaxation</option>
          <option value='music'>Music</option>
          <option value='busywork'>Busywork</option>
        </select>
        <div>
          <button onClick={(e) => submitSearch(e)} disabled={activeData ? true : false} >Do A Thing</button>
        </div>
      </form>
    </main>
  );  
}
