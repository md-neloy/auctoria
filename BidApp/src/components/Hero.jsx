import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bid Big</h1>
            <p className="mb-5 font-bold uppercase">
            Join the wildest auction platform where every bid counts!
            </p>
            <button className="btn bg-teal-300 rounded-xl">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
