import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

function Cart() {
  const { cart, addToCart, removeFromCart, totalPrice } = useProduct();

  console.log(cart);
  return (
    <section className="container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <span>Cart is Empty!</span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 flex flex-col gap-1">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex my-2 gap-2 border border-gray-100 shadow-md shadow-gray-50 rounded-md"
              >
                <div className="w-24">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="p-4">
                  <h4>{item.name}</h4>
                  <span>Price: ${item.price}</span> <br />
                  {item.discount !== 0 && (
                    <>
                      <span>Discount: {item.discount * 100}% OFF</span> <br />
                    </>
                  )}
                </div>
                <div className="flex items-center rounded-md overflow-hidden">
                  <button
                    className="bg-gray-100 hover:bg-gray-50 px-2"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <span className="px-1">{item.quantity}</span>
                  <button
                    className="bg-gray-100 hover:bg-gray-50 px-2"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="">
              Total Item{cart.length === 1 ? "" : "s"}: {cart.length}
            </div>
            <div>Total Price: ${totalPrice}</div>
            <Link to="/checkout">
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
