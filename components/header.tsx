"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import RiverflowLogo from "./riverflow-logo"
import LanguageSelector from "./language-selector"
import { useTranslation } from "@/hooks/use-translation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  // Define services for the dropdown
  const services = [
    { name: t("services.dropdown.business-formation") || "Business Formation", href: "/services#business-formation" },
    { name: t("services.dropdown.trade-licensing") || "Trade Licensing", href: "/services#trade-licensing" },
    { name: t("services.dropdown.visa-processing") || "Visa Processing", href: "/services#visa-processing" },
    { name: t("services.dropdown.office-solutions") || "Office Solutions", href: "/services#office-solutions" },
    { name: t("services.dropdown.banking-support") || "Banking Support", href: "/services#banking-support" },
    {
      name: t("services.dropdown.business-consulting") || "Business Consulting",
      href: "/services#business-consulting",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <RiverflowLogo />
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-riverflow-600 transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium hover:text-riverflow-600 transition-colors flex items-center">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="w-full">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/services" className="w-full font-medium text-riverflow-600">
                  {t("services.dropdown.all") || "View All Services"}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/team" className="text-sm font-medium hover:text-riverflow-600 transition-colors">
            Meet our team
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-riverflow-600 transition-colors">
            Contact us
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-riverflow-600 transition-colors">
            Pricing
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSelector />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm"
              onClick={() => (window.location.href = "tel:800-552")}
            >
              <Phone className="h-4 w-4 mr-2" /> 800 - LLC (552)
            </Button>
          </div>
        </nav>
        <div className="hidden md:block">
          <Button asChild className="rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 border-t bg-white">
            <Link
              href="/"
              className="text-sm font-medium hover:text-riverflow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="space-y-2">
              <div className="text-sm font-medium">Services</div>
              <div className="pl-4 space-y-2 border-l-2 border-riverflow-100">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-sm text-gray-600 hover:text-riverflow-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block text-sm font-medium text-riverflow-600 hover:text-riverflow-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("services.dropdown.all") || "View All Services"}
                </Link>
              </div>
            </div>

            <Link
              href="/team"
              className="text-sm font-medium hover:text-riverflow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Meet our team
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-riverflow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-riverflow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-riverflow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-riverflow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-riverflow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex items-center gap-2 py-2">
              <LanguageSelector />
              <span className="text-sm text-gray-500">Change Language</span>
            </div>
            <Button asChild className="w-full rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700">
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
