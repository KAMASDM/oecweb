"use client";
import ajaxCall from "@/helpers/ajaxCall";
import React, { useEffect, useState } from "react";

const CountryPage = ({ normalCountry }) => {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await ajaxCall("/academics/academics/countries/", {
          method: "GET",
        });

        if (response?.data?.results?.length > 0) {
          setCountryData(
            response.data.results.find(
              (country) => country.name === normalCountry
            )
          );
        } else {
          setCountryData([]);
        }
      } catch (error) {
        console.log("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {countryData.name}
        </h1>
        <p className="text-secondary-500 text-xl md:text-2xl max-w-5xl mx-auto">
          {countryData.description}
        </p>
      </div>
    </div>
  );
};

export default CountryPage;
