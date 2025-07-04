import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const reasons = [
  {
    title: 'Sản phẩm chất lượng – Đạt chuẩn kiểm định',
    description: `Toàn bộ sản phẩm VIKKO đều được kiểm định chất lượng, có chứng nhận rõ ràng, độ bền cao và phù hợp với điều kiện thi công thực tế tại Việt Nam.

                  Danh mục sản phẩm bao gồm:\n

                  ✅ Sơn nội – ngoại thất: Bền màu, chống thấm, chống bong tróc.\n

                  ✅ Vữa xoa tường: Mịn, bám dính tốt, giúp bề mặt phẳng đẹp.\n

                  ✅ Keo dán gạch: Bám dính cao, chống trượt, chống thấm hiệu quả.\n

                  ✅ Vật liệu hoàn thiện khác: Ổn định, chất lượng, thi công linh hoạt.\n

                  Sản phẩm VIKKO – lựa chọn đáng tin cậy cho mọi công trình.`,
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
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Tại sao nên chọn <span className="text-[#ff3434]">VIKKO</span>?
        </h2>
        <p className="text-center text-gray-600 mb-16 leading-relaxed text-lg">
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
                {reason.description.split('\n').map((line, idx) => (
                  <p key={idx} className="text-lg text-gray-700 leading-tight mb-1">
                    {line}
                  </p>
                ))}
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
