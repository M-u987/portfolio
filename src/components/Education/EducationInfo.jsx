import React from "react";

export default function EducationCard({ degree, institution, year, description }) {
  return (
    <div className="shadow-md rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold ">{degree}</h3>
      <p className="font-medium mt-1">{institution}</p>
      <span className="text-sm ">{year}</span>
      <p className="mt-4 leading-relaxed">{description}</p>
    </div>
  );
}
