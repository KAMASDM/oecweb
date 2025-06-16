"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Arjun Patel",
    program: "Computer Science, MIT",
    outcome: "Software Engineer at Google",
    image: "AP",
    rating: 5,
    text: "Coming from a middle-class family in Ahmedabad, studying at MIT seemed impossible. OEC India not only helped me secure admission but also guided me through a $50,000 scholarship application. Their essay coaching was phenomenal - they helped me articulate my passion for AI in a way that resonated with admissions committees.",
    results:
      "Secured $50,000 scholarship at MIT, Google job with ₹2.5 Cr package, 1500% ROI on education investment",
  },

  {
    id: 2,
    name: "Priya Sharma",
    program: "MBA, London Business School",
    outcome: "Management Consultant at McKinsey",
    image: "PS",
    rating: 5,
    text: "As a working professional with 4 years of experience, I needed expert guidance to transition from engineering to business. OEC India's team helped me identify the perfect MBA programs that aligned with my consulting aspirations. Their interview coaching was exceptional.",
    results:
      "40% scholarship at London Business School, McKinsey offer, 300% salary increase post-MBA",
  },

  {
    id: 3,
    name: "Rajesh Kumar",
    program: "Engineering, University of Toronto",
    outcome: "Canadian Permanent Resident",
    image: "RK",
    rating: 5,
    text: "Being from a small town in Rajasthan, I had limited exposure to international education opportunities. OEC India's counselors patiently explained every step of the Canadian education system and immigration process.",
    results:
      "Full scholarship at University of Toronto, Canadian PR in 2 years, successful tech career",
  },

  {
    id: 4,
    name: "Sneha Krishnan",
    program: "Medicine, University of Melbourne",
    outcome: "Practicing Physician in Australia",
    image: "SK",
    rating: 5,
    text: "My dream was to become a doctor, but the competition in India was intense. OEC India opened my eyes to opportunities in Australia, where the medical education system is excellent and there's a clear pathway to practice.",
    results:
      "Admission to University of Melbourne Medicine, successful medical practice in Australia",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl font-bold mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real students who achieved their dreams with our
            guidance
          </p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div
                      className="w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto md:mx-0 mb-4"
                      aria-hidden="true"
                    >
                      {currentTestimonial.image}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-primary-300 font-medium mb-2">
                      {currentTestimonial.program}
                    </p>
                    <p className="text-sm text-gray-300 mb-4">
                      {currentTestimonial.outcome}
                    </p>

                    <div
                      className="flex justify-center md:justify-start space-x-1 mb-4"
                      aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}
                    >
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <Quote
                      className="h-8 w-8 text-primary-400 mb-4"
                      aria-hidden="true"
                    />
                    <blockquote className="text-lg leading-relaxed mb-6 italic">
                      "{currentTestimonial.text}"
                    </blockquote>

                    <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4">
                      <h4 className="font-semibold text-green-300 mb-2">
                        Outstanding Results:
                      </h4>
                      <p className="text-sm text-green-100">
                        {currentTestimonial.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none ${
                    index === currentIndex ? "bg-primary-400" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/success-stories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            aria-label="View all success stories"
          >
            View All Success Stories
            <ChevronRight className="h-5 w-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;