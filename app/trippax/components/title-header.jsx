import React from "react";
import Image from "next/image";

const ProjectHeader = () => {
  return (
    <div className="Project-Page">
      <div className="">
        <a>
          Developed social media content sharing functionalities within tripPAX,
          allowing users to easily share their travel itineraries on various
          platforms.
        </a>
      </div>

      <div className="Project-Header">
        <Image
          className="Project"
          src="/trippax-logo.png"
          alt="Trippax"
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
    </div>
  );
};

export default ProjectHeader;
