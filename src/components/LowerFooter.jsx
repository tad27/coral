import React from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

import paymentMethod from "../assets/payment-methods.png";

function LowerFooter() {
  return (
    <div className="bg-primary text-white py-[14px]">
      <div className="container flex flex-col gap-2 md:flex-row items-center justify-between">
        <span className="text-sm">@ 2022 Coral, inc.</span>
        <img className="w-1/2 md:w-auto" src={paymentMethod} alt="" />
        <a href="#" className="flex text-sm items-center gap-2">
          Scroll to top
          <HiOutlineArrowUp />
        </a>
      </div>
    </div>
  );
}

export default LowerFooter;
