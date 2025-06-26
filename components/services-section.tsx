"use client"

import { motion } from "framer-motion"
import { Building2, BadgeCheck, Globe, Briefcase, Banknote, Handshake } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

const services = [
  {
    key: "business_formation",
    icon: <Building2 className="w-8 h-8 text-riverflow-600" />,
  },
  {
    key: "visa_processing",
    icon: <BadgeCheck className="w-8 h-8 text-riverflow-600" />,
  },
  {
    key: "trade_license",
    icon: <Globe className="w-8 h-8 text-riverflow-600" />,
  },
  {
    key: "office_solutions",
    icon: <Briefcase className="w-8 h-8 text-riverflow-600" />,
  },
  {
    key: "banking_support",
    icon: <Banknote className="w-8 h-8 text-riverflow-600" />,
  },
  {
    key: "business_consulting",
    icon: <Handshake className="w-8 h-8 text-riverflow-600" />,
  },
]

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-riverflow-50 py-16 md:py-24">
      <div className="container text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-riverflow-800"
        >
          {t("services.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl mx-auto"
        >
          {t("services.subtitle")}
        </motion.p>
      </div>

      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ key, icon }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold text-riverflow-800 mb-2">
              {t(`services.grid.${key}.title`)}
            </h3>
            <p className="text-sm text-gray-600">
              {t(`services.grid.${key}.description`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
