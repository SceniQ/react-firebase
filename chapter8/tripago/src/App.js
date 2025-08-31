import './App.css';
import TripList from './component/TripList';
import { useState } from 'react';

function App() {
  const [showTrips, SetShowTrips] = useState(true)
  return (
    <div className="App">
      <button className='toggle-btn' onClick={() =>SetShowTrips(false)}></button>
      {showTrips && <TripList/>}
    </div>
  );
}

export default App;
