import React from "react";
import Image from "next/image";

import { VscGithub } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";

const Header = () => {
  return (
    <section className="Header grid py-6 px-6 gap-8 justify-items-center md:items-center md:justify-items-center md:px-24 md:py-24">
      <div className="Profiles relative md:translate-x-6">
        <Image
          className="Profile -translate-x-6"
          src="/profile.png"
          alt="Wahi"
          width={250}
          height={250}
          style={{ objectFit: "contain" }}
        ></Image>

        <div className="circle-1 absolute rounded-full h-8 w-8 hover:border-font-1 border-2">
          <a href="https://github.com/Wahi08">
            <VscGithub />
          </a>
        </div>
        <div className="circle-2 absolute rounded-full h-8 w-8 hover:border-font-1 border-2">
          <a href="mailto:nwahidah0808@gmail.com">
            <MdOutlineMailOutline />
          </a>
        </div>
        <div className="circle-3 absolute rounded-full h-8 w-8 bg-lighter-yellow"></div>
        <div className="circle-4 absolute rounded-full h-8 w-8 bg-light-yellow"></div>
        <div className="circle-5 absolute rounded-full h-8 w-8 bg-font-1"></div>
      </div>

      <div className="md:mr-10">
        <h1>NURUL WAHIDAH</h1>
        <p className="text-justify">
          Highly motivated recent graduate with a passion for software
          engineering. Particularly interested in front-end development and
          building efficient, scalable applications. Eager to learn and
          contribute to a fast-paced software development environment.
        </p>
      </div>
    </section>
  );
};

export default Header;
