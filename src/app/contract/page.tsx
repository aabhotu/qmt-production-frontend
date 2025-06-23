"use client";

import { motion } from "framer-motion";


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const ContactPage: React.FC = () => {
  return (
    <div id="contract" title="" className="py-16 bg-blue-50 scroll-smooth">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-red-700 mb-4 tracking-wide uppercase"
          variants={fadeInUp}
        >
          Liên hệ với chúng tôi
        </motion.h2>

        <motion.h4
          className="text-lg md:text-2xl font-semibold text-center text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Công Ty Cổ Phần Sản Xuất Và Ứng Dụng Công Nghệ Quang Minh
        </motion.h4>

        <motion.div
          className="flex flex-col lg:flex-row gap-10"
          variants={fadeInUp}
        >
          {/* Google Map */}
          <div className="w-full bg-blue-50 p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              BẢN ĐỒ GOOGLEMAP
            </h3>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=..." // Thay bằng URL nhúng hợp lệ
              width="100%"
              height="500"
              loading="lazy"
              className="rounded border"
            ></iframe>
          </div>
        </motion.div>

        {/* THÔNG TIN LIÊN HỆ */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mx-5"
          variants={containerVariants}
        >
          {[
            {
              icon: "🏠",
              title: "TRỤ SỞ CHÍNH",
              content:
                "Số nhà 20A, Tổ 8, Phường Chùa Hang, Thành phố Thái Nguyên, Tỉnh Thái Nguyên",
            },
            {
              icon: "📍",
              title: "CHI NHÁNH MIỀN NAM",
              content: "Long Đức 2, Tam Phước, Biên Hoà, Đồng Nai",
            },
            {
              icon: "📞",
              title: "HOTLINE",
              content: "0825098189 - 0919340925",
            },
            {
              icon: "✉️",
              title: "EMAIL",
              content: "congtyquangminh20a@gmail.com",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="border shadow-md p-5 rounded-md bg-white text-center flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-red-500"
              variants={fadeInUp}
              transition={{ delay: i * 0.15 }}
            >
              <h4 className="font-bold text-xl mb-2 text-red-500 uppercase tracking-wide">
                {item.icon} {item.title}
              </h4>
              <p className="text-gray-700 font-medium">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;