import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Destinations from '../pages/Destinations.jsx'
import BookTrip from '../pages/BookTrip.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import TripDetails from '../components/TripDetails.jsx'
import NotFound from '../components/NotFound.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/book" element={<BookTrip />} />
      <Route path="/trip/:id" element={<TripDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
