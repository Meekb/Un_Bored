import React, { useEffect, useState } from 'react'
import { Activity } from '../Activity/Activity';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { Saved } from '../Saved/Saved'
import { Showcase } from '../Showcase/Showcase';
import { Route, Switch, NavLink } from 'react-router-dom';
import { fetchActivity } from '../../apiCalls';
import './App.css';

export const App = () => {

  const [savedView, setSavedView] = useState(false);
  const [savedActivities, setSavedActivities] = useState([]);
  const [showcasedActivities, setShowcasedActivities] = useState([]);
  const [showcaseView, setShowcaseView] = useState(false);
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
        setSuggestedActivity(activityData)
        setLoading(false)
        setSearch(true)
      }
    )
    .catch(error => setErrorCode(error.message))   // error component for 
  }

  const sendToSaved = (newActivity) => {
    let included = savedActivities.find(saved => saved.key === newActivity.key)
    if (included) {
      return;
    } 
    setSavedActivities([newActivity, ...savedActivities]);
    setSuggestedActivity([]); 
  }

  const deleteActivity = (key) => {
    const newSavedArr = savedActivities.filter(saved => saved.key !== key);
    setSavedActivities(newSavedArr);
  }

  const completeActivity = (key) => {
    const completedActivity = savedActivities.filter(saved => saved.key === key);
    if (!showcasedActivities.length) {
      setShowcasedActivities([completedActivity]);
      deleteActivity(key);
      setShowcaseView(true)
      setSearch(false)
      setSavedView(false) 
      return;
    }
    completedActivity[0].dateCompleted = new Date;
    setShowcasedActivities([completedActivity, ...showcasedActivities]);
    deleteActivity(key);
    setShowcaseView(true)
    setSearch(false)
    setSavedView(false)  
    // console.log(showcasedActivities)
  }

  useEffect(() => {

  })
  


  return (  

    <section className='App'>

    
      <header>
        <Header savedView={savedView} setSavedView={setSavedView} setSearch={setSearch} setShowcaseView={setShowcaseView} /> 
      </header>
      
      <main className="App">
        <Switch>
          {/* <Route exact path={`/${suggestedActivity.type}${suggestedActivity.key}`} render={() => 
            <Activity
              key={suggestedActivity.key} 
              activity={suggestedActivity.activity} 
              type={suggestedActivity.type} 
              participants={suggestedActivity.participants} 
              price={suggestedActivity.price} 
              link={suggestedActivity.link} 
              accessibility={suggestedActivity.accessibility} 
              sendToSaved={sendToSaved}
              search={search}
              suggestedActivity={suggestedActivity}
            />} /> */}
          <Route
            exact path='/Showcase'
            render={() => 
              <Showcase
                showcasedActivities={showcasedActivities} 
                showcaseView={showcaseView}
                setSearch={setSearch}
                setSavedView={setSavedView}
              />
            } 
          />
          <Route
            exact path='/Saved' 
            render={() => 
              <Saved
                id={suggestedActivity.key}
                completeActivity={completeActivity}
                deleteActivity={deleteActivity} 
                savedActivities={savedActivities}
                setSavedView={setSavedView}
                showcaseView={showcaseView}
              />
            } 
            />  
          <Route 
            path='/' 
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
        </Switch>

        {/* <Route exact path={`/${suggestedActivity.type}${suggestedActivity.key}`} render={() => 
            <Activity
              key={suggestedActivity.key} 
              activity={suggestedActivity.activity} 
              type={suggestedActivity.type} 
              participants={suggestedActivity.participants} 
              price={suggestedActivity.price} 
              link={suggestedActivity.link} 
              accessibility={suggestedActivity.accessibility} 
              sendToSaved={sendToSaved}
              search={search}
              suggestedActivity={suggestedActivity}
            />} /> */}

        <Route render={() => 
          <Activity
            id={suggestedActivity.key} 
            activity={suggestedActivity.activity} 
            type={suggestedActivity.type} 
            participants={suggestedActivity.participants} 
            price={suggestedActivity.price} 
            link={suggestedActivity.link} 
            accessibility={suggestedActivity.accessibility}
            savedActivities={savedActivities}
            savedView={savedView} 
            sendToSaved={sendToSaved}
            search={search}
            suggestedActivity={suggestedActivity}
          />
        }
        />
    </main>
  </section>
    );
}


