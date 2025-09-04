import React from 'react'
import DestinationCard from './DestinationCard.jsx'

export default function TripList({ trips }) {
  if (!trips || trips.length === 0) {
    return <p className="muted">No trips match your filters.</p>
  }
  return (
    <div className="grid">
      {trips.map((t) => <DestinationCard key={t.id} trip={t} />)}
    </div>
  )
}
