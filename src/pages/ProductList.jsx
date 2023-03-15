import React from "react";

import { useProduct } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { products } = useProduct();
  let categories = products.map((product) => product.category);
  categories = [...new Set(categories)];

  function productQuantityByCategory(category) {
    return products.filter((product) => {
      return (
        product.category.toLocaleLowerCase() === category.toLocaleLowerCase()
      );
    }).length;
  }

  return (
    <section className="container p-4">
      <h1 className="text-4xl my-4">Shop</h1>
      {products.length === 0 && <span>The Shop is Empty!</span>}
      <div className="grid grid-cols-4 gap-4 items-start">
        <aside className="col-span-full sm:col-span-1 border-2 bg-white border-slate-100 rounded-md p-4">
          {/* <h2 className="text-center text-xl font-bold uppercase p-2">
            Filter by Category
          </h2> */}

          {/* Group */}
          <div className="mt-4">
            <h3 className="uppercase font-bold text-darkGray opacity-80">
              Category
            </h3>
            {/* Category Filters */}
            <div>
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-2 py-1 px-2 hover:bg-slate-50 "
                >
                  <input
                    type="checkbox"
                    id={category.toLocaleLowerCase()}
                    className="text-orange-400 border-2 border-orange-400 focus:ring-orange-300 rounded-sm"
                  />
                  <label
                    className="capitalize"
                    htmlFor={category.toLocaleLowerCase()}
                  >
                    {category}
                  </label>
                  <span className="ml-auto">
                    ({productQuantityByCategory(category)})
                  </span>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-2 border-slate-100" />
          {/* Radio Group */}
          <div className="mt-4">
            <h3 className="uppercase font-bold text-darkGray opacity-80">
              Color
            </h3>
            {/* Category Filters */}
            <div>
              {["Red", "Green", "Blue"].map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-2 py-1 px-2 hover:bg-slate-50 "
                >
                  <input
                    type="radio"
                    name="color"
                    id={category.toLocaleLowerCase()}
                    className="text-orange-400 border-2 border-orange-400 focus:ring-orange-300"
                  />
                  <label htmlFor={category.toLocaleLowerCase()}>
                    {category}
                  </label>
                  <span className="ml-auto">(2)</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="col-span-full sm:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 shadow-sm p-4 pt-0 rounded-md">
          <div className="col-span-full">
            <h4>Sort</h4>
            <select name="sort" id="sort">
              <option value="">Default</option>
              <option value="ASC">A to Z</option>
              <option value="DESC">Z to A</option>
            </select>
          </div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* {products.map((product) => ( */}
          {/* <Link key={product.id} to={`/products/${product.id}`}> */}
          {/* <h4>{product.name}</h4> */}
          {/* <ProductCard product={product} /> */}
          {/* </Link> */}
          {/* ))} */}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
