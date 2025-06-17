import React from "react";
import MultiStepForm from "@/components/forms/MultiStepForm";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactUs = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white mt-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Ready to start your international education journey? Get in touch
            with our expert counselors for personalized guidance
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Phone className="h-8 w-8 text-primary-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a
                href="tel:+919876543210"
                className="text-gray-600 text-sm mb-2 hover:text-primary-600"
              >
                +91 98765 43210
              </a>
              <p className="text-gray-500 text-xs">Mon-Sat: 9 AM - 8 PM</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919876543210"
                className="text-gray-600 text-sm mb-2 hover:text-green-600"
              >
                +91 98765 43210
              </a>
              <p className="text-gray-500 text-xs">24/7 Quick Support</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Mail className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:info@oecindia.com"
                className="text-gray-600 text-sm mb-2 hover:text-blue-600"
              >
                info@oecindia.com
              </a>
              <p className="text-gray-500 text-xs">Response within 2 hours</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Clock className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Emergency</h3>
              <a
                href="tel:+919876543212"
                className="text-gray-600 text-sm mb-2 hover:text-purple-600"
              >
                +91 98765 43212
              </a>
              <p className="text-gray-500 text-xs">24/7 for current students</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us about your goals and we'll create a personalized plan for
              your study abroad journey
            </p>
          </div>
          <MultiStepForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
