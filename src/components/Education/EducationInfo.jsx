import React from "react";

export default function EducationCard({ degree, institution, year, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
      <p className="text-gray-600 font-medium mt-1">{institution}</p>
      <span className="text-sm text-gray-500">{year}</span>
      <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
    </div>
  );
}
