import React from "react";

/**
 * Skills section heading
 */
export default function SkillsHeader({ title, subtitle }) {
  return (
    <div className="text-center mt-8 mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        <span className="text-black hover:text-blue-800">My</span>{" "}
        <span className="text-blue-800 hover:text-black" >Skills</span>
      </h2>

      <p className="text-gray-400 mt-6 text-lg">
        {subtitle}
      </p>
    </div>
  );
}
