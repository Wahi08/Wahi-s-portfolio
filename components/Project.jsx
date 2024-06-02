/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <section className="Project grid xl:grid-flow-col gap-2 bg-lighter-yellow h-100 px-6 py-6 text-center place-items-center md:px-28 ">
      <div className="md:col-span-3">
        <h1 className="text-[1.8rem]">PROJECT</h1>
      </div>

      {/* recommended places feature */}
      <div className="md:row-span-4 rounded-[10px] relative">
        <div className="rounded-[10px] z-0">
          <Image
            className="rounded-[10px]"
            src="/trippax-app.jpg"
            width={369}
            height={600}
          ></Image>
        </div>
        <div className="Button-bg rounded-[10px] opacity-0 absolute flex inset-0 z-10 justify-center items-center hover:opacity-100">
          <button>
              <Link href="/trippax">More Details</Link>
          </button>
        </div>
      </div>

      {/* content sharing */}
      <div className="md:row-span-2 md:col-span-2 rounded-[10px] relative">
        <Image
          className="rounded-[10px] hover:opacity-50"
          src="/content-sharing-1.png"
          width={800}
          height={530}
        ></Image>
      </div>

      {/* web design */}
      <div className="md:row-span-2 md:col-span-2 rounded-[10px] relative">
        <Image
          className="rounded-[10px] hover:opacity-50"
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
