import React from "react";
import { BsMap } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const MapSection: React.FC = () => {
  return (
    <div className="bg-[white]">
      <div className="bg-[#0e51ac] h-[200vh] md:h-[130vh] lg:h-screen rounded-bl-[15rem]">
        <div className="relative w-full h-[70vh] rounded-bl-[15rem] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25538.873206128585!2d106.92346554761804!3d47.91459998422851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692442297c949%3A0x71884efc4dce5cb2!2sSukhbaatar%20Square!5e0!3m2!1sen!2smn!4v1665245995689!5m2!1sen!2smn"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className=" w-full h-[14.6rem] flex flex-col md:flex-row lg:flex-row lg:pt-0 pt-[30rem] md:pt-[12rem] items-center justify-center gap-[6rem]">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-col items-start text-white gap-y-4">
              <div className="text-[#09c6a7]">
                <BsMap size={48} />
              </div>
              <div className="flex flex-col">
                <b className="text-[1.6rem]">Cleveland</b>
                <span className="w-[6rem] h-[0.2rem] bg-[#09c6a7] mt-2"></span>
              </div>
              <div>
                <p className="pb-2">3644 Rocky River Drive</p>
                <p>Cleveland, OH 44111, USA</p>
              </div>
            </div>
            <div className="flex flex-col items-start text-white gap-y-4">
              <div className="text-[#09c6a7]">
                <TbWorld size={48} />
              </div>
              <div className="flex flex-col">
                <b className="text-[1.6rem]">Michigan</b>
                <span className="w-[6rem] h-[0.2rem] bg-[#09c6a7] mt-2"></span>
              </div>
              <div>
                <p className="pb-2">1099-901 Springland Ave</p>
                <p>Michigan City, IN 46360, USA</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row ">
            <div className="flex flex-col items-start text-white gap-y-4">
              <div className="text-[#09c6a7]">
                <IoChatbubblesOutline size={48} />
              </div>
              <div className="flex flex-col">
                <b className="text-[1.6rem]">Email Amwerk</b>
                <span className="w-[6rem] h-[0.2rem] bg-[#09c6a7] mt-2"></span>
              </div>
              <div>
                <p className="pb-2">info@amwerk.com</p>
                <p>office@amwerk.com</p>
              </div>
            </div>
            <div className="flex flex-col items-start text-white gap-y-4">
              <div className="text-[#09c6a7]">
                <AiOutlineMail size={48} />
              </div>
              <div className="flex flex-col">
                <b className="text-[1.6rem]">Call us</b>
                <span className="w-[6rem] h-[0.2rem] bg-[#09c6a7] mt-2"></span>
              </div>
              <div>
                <p className="pb-2">216-308-5651, Cleveland factory</p>
                <p>734-585-3072, Michigan factory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
