import React, { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import TripList from '../components/TripList.jsx'
import { TRIPS } from '../data/trips.js'

export default function Destinations() {
  const [filters, setFilters] = useState({})
  const filtered = useMemo(() => {
    const q = (filters.query || '').toLowerCase().trim()
    return TRIPS.filter(t =>
      !q || t.title.toLowerCase().includes(q) || t.location.toLowerCase().includes(q)
    )
  }, [filters])

  return (
    <section className="stack gap-lg">
      <h1>Explore destinations</h1>
      <SearchBar onSearch={setFilters} />
      <TripList trips={filtered} />
    </section>
  )
}
