import React from "react";

const SkeletonCard = ({ viewMode, coursesPerPage }) => {
  const skeletonCards = Array.from({ length: coursesPerPage }).map((_, i) => (
    <div
      key={`skel-${i}`}
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${
        viewMode === "list" ? "flex flex-col md:flex-row w-full" : "flex flex-col"
      }`}
    >
      <div className="p-6 w-full">
        <div className="flex items-start mb-4">
          <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse mr-4" />
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4 animate-pulse" />
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-full w-24 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="h-12 bg-gray-200 rounded animate-pulse" />
          <div className="h-12 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  ));

  return <>{skeletonCards}</>;
};

export default SkeletonCard;
