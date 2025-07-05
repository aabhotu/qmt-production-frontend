import CardProduct from './CardProduct';

const products = [
  {
    image: 'images/vua_xoa_tuong-1.png',
    title: 'Vữa xoa tường V02',
    description:
      'Giải pháp cải tiến giúp bề mặt tường nhẵn mịn, tăng kết dính, giảm nứt chân chim và co ngót. Phù hợp với công trình dân dụng và công nghiệp.',
  },
  {
    image: 'images/keo_dan_gach-1.png',
    title: 'Keo dán gạch VIKKO',
    description:
      'Keo Dán Gạch Đá Siêu Bám Dính VIKKO là giải pháp lý tưởng cho các công trình cần độ bám dính cao, đặc biệt là với gạch, đá khổ lớn. Sản phẩm thích hợp sử dụng cho cả nội thất và ngoại thất, đảm bảo độ bền và tính thẩm mỹ vượt trội.',
  },
  {
    image: 'images/phu_gia_xay_dung3.png',
    title: 'Phụ gia xây dựng VIKKO',
    description:
      'Tăng cường độ bền, chống thấm và độ kết dính cho vữa, bê tông. Giúp cải thiện chất lượng công trình, hạn chế nứt và thấm nước.',
  },
  {
    image: 'images/chong_tham_dan_hoi.jpg',
    title: 'Chất chống thấm đàn hồi VIKKO',
    description:
      'Hợp chất chống thấm đàn hồi cao, bảo vệ bề mặt khỏi nước và môi trường khắc nghiệt. Phù hợp cho cả trong nhà và ngoài trời.',
  },
];

const ProductList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">SẢN PHẨM NỔI BẬT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <CardProduct
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
