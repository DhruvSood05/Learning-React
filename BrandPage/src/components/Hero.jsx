import React from "react";

function Hero() {
  return (
    <main className="flex max-w-[1200px] mx-auto my-0 items-center h-[calc(100vh-72px)] ">
      <div className="flex flex-col gap-[36px] ">
        <h1 className="font-extrabold text-[108px] leading-[102px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-medium text-(--gray) max-w-[400px]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex gap-[40px] ">
          <button className="px-[16px] py-[6px] bg-(--red) text-white font-[500px] text-[24px]">
            Shop Now
          </button>
          <button className="bg-transparent text-(--gray) border border-solid border-gray-700 px-[16px] py-[6px] text-[24px] font-[500px]">
            Category
          </button>
        </div>

        <div>
          <p className="text-[14px] mb-[10px] ">Also available on</p>

          <div className="flex gap-[16px]">
            <img src="/Images/amazon.png" alt="amazon-log0" />
            <img src="/Images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <img
          src="/Images/shoe_image.png"
          alt="hero-log0"
          className="w-[530px] h-[487px]"
        />
      </div>
    </main>
  );
}

export default Hero;
