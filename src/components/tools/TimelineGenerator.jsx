"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const TimelineGenerator = () => {
  const [intake, setIntake] = useState("");
  const [programLevel, setProgramLevel] = useState("");
  const [targetCountries, setTargetCountries] = useState([]);
  const [timeline, setTimeline] = useState(null);

  const generateTimeline = () => {
    if (!intake || !programLevel) {
      toast.error("Please select intake and program level");
      return;
    }

    const timelines = {
      "fall-2025": {
        steps: [
          "Start now: Test preparation (Jan-Mar)",
          "University research and shortlisting (Mar-Apr)",
          "Application preparation (Apr-Jun)",
          "Submit applications (Jun-Jul)",
          "Visa application (Jul-Aug)",
          "Pre-departure preparations (Aug-Sep)",
        ],
      },
      "spring-2026": {
        steps: [
          "Test preparation (Feb-May)",
          "University research and shortlisting (May-Jun)",
          "Application preparation (Jun-Aug)",
          "Submit applications (Aug-Sep)",
          "Visa application (Sep-Nov)",
          "Pre-departure preparations (Nov-Dec)",
        ],
      },
      "fall-2026": {
        steps: [
          "Test preparation (Jun-Sep)",
          "University research and shortlisting (Sep-Oct)",
          "Application preparation (Oct-Jan)",
          "Submit applications (Jan-Feb)",
          "Visa application (Feb-May)",
          "Pre-departure preparations (May-Aug)",
        ],
      },
    };

    setTimeline(timelines[intake]);
  };

  return (
    <div className="tool-card bg-slate-50 p-8 rounded-2xl border">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        📅 Application Timeline Generator
      </h3>
      <p className="text-gray-600 mb-6">
        Generate a personalized timeline based on your target universities and
        intake preferences.
      </p>
      <div className="calculator bg-white p-6 rounded-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Intake
            </label>
            <select
              value={intake}
              onChange={(e) => setIntake(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select Intake</option>
              <option value="fall-2025">Fall 2025</option>
              <option value="spring-2026">Spring 2026</option>
              <option value="fall-2026">Fall 2026</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Program Level
            </label>
            <select
              value={programLevel}
              onChange={(e) => setProgramLevel(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select Level</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Countries
            </label>
            <select
              multiple
              value={targetCountries}
              onChange={(e) =>
                setTargetCountries(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          <button
            onClick={generateTimeline}
            className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Generate Timeline
          </button>

          {timeline && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3">
                Your Personalized Timeline
              </h4>
              <ol className="list-decimal pl-5 space-y-2">
                {timeline.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <p className="text-sm text-gray-500 mt-3">
                Book a consultation for detailed month-by-month planning
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineGenerator;
