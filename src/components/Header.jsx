import React from "react";
import { Link } from "react-router-dom";
import bag from "../assets/icons/bag_white.svg";
import heroImage from "../assets/image-product.png";
function Header() {
  return (
    <header className="bg-lightGray">
      <div className="container">
        {/* <Nav /> */}
        <div className="hero grid gap-4 grid-cols-12 items-center pt-7 pb-14">
          {/* Left Content */}
          <div className="col-span-full row-start-2 md:row-start-1 md:col-span-7 flex flex-col gap-2 items-start">
            <h1 className="font-roboto font-light text-4xl md:text-[74px]">
              Collections
            </h1>
            <p className="font-roboto text-lg md:text-3xl leading-8 md:leading-55 my-5 capitalize">
              you can explore ans shop many differnt collection from various
              barands here.
            </p>
            <Link to="/products">
              <button className="flex gap-2 items-center px-6 py-2 bg-primary hover:bg-primary/95 focus:outline-none hover:scale-95 hover:ring-4 ring-primary hover:ring-offset-2 transition-all text-white">
                <img className="" src={bag} alt="bag icon" />
                <span className="font-roboto text-lg md:text-3xl leading-8 md:leading-55 ">
                  Shop Now
                </span>
              </button>
            </Link>
          </div>

          {/* Right Image  */}
          <div className="col-span-full md:col-span-4">
            <img
              className="md:w-full h-full object-fit"
              src={heroImage}
              alt="product image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
