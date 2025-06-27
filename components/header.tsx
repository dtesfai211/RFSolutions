// components/Header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Phone, Menu, X, ChevronDown, Briefcase, Building2, UserCheck,
  Layout, Banknote, Lightbulb
} from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSelector from "./language-selector"
import { useTranslation } from "@/hooks/use-translation"
import type { SiteSettings } from "@/types/siteSettings"
import RiverflowLogo from "./riverflow-logo"

export default function Header({ settings }: { settings: SiteSettings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const phone = settings?.phone || "+97190919991" // fallback

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
        <a href="/" className="flex items-center gap-2" aria-label="Home">
          {settings.logo?.asset?.url ? (
            <Image
              src={settings.logo.asset.url}
              alt={settings.siteTitle || "Site Logo"}
              width={160} // you can adjust this
              height={48}
              className="h-12 w-auto max-h-12 object-contain"
              priority
            />
          ) : (
            <RiverflowLogo />
          )}
        </a>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700" role="navigation" aria-label="Main navigation">
          <Link href="/" className="hover:text-riverflow-600 transition-all hover:scale-[1.03]">
            {t("nav.home")}
          </Link>

          {/* Services dropdown */}
          <div className="relative group inline-block" role="presentation">
            <button
              className="flex items-center gap-1 cursor-pointer hover:text-riverflow-600 transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>{t("nav.services")}</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div
              className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-100 shadow-lg rounded-md z-50 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200"
              role="menu"
              aria-label="Services dropdown"
            >
              <ul className="py-2">
                {services.map((s) => (
                  <li key={s.href} role="none">
                    <Link
                      href={s.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-riverflow-600 transition-colors"
                      role="menuitem"
                    >
                      {s.icon} {s.name}
                    </Link>
                  </li>
                ))}
                <li role="none">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-semibold text-riverflow-600 hover:bg-gray-100 transition-colors"
                    role="menuitem"
                  >
                    {t("nav.services")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Static Links */}
          {[
            { href: "/blog", label: t("nav.blog") },
            { href: "/team", label: t("nav.team") },
            { href: "/pricing", label: t("nav.pricing") },
            { href: "/contact", label: t("nav.contact") },
            { href: "/about", label: t("nav.about") },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-riverflow-600 transition-all hover:scale-[1.03]"
            >
              {item.label}
            </Link>
          ))}

          <LanguageSelector />
        </nav>

        {/* Phone CTA */}
        {phone && (
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = `tel:${phone}`)}
              className="text-sm text-riverflow-600 flex items-center gap-1"
              aria-label={`Call us at ${phone}`}
            >
              <Phone className="w-4 h-4" /> {phone}
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl border-t">
          <nav className="flex flex-col px-4 py-4 space-y-4 text-sm" role="menu">
            {[{ href: "/", label: t("nav.home") }, { href: "/blog", label: t("nav.blog") },
            { href: "/team", label: t("nav.team") }, { href: "/pricing", label: t("nav.pricing") },
            { href: "/contact", label: t("nav.contact") }, { href: "/about", label: t("nav.about") }
            ].map(link => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} role="menuitem">
                {link.label}
              </Link>
            ))}

            {/* Services Mobile */}
            <div>
              <div className="font-semibold mb-2 text-riverflow-700">{t("nav.services")}</div>
              <div className="pl-3 space-y-1 border-l border-riverflow-100">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block text-gray-600 hover:text-riverflow-600" onClick={() => setIsMenuOpen(false)}>
                    {s.name}
                  </Link>
                ))}
                <Link href="/services" className="block text-riverflow-600 font-semibold" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.services")}
                </Link>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSelector />
            </div>

            {/* Phone CTA (Mobile) */}
            {phone && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => (window.location.href = `tel:${phone}`)}
                className="text-sm text-riverflow-600 flex items-center gap-1"
              >
                <Phone className="w-4 h-4" /> {phone}
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}