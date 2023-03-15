import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProduct } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

function BestSellers() {
  const { products, productCategories, filterByCategory } = useProduct();
  const [renderedProducts, setRenderedProducts] = useState(products);

  function handleFilter(category) {
    if (category.toLowerCase() === "all") {
      setRenderedProducts(products);
      return;
    }
    setRenderedProducts(filterByCategory(category));
  }

  return (
    <section className="py-[140px]">
      <div className="container">
        <h2 className="section-title mb-10 text-center">Best Sellers</h2>
        <div className="relative group">
          <div className="flex flex-wrap justify-between items-center mb-[30px]">
            <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
              {productCategories.map((category) => (
                <button
                  onClick={() => handleFilter(category)}
                  key={category}
                  className="hover:text-black font-semibold text-darkGray px-2 py-1 capitalize"
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="hidden sm:block py-1 bg-black hover:bg-black/80 text-white text-xs px-2 ">
              Show All
            </button>
          </div>
          <div
            id="bestSellers"
            className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar"
          >
            {/* <SlideHandles /> */}
            {renderedProducts.length > 4 && (
              <>
                <SlideHandle direction="left" />
                <SlideHandle direction="right" />
              </>
            )}

            {renderedProducts.slice(0, 20).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SlideHandle = ({ direction }) => {
  function slide() {
    let slider = document.getElementById("bestSellers");
    slider.scrollLeft =
      direction === "left" ? slider.scrollLeft - 500 : slider.scrollLeft + 500;
  }
  return (
    <div
      className={`absolute top-1/2 z-10 flex sm:hidden  group-hover:flex sm:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-100/50 group-hover:bg-gray-50 shadow p-2 ${
        direction === "left" ? "left-0" : "right-0"
      }`}
    >
      <button onClick={slide} className="text-2xl">
        {direction === "left" && <FaChevronLeft />}
        {direction === "right" && <FaChevronRight />}
      </button>
    </div>
  );
};

export default BestSellers;
