"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function BookConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Optional: Replace this with an actual backend or Formspark/Mailchimp endpoint
      console.log("Submitting form:", form)
      setSubmitted(true)
    } catch (error) {
      console.error("Form submission error", error)
    }
  }

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Book a Free Consultation</h2>

      {submitted ? (
        <p className="text-green-600 font-medium">Thank you! We’ll be in touch shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <Button type="submit" className="w-full">
            Book Now
          </Button>
        </form>
      )}
    </div>
  )
}
