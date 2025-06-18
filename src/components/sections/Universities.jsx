import React from "react";
import { GraduationCap } from "lucide-react";

const universities = [
  { name: "Harvard University", country: "USA" },
  { name: "Oxford University", country: "UK" },
  {
    name: "Massachusetts Institute of Technology",
    shortName: "MIT",
    country: "USA",
  },
  { name: "University of Toronto", country: "Canada" },
  { name: "University of Melbourne", country: "Australia" },
  { name: "Technical University Munich", shortName: "TUM", country: "Germany" },
];

const Universities = () => {
  return (
    <section
      className="py-16 bg-gray-50 border-b"
      aria-labelledby="university-logos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="university-logos-heading"
          className="text-center text-lg font-semibold text-gray-600 mb-8 flex items-center justify-center gap-2"
        >
          <GraduationCap
            className="h-5 w-5 text-primary-500"
            aria-hidden="true"
          />
          Trusted by top universities worldwide
        </h2>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-8 animate-infinite-scroll">
          {[...universities, ...universities].map((uni, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              role="listitem"
            >
              <div className="text-2xl md:text-3xl mb-2 text-primary-500">
                <GraduationCap className="h-8 w-8 mx-auto" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {uni.shortName || uni.name.split(" ")[0]}
              </h3>
              <p className="text-xs text-gray-500">
                {uni.name.includes(uni.shortName || uni.name.split(" ")[0])
                  ? uni.name
                  : `${uni.shortName || uni.name.split(" ")[0]}, ${
                      uni.country
                    }`}
              </p>
            </div>
          ))}
        </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            And 500+ other prestigious institutions worldwide
          </p>
        </div>
      </div>
    </section>
  );
}

export default Universities