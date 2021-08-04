import React, { useEffect, useState } from 'react';
import './Form.css'

export const Form = ({ generateActivity, setSearch, search, setSearchCategory }) => {

  const [category, setCategory] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    generateActivity(category);
    setSearch(true)
  } 

  useEffect(() => {
    setSearchCategory(category)
  })

  return (
    <main>
      <form>
        <label>Category:</label>
        <select className='activity' onChange={(e) => setCategory(e.target.value)}>
          <option value='undefined' default ></option>
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
        <p>Leaving category blank will result in a randomly generated activity.</p>
        <div>
          <button onClick={(e) => submitSearch(e)} disabled={search ? true : false} >Do A Thing</button>
        </div>
      </form>
    </main>
  );  
}
