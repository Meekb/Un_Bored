import React, { useState } from 'react'
import { Activity } from '../Activity/Activity';
import { Error } from '../Error/Error';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { Saved } from '../Saved/Saved'
import { Showcase } from '../Showcase/Showcase';
import { Route, Switch } from 'react-router-dom';
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
  const [error, setError] = useState(true);
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
      },
    )
    .catch(error => setError(error.message))
  }

  const sendToSaved = (newActivity) => {
    const included = savedActivities.find(saved => saved.key === newActivity.key)
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

  const convertDate = (completedActivity) => {
    const dateToFormat = new Date().toString().split(' ')
    completedActivity[0].dateCompleted = `${dateToFormat[0]} ${dateToFormat[1]} ${dateToFormat[2]} ${dateToFormat[3]} at ${dateToFormat[4]}`
  }

  const completeActivity = (key) => {
    const completedActivity = savedActivities.filter(saved => saved.key === key);
    if (!showcasedActivities.length) {
      convertDate(completedActivity)
      setShowcasedActivities([completedActivity])
      deleteActivity(key)
      setSearch(false)
      setSavedView(false)
      setShowcaseView(true)
      return
    }
    convertDate(completedActivity)
    setShowcasedActivities([completedActivity, ...showcasedActivities])
    deleteActivity(key)
    setSearch(false)
    setSavedView(false)  
    setShowcaseView(true)
  }

  const checkSavedView = () => {
    if (savedActivities.length === 0) {
      setSavedView(true)
      setShowcaseView(false)
    }
  }

  return (  

    <section className='App'>

    
      <header>
        <Header savedView={savedView} setSavedView={setSavedView} setSearch={setSearch} setShowcaseView={setShowcaseView} /> 
      </header>
      
      <main className="App">
        <Switch>
          <Route 
            path='/Home' 
            render={() => 
              <Form
                savedView={savedView} 
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
                checkSavedView={checkSavedView}
              />
            } 
          />
          <Route component={Error}/>  
        </Switch>
{/* working route without url changing */}
        <Route
          path='/:type'
          render={() => 
            <Activity
              id={suggestedActivity.key} 
              activity={suggestedActivity.activity} 
              type={suggestedActivity.type} 
              participants={suggestedActivity.participants} 
              price={suggestedActivity.price} 
              accessibility={suggestedActivity.accessibility}
              savedActivities={savedActivities}
              savedView={savedView} 
              sendToSaved={sendToSaved}
              search={search}
              suggestedActivity={suggestedActivity}
              setSavedView={setSavedView}
            />
          }
        />
    </main>
  </section>
    );
}


