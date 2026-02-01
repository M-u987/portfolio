import React from "react";

/**
 * Projects section header
 */
export default function ProjectsHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl font-extrabold mb-4">
        <span className="text-blue-800">My</span> {title}
      </h2>
      <p className="text-gray-700">
        {subtitle}
      </p>
    </div>
  );
}
