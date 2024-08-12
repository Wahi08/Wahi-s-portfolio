import React from "react";
import Link from "next/link";

import { VscGithub } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";

const MainHeader = () => {
  return (
    <div className="Main-Header bg-grey-white h-50px justify-between flex px-4 md:px-20" >
      <div className="w-20"></div>
      <div className="flex justify-center items-center">
        <Link href="/">
          <h1 className="text-[30px]">WAHI</h1>
        </Link>
      </div>

      <div className="Contact flex justify-end items-center gap-4 w-20">
        <a className="text-[24px]" href="https://github.com/Wahi08">
          <VscGithub />
        </a>
      <a className="text-[24px] float-right" href="mailto:nwahidah0808@gmail.com">
          <MdOutlineMailOutline />
        </a>

      </div>

      
    </div>
  );
};

export default MainHeader;
