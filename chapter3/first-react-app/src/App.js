
import './App.css';
// react hook - 'use': used for creating component states that coudl change overtime
import { useState } from 'react';

function App() {
  let name = 'Tebza A'
  const handleClick = () =>{
    name = 'Mrembola'
    console.log(name)
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Show name</button>    
    </div>
  );
}

// always export components so that they can be imported and used in other files
export default App;
