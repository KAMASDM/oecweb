"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ROICalculator = () => {
  const [totalCost, setTotalCost] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [careerField, setCareerField] = useState("");
  const [result, setResult] = useState(null);

  const calculateROI = () => {
    if (!totalCost || !expectedSalary) {
      toast.error("Please fill required fields");
      return;
    }

    const cost = parseFloat(totalCost);
    const current = currentSalary ? parseFloat(currentSalary) : 0;
    const expected = parseFloat(expectedSalary);

    const salaryIncrease = expected - current;
    const paybackPeriod = cost / salaryIncrease;
    const tenYearROI = ((salaryIncrease * 10) / cost) * 100;

    setResult({
      salaryIncrease,
      paybackPeriod,
      tenYearROI,
    });
  };

  return (
    <div className="tool-card bg-slate-50 p-8 rounded-2xl border">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        💰 ROI Calculator
      </h3>
      <p className="text-gray-600 mb-6">
        Calculate the return on investment for your international education with
        career outcome projections.
      </p>
      <div className="calculator bg-white p-6 rounded-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Education Cost (Lakhs INR)
            </label>
            <input
              type="number"
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
              placeholder="Enter total cost"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Salary (Lakhs INR)
            </label>
            <input
              type="number"
              value={currentSalary}
              onChange={(e) => setCurrentSalary(e.target.value)}
              placeholder="Enter current salary"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expected Post-Study Salary (Lakhs INR)
            </label>
            <input
              type="number"
              value={expectedSalary}
              onChange={(e) => setExpectedSalary(e.target.value)}
              placeholder="Enter expected salary"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Career Field
            </label>
            <select
              value={careerField}
              onChange={(e) => setCareerField(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select Field</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="consulting">Consulting</option>
              <option value="healthcare">Healthcare</option>
              <option value="research">Research</option>
            </select>
          </div>
          <button
            onClick={calculateROI}
            className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Calculate ROI
          </button>

          {result && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3">ROI Analysis</h4>
              <p className="mb-1">
                <strong>Salary Increase:</strong> ₹
                {result.salaryIncrease.toFixed(1)} Lakhs/year
              </p>
              <p className="mb-1">
                <strong>Payback Period:</strong>{" "}
                {result.paybackPeriod.toFixed(1)} years
              </p>
              <p className="mb-1">
                <strong>10-Year ROI:</strong> {result.tenYearROI.toFixed(0)}%
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Calculations are estimates based on provided data
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
