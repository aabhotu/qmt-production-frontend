"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

const ContactPage: React.FC = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const mapRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
        },
      }
    );

    // Map animation
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
        },
      }
    );

    // Cards animation + tilt
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // Scroll animation
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateX: 5 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          ease: "expo.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tilt effect
      VanillaTilt.init(card, {
        max: 20,
        speed: 500,
        glare: true,
        "max-glare": 0.25,
        scale: 1.05,
        perspective: 1000,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const contactItems = [
    {
      icon: "/images/Home1.svg",
      title: "Trụ sở chính",
      content:
        "Số nhà 20A, Tổ 8, Phường Chùa Hang, TP Thái Nguyên, Tỉnh Thái Nguyên",
    },
    {
      icon: "/images/Location.svg",
      title: "Chi nhánh miền Nam",
      content: "Long Đức 2, Tam Phước, Biên Hoà, Đồng Nai",
    },
    {
      icon: "/images/Call.svg",
      title: "Hotline",
      content: "0825098189 - 0919340925",
    },
    {
      icon: "/images/Mail.svg",
      title: "Email",
      content: "congtyquangminh20a@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-[#EDF2EE] from-blue-100 via-white to-indigo-50 shadow-inner"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center text-[#00B207] mb-6 uppercase tracking-wider"
        >
          Liên hệ với chúng tôi
        </h2>

        {/* Subtitle */}
        <h4
          ref={subtitleRef}
          className="text-lg md:text-2xl text-center text-slate-700 font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Công ty Cổ phần Sản xuất và Ứng dụng Công nghệ Quang Minh
        </h4>

        {/* Map */}
        <div
          ref={mapRef}
          className="rounded-xl overflow-hidden shadow-lg mb-16"
        >
          <iframe
            title="Google Map - Công ty Quang Minh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195477.72139202907!2d105.5324324!3d21.355957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313527006c5203d1%3A0xc08dbf5ee29ae9ff!2sVIKKO%20C%C3%B4ng%20ty%20CPSX%20%26%20%C6%AFD%20C%C3%B4ng%20ngh%E1%BB%87%20Quang%20Minh!5e0!3m2!1sen!2s!4v1719221436463!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            className="w-full border-none"
          ></iframe>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-4 border-[#84D187] transition-all duration-300 text-center will-change-transform transform-style-3d"
            >
              <div className="text-4xl mb-3 rounded-full p-3 w-fit mx-auto shadow-sm">
                <Image
                  src={item.icon}
                  width={56}
                  height={62}
                  alt={item.title}
                />
              </div>
              <h5 className="font-medium text-lg text-[#00B207] uppercase mb-2">
                {item.title}
              </h5>
              <p className="text-gray-700 font-normal break-words">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;