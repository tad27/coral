import React from "react";
import { FaBars } from "react-icons/fa";
import search from "../assets/icons/search.svg";
import user from "../assets/icons/user.svg";
import bag from "../assets/icons/bag_black.svg";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";
const categories = [
  { id: 1, name: "Jewelry & Accessories" },
  { id: 2, name: "Clothing & Shoes" },
  { id: 3, name: "Home & Living" },
  { id: 4, name: "Wedding & Party" },
  { id: 5, name: "Toys & Entertainment" },
  { id: 6, name: "Art & Collectibles" },
  { id: 7, name: "Craft Supplies & Tools" },
];

function Nav() {
  const { menuOpen, setMenuOpen, toggleMenu } = useProduct();
  return (
    <nav className="bg-lightGray border-b-2 md:border-none transition-all">
      <div className="container py-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between md:border-b md:pb-5">
          <label className="hidden md:flex gap-1" htmlFor="search">
            <img className="" src={search} alt="" />
            <input
              id="search"
              type="text"
              placeholder="Search product"
              className="text-xs bg-transparent focus:outline-none border-b border-transparent focus:border-gray-200 px-2"
            />
          </label>
          {/* Logo  and Toggle*/}
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src={logo} alt="Coral logo" />
            </Link>
            <button
              onClick={() => toggleMenu()}
              className="md:hidden cursor-pointer hover:scale-115 bg-slate-200 p-2"
            >
              <FaBars />
            </button>
          </div>
          <div
            className={`
            ${!menuOpen && "hidden md:flex"} 
            flex flex-col md:flex-row gap-2 font-poppins text-primary`}
          >
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              <button
                className="flex w-full gap-2 items-center hover:bg-gray-200 px-2 py-1"
                value="button"
              >
                <img className="" src={bag} alt="" />
                <span className="text-sm">Shop</span>
              </button>
            </Link>
            <button
              className="flex gap-2 items-center hover:bg-gray-200 px-2 py-1"
              value="button"
            >
              <img className="" src={user} alt="" />
              <span className="text-sm">Account</span>
            </button>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <button
                className="flex w-full gap-2 items-center hover:bg-gray-200 px-2 py-1"
                value="button"
              >
                <img className="" src={bag} alt="" />
                <span className="text-sm">Basket</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className={`${!menuOpen && "hidden md:block"} pt-5`}>
          <h4 className="md:hidden text-xs mb-2 text-darkGray/50 uppercase tracking-widest">
            Categories
          </h4>
          <ul
            className="flex flex-wrap md:flex-nowrap gap-2 items-center md:flex-row md:justify-between font-poppins
          place-content-center
          "
          >
            {categories.map((category) => (
              <li
                className=" hover:underline underline-offset-2 
                bg-gray-50 rounded md:bg-transparent px-2 py-1 md:p-0 text-xs md:text-base"
                key={category.id}
              >
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  to={`${category.name.split(" ").join("")}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
