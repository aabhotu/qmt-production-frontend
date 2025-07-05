import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const reasons = [
  {
    title: 'Sản phẩm chất lượng – Đạt chuẩn kiểm định',
    description:
      'Từ sơn nội ngoại thất, bột trét, keo dán gạch đến xi măng và vật liệu hoàn thiện, tất cả sản phẩm của VIKKO đều có chứng nhận chất lượng rõ ràng, độ bền cao và phù hợp với điều kiện thi công thực tế tại Việt Nam.',
    image: 'images/chung_nhan.png',
  },
  {
    title: 'Báo giá minh bạch – Chiết khấu tốt',
    description:
      'VIKKO xây dựng chính sách giá linh hoạt: giá cạnh tranh, chiết khấu hấp dẫn cho đại lý và công trình lớn, hỗ trợ vận chuyển – thanh toán linh hoạt.',
    image: 'images/why2.png',
  },
  {
    title: 'Giao hàng đúng tiến độ – Hỗ trợ kỹ thuật tận tâm',
    description:
      'Với hệ thống kho và vận chuyển riêng, VIKKO đảm bảo giao hàng nhanh, đúng số lượng – đúng chủng loại. Đội ngũ kỹ thuật luôn sẵn sàng tư vấn giải pháp phù hợp nhất cho từng công trình.',
    image: 'images/why3.png',
  },
];

const WhyChooseVikko = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Tại sao nên chọn <span className="text-[#00B207]">VIKKO</span>?
        </h2>
        <p className="text-center text-gray-600 mb-16 leading-relaxed">
          VIKKO – Giải pháp vật liệu xây dựng đáng tin cậy. <br />
          Khi lựa chọn vật liệu xây dựng cho công trình, chất lượng – giá cả – tiến độ luôn là 3 yếu
          tố then chốt. Và đó cũng chính là lý do VIKKO được hàng trăm nhà thầu, kỹ sư và chủ công
          trình tin dùng.
        </p>

        <div className="space-y-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Nội dung */}
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#00B207] flex-shrink-0" />
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>
                <p className="text-gray-600 text-base">{reason.description}</p>
              </div>

              {/* Ảnh */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full max-w-xs rounded-lg shadow-sm object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVikko;
