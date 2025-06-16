"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { CheckCircle } from "lucide-react";

const qualificationOptions = [
  { value: "12th", label: "12th Grade" },
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
];

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    qualification: "",
    percentage: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkEligibility = () => {
    if (!formData.qualification || !formData.percentage) {
      toast.error("Please fill required fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const score = parseFloat(formData.percentage);
      let eligibleCountries = [];

      if (score >= 85) {
        eligibleCountries = [
          "USA (Top Universities)",
          "UK (Russell Group)",
          "Canada",
          "Australia",
          "Germany",
          "Singapore",
        ];
      } else if (score >= 75) {
        eligibleCountries = [
          "USA (Good Universities)",
          "UK",
          "Canada",
          "Australia",
          "Germany",
          "Ireland",
        ];
      } else if (score >= 65) {
        eligibleCountries = [
          "Canada",
          "Australia",
          "Germany",
          "Ireland",
          "New Zealand",
        ];
      } else {
        eligibleCountries = [
          "Germany (Some Programs)",
          "Ireland",
          "New Zealand",
        ];
      }

      setResult({ eligibleCountries, score });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 p-2 rounded-lg">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Eligibility Checker
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Highest Qualification
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={formData.qualification}
              onChange={(e) =>
                setFormData({ ...formData, qualification: e.target.value })
              }
            >
              <option value="">Select Qualification</option>
              {qualificationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Percentage/CGPA
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={formData.percentage}
              onChange={(e) =>
                setFormData({ ...formData, percentage: e.target.value })
              }
              placeholder="Enter your percentage or CGPA"
              min="0"
              max="100"
            />
          </div>

          <button
            onClick={checkEligibility}
            disabled={
              !formData.qualification || !formData.percentage || loading
            }
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Checking..." : "Check Eligibility"}
          </button>

          {result && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Eligibility Assessment
              </h4>
              <div className="space-y-2">
                <p className="font-medium text-green-800">
                  You're eligible for:
                </p>
                <ul className="space-y-1">
                  {result.eligibleCountries.map((country, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {country}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  Recommendation: Consider test preparation to improve your
                  options
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EligibilityChecker;