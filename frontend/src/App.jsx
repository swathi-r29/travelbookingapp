import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AppRouter from './router/AppRouter.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
