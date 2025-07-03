// components/ui/FloatingButtons.tsx
'use client';
import { FaPhone, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-24 right-4 flex flex-col items-end space-y-3 z-50">
      {/* Gọi điện */}
      <a
        href="tel:0825098189"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:scale-110 transition"
        title="Gọi điện"
      >
        <FaPhone size={20} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/people/Vikko-V%E1%BA%ADt-li%E1%BB%87u-chu%E1%BA%A9n-C%C3%B4ng-tr%C3%ACnh-ch%E1%BA%A5t/61576805484571/"
        target="_blank"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] text-white shadow-lg hover:scale-110 transition"
        title="Facebook"
        rel="noopener noreferrer"
      >
        <FaFacebookF size={20} />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0825098189"
        target="_blank"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0084ff] text-white shadow-lg hover:scale-110 transition text-sm font-bold"
        title="Zalo"
        rel="noopener noreferrer"
      >
        Zalo
      </a>

      {/* Email */}
      <a
        href="mailto:congtyquangminh20a@gmail.com"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition"
        title="Email"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;
