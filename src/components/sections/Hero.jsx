"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ajaxCall from "@/helpers/ajaxCall";
import ConsultationForm from "../forms/ConsultationForm";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSections, setHeroSections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHeroSections = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall("/about/hero-sections/", {
          method: "GET",
        });
        if (response?.data?.results?.length > 0) {
          setHeroSections(response.data.results);
        } else {
          setHeroSections([
            {
              id: 3,
              title: "Craft Your Own Future",
              subtitle: "We Bridge Your Ambition with a World-Class Education",
              description:
                "<p>Imagine a future without boundaries. At OEC India, we believe in the power of your dreams. As your dedicated overseas education partner, we provide personalized counseling and unwavering support to connect you with the perfect course and university abroad. Let us transform your aspirations into an international reality. The world is waiting for you.</p>",
              background_image:
                "https://sweekarme.in/media/about/hero/about-us-2_tNVk7YA.jpg",
              cta_text: "Contact us Today",
              cta_link: "/contact-us",
              is_active: true,
            },
            {
              id: 2,
              title: "Your Journey to a Global Future Starts Here",
              subtitle: "Expert Guidance for Your Overseas Education Dream",
              description:
                "<p>OEC India is your trusted partner in turning your study abroad aspirations into reality. For over two decades, we have been the one-stop solution for students across India, offering comprehensive and personalized counseling for top universities in the UK, USA, Canada, Australia, and New Zealand. From course and university selection to visa assistance and pre-departure briefings, our experienced counselors are dedicated to guiding you at every step. Begin your global education journey with confidence.</p>",
              background_image:
                "https://sweekarme.in/media/about/hero/about-us-2_tNVk7YA.jpg",
              cta_text: "Contact us Today",
              cta_link: "/contact-us",
              is_active: true,
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching hero sections:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroSections();
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (heroSections.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSections.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroSections.length]);

  if (isLoading || heroSections.length === 0) {
    return <div className="min-h-screen bg-gray-200 animate-pulse"></div>;
  }

  const currentHero = heroSections[currentSlide];

  return (
    <>
      <section
        className="relative mt-20 lg:mt-28 min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentHero.background_image})`,
        }}
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10 py-12">
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {currentHero.title}
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-500 font-medium">
              {currentHero.subtitle}
            </h2>

            <div
              className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: currentHero.description }}
            />
          </div>

          <div className="mt-8 md:mt-10">
            {currentHero.cta_link ? (
              <Link
                href={currentHero.cta_link}
                className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors duration-200 text-base md:text-lg"
              >
                {currentHero.cta_text}
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors duration-200 text-base md:text-lg"
              >
                {currentHero.cta_text}
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {heroSections.length > 1 && (
          <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
            {heroSections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
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
