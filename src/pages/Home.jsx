import React from "react";
import BestSellers from "../components/BestSellers";
import Brands from "../components/Brands";
import CTA from "../components/CTA";
import Header from "../components/Header";
import InstagramFollowers from "../components/InstagramFollowers";
import NewProducts from "../components/NewProducts";
import NewStyles from "../components/NewStyles";

function Home() {
  return (
    <div>
      <Header />
      <Brands />
      <NewStyles />
      <NewProducts />
      <CTA />
      <BestSellers />
      <InstagramFollowers />
    </div>
  );
}

export default Home;
