import React from "react";
import Image from "next/image";

const ProjectHeader = () => {
  return (
    <section className="Project-header reverse grid px-4 py-4 gap-8 justify-items-center items-center md:px-[10rem] md:h-[400px] md:mx-7 ">
      <div className="mx-4 ">
        <h1 className="md:text-[40px]">TripPAX Content Sharing</h1>
        <div className="text-justify">
        <a>
          Developed social media content sharing functionalities within tripPAX,
          allowing users to easily share their travel itineraries on various
          platforms.
        </a>
        </div>
        
      </div>

      <div className="Logo relative">
        <Image
          className="Project"
          src="/trippax-logo.png"
          alt="Trippax"
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
    </section>
  );
};

export default ProjectHeader;
