import { useState } from "react"
import './styles/triplist.css'
import {useFetch} from '../hooks/usefetch'

export default function TripList() {
    const [url,setUrl] = useState('http://localhost:3000/trips')
    const [tripLocationUrl] = useState('http://localhost:3000/trips')

    const {data: trips, isPending} = useFetch(url)
    const {data: tripLocations} = useFetch(tripLocationUrl)

  return (
    <div className="trip-list">
      <h2>Trip List:</h2>
      {isPending && <div>Loading trips...</div>}
      <div className="filter">
        <p>filter by location:</p>
        <select onChange={(e) => "All" === e.target.value ? setUrl('http://localhost:3000/trips') : setUrl('http://localhost:3000/trips?location='.concat(e.target.value))}>
            {tripLocations && tripLocations.map(trip =>(
                <option key={trip.id} value={trip.location}>{trip.location}</option>
            ))}
            <option key="all" value="All"> All</option>
        </select>
      </div>
      {trips && trips.map(trip => (
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
