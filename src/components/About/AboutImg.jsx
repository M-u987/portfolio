import React from "react";

/**
 * About section image component
 */
export default function AboutImage({ image, alt }) {
  return (
    <div className="md:w-1/2 bg-block">
      <img
        src={image}
        alt={alt}
        className="rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      />
    </div>
  );
}
