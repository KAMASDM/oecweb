"use client";
import React from "react";
import Link from "next/link";
import { readingExams } from "@/lib/Reading/readingExams";

const Reading = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 border-b text-left">No</th>
            <th className="py-3 px-4 border-b text-left">Exam Name</th>
            <th className="py-3 px-4 border-b text-left">Exam Type</th>
            <th className="py-3 px-4 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {readingExams.map(
            ({ id, exam_name, exam_type, category, subCategory }, index) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b">{exam_name}</td>
                <td className="py-3 px-4 border-b">{exam_type}</td>
                <td className="py-3 px-4 border-b">
                  <Link
                    href={`/test-preparation/${category}/${subCategory}/${id}`}
                    target="_blank"
                  >
                    <button className="bg-primary-800 hover:bg-primary-600 text-white py-1 px-4 rounded">
                      Take Test
                    </button>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reading;
