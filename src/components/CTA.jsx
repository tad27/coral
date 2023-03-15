import React from "react";
import brandBanner from "../assets/cta-section/brand-banner.png";
import zaraDarkLogo from "../assets/cta-section/zara-dark-logo.svg";
import zaraLightLogo from "../assets/cta-section/zara-white-logo.png";
function CTA() {
  return (
    <section className="w-full h-[776px] relative overflow-hidden">
      <img
        className="absolute w-full h-full object-cover inset-0 z-0"
        src={brandBanner}
        alt=""
      />
      <img
        className="absolute w-[732px] h-[309px] -right-20 top-10"
        src={zaraDarkLogo}
        alt=""
      />

      <div className="absolute w-full h-full z-1">
        <div className="container grid md:grid-cols-6 lg:grid-cols-12 h-full place-content-end pb-20">
          <div className="col-span-2 lg:col-span-7"></div>
          <div className="col-span-4 lg:col-span-5">
            <img src={zaraLightLogo} alt="" />
            <p className="font-roboto text-2xl text-white my-10">
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </p>
            <button className="font-roboto text-2xl px-4 py-2 transition-opacity bg-white/90 hover:bg-white text-black">
              See Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
