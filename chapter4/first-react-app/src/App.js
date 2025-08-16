
import './App.css';
// react hook - 'use': used for creating component states that coudl change overtime
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([
    {title: "Tebza A's first React lesson",id:1},
    {title: "Mrembola's first React lesson",id:2},
    {title: "Sceniq's first React lesson",id:3}
  ])
  const handleClick = (id) =>{
    setEvents((prevEvents) => { // this takes in the previous state value at the point of updating this state. That previous state value is guaranteed to be of up to date
      return prevEvents.filter((eventItem) => {
        return id !== eventItem.id
      })
    })
    console.log(id)
  }
  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete item</button>
        </div>
      ))}    
    </div>
  );
}

// always export components so that they can be imported and used in other files
export default App;
