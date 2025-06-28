"use client"

import { useEffect } from "react"

export default function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://code.tidio.co/YOUR_UNIQUE_ID.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return null
}
