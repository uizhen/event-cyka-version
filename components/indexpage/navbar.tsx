import React from "react";
import Image from "next/image";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbMap2 } from "react-icons/tb";
import { FaMailBulk } from "react-icons/fa";
import { CgCalculator } from "react-icons/cg";
import { Keyframes, Scroll } from "scrollex";

const Navbar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col absolute z-10 w-full  min-h-[23vh]">
      <div className="flex justify-between w-full min-h-[15vh] items-center px-[11rem] text-white py-4 ">
        <div>
          <Image src={"/assets/pizda-logo-1.webp"} width={300} height={90} />
        </div>
        <div className="flex gap-10">
          <div className="flex items-center gap-2">
            <div className="text-[#09c6a7]">
              <IoChatbubbleEllipsesOutline size={34} />
            </div>
            <div>
              <h1>Give us a call</h1>
              <h1>123-456-789</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#09c6a7]">
              <TbMap2 size={38} />
            </div>
            <div>
              <h1>Give us a call</h1>
              <h1>123-456-789</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#09c6a7]">
              <FaMailBulk size={32} />
            </div>
            <div>
              <h1>Give us a call</h1>
              <h1>123-456-789</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mx-[11rem] border-b-[1px] opacity-[0.3]"></div> */}
      {/* cheating display */}
      <div className="z-10 w-full absolute top-[13rem] min-h-[70vh] opacity-[0.3]"></div>
      <div className="pt-2 flex text-white px-[11rem] justify-between">
        <div className="flex gap-6 text-black">
          <div className="cursor-pointer group-1">
            <div className="relative  flex items-center justify-center  w-full p-4 rounded-t-[8px] overflow-hidden group-2">
              <div className="absolute bg-[#09c6a6] w-0 h-full opacity-0 duration-300 transition-all group-1-hover:w-full group-1-hover:opacity-[1]"></div>
              <div className="z-10 text-white">Home</div>
            </div>
            <div className=" absolute w-[12rem] p-4 translate-y-8 transition-all bg-white opacity-[0] group-1-hover:z-20 group-1-hover:opacity-[1]  group-1-hover:opacit group-1-hover:-translate-y-0">
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
            </div>
          </div>
          <div className="cursor-pointer group-1">
            <div className="relative  flex items-center justify-center  w-full p-4 rounded-t-[8px] overflow-hidden group-2">
              <div className="absolute bg-[#09c6a6] w-0 h-full opacity-0 duration-300 transition-all group-1-hover:w-full group-1-hover:opacity-[1]"></div>
              <div className="z-10 text-white">Services</div>
            </div>
            <div className=" absolute w-[12rem] p-4 translate-y-8 transition-all bg-white opacity-[0] group-1-hover:z-20 group-1-hover:opacity-[1]  group-1-hover:opacit group-1-hover:-translate-y-0">
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
            </div>
          </div>
          <div className="cursor-pointer group-1">
            <div className="relative  flex items-center justify-center  w-full p-4 rounded-t-[8px] overflow-hidden group-2">
              <div className="absolute bg-[#09c6a6] w-0 h-full opacity-0 duration-300 transition-all group-1-hover:w-full group-1-hover:opacity-[1]"></div>
              <div className="z-10 text-white">Pages</div>
            </div>
            <div className=" absolute w-[12rem] p-4 translate-y-8 transition-all bg-white opacity-[0] group-1-hover:z-20 group-1-hover:opacity-[1]  group-1-hover:opacit group-1-hover:-translate-y-0">
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
            </div>
          </div>
          <div className="cursor-pointer group-1">
            <div className="relative  flex items-center justify-center  w-full p-4 rounded-t-[8px] overflow-hidden group-2">
              <div className="absolute bg-[#09c6a6] w-0 h-full opacity-0 duration-300 transition-all group-1-hover:w-full group-1-hover:opacity-[1]"></div>
              <div className="z-10 text-white">Portfolio</div>
            </div>
            <div className=" absolute w-[12rem] p-4 translate-y-8 transition-all bg-white opacity-[0] group-1-hover:z-20 group-1-hover:opacity-[1]  group-1-hover:opacit group-1-hover:-translate-y-0">
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
            </div>
          </div>
          <div className="cursor-pointer group-1">
            <div className="relative  flex items-center justify-center  w-full p-4 rounded-t-[8px] overflow-hidden group-2">
              <div className="absolute bg-[#09c6a6] w-0 h-full opacity-0 duration-300 transition-all group-1-hover:w-full group-1-hover:opacity-[1]"></div>
              <div className="z-10 text-white">News</div>
            </div>
            <div className=" absolute w-[12rem] p-4 translate-y-8 transition-all bg-white opacity-[0] group-1-hover:z-20 group-1-hover:opacity-[1]  group-1-hover:opacit group-1-hover:-translate-y-0">
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
            </div>
          </div>
          <div className="cursor-pointer group-1">
            <div className="relative  flex items-center justify-center  w-full p-4 rounded-t-[8px] overflow-hidden group-2">
              <div className="absolute bg-[#09c6a6] w-0 h-full opacity-0 duration-300 transition-all group-1-hover:w-full group-1-hover:opacity-[1]"></div>
              <div className="z-10 text-white">Shop</div>
            </div>
            <div className=" absolute w-[12rem] p-4 translate-y-8 transition-all bg-white opacity-[0] group-1-hover:z-20 group-1-hover:opacity-[1]  group-1-hover:opacit group-1-hover:-translate-y-0">
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
              <h1 className="py-2">home1</h1>
            </div>
          </div>
        </div>
        <div className="cursor-pointer hover:-translate-y-2 transition-all   hover:brightness-110 flex p-4 bg-[#09c6a6] rounded-[100px]">
          <CgCalculator />
          Get a quote
        </div>
      </div>
    </div>
  );
};

export default Navbar;
