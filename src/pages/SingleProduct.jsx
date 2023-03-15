import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

function SingleProduct() {
  const { singleProduct, addToCart } = useProduct();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = (id) => {
      const newProduct = singleProduct(id);
      setProduct(newProduct);
    };

    getProduct(id);
  }, [id]);

  return (
    <article className="pt-12">
      <div className="container grid grid-cols-1 md:grid-cols-3">
        <div>
          <img
            className="w-full h-96 object-cover object-top hover:object-center duration-300"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="content md:col-span-  p-2 px-10">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <span className="rounded-md bg-green-50 text-green-700 font-bold py-1 px-2 uppercase text-xs tracking-widest">
            {product.category}
          </span>
          <br />
          <span className="text-2xl mt-2 block">${product.price}</span>
          {/* {product.sizes && ( */}
          <div className="mt-4">
            <h6 className="uppercase tracking-wider mb-2">Select Size: </h6>
            <RadioGroup>
              {product?.sizes?.map((size) => (
                <RadioButton
                  key={size}
                  id={size}
                  label={size.toUpperCase()}
                  name="size"
                />
              ))}
            </RadioGroup>
          </div>
          {/* )} */}
          <button
            className="bg-primary text-white font-bold uppercase texts-sm tracking-wider w-full transition duration-300 py-2 border-2 border-primary hover:bg-white hover:text-primary mt-4"
            onClick={() => addToCart(product)}
          >
            Add to Cart - ${product.price}
          </button>
        </div>
      </div>
    </article>
  );
}

const RadioGroup = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};

const RadioButton = ({ id, label, name }) => {
  return (
    <div>
      <input className="peer hidden" type="radio" name={name} id={id} />
      <label
        className="peer-checked:bg-primary peer-checked:text-white hover:bg-gray-200 transition duration-300 py-3 w-12 border border-primary rounded-sm text-xs text-primary block text-center cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
export default SingleProduct;
