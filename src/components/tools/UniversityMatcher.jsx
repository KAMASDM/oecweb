"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UniversityMatcher = () => {
  const [gpa, setGpa] = useState("");
  const [testScore, setTestScore] = useState("");
  const [field, setField] = useState("");
  const [budget, setBudget] = useState("");
  const [matches, setMatches] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const matchUniversities = () => {
    if (!gpa || !field || !budget) {
      toast.error("Please fill required fields");
      return;
    }

    const score = parseFloat(gpa);
    let matchedUniversities = [];

    if (score >= 85) {
      matchedUniversities = [
        "Harvard University",
        "Stanford University",
        "MIT",
        "University of Oxford",
        "University of Cambridge",
      ];
    } else if (score >= 75) {
      matchedUniversities = [
        "University of Toronto",
        "University of Melbourne",
        "Imperial College London",
        "UC Berkeley",
        "Carnegie Mellon University",
      ];
    } else {
      matchedUniversities = [
        "Arizona State University",
        "University of Calgary",
        "Griffith University",
        "University of Liverpool",
      ];
    }

    // Filter by budget if selected
    if (budget === "10-20") {
      matchedUniversities = matchedUniversities.filter(
        (uni) =>
          uni.includes("Calgary") ||
          uni.includes("Liverpool") ||
          uni.includes("Griffith")
      );
    } else if (budget === "20-40") {
      matchedUniversities = matchedUniversities.filter(
        (uni) =>
          uni.includes("Toronto") ||
          uni.includes("Melbourne") ||
          uni.includes("Arizona")
      );
    }

    setMatches(matchedUniversities);
    setShowResults(true);
  };

  return (
    <div className="tool-card bg-slate-50 p-8 rounded-2xl border">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        🎯 Advanced University Matcher
      </h3>
      <p className="text-gray-600 mb-6">
        Find universities that match your profile with detailed filters for
        ranking, location, specialization, and career outcomes.
      </p>
      <div className="calculator bg-white p-6 rounded-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Academic Score (Percentage/CGPA)
            </label>
            <input
              type="number"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              placeholder="Enter your academic score"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Test Score (SAT/GRE/GMAT)
            </label>
            <input
              type="number"
              value={testScore}
              onChange={(e) => setTestScore(e.target.value)}
              placeholder="Enter your test score"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select Field</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
              <option value="computer-science">Computer Science</option>
              <option value="medicine">Medicine</option>
              <option value="arts">Arts & Humanities</option>
              <option value="social-sciences">Social Sciences</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget Range (Annual)
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select Budget</option>
              <option value="10-20">10-20 Lakhs INR</option>
              <option value="20-40">20-40 Lakhs INR</option>
              <option value="40-60">40-60 Lakhs INR</option>
              <option value="60+">60+ Lakhs INR</option>
            </select>
          </div>
          <button
            onClick={matchUniversities}
            className="w-full bg-primary-800 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Find Perfect Matches
          </button>

          {showResults && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3">
                Your University Matches
              </h4>
              <p className="mb-2">
                <strong>Top matches for your profile:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {matches.slice(0, 5).map((uni, index) => (
                  <li key={index}>{uni}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Book a consultation for detailed university analysis
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityMatcher;
