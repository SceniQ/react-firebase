import { useState, useEffect, useCallback } from "react"
import './styles/triplist.css'

export default function TripList() {
    const [trips, setTrips] = useState([])
    const [url,setUrl] = useState('http://localhost:3000/trips')
    const [tripLocationUrl] = useState('http://localhost:3000/trips')
    const [tripLocations, setTriplocation] = useState([])

    const fetchTrips = useCallback( async () => {
        const respone = await fetch(url)
        const json = await respone.json()
        setTrips(json)
    }, [url])


    useEffect(() => {
        fetch(tripLocationUrl)
            .then(respone => respone.json())
            .then(json => setTriplocation(json))
    }, [tripLocationUrl]) 

    useEffect(() => {
        fetchTrips()
    }, [fetchTrips])    


  return (
    <div className="trip-list">
      <h2>Trip List:</h2>
      <div className="filter">
        <p>filter by location:</p>
        <select onChange={(e) => "All" === e.target.value ? setUrl('http://localhost:3000/trips') : setUrl('http://localhost:3000/trips?location='.concat(e.target.value))}>
            {tripLocations.map(trip =>(
                <option key={trip.id} value={trip.location}>{trip.location}</option>
            ))}
            <option key="all" value="All"> All</option>
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
