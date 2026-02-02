import React from "react";

/**
 * About text content
 */
export default function AboutContent({ title, paragraphs }) {
    console.log("jksdkj",title);
  return (
    <div className="md:w-1/2">
      <h2 className="text-4xl font-hero-font border-b-4 border-blue-600 inline-block mb-6">
        {title}
      </h2>
      {paragraphs.map((text, index) => (
        <p key={index} className="text-gray-700 mb-4 text-justify">
          {text}
        </p>
      ))}
    </div>
  );
}
