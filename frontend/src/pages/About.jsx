import React from 'react'

export default function About() {
  return (
    <section className="stack gap-lg about-page">
      <h1>About travel_booking</h1>

      <p>
        travel_booking is your go-to platform for seamless and enjoyable travel planning. Our app offers a simple yet powerful booking flow built with React and Vite, featuring routing, search and filtering capabilities, and a mock booking confirmation system.
      </p>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To make travel planning accessible, efficient, and fun for everyone. We strive to provide a user-friendly experience that helps you find and book your perfect trip with ease.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Intuitive and responsive user interface</li>
          <li>Fast and reliable booking process</li>
          <li>Comprehensive search and filtering options</li>
          <li>No backend required for demo purposes</li>
          <li>Open to extensions with real APIs and authentication</li>
        </ul>
      </section>

      <section className="customer-feedback">
        <h2>Top Customer Feedback and Rating</h2>
        <div className="feedback-grid">
          <blockquote>
            "This travel booking app made planning my trips so easy and enjoyable! Highly recommend."
            <br />
            <strong>- Jane D.</strong>
          </blockquote>
          <blockquote>
            "Excellent user experience and smooth booking process. 5 stars!"
            <br />
            <strong>- Mark S.</strong>
          </blockquote>
          <blockquote>
            "A fantastic tool for quick and easy travel bookings. Great job!"
            <br />
            <strong>- Lisa M.</strong>
          </blockquote>
          <blockquote>
            "Love the simplicity and effectiveness of this app. Highly recommended!"
            <br />
            <strong>- Tom R.</strong>
          </blockquote>
        </div>
        <p>Average Rating: ⭐⭐⭐⭐⭐ (4.9/5 based on 120 reviews)</p>
      </section>
    </section>
  )
}
