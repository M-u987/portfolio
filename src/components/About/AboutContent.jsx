import React from "react";

/**
 * About text content
 */
export default function AboutContent({ title, paragraphs }) {
    console.log("jksdkj",title);
  return (
    <div className="md:w-1/2">
      <h2 className="text-4xl font-extrabold inline-block mb-6 hover:text-blue-800">About{" "}
         <span className="text-blue-800 hover:text-black">Me</span> 
      </h2>
      {paragraphs.map((text, index) => (
        <p key={index} className="text-gray-700 mb-4 text-justify">
          {text}
        </p>
      ))}
    </div>
  );
}
