import React, { useEffect, useState } from 'react'
import { Activity } from '../Activity/Activity';
import { Form } from '../Form/Form';
import { Route, useHistory } from 'react-router-dom';
import { fetchActivity } from '../../apiCalls';
import './App.css';

export const App = () => {

  const [activeData, setActiveData] = useState(false);
  const [searchCategory, setSearchCategory] = useState('')
  const [suggestedActivity, setSuggestedActivity] = useState('');
  const [errorCode, setErrorCode] = useState('');
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();


  const generateActivity = (category) => {
    let endpath;
    setSearchCategory(category)
    console.log(searchCategory)
    if (searchCategory === '') {
      endpath = ''
      console.log(endpath)
    } else {
      endpath = `type=:${category}`;
      console.log(endpath)
    }
    console.log(fetchActivity(endpath))
    fetchActivity(endpath)
    .then(
      (activityData) => {
        console.log(activityData);
        setSuggestedActivity(activityData)
        setActiveData(true)
        // setLoading(false)
      }
    )
    .catch(error => setErrorCode(error.message))
    // history.push(`/${activity}`);
    // setLoading(false);
    // setSuggestedActivity(newAct)
    // setErrorCode('')
  }
  
  useEffect(() => {
    // setSuggestedActivity()
  })

  return (  
    <main className="App">
      <header className="App-header">
        <h1>GET Un-Bored</h1>
      </header>
      <Route exact path='/' render={() => <Form activeData={activeData} generateActivity={generateActivity} setActiveData={setActiveData} setSearchCategory={setSearchCategory} />}/>
      
      {activeData && suggestedActivity.length === 0 ? <h3>Loading... </h3> : null }

      {activeData ? <Activity exact path={suggestedActivity.type} activity={suggestedActivity.activity} type={suggestedActivity.type} participants={suggestedActivity.participants} price={suggestedActivity.price} link={suggestedActivity.link} accessibility={suggestedActivity.accessibility} /> : <h3>Pick a category and generate something to do...</h3> }
    </main>
  );
}


