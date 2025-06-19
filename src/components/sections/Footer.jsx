import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

const footerSections = {
  services: [
    { name: "University Selection", href: "/services" },
    { name: "Application Support", href: "/services" },
    { name: "Visa Assistance", href: "/services" },
    { name: "Financial Planning", href: "/services" },
    { name: "Pre-Departure Support", href: "/services" },
    { name: "Post-Arrival Support", href: "/services" },
    { name: "Career Guidance", href: "/services" },
    { name: "Alumni Network", href: "/services" },
  ],
  destinations: [
    { name: "Study in USA", href: "/countries" },
    { name: "Study in UK", href: "/countries" },
    { name: "Study in Canada", href: "/countries" },
    { name: "Study in Australia", href: "/countries" },
    { name: "Study in Germany", href: "/countries" },
    { name: "Study in Singapore", href: "/countries" },
    { name: "Study in Ireland", href: "/countries" },
    { name: "Study in New Zealand", href: "/countries" },
  ],
  resources: [
    { name: "University Rankings", href: "/resources" },
    { name: "Scholarship Database", href: "/resources" },
    { name: "Cost Calculators", href: "/resources" },
    { name: "Eligibility Checker", href: "/resources" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog & Articles", href: "/resources" },
    { name: "Download Center", href: "/resources" },
    { name: "FAQ", href: "/resources" },
  ],
  contact: [
    { name: "Book Free Consultation", href: "/consultation" },
    { name: "Office Locations", href: "/contact" },
    { name: "Working Hours", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Twitter, href: "#", name: "Twitter" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primary-800 text-white"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 id="footer-heading" className="sr-only">
          Footer navigation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-2">
              <img
                src="/oec.png"
                alt="Overseas Education Consultants"
                width={120}
                height={120}
              />
            </div>
            <p className="text-white mb-4 text-sm">
              Your trusted partner for international education with 10 years of
              experience and 2,000+ successful placements.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Established:</strong> 2015
              </p>
              <p>
                <strong>Students Placed:</strong> 2,000+
              </p>
              <p>
                <strong>Countries:</strong> 15+
              </p>
              <p>
                <strong>Success Rate:</strong> 95%
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-secondary-500 hover:text-white transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerSections.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-white transition-colors duration-200 text-sm"
                    aria-label={`Learn about ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              {footerSections.destinations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-white transition-colors duration-200 text-sm"
                    aria-label={`Study in ${item.name.replace(
                      "Study in ",
                      ""
                    )}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerSections.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-white transition-colors duration-200 text-sm"
                    aria-label={`View ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={16}
                  className="text-primary-400 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium">Head Office: Mumbai</p>
                  <p className="text-white">
                    123 Education Hub, MG Road
                    <br />
                    Andheri East, Mumbai 400069
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone
                  size={16}
                  className="text-primary-400"
                  aria-hidden="true"
                />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  size={16}
                  className="text-primary-400"
                  aria-hidden="true"
                />
                <a href="mailto:info@oecindia.com" className="hover:underline">
                  info@oecindia.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-secondary-500" aria-hidden="true" />
                <a
                  href="tel:+919876543212"
                  className="font-medium text-secondary-500 hover:underline"
                >
                  Emergency: +91 98765 43212
                </a>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {footerSections.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-white transition-colors duration-200 text-sm"
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-500 mt-12 pt-8 text-center text-sm text-white">
          <p>
            &copy; {currentYear} OEC India. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-white underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-white underline">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link href="/disclaimer" className="hover:text-white underline">
              Disclaimer
            </Link>{" "}
            |{" "}
            <Link href="/sitemap" className="hover:text-white underline">
              Sitemap
            </Link>
          </p>
          <p className="mt-2">
            Registered Education Consultant | ICEF Certified | British Council
            Partner | NAFSA Member
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
