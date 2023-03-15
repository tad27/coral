import React from "react";

import brand_1 from "../assets/brands/brand-1.svg";
import brand_2 from "../assets/brands/brand-2.svg";
import brand_3 from "../assets/brands/brand-3.svg";
import brand_4 from "../assets/brands/brand-4.svg";
import brand_5 from "../assets/brands/brand-5.svg";

function Brands() {
  return (
    <section id="barnds" className="py-20 overflow-x-auto no-scrollbar">
      <div className="container flex justify-between">
        <img
          className="hover:bg-gray-50 hover:scale-105 transition-transform p-2"
          src={brand_1}
          alt=""
        />
        <img
          className="hover:bg-gray-50 hover:scale-105 transition-transform p-2"
          src={brand_2}
          alt=""
        />
        <img
          className="hover:bg-gray-50 hover:scale-105 transition-transform p-2"
          src={brand_3}
          alt=""
        />
        <img
          className="hover:bg-gray-50 hover:scale-105 transition-transform p-2"
          src={brand_4}
          alt=""
        />
        <img
          className="hover:bg-gray-50 hover:scale-105 transition-transform p-2"
          src={brand_5}
          alt=""
        />
      </div>
    </section>
  );
}

export default Brands;
