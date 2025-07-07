'use client';

import { motion } from 'framer-motion';
import Project from '@/components/Project';
import Section from '@/components/Section';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const ProjectPage: React.FC = () => {
  const paragraphs = [
    'Nhờ sự tin tưởng và đồng hành của quý khách hàng, các sản phẩm của VIKKO như sơn nội – ngoại thất, vữa xoa tường, keo dán gạch, phụ gia xây dựng và chống thấm đàn hồi đã có mặt tại hàng trăm công trình lớn nhỏ trên khắp mọi miền đất nước.',
    'Mới đây, VIKKO tự hào là đơn vị cung cấp vật liệu hoàn thiện cho dự án Ban Tôn giáo tỉnh Thái Nguyên – một công trình đặt yếu tố an toàn và độ bền lâu dài lên hàng đầu. Sản phẩm sơn VIKKO không chỉ đáp ứng nghiêm ngặt các tiêu chuẩn về hàm lượng VOC thấp, thân thiện với môi trường, đảm bảo an toàn cho sức khỏe mà còn có khả năng chống bám bẩn, dễ lau chùi, phù hợp với tiêu chí trường học và các công trình công cộng.',
    'Bên cạnh đó, các dòng sản phẩm như vữa xoa tường mịn đẹp, keo dán gạch bám dính cao, phụ gia xây dựng tăng cường độ bền và chống thấm đàn hồi 2 thành phần đã hỗ trợ hoàn thiện các hạng mục công trình một cách nhanh chóng, tiết kiệm chi phí mà vẫn đảm bảo chất lượng cao theo thời gian.',
    'VIKKO xin gửi lời cảm ơn chân thành đến quý khách hàng, quý đối tác đã tin tưởng lựa chọn và sử dụng sản phẩm của chúng tôi trong suốt thời gian qua. Rất mong tiếp tục được đồng hành cùng quý vị trong nhiều công trình sắp tới!',
    'MỘT SỐ HÌNH ẢNH THỰC TẾ TỪ CÁC DỰ ÁN:',
  ];

  return (
    <Section id="projects" title="" description="">
      <motion.div
        className="bg-[#EDF2EE] from-blue-50 via-white to-gray-100 py-16 px-4 md:px-8 lg:px-16 rounded-xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            DỰ ÁN TIÊU BIỂU
          </motion.h2>

          <div className="text-gray-800 text-lg leading-relaxed space-y-5 text-justify">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index + 1}
                variants={fadeInUp}
                className={index === 4 ? 'font-bold text-black uppercase' : undefined}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Project />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ProjectPage;
