'use client';

import { motion } from 'framer-motion';
import IntroSection from './IntroSection';
import { introInfo } from '@/data/introInfo';

// Animation variants (đơn giản hơn)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const slideIn = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
});

const IntroComp: React.FC = () => {
  const introTexts = [
    '<strong>Kính gửi Quý khách hàng,</strong>',
    'Thay mặt CB–CNV Công ty Cổ phần Sản xuất và Ứng dụng Công nghệ Quang Minh, chúng tôi xin gửi lời chào trân trọng và cảm ơn sâu sắc đến Quý khách hàng đã tin tưởng và đồng hành cùng chúng tôi.',
    'Từ khi thành lập năm 2017, với phương châm “Tín & Tâm”, chúng tôi không ngừng nỗ lực biến đam mê của đội ngũ kỹ sư, kiến trúc sư thành những công trình thẩm mỹ, chất lượng, góp phần làm đẹp đất nước.',
    'Trải qua nhiều thử thách và đổi thay, bằng kinh nghiệm tích lũy và khát vọng xây dựng thương hiệu sơn uy tín cho người Việt, Quang Minh đã vươn lên trở thành một trong những đơn vị hàng đầu về sản xuất và thi công sơn nước tại miền Bắc.',
    'Viko – thương hiệu sơn của chúng tôi – tự hào dẫn đầu nhờ chất lượng vượt trội, thẩm mỹ cao và đội ngũ “Tâm – Tài – Đức” chuyên nghiệp, tận tâm.',
    'Chúng tôi cam kết không ngừng học hỏi, cải tiến để giữ vững niềm tin của khách hàng và khẳng định vị thế thương hiệu sơn Việt trên thị trường.',
    '<strong>Trân trọng kính chào!</strong>',
  ];

  return (
    <motion.div
      id="about"
      className="py-16 bg-[#EDF2EE] scroll-smooth"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.h2
          className="text-center mb-12 text-3xl lg:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Giới thiệu
        </motion.h2>

        {/* Đoạn text giới thiệu */}
        <motion.div className="text-justify space-y-6 text-base lg:text-lg leading-loose text-gray-700">
          {introTexts.map((text, i) => (
            <motion.p
              key={i}
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: text }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            />
          ))}
        </motion.div>

        {/* Các mục benefit */}
        <div className="mt-20 space-y-16">
          {introInfo.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideIn(index % 2 === 0 ? 'left' : 'right')}
            >
              <IntroSection benefit={item} imageAtRight={index % 2 !== 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IntroComp;
