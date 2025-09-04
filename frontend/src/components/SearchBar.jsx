import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [guests, setGuests] = useState(1)

  const submit = (e) => {
    e.preventDefault()
    onSearch({ query, dateFrom, dateTo, guests })
  }

  return (
    <form className="card searchbar" onSubmit={submit}>
      <input
        type="text"
        placeholder="Where to? e.g., Bali, Rome"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
      <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
      <input
        type="number"
        min="1"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      <button type="submit">Search</button>
    </form>
  )
}
