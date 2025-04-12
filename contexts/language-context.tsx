"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ru" | "ar"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  languageName: string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const languageNames: Record<Language, string> = {
  en: "English",
  ru: "Русский",
  ar: "العربية",
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [languageName, setLanguageName] = useState(languageNames.en)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Get stored language preference or use browser language
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage && Object.keys(languageNames).includes(storedLanguage)) {
      setLanguage(storedLanguage)
    } else {
      const browserLang = navigator.language.split("-")[0] as Language
      if (browserLang && Object.keys(languageNames).includes(browserLang)) {
        setLanguage(browserLang)
      }
    }
  }, [])

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Update language name when language changes
    setLanguageName(languageNames[language])

    // Store language preference
    localStorage.setItem("language", language)

    // Update document language attribute
    document.documentElement.lang = language

    // Update text direction for Arabic
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, languageName }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
