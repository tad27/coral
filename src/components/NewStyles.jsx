import React from "react";

import itemCategory_1 from "../assets/new-styles/item-category-1.png";
import itemCategory_2 from "../assets/new-styles/item-category-2.png";
import itemCategory_3 from "../assets/new-styles/item-category-3.png";
import itemCategory_4 from "../assets/new-styles/item-category-4.png";
import itemCategory_5 from "../assets/new-styles/item-category-5.png";

function NewStyles() {
  return (
    <section>
      <div className="container relative">
        <h2 className="vetical-title text-2xl xl:absolute xl:top-1 xl:left-12 xl:-bottom-1 font-roboto xl:transform xl:-rotate-90 uppercase text-center mb-2 xl:mb-0">
          Explore new and popular styles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          <div className="lg:col-span-2 lg:row-span-2 category-item cursor-pointer relative overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              src={itemCategory_1}
              alt="category image"
            />
            <div className="absolute left-0 -bottom-6 transition-all group-hover:bottom-0 right-0 bg-primary text-white text-xs px-2 py-1">
              <div className="flex items-center justify-between">
                <span>Jacket</span>
                <span>100 Products</span>
              </div>
            </div>
          </div>
          <div className="category-item cursor-pointer relative overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              src={itemCategory_2}
              alt="category image"
            />
            <div className="absolute left-0 -bottom-6 transition-all group-hover:bottom-0 right-0 bg-primary text-white text-xs px-2 py-1">
              <div className="flex items-center justify-between">
                <span>Jacket</span>
                <span>100 Products</span>
              </div>
            </div>
          </div>
          <div className="category-item cursor-pointer relative overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              src={itemCategory_3}
              alt="category image"
            />
            <div className="absolute left-0 -bottom-6 transition-all group-hover:bottom-0 right-0 bg-primary text-white text-xs px-2 py-1">
              <div className="flex items-center justify-between">
                <span>Jacket</span>
                <span>100 Products</span>
              </div>
            </div>
          </div>
          <div className="category-item cursor-pointer relative overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              src={itemCategory_4}
              alt="category image"
            />
            <div className="absolute left-0 -bottom-6 transition-all group-hover:bottom-0 right-0 bg-primary text-white text-xs px-2 py-1">
              <div className="flex items-center justify-between">
                <span>Jacket</span>
                <span>100 Products</span>
              </div>
            </div>
          </div>
          <div className="category-item cursor-pointer relative overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              src={itemCategory_5}
              alt="category image"
            />
            <div className="absolute left-0 -bottom-6 transition-all group-hover:bottom-0 right-0 bg-primary text-white text-xs px-2 py-1">
              <div className="flex items-center justify-between">
                <span>Jacket</span>
                <span>100 Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewStyles;
