"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

const Project: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Scroll animation with smoother easing and longer duration
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            delay: index * 0,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Enhanced tilt effect
        VanillaTilt.init(card, {
          max: 15,
          speed: 500,
          glare: true,
          "max-glare": 0.3,
          scale: 1.05,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          className={`group bg-white rounded-xl overflow-hidden transition duration-500 cursor-pointer shadow-md ${
            project.name === "Bowdershaw"
              ? "ring-4 ring-blue-500 shadow-2xl"
              : "hover:shadow-xl"
          }`}
        >
          <div className="relative overflow-hidden">
            <Image
              src={project.imageSrc}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="p-5 text-center lg:text-left">
            <h3
              className={`font-bold transition-colors duration-300 ${
                project.name === "Bowdershaw"
                  ? "text-red-600 text-2xl"
                  : "text-[#2C742F] text-xl hover:text-green-800"
              }`}
            >
              {project.name}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Một dự án tiêu biểu của chúng tôi, nổi bật bởi thiết kế hiện đại
              và bền vững.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;