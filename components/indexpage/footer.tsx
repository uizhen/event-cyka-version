import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-[white] w-full h-[40vh] pt-4">
      <div className="bg-[#09c6a7] w-full h-[40vh] pt-4">
        <div className="flex bg-[white] w-full h-[110vh] md:h-[50vh] lg:h-[40vh] relative">
          <Image src={"/assets/footer.jpg"} layout={"fill"} />
          <div className="absolute w-full h-full bg-[#0e51ac] opacity-[0.5]"></div>
          <div className="absolute flex flex-col items-start justify-between w-full gap-10 p-10 leading-6 text-white lg:flex-row">
            <div className="flex flex-col items-center">
              <Image
                src={"/assets/pizda-logo-1.webp"}
                width={200}
                height={60}
              />
              <p className="w-[14rem] pt-2">
                With a dedicated engineering team, expansive supplier network
                and diverse capabilities, Amwerk has the manufacturing
                experience ready to support you with your next program.
              </p>
            </div>
            <div className="w-[14rem]">
              <b className="text-[1.5rem]">Contact Us</b>
              <div className="flex flex-row gap-2 pt-10">
                <div className="text-[#09c6a7]">
                  <IoLocationSharp size={24} />
                </div>
                <h1 className="">
                  3644 Rocky River Drive, Cleveland, OH 44111, USA
                </h1>
              </div>
              <div className="flex gap-2">
                <div className="text-[#09c6a7]">
                  <IoLocationSharp size={24} />
                </div>
                <h1>1099 Springland Ave, Michigan City, IN 46360, USA</h1>
              </div>
              <div className="flex gap-2">
                <div className="text-[#09c6a7]">
                  <AiFillPhone size={24} />
                </div>
                <h1>414-214-0362</h1>
              </div>
              <div className="flex gap-2">
                <div className="text-[#09c6a7]">
                  <FaPaperPlane size={24} />
                </div>
                <h1>info@amwerk.com</h1>
              </div>
            </div>
            <div className="">
              <b className=" text-[1.5rem]">Subscribe</b>
              <p className="pt-6 pb-6">
                Subscribe to our newsletter to receive the latest news and
                updates on Amwerk.
              </p>
              <div className="flex flex-col gap-y-6">
                <input
                  type="text"
                  placeholder="Email"
                  className="h-[2rem] focus:outline-none w-[14rem] bg-transparent border-b-2"
                />
                <button className="bg-[#09c6a7] p-2 rounded-xl w-[5rem] transition-all duration-700 hover:brightness-110 hover:scale-110">
                  Click
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[6rem] bg-[white] flex flex-col items-center justify-center">
          <h1>
            Copyright 2022,
            <b>Uizhen Tech Theme .</b>
            All rights reserved.
          </h1>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
