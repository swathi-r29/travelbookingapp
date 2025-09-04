import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} travel_booking</p>
        <p className="muted">Demo UI • React + Vite</p>
      </div>
    </footer>
  )
}
