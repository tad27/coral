import React, { useState } from "react";
import { useProduct } from "../contexts/ProductContext";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

function NewProducts() {
  const { products } = useProduct();
  const [renderedProducts, setRenderedProducts] = useState(products);

  return (
    <section className="py-[140px] overflow-x-auto no-srollbar">
      <div className="container">
        <h2 className="section-title mb-10 text-center">New Products</h2>
        <CategoryFilter setRenderedProducts={setRenderedProducts} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8">
          {renderedProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NewProducts;
