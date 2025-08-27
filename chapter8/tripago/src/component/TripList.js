import { useState, useEffect } from "react"
import './styles/triplist.css'

export default function TripList() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
            .then(respone => respone.json())
            .then(json => setTrips(json))
    }, [])

    console.log(trips)

    


  return (
    <div className="trip-list">
      <h2>Trip List:</h2>
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
