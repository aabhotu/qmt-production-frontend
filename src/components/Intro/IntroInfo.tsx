import IntroSection from "./IntroSection";
import { introInfo } from "@/data/introInfo";

const IntroComp: React.FC = () => {
  return (
    <div id="about" className="py-16 px-4 bg-white">
      <h2 className="text-center mb-12 text-3xl lg:text-5xl font-bold text-gray-900">
        Giới thiệu
      </h2>

<div className="max-w-5xl mx-auto text-justify space-y-6 text-base lg:text-lg leading-loose text-gray-700">
  <p><strong>Kính gửi Quý khách hàng,</strong></p>
  <p>
    Thay mặt CB–CNV Công ty Cổ phần Sản xuất và Ứng dụng Công nghệ Quang Minh, chúng tôi xin gửi lời chào trân trọng và cảm ơn sâu sắc đến Quý khách hàng đã tin tưởng và đồng hành cùng chúng tôi.
  </p>
  <p>
    Từ khi thành lập năm 2017, với phương châm “Tín & Tâm”, chúng tôi không ngừng nỗ lực biến đam mê của đội ngũ kỹ sư, kiến trúc sư thành những công trình thẩm mỹ, chất lượng, góp phần làm đẹp đất nước.
  </p>
  <p>
    Trải qua nhiều thử thách và đổi thay, bằng kinh nghiệm tích lũy và khát vọng xây dựng thương hiệu sơn uy tín cho người Việt, Quang Minh đã vươn lên trở thành một trong những đơn vị hàng đầu về sản xuất và thi công sơn nước tại miền Bắc.
  </p>
  <p>
    Viko – thương hiệu sơn của chúng tôi – tự hào dẫn đầu nhờ chất lượng vượt trội, thẩm mỹ cao và đội ngũ “Tâm – Tài – Đức” chuyên nghiệp, tận tâm.
  </p>
  <p>
    Chúng tôi cam kết không ngừng học hỏi, cải tiến để giữ vững niềm tin của khách hàng và khẳng định vị thế thương hiệu sơn Việt trên thị trường.
  </p>
  <p><strong>Trân trọng kính chào!</strong></p>
</div>

      <div className="mt-20 space-y-16">
        {introInfo.map((item, index) => (
          <IntroSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroComp;