import Project from "@/components/Project";
import Section from "@/components/Section";

const ProjectPage: React.FC = () => {
  return (
    <Section id="projects" title="" description="">
      <div className="flex flex-col gap-8 items-start max-w-7xl mx-auto mb-10 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-gray-900 md:text-left text-center">
          Dự án tiêu biểu
        </h2>

        <div className="text-gray-700 text-lg leading-relaxed space-y-5 text-justify">
          <p>
            Được sự tin dùng của quý khách hàng, Sơn VIKO đã đến được với nhiều dự án, công trình lớn – nhỏ trên khắp cả nước Việt Nam. Mới đây nhất phải kể đến dự án ban tôn giáo tỉnh Thái Nguyên. Với tiêu chí ưu tiên hàng đầu là đặt sức khỏe con người lên trên hết, Sơn VIKO hoàn toàn đáp ứng được tất cả các chỉ tiêu an toàn sức khỏe nhà trường đề ra như hàm lượng VOC độc hại được hạn chế ở mức thấp nhất luôn đảm bảo sức khỏe cho các em nhỏ đến trường.
          </p>
          <p>
            Ngoài ra với chất lượng sơn <strong className="text-gray-900 font-semibold">bền đẹp theo thời gian, kháng khuẩn, chống kiềm, hạn chế vết bám bẩn và dễ lau chùi</strong> là các yếu tố cần thiết cho dự án trường học trong thời gian dài cũng đều được sơn VIKO đáp ứng đầy đủ.
          </p>
          <p>
            Rất cám ơn quý khách hàng đã tin dùng sản phẩm và đồng hành cùng sơn VIKO trong những năm qua, VIKO rất vui được hợp tác cùng quý đối tác trong những dự án sắp tới! Xin trân trọng cảm ơn.
          </p>
          <p className="font-bold text-black uppercase">
            Một số hình ảnh thực tế từ các dự án:
          </p>
        </div>
      </div>

      <Project />
    </Section>
  );
};

export default ProjectPage;