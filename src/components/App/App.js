import React, { useEffect, useState } from 'react'
import { Activity } from '../Activity/Activity';
import { Form } from '../Form/Form';
import { Route, Link } from 'react-router-dom';
import { fetchActivity } from '../../apiCalls';
import './App.css';

export const App = () => {

  const [search, setSearch] = useState(false);
  const [searchCategory, setSearchCategory] = useState('')
  const [suggestedActivity, setSuggestedActivity] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [loading, setLoading] = useState(false);


  const generateActivity = (searchCategory) => {
    let endpath;
    if (searchCategory === undefined) {
      endpath = ''
    } else {
      endpath = `type=${searchCategory}`
    }
    fetchActivity(endpath)
    .then(
      (activityData) => {
        console.log(activityData);
        setSearch(true)
        setSuggestedActivity(activityData)
        setLoading(false)
      }
    )
    .catch(error => setErrorCode(error.message))   // error component for 
  }

  useEffect(() => {

  })

// conditionally rendering - needs refactor 

  return (  
    <main className="App">
      <header className="App-header">
        <Link 
          to='/'
          style={{ textDecoration: 'none' }}
          onClick={() => setSearch(false)}
        >
          <h1>GET Un-Bored</h1>
        </Link>
      </header>

      <Route 
        exact path='/' 
        render={() => 
          <Form 
            search={search} 
            generateActivity={generateActivity} 
            setSearch={setSearch} 
            setSearchCategory={setSearchCategory} 
            searchCategory={searchCategory} 
          />
        }
      />
      
      {search && suggestedActivity.length === 0 ? <h3>Loading... </h3> : null }

      {search ? <Activity exact path={`type=${suggestedActivity.type}`} activity={suggestedActivity.activity} type={suggestedActivity.type} participants={suggestedActivity.participants} price={suggestedActivity.price} link={suggestedActivity.link} accessibility={suggestedActivity.accessibility} /> : <h3>Pick a category and generate something to do...</h3> }
    </main>
  );
}


