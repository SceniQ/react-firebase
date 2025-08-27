import { useState, useEffect } from "react"

export default function TripList() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
            .then(respone => respone.json())
            .then(json => setTrips(json))
    }, [])

    console.log(trips)

    


  return (
    <div>
      <h2>Trip List:</h2>
      {trips.map(trip => (
        <ul>
            <li key={trip.id}>{trip.title} - {trip.price}</li>
        </ul>
      ))}
    </div>
  )
}
