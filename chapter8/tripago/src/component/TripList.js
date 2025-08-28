import { useState, useEffect } from "react"
import './styles/triplist.css'

export default function TripList() {
    const [trips, setTrips] = useState([])
    const [url,setUrl] = useState('http://localhost:3000/trips')
    const [tripLocationUrl] = useState('http://localhost:3000/trips')
    const [tripLocations, setTriplocation] = useState([])


    useEffect(() => {
        fetch(tripLocationUrl)
            .then(respone => respone.json())
            .then(json => setTriplocation(json))
    }, [tripLocationUrl]) 

    useEffect(() => {
        fetch(url)
            .then(respone => respone.json())
            .then(json => setTrips(json))
    }, [url])

    

    console.log(trips)
   

    


  return (
    <div className="trip-list">
      <h2>Trip List:</h2>
      <div className="filter">
        <p>filter by location:</p>
        <select onChange={(e) => "All" === e.target.value ? setUrl('http://localhost:3000/trips') : setUrl('http://localhost:3000/trips?location='.concat(e.target.value))}>
            {tripLocations.map(trip =>(
                <option value={trip.location}>{trip.location}</option>
            ))}
            <option value="All"> All</option>
        </select>
      </div>
      {trips.map(trip => (
        <ul>
            <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
            </li>
        </ul>
      ))}
    </div>
  )
}
