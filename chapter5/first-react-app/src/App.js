
import './App.css';
// react hook - 'use': used for creating component states that coudl change overtime
import React, { useState } from 'react';
import Title from './components/Title';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "Tebza A's first React lesson", id: 1 },
    { title: "Mrembola's first React lesson", id: 2 },
    { title: "Sceniq's first React lesson", id: 3 }
  ])
  const handleClick = (id) => {
    setEvents((prevEvents) => { // this takes in the previous state value at the point of updating this state. That previous state value is guaranteed to be of up to date
      return prevEvents.filter((eventItem) => {
        return id !== eventItem.id
      })
    })
    console.log(id)
  }
  return (
    <div className="App">
      <Title title = "Mrembola's passed in title prop from App comp" subtitle="All the latest attempts"/>
      {/* <Title title = "hmm..." subtitle="HMMM!"/> */}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete item</button>
        </React.Fragment>
      ))}
    </div>
  );
}

// always export components so that they can be imported and used in other files
export default App;
