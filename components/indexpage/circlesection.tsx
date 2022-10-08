import React from "react";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";

const CircleSection: React.FC = () => {
  return (
    <section className="pt-20 bg-white">
      <div className="min-h-[75vh] rounded-br-[20rem] rounded-tr-[20rem] bg-[#f1f1f1] flex lg:flex-row flex-col items-center lg:px-[8rem] justify-between ">
        <div className="">
          <div className="relative lg:w-[35rem] lg:h-[35rem] bg-[black] flex rounded-[100%] justify-center">
            <Image
              src={"/assets/circlesection.png"}
              width={750}
              height={750}
              className="rounded-[100%]"
            />
            <div className="rounded-[100%] z-10 w-full absolute h-full opacity-[0.7] bg-[#00396a]"></div>
            <div className="absolute w-[10rem] border-[10px] rounded-[100%] z-10  border-[#09c6a7] opacity-[0.4] translate-x-[10rem] h-[10rem]"></div>
          </div>
        </div>
        <div className=" flex flex-col gap-y-4 lg:w-[40rem] w-full">
          <div>
            <h1 className="text-[1.5rem]">Our solutions and services</h1>
          </div>
          <b className="text-[2.5rem] lg:text-[3.7rem]">
            Amwerk always gets the job done
          </b>
          <p className="w-full lg:w-[20rem] leading-6">
            Distinctively re-engineer revolutionary meta-services and premium
            architectures. Intrinsically incubate intuitive opportunities and
            real-time potentialities.
          </p>
          <ul>
            <li className="flex items-center">
              <div className="text-[#09c6a7] pb-2 pr-1">
                <BiCheckCircle size={26} />
              </div>
              Solutions for your manufacturing business
            </li>
            <li className="flex items-center">
              <div className="text-[#09c6a7] pb-2 pr-1">
                <BiCheckCircle size={26} />
              </div>
              Production of bespoke tools and machines
            </li>
            <li className="flex items-center">
              <div className="text-[#09c6a7] pb-2 pr-1">
                <BiCheckCircle size={26} />
              </div>
              Designing, building and testing with highest quality
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default CircleSection;
