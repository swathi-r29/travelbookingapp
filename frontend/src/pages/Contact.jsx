import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section className="stack gap-lg">
      <h1>Contact</h1>
      <p>Have questions? Reach us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      <p className="muted">This is a demo address for illustrative purposes.</p>
      <ContactForm />
    </section>
  )
}
