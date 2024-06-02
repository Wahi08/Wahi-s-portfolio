"use client";

import React, { useState } from "react";
import Image from "next/image";

const Details = () => {
  const [hover, setHover] = useState(true);

  const HoverData = "Scroll Image";

  const onHover = (e) => {
    e.preventDefault();
    setHover(false); // turn false
    console.log("hovered");
  };

  const onHoverOver = (e) => {
    e.preventDefault(); // turn true
    setHover(true);
  };

  return (
    <section className="Details h-auto bg-black">
      <div className="Design-1 grid relative md:py-10">
        <div className="px-8 py-4 text-justify md:float-left md:row-start-1">
          <h1 className="text-white text-center md:text-[35px]">Design</h1>
        </div>

        <div className="float-right overflow-y-auto place-self-center h-56 md:h-[550px] px-8 md:px-0 md:row-span-2 md:row-start-1 md:col- ">
          <div className="relative z-0">
            <Image
              onMouseEnter={(e) => onHover(e)}
              onMouseLeave={(e) => onHoverOver(e)}
              src="/content-sharing-web-view-full.png"
              alt=""
              width={1100}
              height={300}
              loading="lazy"
            ></Image>
            <div className="absolute top-1 left-2 md:top-3 text-center">
              {hover && (
                <p className={hover}>
                  <a
                    onMouseLeave={(e) => onHoverOver(e)}
                    className="Image-scroll z-1 text-white rounded text-[14px] p-1 md:text-[18px]"
                  >
                    {HoverData}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="md:row-start-2 text-justify px-8 py-4">
          <a className="Description  text-light-yellow ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </a>
        </div>
      </div>

      <div className="Wireframe p-10">
        <div className="Design-2 bg-[#FF8C20] text-center grid place-items-center text-white px-8 gap-8 py-8 rounded-[20px]">
          <div className="">
            <div>
              <Image
                src="/content-sharing-wireframe-1.png"
                alt=""
                width={362}
                height={300}
              ></Image>
            </div>

            <h1>1st Prototype</h1>
          </div>

          <div className="">
            <Image
              src="/content-sharing-wireframe-2.png"
              alt=""
              width={280}
              height={300}
            ></Image>

            <h1>2nd Prototype</h1>
          </div>

          <div className="">
            <Image
              className="ml-5"
              src="/content-sharing-mobile-view.png"
              alt=""
              width={122}
              height={100}
            ></Image>

            <h1 className="">Mobile View</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
