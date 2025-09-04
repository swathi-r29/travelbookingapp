import React from 'react'
import { Link } from 'react-router-dom'

export default function DestinationCard({ trip }) {
  return (
    <div className="card destination-card">
      <img src={trip.image} alt={trip.title} />
      <div className="card-body">
        <h3>{trip.title}</h3>
        <p className="muted">{trip.location}</p>
        <p className="price">₹ {trip.price.toLocaleString('en-IN')} / person</p>
        <p className="desc">{trip.description}</p>
        <div className="card-actions">
          <Link className="btn" to={`/trip/${trip.id}`}>View details</Link>
          <Link className="btn outline" to={`/book?tripId=${trip.id}`}>Book</Link>
        </div>
      </div>
    </div>
  )
}
