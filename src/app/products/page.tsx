import Product from "@/components/Product/Product";
// import Section from "@/components/Section";

const ProductsPage: React.FC = () => {
    return (
        <div id="products" className="py-16 px-4 bg-white">
            <div className="item-center mb-12">
                <h2 className="text-center mb-2 text-3xl lg:text-5xl font-bold text-gray-900">
                    Sản Phẩm
                </h2>
                <div className="flex justify-center space-x-2">
                    <div className="w-[12px] h-[4px] bg-[#84D187]"></div>
                    <div className="w-[40px] h-[4px] bg-[#00B207]"></div>
                    <div className="w-[12px] h-[4px] bg-[#84D187]"></div>
                </div>
            </div>
            {/* <Section id="products" title="Sản Phẩm" description=""> */}
            <div className="px-12">
                <Product />
            </div>
            {/* </Section> */}
        </div>
    )
}
export default ProductsPage;