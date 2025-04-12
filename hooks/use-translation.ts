"use client"

import { useLanguage } from "@/contexts/language-context"
import translations from "@/lib/translations"

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: string): string => {
    if (!translations[language]) {
      return key
    }
    return translations[language][key] || key
  }

  return { t }
}
