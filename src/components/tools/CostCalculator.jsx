"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Calculator, IndianRupee } from "lucide-react";

const countryOptions = [
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "germany", label: "Germany" },
];

const programOptions = [
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
  { value: "phd", label: "PhD" },
];

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    country: "",
    program: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    if (!formData.country || !formData.program) {
      toast.error("Please fill required fields");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const costs = calculateCosts(formData.country, formData.program);
      setResult(costs);
      setLoading(false);
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setResult(null);
  };

  function calculateCosts(country, program) {
    const costData = {
      usa: {
        bachelor: { annualCost: 25, duration: 4 },
        master: { annualCost: 30, duration: 2 },
        phd: { annualCost: 20, duration: 5 },
      },
      uk: {
        bachelor: { annualCost: 20, duration: 3 },
        master: { annualCost: 25, duration: 1 },
        phd: { annualCost: 18, duration: 3 },
      },
      canada: {
        bachelor: { annualCost: 20, duration: 3 },
        master: { annualCost: 25, duration: 1 },
        phd: { annualCost: 18, duration: 3 },
      },
      australia: {
        bachelor: { annualCost: 20, duration: 3 },
        master: { annualCost: 25, duration: 1 },
        phd: { annualCost: 18, duration: 3 },
      },
      germany: {
        bachelor: { annualCost: 20, duration: 3 },
        master: { annualCost: 25, duration: 1 },
        phd: { annualCost: 18, duration: 3 },
      },
    };

    const data = costData[country]?.[program] || {
      annualCost: 15,
      duration: 3,
    };
    return {
      annualCost: data.annualCost,
      totalCost: data.annualCost * data.duration,
      duration: data.duration,
    };
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-100 p-2 rounded-lg">
            <Calculator className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Study Abroad Cost Calculator
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Country
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            >
              <option value="">Select Country</option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Level
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={formData.program}
              onChange={(e) => handleInputChange("program", e.target.value)}
            >
              <option value="">Select Program</option>
              {programOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!formData.country || !formData.program || loading}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Calculating..." : "Calculate Cost"}
          </button>

          {result && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <IndianRupee className="h-4 w-4" />
                Estimated Total Cost
              </h4>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>₹{result.totalCost} Lakhs</strong> (Total)
                </p>
                <p>Annual Cost: ₹{result.annualCost} Lakhs</p>
                <p>Duration: {result.duration} years</p>
                <p className="text-xs text-gray-600 mt-2">
                  *Includes tuition and living expenses
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
