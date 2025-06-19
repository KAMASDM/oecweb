"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  GraduationCap,
  BookOpen,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const exploreDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        exploreDropdownRef.current &&
        !exploreDropdownRef.current.contains(event.target)
      ) {
        setIsExploreOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Data
  const exploreCards = [
    {
      title: "Explore",
      subtitle: "universities & colleges abroad",
      bgColor: "bg-gradient-to-br from-secondary-400 to-secondary-500",
      href: "/universities",
      icon: GraduationCap,
    },
    {
      title: "Blogs",
      subtitle: "Study abroad articles & more",
      bgColor: "bg-gradient-to-br from-gray-400 to-gray-500",
      href: "/blogs",
      icon: BookOpen,
    },
    {
      title: "Events",
      subtitle: "Fairs, webinars & meetups",
      bgColor: "bg-gradient-to-br from-primary-400 to-primary-500",
      href: "/events",
      icon: Calendar,
    },
  ];

  const menuSections = [
    {
      title: "Top Universities",
      subtitle: "Search colleges & universities by country",
      items: [
        { name: "United States", href: "/universities/united-states" },
        { name: "Canada", href: "/universities/canada" },
        { name: "United Kingdom", href: "/universities/united-kingdom" },
        { name: "Germany", href: "/universities/germany" },
        { name: "Australia", href: "/universities/australia" },
        { name: "Explore All", href: "/universities" },
      ],
    },
    {
      title: "Country Guides",
      subtitle: "What, where, why of education across countries",
      items: [
        { name: "United States", href: "/country-guides/united-states" },
        { name: "Canada", href: "/country-guides/canada" },
        { name: "United Kingdom", href: "/country-guides/united-kingdom" },
        { name: "Germany", href: "/country-guides/germany" },
        { name: "Australia", href: "/country-guides/australia" },
        { name: "Explore All", href: "/country-guides" },
      ],
    },
    {
      title: "Popular Courses",
      subtitle: "Course details, structure, pre-reqs & more...",
      items: [
        { name: "Computer Science", href: "/popular-courses/computer-science" },
        { name: "MBA", href: "/popular-courses/mba" },
        {
          name: "Data Science & Analytics",
          href: "/popular-courses/data-science-analytics",
        },
        {
          name: "Mechanical Engineering",
          href: "/popular-courses/mechanical-engineering",
        },
        {
          name: "Business Management",
          href: "/popular-courses/business-management",
        },
        { name: "Explore All", href: "/popular-courses" },
      ],
    },
    {
      title: "University Deadlines",
      subtitle: "Know all about application deadlines",
      href: "/university-deadlines",
      isDeadlines: true,
    },
  ];

  const navigationItems = [
    { name: "Services", href: "/services" },
    { name: "Explore", hasDropdown: true },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-100 shadow-lg" : "bg-white"
      }`}
    >
      <div className="bg-primary-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
            <Link
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-primary-200 transition-colors text-xs md:text-sm"
            >
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </Link>
            <Link
              href="mailto:info@oecindia.com"
              className="flex items-center gap-2 hover:text-primary-200 transition-colors text-xs md:text-sm"
            >
              <Mail size={14} />
              <span>info@oecindia.com</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2 text-primary-100 text-sm">
            <GraduationCap size={16} />
            <span>Join 2,000+ students studying abroad!</span>
          </div>
        </div>
      </div>

      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden">
                  <img
                    src="/oec.png"
                    alt="OEC Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.hasDropdown ? exploreDropdownRef : null}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsExploreOpen(!isExploreOpen)}
                        className="flex items-center gap-1 text-gray-800 hover:text-primary-800 font-medium transition-colors duration-200 py-2"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isExploreOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isExploreOpen && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[90vw] max-w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-2/5 p-4 md:p-6 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                                {exploreCards.map((card, index) => (
                                  <Link
                                    key={index}
                                    href={card.href}
                                    className="group flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-gray-200"
                                  >
                                    <div
                                      className={`${card.bgColor} p-2 md:p-3 rounded-lg text-white shadow-sm`}
                                    >
                                      <card.icon size={20} />
                                    </div>
                                    <div>
                                      <h3 className="font-bold text-gray-900 text-base md:text-lg">
                                        {card.title}
                                      </h3>
                                      <p className="text-gray-600 text-xs md:text-sm mt-1">
                                        {card.subtitle}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="w-full md:w-3/5 flex flex-col md:flex-row">
                              <div className="w-full md:w-1/2 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
                                <div className="space-y-3">
                                  {menuSections.map((section, index) => (
                                    <div
                                      key={index}
                                      onClick={() => setActiveSection(index)}
                                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                        activeSection === index
                                          ? "bg-primary-50 border border-primary-100"
                                          : "hover:bg-gray-50"
                                      }`}
                                    >
                                      <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                                        {section.title}
                                      </h3>
                                      <p className="text-gray-500 text-xs md:text-sm">
                                        {section.subtitle}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="w-full md:w-1/2 p-4 md:p-6">
                                {menuSections[activeSection].isDeadlines ? (
                                  <div className="h-full flex flex-col justify-center">
                                    <div className="text-center p-4">
                                      <p className="text-gray-600 text-sm md:text-base mb-4">
                                        View all university application
                                        deadlines
                                      </p>
                                      <Link
                                        href={menuSections[activeSection].href}
                                        className="inline-block px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm md:text-base"
                                      >
                                        View Deadlines
                                      </Link>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-3">
                                    <h3 className="font-semibold text-gray-800 text-base md:text-lg">
                                      {menuSections[activeSection].title}
                                    </h3>
                                    <ul className="space-y-2">
                                      {menuSections[activeSection].items?.map(
                                        (item, itemIndex) => (
                                          <li key={itemIndex}>
                                            <Link
                                              href={item.href}
                                              className="block px-3 py-2 text-sm md:text-base rounded-lg hover:bg-primary-50 text-gray-700 transition-colors"
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-800 font-medium transition-colors duration-200 py-2 text-sm md:text-base"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          ref={mobileMenuRef}
          className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 shadow-lg"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-gray-100 last:border-0"
              >
                {item.hasDropdown ? (
                  <div className="py-3">
                    <button
                      onClick={() => setIsExploreOpen(!isExploreOpen)}
                      className="flex items-center justify-between w-full text-gray-700 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          isExploreOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isExploreOpen && (
                      <div className="mt-2 pl-4 space-y-3">
                        <div className="grid grid-cols-1 gap-3">
                          {exploreCards.map((card, index) => (
                            <Link
                              key={index}
                              href={card.href}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div
                                className={`${card.bgColor} p-2 rounded-lg text-white`}
                              >
                                <card.icon size={18} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  {card.title}
                                </h4>
                                <p className="text-gray-600 text-xs mt-1">
                                  {card.subtitle}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-primary-800 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;