import React from "react";

/**
 * Displays individual skill details
 */
export default function SkillCard({ name, level }) {
  return (
    <div
      className="border rounded-2xl p-8 text-center transition-all duration-300
                 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400"
    >
      <h3 className="text-2xl font-semibold  mb-3">
        {name}
      </h3>

      <span className="inline-block px-4 py-1 rounded-full text-sm bg-cyan-400/10 ">
        {level}
      </span>
    </div>
  );
}
