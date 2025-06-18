"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

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
      className="py-10 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Premium Student Reviews
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Why are we the best study abroad consultants?
          </p>
        </div>

        <div className="relative">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-primary-200">
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-full lg:w-1/3">
                    <div className="flex flex-col md:flex-row lg:flex-col items-center gap-6">
                      <div
                        className="w-32 h-32 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                        aria-hidden="true"
                      >
                        {currentTestimonial.image}
                      </div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-semibold mb-1 text-primary-900">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-primary-600 font-medium mb-2">
                          {currentTestimonial.program}
                        </p>
                        <p className="text-sm text-primary-700 mb-4">
                          {currentTestimonial.outcome}
                        </p>
                        <div
                          className="flex justify-center lg:justify-start space-x-1 mb-4"
                          aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}
                        >
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 text-yellow-400 fill-current"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 lg:border-l lg:border-primary-200 lg:pl-8">
                    <div className="relative">
                      <Quote
                        className="h-10 w-10 text-primary-400 mb-4 opacity-20"
                        aria-hidden="true"
                      />
                      <blockquote className="text-lg leading-relaxed mb-6 text-gray-700 pl-8 -mt-8">
                        "{currentTestimonial.text}"
                      </blockquote>
                    </div>

                    <div className="bg-primary-50 border border-primary-200 rounded-xl p-5">
                      <h4 className="font-semibold text-primary-800 mb-2">
                        Outstanding Results:
                      </h4>
                      <p className="text-primary-700">
                        {currentTestimonial.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border border-primary-300 rounded-full text-primary-600 hover:bg-primary-50 transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-200 focus:outline-none ${
                    index === currentIndex ? "bg-primary-600" : "bg-primary-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border border-primary-300 rounded-full text-primary-600 hover:bg-primary-50 transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;