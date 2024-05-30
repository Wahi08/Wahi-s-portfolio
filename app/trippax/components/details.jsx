import React from "react";
import Image from "next/image";

const Details = () => {
  return (
    <section className="Details h-screen bg-black grid reverse relative md:py-10">
      <div className="px-8 py-4 text-justify md:float-left ">
        <h1 className="text-white text-center md:text-[35px]">Design</h1>

        <div><a className="Description text-light-yellow ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </a></div>

        <div><a className="Description text-light-yellow ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </a></div>
        
      </div>

      <div className="float-right overflow-y-auto h-56 md:h-[500px] ">
        <div className="">
          <img
            src="/Content-Sharing-web-view-full.png"
            width={1100}
            height={300}
            style={{ objectFit: "contain" }}
          ></img>
        </div>
      </div>

      <div className="row-span-2">
        
      </div>
    </section>
  );
};

export default Details;
