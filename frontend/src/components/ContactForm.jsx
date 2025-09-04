import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card confirmation">
        <h2>Message sent 🎉</h2>
        <p>Thank you, {name}! We have received your message.</p>
        <p className="muted">This is a demo confirmation (no backend wired).</p>
      </div>
    )
  }

  return (
    <form className="card form" onSubmit={submit}>
      <h2>Contact Us</h2>
      <label>
        Full Name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
      </label>
      <label>
        Subject
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
      </label>
      <label>
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" required />
      </label>
      <button className="btn" type="submit">Send Message</button>
    </form>
  )
}
