"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConsultationForm from "../forms/ConsultationForm";
import { Menu, X, Phone, Mail, GraduationCap, ArrowRight } from "lucide-react";

const navigationItems = [
  { name: "Services", href: "/services" },
  { name: "Study Destinations", href: "/countries" },
  { name: "About Us", href: "/about" },
  { name: "Success Stories", href: "/successStories" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-2 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@oecindia.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail size={14} />
                <span>info@oecindia.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <GraduationCap size={16} />
              <span>Join 2,000+ students studying abroad!</span>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                OEC India
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-[#667eea] font-medium transition-colors duration-200 ${
                    pathname === item.href ? "text-[#667eea] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Book Free Consultation
                <ArrowRight size={16} />
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-gray-700 hover:text-[#667eea] font-medium ${
                    pathname === item.href ? "text-[#667eea] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4"
              >
                Book Free Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </nav>
      </header>
      {isModalOpen && (
        <ConsultationForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
