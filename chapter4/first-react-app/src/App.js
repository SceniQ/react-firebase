
import './App.css';
// react hook - 'use': used for creating component states that coudl change overtime
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Tebza A')
  const [events, setEvents] = useState([
    {title: "Tebza A's first React lesson",id:1},
    {title: "Tebza A's first React lesson",id:2},
    {title: "Tebza A's first React lesson",id:3}
  ])
  const handleClick = () =>{
    setName('Mrembola')
    console.log(name)
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Show name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}    
    </div>
  );
}

// always export components so that they can be imported and used in other files
export default App;
