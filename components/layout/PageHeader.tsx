"use client"

import { useTranslation } from "@/hooks/use-translation"

export default function PageHeader({ titleKey, subtitleKey }: { titleKey: string; subtitleKey?: string }) {
  const { t } = useTranslation()

  return (
    <div className="py-10 text-center">
      <h1 className="text-4xl font-bold text-riverflow-800">{t(titleKey)}</h1>
      {subtitleKey && <p className="text-gray-500 mt-2">{t(subtitleKey)}</p>}
    </div>
  )
}
