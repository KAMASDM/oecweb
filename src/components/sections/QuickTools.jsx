"use client";
import React from "react";
import CostCalculator from "../tools/CostCalculator";
import EligibilityChecker from "../tools/EligibilityChecker";

const QuickTools = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="quick-tools-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="quick-tools-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Quick Tools to Plan Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant insights about costs, eligibility, and university
            matches to make informed decisions about your study abroad plans
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CostCalculator />
          <EligibilityChecker />
        </div>
      </div>
    </section>
  );
}

export default QuickTools