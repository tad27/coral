import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    // inline-block = is used for the parent slider component
    <article className="relative transition-transform duration-200 hover:scale-95 overflow-hidden min-w-[300px]">
      {product.onSale && (
        <h6 className="absolute top-5 bg-primary text-white text-xs px-2 font-semibold uppercase">
          Sale
        </h6>
      )}
      <img
        className="w-full h-80 object-top object-cover"
        src={product.image}
        alt={product.name}
      />
      <footer className="px-2 mt-4">
        <Link to={`/products/${product.id}`}>
          <h2 className="font-semibold truncate">{product.name}</h2>
        </Link>
        <div className="flex justify-between mt-2">
          <span className="text-darkGray capitalize">{product.category}</span>
          {product.discount <= 0 && (
            <span className="font-semibold">${product.price}</span>
          )}
          {product.discount > 0 && (
            <div>
              <span className="text-darkGray line-through mr-2">
                ${product.price}
              </span>
              <span className="font-semibold text-red-500">
                ${product.price - product.price * product.discount}
              </span>
            </div>
          )}
        </div>
      </footer>
    </article>
  );
}

export default ProductCard;
