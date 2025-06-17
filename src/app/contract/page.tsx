import Section from "@/components/Section";

const ContactPage: React.FC = () => {
  return (
    <Section id="contract" title="" description="">
<h2 className="text-3xl md:text-5xl font-extrabold text-center text-red-700 mb-4 tracking-wide uppercase">
  Liên hệ với chúng tôi
</h2>
<h4 className="text-lg md:text-2xl font-semibold text-center text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
  Công Ty Cổ Phần Sản Xuất Và Ứng Dụng Công Nghệ Quang Minh
</h4>
<div className="flex flex-col lg:flex-row gap-10">
  {/* Google Map */}
  <div className="w-full bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">BẢN ĐỒ GOOGLEMAP</h3>
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=..." // cập nhật URL nhúng hợp lệ
      width="100%"
      height="500"
      loading="lazy"
      className="rounded border"
    ></iframe>
  </div>
</div>
      {/* THÔNG TIN LIÊN HỆ */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mx-5">
  <div className="border shadow-md p-5 rounded-md bg-white text-center flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-red-500">
    <h4 className="font-extrabold text-xl mb-2 text-red-500 uppercase tracking-wide">🏠 TRỤ SỞ CHÍNH</h4>
    <p className="text-gray-700 font-medium">Số nhà 20A, Tổ 8, Phường Chùa Hang, Thành phố Thái Nguyên, Tỉnh Thái Nguyên</p>
  </div>
  <div className="border shadow-md p-5 rounded-md bg-white text-center flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-red-500">
    <h4 className="font-extrabold text-xl mb-2 text-red-500 uppercase tracking-wide">📍 CHI NHÁNH MIỀN NAM</h4>
    <p className="text-gray-700 font-medium">Long Đức 2, Tam Phước, Biên Hoà, Đồng Nai</p>
  </div>
  <div className="border shadow-md p-5 rounded-md bg-white text-center flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-red-500">
    <h4 className="font-extrabold text-xl mb-2 text-red-500 uppercase tracking-wide">📞 HOTLINE</h4>
    <p className="text-gray-700 font-medium">0825098189 - 0919340925</p>
  </div>
  <div className="border shadow-md p-5 rounded-md bg-white text-center flex flex-col items-center transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-red-500">
    <h4 className="font-extrabold text-xl mb-2 text-red-500 uppercase tracking-wide">✉️ EMAIL</h4>
    <p className="text-gray-700 font-medium">congtyquangminh20a@gmail.com</p>
  </div>
</div>
    </Section>
  );
};

export default ContactPage;