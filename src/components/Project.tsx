import React from "react";
import Image from "next/image";
import { projects } from "@/data/project";

const Project: React.FC = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`bg-white rounded-lg transition duration-300 overflow-hidden ${
            project.name === "Bowdershaw"
              ? "ring-4 ring-blue-500 shadow-2xl scale-[1.02]"
              : "shadow hover:shadow-lg"
          }`}
        >
          <Image
            src={project.imageSrc}
            alt={project.name}
            width={500}
            height={300}
            className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />

          <div className="p-4 text-center lg:text-left">
            <h3
              className={`font-semibold ${
                project.name === "Bowdershaw"
                  ? "text-red-600 text-xl"
                  : "text-blue-700 text-lg"
              }`}
            >
              {project.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;