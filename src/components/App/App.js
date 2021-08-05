import React, { useEffect, useState } from 'react'
import { Activity } from '../Activity/Activity';
import { Form } from '../Form/Form';
import { Footer } from '../Footer/Footer';
import { Saved } from '../Saved/Saved'
import { Route, Switch, NavLink } from 'react-router-dom';
import { fetchActivity } from '../../apiCalls';
import './App.css';

export const App = () => {

  const [savedView, setSavedView] = useState(false);
  const [savedActivities, setSavedActivities] = useState([]);
  const [showcaseActivity, setShowcaseActivity] = useState([]);
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

  const sendToSaved = (newActivity) => {
    setSavedActivities([...savedActivities, newActivity]);
    console.log(savedActivities)
  }

  useEffect(() => {
    console.log(savedActivities);
  })

// conditionally rendering - needs refactor 

  return (  
    <main className="App">
      <header className="App-header">
        <NavLink 
          to='/'
          style={{ textDecoration: 'none' }}
          onClick={() => setSearch(false)}
        >
          <h1>GET Un-Bored</h1>
        </NavLink>
      </header>
      
      <Switch>
        <Route 
          exact path='/' 
          render={() => 
            <Form 
              search={search} 
              generateActivity={generateActivity} 
              setSearch={setSearch} 
              setSearchCategory={setSearchCategory} 
              searchCategory={searchCategory}
              suggestedActivity={suggestedActivity}
              loading={loading} 
            />
          }
        />
        <Route 
          path={`type=${searchCategory}`} 
          render={() => 
            <Activity
            key={suggestedActivity.key} 
            id={suggestedActivity.key} 
            activity={suggestedActivity.activity} 
            type={suggestedActivity.type} 
            participants={suggestedActivity.participants} 
            price={suggestedActivity.price} 
            link={suggestedActivity.link}
            loading={loading} 
            accessibility={suggestedActivity.accessibility} 
            sendToSaved={sendToSaved}
            search={search} 
            />}
        />
        <Route
          exact path='/Saved' 
          render={() => <Saved
          id={suggestedActivity.key}
          activity={suggestedActivity.activity}
          type={suggestedActivity.type}
          participants={suggestedActivity.participants}
          price={suggestedActivity.price}
          link={suggestedActivity.link}
          accessibility={suggestedActivity.accessibility} 
          savedActivities={[savedActivities]}
          savedView={savedView}
          />} 
        />  

      </Switch>

      <Footer savedView={savedView} setSavedView={setSavedView} />

    </main>
  );
}


