import React from "react";
import { useProduct } from "../contexts/ProductContext";

function CategoryFilter({ setRenderedProducts }) {
  const { products, productCategories, filterByCategory } = useProduct();
  // const [renderedProducts, setRenderedProducts] = useState(products);

  function activeCategory(category) {
    let categoryItems = [...document.querySelectorAll("#categories button")];

    // Remove active class from all of the categories
    categoryItems.forEach((item) => item.classList.remove("activeCategory"));

    // Add active class to the current Item
    categoryItems.map((item) => {
      item.innerText.toLowerCase() === category.toLowerCase() &&
        item.classList.add("activeCategory");
    });
  }

  function handleFilter(category) {
    // Change the active class for category filter
    activeCategory(category);

    if (category.toLowerCase() === "all") {
      setRenderedProducts(products);
      return;
    }
    setRenderedProducts(filterByCategory(category));
  }

  return (
    <div
      id="categories"
      className="categories flex gap-2 mb-[30px] overflow-x-auto no-srollbar"
    >
      {productCategories.map((category) => (
        <button
          onClick={() => handleFilter(category)}
          key={category}
          className={`${
            category === "all" && "activeCategory"
          } hover:text-black font-semibold text-darkGray px-2 py-1 capitalize`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
