import React from 'react';

interface CardProductProps {
  image: string;
  title: string;
  description: string;
}

const CardProduct: React.FC<CardProductProps> = ({ image, title, description }) => {
  return (
    <div
      className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md
      hover:shadow-2xl hover:border-teal-400 hover:ring-2 hover:ring-teal-100
      transition-all duration-300 overflow-hidden p-6 h-full"
    >
      <div className="flex justify-center items-center mb-4 h-40">
        <img src={image} alt={title} className="max-h-full object-contain" />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-xm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default CardProduct;
