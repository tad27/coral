import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

function UpperFooter() {
  const { productCategories } = useProduct();
  const categories = productCategories
    .slice(0, 5)
    .filter((category) => category !== "all");

  return (
    <section className="pt-[140px] pb-[90px] text-center sm:text-left">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-10">
        <div className="sm:col-span-3">
          <Link to="/" className="block">
            <img src={logo} className="m-auto sm:m-0" alt="coral logo" />
          </Link>
          <p className="py-7 text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <SocialIcons />
        </div>
        <div className="md:col-span-2">
          <h4 className="font-roboto font-medium uppercase pb-5">Catalog</h4>
          <div className="wrapper flex flex-col">
            {categories.map((category) => (
              <Link
                key={category}
                className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
                to={category}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-roboto font-medium uppercase pb-5">About Us</h4>
          <div className="wrapper flex flex-col">
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="sitemap"
            >
              Sitemap
            </Link>
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="faq"
            >
              FAQ
            </Link>
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="about"
            >
              About Us
            </Link>
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="terms-and-conditions"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-roboto font-medium uppercase pb-5">
            Customer Service
          </h4>
          <div className="wrapper flex flex-col">
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="contact"
            >
              Contact Us
            </Link>
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="track-your-order"
            >
              Track Your Order
            </Link>
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="shipping policy"
            >
              Shipping Policy
            </Link>
            <Link
              className="capitalize text-sm transition-transform sm:hover:scale-105 py-1 text-footerText hover:underline"
              to="call-us"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const SocialIcons = () => {
  const socialMedias = [
    {
      id: uuidv4(),
      name: "facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/tutorials-media",
    },
    {
      id: uuidv4(),
      name: "twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com",
    },
    { id: uuidv4(), name: "linkedin", icon: <FaLinkedin />, url: "" },
    { id: uuidv4(), name: "dribbble", icon: <FaDribbble />, url: "" },
  ];

  return (
    <div className="flex gap-4 justify-center sm:justify-start">
      {socialMedias.map(({ id, name, icon, url }) => (
        <a
          className="relative group hover:scale-110 transition-transform"
          key={id}
          href={url}
          target="_blank"
        >
          <span className="absolute bg-black text-white -top-6 rounded px-2 text-xs hidden group-hover:block">
            {name}
          </span>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default UpperFooter;
