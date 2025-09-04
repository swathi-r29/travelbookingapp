import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="stack center">
      <h1>404</h1>
      <p className="muted">The page you’re looking for doesn’t exist.</p>
      <Link className="btn" to="/">Go Home</Link>
    </div>
  )
}
