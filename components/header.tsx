"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import RiverflowLogo from "./riverflow-logo"
import LanguageSelector from "./language-selector"
import { useTranslation } from "@/hooks/use-translation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const services = [
    { name: t("services.dropdown.business-formation"), href: "/services#business-formation" },
    { name: t("services.dropdown.trade-licensing"), href: "/services#trade-licensing" },
    { name: t("services.dropdown.visa-processing"), href: "/services#visa-processing" },
    { name: t("services.dropdown.office-solutions"), href: "/services#office-solutions" },
    { name: t("services.dropdown.banking-support"), href: "/services#banking-support" },
    { name: t("services.dropdown.business-consulting"), href: "/services#business-consulting" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200">
      {/* Glow border */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-riverflow-500 via-riverflow-600 to-riverflow-500 opacity-60" />

      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <RiverflowLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-riverflow-600 transition-colors">Home</Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-riverflow-600 flex items-center gap-1 transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 shadow-xl rounded-md">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="w-full">{service.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/services" className="w-full font-semibold text-riverflow-600">View All Services</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/team" className="hover:text-riverflow-600">Team</Link>
          <Link href="/pricing" className="hover:text-riverflow-600">Pricing</Link>
          <Link href="/contact" className="hover:text-riverflow-600">Contact</Link>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = "tel:800-552")}
              className="text-sm text-riverflow-600 flex items-center gap-1"
            >
              <Phone className="w-4 h-4" /> 800-552
            </Button>
          </div>
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700 text-sm px-5 shadow-sm"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl border-t">
          <nav className="flex flex-col px-4 py-4 space-y-4 text-sm">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

            {/* Services */}
            <div>
              <div className="font-semibold mb-2 text-riverflow-700">Services</div>
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
                  View All Services
                </Link>
              </div>
            </div>

            <Link href="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>

            <div className="flex items-center gap-3 pt-2">
              <LanguageSelector />
              <Button
                variant="ghost"
                size="sm"
                className="text-riverflow-600 flex items-center gap-1"
                onClick={() => (window.location.href = 'tel:800-552')}
              >
                <Phone className="w-4 h-4" /> 800-552
              </Button>
            </div>

            <Button
              asChild
              className="w-full rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700 mt-3"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
