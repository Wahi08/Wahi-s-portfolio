
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <section className="bg-grey-white md:h-full relative">
      <div className="flex justify-center pb-8 md:pb-0 px-4 md:px-20 ">
        <Image
          className="md:-translate-y-10"
          src="/landingPage.svg"
          width={2500}
          height={20}
          alt=""
        ></Image>
      </div>

      <div className="flex flex-col justify-center text-center px-4 gap-8 pb-8 md:flex-row md:px-20 md:-translate-y-6">
        <div className=" border-[#f3f300ff] border-x-2 py-2 px-2">
          <a className="font-black md:text-[24px]">ABOUT ME</a>
          <p className="text-justify black">
            Hi, I&apos;m Nurul Wahidah. A highly motivated recent graduate with a
            passion for software engineering. Particularly interested in
            front-end development and building efficient, scalable applications.
            Eager to learn and contribute to a fast-paced software development
            environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
