import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TRIPS } from '../data/trips.js'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export default function BookingForm() {
  const qs = useQuery()
  const initialTripId = qs.get('tripId')
  const [tripId, setTripId] = useState(initialTripId || TRIPS[0]?.id || '')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState(1)
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const selectedTrip = TRIPS.find(t => String(t.id) === String(tripId))

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted && selectedTrip) {
    const total = selectedTrip.price * guests
    return (
      <div className="card confirmation">
        <h2>Booking confirmed 🎉</h2>
        <p>Thank you, {name}! We’ve reserved <strong>{selectedTrip.title}</strong>.</p>
        <ul className="bullets">
          <li>Date: {date || 'TBD'}</li>
          <li>Guests: {guests}</li>
          <li>Total: ₹ {total.toLocaleString('en-IN')}</li>
          <li>Voucher sent to: {email}</li>
        </ul>
        <p className="muted">This is a demo confirmation (no backend wired).</p>
      </div>
    )
  }

  return (
    <form className="card form" onSubmit={submit}>
      <h2>Book your trip</h2>
      <label>
        Select Trip
        <select value={tripId} onChange={(e) => setTripId(e.target.value)}>
          {TRIPS.map(t => <option key={t.id} value={t.id}>{t.title} — ₹ {t.price.toLocaleString('en-IN')}</option>)}
        </select>
      </label>

      <div className="form-row">
        <label>
          Full Name
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
        </label>
      </div>

      <div className="form-row">
        <label>
          Guests
          <input type="number" min="1" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
        </label>
        <label>
          Date
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
      </div>

      <label>
        Notes (optional)
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Special requests, timing, etc." />
      </label>

      <button className="btn" type="submit">Confirm Booking</button>
    </form>
  )
}
