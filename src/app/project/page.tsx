"use client";

import { motion } from "framer-motion";
import Project from "@/components/Project";
import Section from "@/components/Section";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProjectPage: React.FC = () => {
  const paragraphs = [
    "Được sự tin dùng của quý khách hàng, Sơn VIKO đã đến được với nhiều dự án, công trình lớn – nhỏ trên khắp cả nước Việt Nam. Mới đây nhất phải kể đến dự án ban tôn giáo tỉnh Thái Nguyên. Với tiêu chí ưu tiên hàng đầu là đặt sức khỏe con người lên trên hết, Sơn VIKO hoàn toàn đáp ứng được tất cả các chỉ tiêu an toàn sức khỏe nhà trường đề ra như hàm lượng VOC độc hại được hạn chế ở mức thấp nhất luôn đảm bảo sức khỏe cho các em nhỏ đến trường.",
    "Ngoài ra với chất lượng sơn bền đẹp theo thời gian, kháng khuẩn, chống kiềm, hạn chế vết bám bẩn và dễ lau chùi là các yếu tố cần thiết cho dự án trường học trong thời gian dài cũng đều được sơn VIKO đáp ứng đầy đủ.",
    "Rất cám ơn quý khách hàng đã tin dùng sản phẩm và đồng hành cùng sơn VIKO trong những năm qua, VIKO rất vui được hợp tác cùng quý đối tác trong những dự án sắp tới! Xin trân trọng cảm ơn.",
    "MỘT SỐ HÌNH ẢNH THỰC TẾ TỪ CÁC DỰ ÁN:"
  ];

  return (
    <Section id="projects" title="" description="">
      <motion.div
        className="bg-[#EDF2EE] from-blue-50 via-white to-gray-100 py-16 px-4 md:px-8 lg:px-16 rounded-xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="max-w-7xl mx-auto flex flex-col gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center"
            variants={fadeInUp}
          >
            Dự án tiêu biểu
          </motion.h2>

          <div className="text-gray-800 text-lg leading-relaxed space-y-5 text-justify">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={fadeInUp}
                className={
                  index === 3
                    ? "font-bold text-black uppercase"
                    : undefined
                }
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Project />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProjectPage;