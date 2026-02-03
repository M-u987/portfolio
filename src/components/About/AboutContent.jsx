import React from "react";

/**
 * About text content
 */
export default function AboutContent({ title, paragraphs }) {
    
  return (
    <div className="md:w-1/2">
      <h2 className="text-4xl font-extrabold inline-block mb-6 ">About{" "}
         Me
      </h2>
      {paragraphs.map((text, index) => (
        <p key={index} className=" mb-4 text-justify">
          {text}
        </p>
      ))}
    </div>
  );
}
