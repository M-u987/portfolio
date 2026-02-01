import React from "react";

/**
 * Individual project card component
 */
export default function ProjectCard({ image, title, description }) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white text-center px-6">
          {description}
        </p>
      </div>
    </div>
  );
}
