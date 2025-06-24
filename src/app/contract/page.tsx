"use client";

import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ContactPage: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-100 via-white to-indigo-50 shadow-inner"
    >
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-6 uppercase tracking-wider"
          variants={fadeInUp}
        >
          Liên hệ với chúng tôi
        </motion.h2>

        <motion.h4
          className="text-lg md:text-2xl text-center text-slate-700 font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Công Ty Cổ Phần Sản Xuất Và Ứng Dụng Công Nghệ Quang Minh
        </motion.h4>

        {/* Map */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg mb-16"
            variants={zoomIn}
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
          </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            {
              icon: "🏠",
              title: "Trụ sở chính",
              content:
                "Số nhà 20A, Tổ 8, Phường Chùa Hang, TP Thái Nguyên, Tỉnh Thái Nguyên",
            },
            {
              icon: "📍",
              title: "Chi nhánh miền Nam",
              content: "Long Đức 2, Tam Phước, Biên Hoà, Đồng Nai",
            },
            {
              icon: "📞",
              title: "Hotline",
              content: "0825098189 - 0919340925",
            },
            {
              icon: "✉️",
              title: "Email",
              content: "congtyquangminh20a@gmail.com",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-4 border-indigo-500 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3 bg-indigo-100 text-indigo-600 rounded-full p-3 w-fit mx-auto shadow-sm">
                {item.icon}
              </div>
              <h5 className="font-bold text-lg text-indigo-700 uppercase mb-2">
                {item.title}
              </h5>
              <p className="text-gray-700 font-medium">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;