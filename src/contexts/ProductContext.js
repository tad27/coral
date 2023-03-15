import { createContext, useContext, useState } from "react";
import { products as data } from "../data.js";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const productCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterByCategory = (category) => {
    let filtered = [];
    if (category === "all") filtered = [...products];
    else filtered = products.filter((product) => product.category === category);

    return filtered;
  };

  const singleProduct = (id) => {
    return products.find((product) => product.id === id);
  };

  const addToCart = (product) => {
    const inCart = cart.find((item) => item.id === product.id);

    if (inCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...inCart, quantity: inCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const inCart = cart.find((item) => item.id === product.id);

    if (product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...inCart, quantity: inCart.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  const totalPrice = cart
    .reduce((total, item) => {
      return total + (item.price - item.price * item.discount) * item.quantity;
    }, 0)
    .toFixed(2);

  const value = {
    products,
    productCategories,
    singleProduct,
    filterByCategory,
    menuOpen,
    setMenuOpen,
    toggleMenu,
    addToCart,
    removeFromCart,
    cart,
    totalPrice,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

export default ProductContext;
