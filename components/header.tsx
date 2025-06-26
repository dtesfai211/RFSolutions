"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, ChevronDown, Briefcase, Building2, UserCheck, Layout, Banknote, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import RiverflowLogo from "./riverflow-logo"
import LanguageSelector from "./language-selector"
import { useTranslation } from "@/hooks/use-translation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const services = [
    {
      name: t("services.dropdown.business-formation"),
      href: "/services#business-formation",
      icon: <Briefcase className="w-4 h-4 text-riverflow-600" />,
    },
    {
      name: t("services.dropdown.trade-licensing"),
      href: "/services#trade-licensing",
      icon: <Building2 className="w-4 h-4 text-riverflow-600" />,
    },
    {
      name: t("services.dropdown.visa-processing"),
      href: "/services#visa-processing",
      icon: <UserCheck className="w-4 h-4 text-riverflow-600" />,
    },
    {
      name: t("services.dropdown.office-solutions"),
      href: "/services#office-solutions",
      icon: <Layout className="w-4 h-4 text-riverflow-600" />,
    },
    {
      name: t("services.dropdown.banking-support"),
      href: "/services#banking-support",
      icon: <Banknote className="w-4 h-4 text-riverflow-600" />,
    },
    {
      name: t("services.dropdown.business-consulting"),
      href: "/services#business-consulting",
      icon: <Lightbulb className="w-4 h-4 text-riverflow-600" />,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-riverflow-500 via-riverflow-600 to-riverflow-500 opacity-60" />

      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <RiverflowLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.home") || "Home"}
          </Link>

          {/* Services Dropdown - Hover */}
          {/* Services Dropdown - Hover */}
          <div className="relative group inline-block">
            <div className="flex items-center gap-1 cursor-pointer hover:text-riverflow-600 transition-colors">
              <span>{t("nav.services") || "Services"}</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Dropdown menu */}
            <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-100 shadow-lg rounded-md z-50 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200">
              <ul className="py-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-riverflow-600 transition-colors"
                    >
                      {service.icon} {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-semibold text-riverflow-600 hover:bg-gray-100 transition-colors"
                  >
                    {t("nav.services")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>


          <Link href="/blog" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.blog") || "Blog"}
          </Link>
          <Link href="/team" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.team") || "Team"}
          </Link>
          <Link href="/pricing" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.pricing") || "Pricing"}
          </Link>
          <Link href="/contact" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.contact") || "Contact"}
          </Link>
          <Link href="/faq" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.faq") || "FAQ"}
          </Link>
          <Link href="/about" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.about") || "About Us"}
          </Link>

          <div className="flex items-center gap-3">
            <LanguageSelector />
          </div>
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (window.location.href = "tel:87190919991")}
            className="text-sm text-riverflow-600 flex items-center gap-1"
          >
            <Phone className="w-4 h-4" /> +87190919991
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl border-t">
          <nav className="flex flex-col px-4 py-4 space-y-4 text-sm">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </Link>

            {/* Services (mobile) */}
            <div>
              <div className="font-semibold mb-2 text-riverflow-700">{t("nav.services")}</div>
              <div className="pl-3 space-y-1 border-l border-riverflow-100">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block text-gray-600 hover:text-riverflow-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block text-riverflow-600 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.services")}
                </Link>
              </div>
            </div>

            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
              {t("nav.blog")}
            </Link>
            <Link href="/team" onClick={() => setIsMenuOpen(false)}>
              {t("nav.team")}
            </Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
              {t("nav.pricing")}
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              {t("nav.contact")}
            </Link>
            <Link href="/faq" onClick={() => setIsMenuOpen(false)}>
              {t("nav.faq")}
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              {t("nav.about")}
            </Link>

            <div className="flex items-center gap-3 pt-2">
              <LanguageSelector />
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = "tel:87190919991")}
              className="text-sm text-riverflow-600 flex items-center gap-1"
            >
              <Phone className="w-4 h-4" /> +87190919991
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
