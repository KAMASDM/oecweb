"use client";
import React, { useEffect, useState } from "react";
import ajaxCall from "@/helpers/ajaxCall";
import { CheckCheck, Newspaper, BookOpenCheck } from "lucide-react";
import Blogs from "./Blogs";
import Courses from "./Courses";

const tabs = [
  { id: "blogs", name: "Blogs", icon: CheckCheck },
  { id: "courses", name: "Courses", icon: BookOpenCheck },
  { id: "latest-news", name: "Latest News", icon: Newspaper },
];

const CountryPage = ({ normalCountry }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState({});
  const [activeTab, setActiveTab] = useState("blogs");

  const handleChangeTab = (tabId) => setActiveTab(tabId);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await ajaxCall("/academics/academics/countries/", {
          method: "GET",
        });

        if (response?.data?.results?.length > 0) {
          const data = response.data.results.find(
            (country) => country.name === normalCountry
          );
          setCountryData(data);
        } else {
          setCountryData({});
        }
      } catch (error) {
        setCountryData({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [normalCountry]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "blogs":
        return <Blogs country={normalCountry} />;
      case "courses":
        return <Courses country={normalCountry} />;
      case "latest-news":
        return <p className="text-center">Coming soon: Latest News</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 mb-10 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {countryData.name}
          </h1>
          <p className="text-secondary-500 text-xl md:text-3xl max-w-5xl mx-auto">
            {countryData.description}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                activeTab === id
                  ? "bg-primary-800 text-white"
                  : "bg-white text-primary-800 border border-primary-800 shadow"
              }`}
              onClick={() => handleChangeTab(id)}
            >
              <Icon className="w-4 h-4 mr-2 text-secondary-500" />
              {name}
            </button>
          ))}
        </div>

        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CountryPage;
