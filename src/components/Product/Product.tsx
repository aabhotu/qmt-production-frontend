import ProductColumn from "./ProductColumn";

import { products } from "@/data/product";

const Product: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
      {products.map((product) => (
        <ProductColumn
          key={product.name}
          tier={product}
          highlight={product.highlight}
        />
      ))}
    </div>
  );
};

export default Product;
