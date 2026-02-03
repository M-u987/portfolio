import React from "react";

/**
 * Skills section heading
 */
export default function SkillsHeader({ title, subtitle }) {
  return (
    <div className="text-center mt-8 mb-14">
      <h2 className="text-4xl md:text-5xl font-bold ">
        <span className=" ">My</span>{" "}
        <span className=" " >Skills</span>
      </h2>

      <p className=" mt-6 text-lg">
        {subtitle}
      </p>
    </div>
  );
}
