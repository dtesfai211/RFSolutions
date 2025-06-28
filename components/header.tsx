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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0c2340] via-[#0f2c59] to-[#0c2340] shadow-md text-white border-b border-white/10 backdrop-blur-xl">
      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-riverflow-400 via-riverflow-600 to-riverflow-400 opacity-70" />

      <div className="container mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          {settings.logo?.asset?.url ? (
            <Image
              src={settings.logo.asset.url}
              alt={settings.siteTitle || "Riverflow Logo"}
              width={160}
              height={48}
              className="h-12 w-auto object-contain drop-shadow-xl brightness-125 contrast-110"
              priority
            />
          ) : (
            
            <RiverflowLogo className="h-12 w-auto drop-shadow-lg text-white brightness-125" />

          )}
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {[
            { href: "/", label: t("nav.home") },
            { href: "/about", label: t("nav.about") },
            { href: "/pricing", label: t("nav.pricing") },
            { href: "/blog", label: t("nav.blog") },
            { href: "/team", label: t("nav.team") },
            { href: "/contact", label: t("nav.contact") },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-riverflow-300 transition-all duration-200 hover:underline underline-offset-4"
            >
              {label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-riverflow-300 transition-all">
              <span>{t("nav.services")}</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-900 rounded-md shadow-lg z-50 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top-left">
              <ul className="py-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 hover:text-riverflow-600 transition-colors"
                    >
                      {s.icon} {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <LanguageSelector />
        </nav>

        {/* Right Side CTA & Contact */}
        <div className="hidden md:flex items-center gap-4">
          {settings.phone && (
            <a
              href={`tel:${settings.phone}`}
              className="text-sm font-medium hover:text-riverflow-300 flex items-center gap-1"
            >
              <Phone className="w-4 h-4" /> {settings.phone}
            </a>
          )}
          <Button className="rounded-full bg-riverflow-600 hover:bg-riverflow-700 text-white px-6 py-2 text-sm font-semibold shadow-lg transition">
            {t("cta.get-started")}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#0f2c59]/95 shadow-inner backdrop-blur-md">
          <nav className="flex flex-col space-y-2 text-sm">
            {[{ href: "/", label: t("nav.home") },
            { href: "/about", label: t("nav.about") },
            { href: "/pricing", label: t("nav.pricing") },
            { href: "/blog", label: t("nav.blog") },
            { href: "/team", label: t("nav.team") },
            { href: "/contact", label: t("nav.contact") },].map(link => (
              <Link key={link.href} href={link.href} className="text-white hover:text-riverflow-300">
                {link.label}
              </Link>
            ))}
            <div>
              <p className="mt-4 font-semibold">{t("nav.services")}</p>
              <div className="ml-3 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="text-white/80 hover:text-white">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            {settings.phone && (
              <a href={`tel:${settings.phone}`} className="mt-4 text-sm text-white/80 hover:text-white">
                <Phone className="inline-block mr-2 h-4 w-4" />
                {settings.phone}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>

  )
}