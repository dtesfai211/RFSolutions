"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button" 
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function AboutPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
       
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-riverflow-50 py-20 relative overflow-hidden">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="container relative z-10 text-center space-y-6 px-4 md:px-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-riverflow-900">
              {t("about.title") || "About Us"}
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
              {t("about.description") || "Your Partner for Seamless UAE Business Solutions"}
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="container grid gap-10 lg:grid-cols-2 items-center px-4 md:px-6"
          >
            <motion.div variants={fadeInUp} className="space-y-5">
              <h2 className="text-3xl font-bold text-riverflow-900">{t("about.story.title") || "Our Story"}</h2>
              <p className="text-gray-600 text-lg">
                {t("about.story.content1")}
              </p>
              <p className="text-gray-600 text-lg">
                {t("about.story.content2")}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="rfsolutions_logo.png"
                alt="Dubai business district"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-t from-white to-riverflow-50">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="container px-4 md:px-6"
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-riverflow-900">
                {t("about.mission.title") || "Our Mission & Vision"}
              </h2>
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                variants={fadeInUp}
                className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.mission.subtitle")}</h3>
                <p className="mt-2 text-gray-600">{t("about.mission.content")}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.vision.subtitle")}</h3>
                <p className="mt-2 text-gray-600">{t("about.vision.content")}</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="container px-4 md:px-6"
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-riverflow-900">{t("about.values.title")}</h2>
              <p className="text-gray-600 max-w-xl mx-auto">{t("about.values.description")}</p>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-lg transition-all text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-14 w-14 bg-riverflow-100 text-riverflow-600 flex items-center justify-center rounded-full">
                      <span className="text-2xl font-bold">V{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-riverflow-800">{t(`about.values.value${i + 1}.title`)}</h3>
                  <p className="text-sm text-gray-500 mt-2">{t(`about.values.value${i + 1}.content`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-riverflow-600 text-white relative overflow-hidden">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="container px-4 md:px-6 z-10 relative grid gap-8 lg:grid-cols-2 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t("about.join.title")}</h2>
              <p className="text-white/90">{t("about.join.content")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="rounded-full bg-white text-riverflow-600 hover:bg-gray-100">
                  <Link href="/contact">{t("about.join.cta.contact")}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                  <Link href="/services">{t("about.join.cta.learn")}</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[["15+", "Years of Experience"], ["5000+", "Businesses Launched"], ["50+", "Consultants"], ["98%", "Satisfaction"]].map(([value, label], i) => (
                <motion.div key={i} variants={fadeInUp} className="rounded-lg bg-white/10 p-6 text-center">
                  <div className="text-4xl font-bold">{value}</div>
                  <p className="text-sm mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main> 
    </div>
  )
}
