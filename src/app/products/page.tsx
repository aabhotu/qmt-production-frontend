import Product from "@/components/Product/Product";
import Section from "@/components/Section";

const ProductsPage: React.FC = () => {
    return(
        <>
         <Section id="products" title="Sản Phẩm" description="">
              <Product />
        </Section>
        </>
    )
}
export default ProductsPage;