"use client"

import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"

export default function PageHeader({ titleKey, subtitleKey }: { titleKey: string; subtitleKey?: string }) {
  const { t } = useTranslation()

  return (
    <motion.section
      className="riverflow-bg-with-waves py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-riverflow-800">{t(titleKey)}</h1>
            {subtitleKey && <p className="text-gray-500 mt-2">{t(subtitleKey)}</p>}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
