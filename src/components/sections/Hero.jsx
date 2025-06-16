"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ConsultationForm from "../forms/ConsultationForm";
import { ArrowRight, Users, Award, Globe, Clock } from "lucide-react";

const Hero = () => {
  const [counters, setCounters] = useState({
    students: 0,
    visa: 0,
    partners: 0,
    years: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection && !animationTriggered) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setAnimationTriggered(true);
          animateCounters();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationTriggered]);

  const animateCounters = () => {
    const targets = {
      students: 2000,
      visa: 95,
      partners: 500,
      years: 10,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        students: Math.floor(targets.students * progress),
        visa: Math.floor(targets.visa * progress),
        partners: Math.floor(targets.partners * progress),
        years: Math.floor(targets.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  };

  return (
    <>
      <section
        id="hero-section"
        className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white"
        aria-labelledby="hero-heading"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-32 pb-40">
          <div className="text-center space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="block">From Application to Graduation:</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Your Trusted Partner
                </span>
                <span className="block">for World-Class Education</span>
              </h1>

              <p
                className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
                aria-label="Success statistics"
              >
                Join {counters.students}+ students who've successfully started
                their international education journey with India's most trusted
                overseas education consultant
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                aria-label="Book free consultation"
              >
                Book Your Free Consultation Today
                <ArrowRight size={20} aria-hidden="true" />
              </button>
              <Link
                href="/services"
                className="flex items-center gap-2 border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200"
                aria-label="Explore our services"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in-up">
              <div
                className="text-center"
                aria-label={`${counters.students} students placed`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Users
                    className="h-8 w-8 text-yellow-400 mr-2"
                    aria-hidden="true"
                  />
                  <span className="text-4xl md:text-5xl font-bold">
                    {counters.students}+
                  </span>
                </div>
                <p className="text-blue-200">Students Placed</p>
              </div>

              <div
                className="text-center"
                aria-label={`${counters.visa}% visa success rate`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Award
                    className="h-8 w-8 text-yellow-400 mr-2"
                    aria-hidden="true"
                  />
                  <span className="text-4xl md:text-5xl font-bold">
                    {counters.visa}%
                  </span>
                </div>
                <p className="text-blue-200">Visa Success Rate</p>
              </div>

              <div
                className="text-center"
                aria-label={`${counters.partners} university partners`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Globe
                    className="h-8 w-8 text-yellow-400 mr-2"
                    aria-hidden="true"
                  />
                  <span className="text-4xl md:text-5xl font-bold">
                    {counters.partners}+
                  </span>
                </div>
                <p className="text-blue-200">University Partners</p>
              </div>

              <div
                className="text-center"
                aria-label={`${counters.years} years experience`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Clock
                    className="h-8 w-8 text-yellow-400 mr-2"
                    aria-hidden="true"
                  />
                  <span className="text-4xl md:text-5xl font-bold">
                    {counters.years}
                  </span>
                </div>
                <p className="text-blue-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L1440 120L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
      {isModalOpen && (
        <ConsultationForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Hero;
