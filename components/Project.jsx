/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Script from 'next/script';
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (

    <section className="Project grid  md:grid-flow-col gap-2 bg-lighter-yellow h-100 px-6 py-6 text-center place-items-center content-stretch md:px-32 ">
      <div className="md:col-span-3">
        <h1>PROJECT</h1>
      </div>
      <div className="md:row-span-4 bg-black rounded-[20px] relative content-stretch ">
        <div className="rounded-[20px] hover:opacity-50 z-0">
        <Image
        className="rounded-[20px]"
          src="/trippax-app.jpg"
          width={369}
          height={600}
        ></Image>
        </div>
        <div className="Button rounded-[20px] opacity-0 absolute flex inset-0 z-10 justify-center items-center hover:opacity-100">Recommended Places Feature</div>
      </div>
      <div className="md:row-span-2 md:col-span-2 bg-black rounded-[20px] content-stretch">
        <Image
          className="rounded-[20px] hover:opacity-50"
          src="/content-sharing-1.png"
          width={800}
          height={530}
        ></Image>
      </div>
      <div className="md:row-span-2 md:col-span-2 bg-black rounded-[20px] content-stretch">
        <Image
          className="rounded-[20px] hover:opacity-50"
          src="/test.png"
          width={800}
          height={530}
        ></Image>
      </div>

      <Script></Script>
    </section>
  );
};

export default Project;
