"use client";
import React, { useEffect, useState } from "react";
import ajaxCall from "@/helpers/ajaxCall";
import {
  School,
  FileText,
  IdCard,
  GraduationCap,
  Plane,
  Headset,
  CircleDollarSign,
  Briefcase,
  Landmark,
} from "lucide-react";

const getIcon = (iconClass) => {
  const iconMap = {
    "fas fa-university": <School size={32} />,
    "fas fa-passport": <IdCard size={32} />,
    "fas fa-file-alt": <FileText size={32} />,
    "fas fa-graduation-cap": <GraduationCap size={32} />,
    "fas fa-dollar-sign": <CircleDollarSign size={32} />,
    "fas fa-plane-departure": <Plane size={32} />,
    "fas fa-briefcase": <Briefcase size={32} />,
    "fas fa-hand-holding-usd": <Landmark size={32} />,
  };
  return iconMap[iconClass] || <Headset size={32} />;
};

const parseKeyPoints = (htmlString) => {
  if (!htmlString) return [];
  const matches = htmlString.match(/<li>(.*?)<\/li>/g);
  return matches
    ? matches.map((match) => match.replace(/<\/?li>/g, "").trim())
    : [];
};

const parseNotes = (htmlString) => {
  if (!htmlString) return "No additional notes.";
  return htmlString.replace(/<p>|<\/p>|&#39;/g, "").replace(/'/g, "'");
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const response = await ajaxCall("/services/services", {
          method: "GET",
        });

        if (response?.data?.results?.length > 0) {
          const formattedServices = response.data.results.map((service) => ({
            icon: getIcon(service.icon_class),
            title: service.name,
            description: service.short_description,
            features: parseKeyPoints(service.key_points),
            included: `Note: ${parseNotes(service.notes)}`,
          }));
          setServices(formattedServices);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.log("Error fetching services:", error);
        setServices([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Study Abroad Services
          </h1>
          <p className="text-secondary-500 text-lg md:text-xl max-w-3xl mx-auto">
            End-to-end support for your international education journey, backed
            by 10 years of expertise and a 95% success rate
          </p>
        </div>
      </div>

      <section className="content-section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading
              ? [...Array(6)].map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="service-card bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col animate-pulse"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-xl mb-6"></div>
                      <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                      <div className="space-y-2 mb-6">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 mt-1 shrink-0"></div>
                          <div className="w-full h-4 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 mt-1 shrink-0"></div>
                          <div className="w-full h-4 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 mt-1 shrink-0"></div>
                          <div className="w-4/5 h-4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="mt-auto pt-6">
                        <div className="p-4 bg-gray-100 rounded-lg">
                          <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : services.map((service, index) => (
                  <div
                    key={index}
                    className="service-card bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="service-icon w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center text-white mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="service-features space-y-2 text-gray-700 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 font-bold mr-2 mt-1">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <div className="p-4 bg-primary-50 text-primary-800 rounded-lg border-l-4 border-primary-400">
                        <strong>{service.included.split(":")[0]}:</strong>
                        {service.included.substring(
                          service.included.indexOf(":") + 1
                        )}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
