'use client';

import { motion } from 'framer-motion';
import Product from '@/components/Product/Product';

const ProductsPage: React.FC = () => {
  return (
    <div id="products" className="py-20 md:px-24 bg-[#EDF2EE] from-white via-[#f5fff7] to-white">
      {/* Title Section */}
      <motion.div
        className="item-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-center mb-4 text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SẢN PHẨM
        </motion.h2>

        {/* Thanh trang trí */}
        <div className="flex justify-center items-center space-x-2 mt-2">
          <div className="w-[12px] h-[4px] bg-[#84D187]" />
          <div className="w-[40px] h-[4px] bg-[#00B207]" />
          <div className="w-[12px] h-[4px] bg-[#84D187]" />
        </div>
      </motion.div>

      {/* Product Section - Reveal on scroll */}
      <motion.div
        className="px-4 md:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <Product />
      </motion.div>
    </div>
  );
};

export default ProductsPage;
