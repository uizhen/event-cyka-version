import React from "react";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";

const Information: React.FC = () => {
  return (
    <div className="bg-white">
      <div className=" relative overflow-hidden lg:overflow-visible lg:mx-10 min-h-[75vh]  flex">
        <Image
          src={"/assets/30.webp"}
          width={1900}
          height={900}
          objectFit="cover"
          className="rounded-[80px]"
        />
        <div className="absolute z-10 flex items-center w-full h-full text-white">
          <div className="absolute rounded-[80px] w-full bg-[#00396a] opacity-[0.7] z-0 h-full"></div>
          <div className="z-10 flex flex-col w-full p-10">
            <div className="relative flex">
              <h1 className="absolute text-[8rem] stroke -translate-y-11 opacity-[0.2]">
                Journey
              </h1>
              <h1 className="text-[3.75rem] w-[40rem] pb-4 ">
                Proud of its Journey
              </h1>
            </div>
            <p className="w-[22rem] opacity-[0.8] leading-6">
              Amwerk has experienced great growth over the years, but we ve
              strived to maintain a family atmosphere where employees can thrive
              and succeed. Without a doubt, the people behind Amwerk are the
              cornerstone of our companys success.
            </p>
            <ul className="">
              <li className="flex items-center p-2">
                <div className="text-[#0adab7] pr-1">
                  <BiCheckCircle size={26} />
                </div>
                Solutions for your manufacturing business
              </li>
              <li className="flex items-center p-2">
                <div className="text-[#0adab7] pr-1">
                  <BiCheckCircle size={26} />
                </div>
                Production of bespoke tools and machines
              </li>
              <li className="flex items-center p-2">
                <div className="text-[#0adab7] pr-1">
                  <BiCheckCircle size={26} />
                </div>
                Designing, building and testing with highest quality
              </li>
              <li className="flex items-center p-2">
                <div className="text-[#0adab7] pr-1">
                  <BiCheckCircle size={26} />
                </div>
                Delivering the best results for reasonable cost
              </li>
            </ul>
          </div>
          <div className="overflow-hidden z-10 bg-[red] w-full h-[30rem] lg:flex hidden  stranslate-x-6 rounded-[60px]">
            <Image
              src={"/assets/minisection.png"}
              width={720}
              height={500}
              objectFit={"cover"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
