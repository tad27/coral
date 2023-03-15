import { Route, Routes } from "react-router-dom";
import LowerFooter from "./components/LowerFooter";
import Nav from "./components/Nav";
import UpperFooter from "./components/UpperFooter";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Nav />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <footer>
        {/* Upper */}
        <UpperFooter />
        {/* Lower */}
        <LowerFooter />
      </footer>
    </div>
  );
}

export default App;
