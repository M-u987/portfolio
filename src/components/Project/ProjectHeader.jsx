import React from "react";

/**
 * Projects section header
 */
export default function ProjectsHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl font-extrabold mb-4">
        <span className="">My</span> <span className="">Projects</span>
        
      </h2>
      <p className="">
        {subtitle}
      </p>
    </div>
  );
}
