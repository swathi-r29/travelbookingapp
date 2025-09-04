import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { TRIPS } from '../data/trips.js'

export default function TripDetails() {
  const { id } = useParams()
  const trip = TRIPS.find(t => String(t.id) === String(id))

  if (!trip) {
    return (
      <div className="stack">
        <h2>Trip not found</h2>
        <Link className="btn" to="/destinations">Back to Destinations</Link>
      </div>
    )
  }

  return (
    <article className="stack">
      <img className="hero" src={trip.image} alt={trip.title} />
      <h1>{trip.title}</h1>
      <p className="muted">{trip.location}</p>
      <p className="price">From ₹ {trip.price.toLocaleString('en-IN')} / person</p>
      <p>{trip.longDescription}</p>
      <ul className="bullets">
        {trip.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <div className="card-actions">
        <Link className="btn" to={`/book?tripId=${trip.id}`}>Book this trip</Link>
        <Link className="btn outline" to="/destinations">Explore more</Link>
      </div>
    </article>
  )
}
