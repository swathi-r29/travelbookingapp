import React, { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import TripList from '../components/TripList.jsx'
import { TRIPS } from '../data/trips.js'

export default function Home() {
  const [filters, setFilters] = useState({})
  const results = useMemo(() => {
    const q = (filters.query || '').toLowerCase().trim()
    const guests = Number(filters.guests || 1)
    return TRIPS.filter(t => {
      const matchesQ = !q || t.title.toLowerCase().includes(q) || t.location.toLowerCase().includes(q)
      const matchesGuests = guests >= 1 // demo stub
      return matchesQ && matchesGuests
    })
  }, [filters])

  return (
    <section className="stack gap-lg">
      <div className="hero-banner card">
        <h1>Your next adventure awaits</h1>
        <p className="muted">Search destinations, compare trips, and book in minutes.</p>
        <SearchBar onSearch={setFilters} />
      </div>
      <h2>Popular trips</h2>
      <TripList trips={results.slice(0, 6)} />
    </section>
  )
}
