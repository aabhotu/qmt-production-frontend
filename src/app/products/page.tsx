"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Product from "@/components/Product/Product";

const ProductsPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      id="products"
      className="py-20 px-24 bg-[#EDF2EE] from-white via-[#f5fff7] to-white"
    >
      {/* Title Section */}
      <motion.div
        className="item-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-center mb-4 text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight drop-shadow-md"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sản Phẩm
        </motion.h2>

        {/* Thanh trang trí trượt vào */}
        <motion.div
          className="flex justify-center items-center space-x-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="w-[12px] h-[4px] bg-[#84D187]"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="w-[40px] h-[4px] bg-[#00B207]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            style={{ transformOrigin: "center" }}
          />
          <motion.div
            className="w-[12px] h-[4px] bg-[#84D187]"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>

      {/* Product Section - Reveal on scroll */}
      <motion.div
        ref={ref}
        className="px-4 md:px-12 transition-opacity duration-700"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <Product />
      </motion.div>
    </div>
  );
};

export default ProductsPage;