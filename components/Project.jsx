
import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <section className="bg-[#f1c660] px-4 py-8 md:px-20 ">
      <div className="title border-grey-white border-l-[20px] pl-3">
        <a className="font-black md:text-[34px] tracking-wider">WORK</a>
      </div>

      <div className="Works flex flex-wrap justify-center md:justify-normal md:flex-nowrap md:overflow-x-scroll snap-x h-auto gap-10 pt-4">
        <div className="Work md:flex-shrink-0 snap-center h-[380px] w-[400px] rounded">
          <div className="Work-img relative h-[250px] rounded overflow-hidden">
          <Link href="/trippax-feature"><Image src="/trippax-thumbnail1.svg" width={1240} height={100} alt=""></Image></Link>
            <div className="absolute top-2 left-[5px] md:left-2 rounded-full bg-grey-white text-center border-black border-[1px] px-3 py-2 md:px-3 md:py-2 ">
              <a className="text-[14px] md:text-[16px]">MOBILE APP</a>
            </div>
          </div>
          <div className="pt-2 md:pt-2"> {/*top-padding not working*/}
            <a className="text-black font-thin text-[18px] md:text-[22px] tracking-wider" href="/trippax-feature">
              TRIPPAX - TRAVEL ITINERARY
            </a>
          </div>
          <div className="pt-2">
            <a className="text-gray-800">
              Developed a new feature for the existing travel itinerary app
              involved listing recommended places based on user location and
              preferences.
            </a>
          </div>
        </div>

      </div>
    </section>
    
  );
};

export default Project;
