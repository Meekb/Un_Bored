import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import './Form.css'

export const Form = ({ generateActivity, savedView, search, setSearchCategory, suggestedActivity }) => {

  const [category, setCategory] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    generateActivity(category);
  } 
  
  useEffect(() => {
    setSearchCategory(category)
  })

  return (
    <section>
      {(!search && !savedView) ?
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
        <p className='warning'>WARNING: Leaving blank will result in a randomly generated activity which may be considered productive</p>
        <div>
          {/* <NavLink to='/Activity/'> */}
            <button 
              type='button' 
              className='do-a-thing' 
              onClick={(e) => submitSearch(e)}>Do A Thing</button>
          {/* </NavLink> */}
        </div>
      </form> : null
      }
    </section>
  );  
}


