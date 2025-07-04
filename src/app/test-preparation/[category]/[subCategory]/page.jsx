"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import { componentMap, testConfig, allTestCategories } from "@/lib/test-config";

const TestComponentPage = () => {
  const params = useParams();
  const { category, subCategory } = params;

  const mainTest = testConfig[category];

  const categoryKey = Object.keys(allTestCategories[category] || {}).find(
    (key) => allTestCategories[category][key].slug === subCategory
  );

  const ComponentToRender = categoryKey
    ? componentMap[category]?.[categoryKey]
    : null;

  if (!ComponentToRender || !mainTest) {
    notFound();
  }

  const categoryTitle =
    allTestCategories[category][categoryKey].title || "Practice";

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">{mainTest.title}</h1>
          <p className="text-secondary-500 text-xl">{categoryTitle}</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {ComponentToRender}
        </div>
      </main>
    </div>
  );
};

export default TestComponentPage;
