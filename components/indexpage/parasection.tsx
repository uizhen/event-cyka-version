import React from "react";
import Image from "next/image";
import { FaHardHat } from "react-icons/fa";
import { GiPulleyHook, GiSandsOfTime, GiArcheryTarget } from "react-icons/gi";

const ParaSection: React.FC = () => {
  return (
    <section className="bg-[#f1f1f1] flex flex-col overflow-hidden">
      <div className="z-10 min-h-[75vh] bg-[white] rounded-tl-[20rem] items-center justify-center flex lg:flex-row flex-col rounded-bl-[20rem]">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col w-[21.5rem] leading-6 ">
            <b className="text-[1.5rem]">Our mission</b>
            <p className="pt-6 pb-4">
              We’re passionate about serving our clients to the fullest, while
              continuously growing, learning, and innovating. With competencies
              across multiple industries, we offer our customers a more reliable
              supply chain and confidence in the long life of their program.
            </p>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring
            </p>
          </div>
          <div className="flex flex-col w-[21.5rem] leading-6 ">
            <b className="text-[1.5rem]">Amwerk vision</b>
            <p className="pt-6 pb-4">
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. Interactively coordinate proactive e-commerce via
              process-centric “outside the box” thinking. Completely pursue
              scalable customer service through sustainable potentialities.
            </p>
            <p>
              Amwerk manufactures parts for a broad array of industries – from
              highly regulated industries that rely on Amwerk for consistent,
              exacting parts to those that require distinct, stand-out product
              identification. With a dedicated engineering team, expansive
              supplier network and diverse capabilities, Amwerk has the
              manufacturing experience.
            </p>
          </div>
        </div>
        <div className="relative w-[24rem] h-[24rem] rounded-[30px] overflow-hidden flex ml-10">
          <Image src={"/assets/realman.jpg"} width={700} height={700} />
          <div className="flex items-center px-9 leading-6 absolute w-full bg-[#09c6a7] opacity-[0.9] h-[55%] bottom-0">
            <p className="text-white">
              Amwerk has experienced great growth over the years, but we’ve
              strived to maintain a family atmosphere where employees can thrive
              and succeed
            </p>
          </div>
        </div>
      </div>
      <section className="bg-[#f1f1f1] -translate-y-[18rem] -mb-[18rem] z-0">
        <div className="bg-[#0e51ac] lg:w-[20rem]  rounded-bl-[20rem]  min-h-[80vh] translate-x-[0]">
          <div className="flex items-center w-full lg:w-[100rem] justify-center bg-[#0e51ac]  rounded-tr-[20rem] rounded-bl-[10rem] lg:rounded-bl-[20rem] lg:rounded-tr-[20rem]   min-h-[50vh] translate-y-[18rem]  translate-x-[0rem] z-10">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center justify-center text-white gap-y-4">
                <div className="w-[120px] text-white h-[120px] border-[#09c6a7] border-[7px] flex items-center justify-center rounded-[100%]">
                  <FaHardHat size={50} />
                </div>
                <b>Construction</b>
                <h1 className="opacity-[0.7]">
                  Fulfilling client requests on the go
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center text-white gap-y-4">
                <div className="w-[120px] text-white h-[120px] border-[#09c6a7] border-[7px] flex items-center justify-center rounded-[100%]">
                  <GiPulleyHook size={50} />
                </div>
                <b>Construction</b>
                <h1 className="opacity-[0.7]">
                  Fulfilling client requests on the go
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col items-center justify-center text-white gap-y-4">
                <div className="w-[120px] text-white h-[120px] border-[#09c6a7] border-[7px] flex items-center justify-center rounded-[100%]">
                  <GiSandsOfTime size={50} />
                </div>
                <b>Construction</b>
                <h1 className="opacity-[0.7]">
                  Fulfilling client requests on the go
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center text-white gap-y-4">
                <div className="w-[120px] text-white h-[120px] border-[#09c6a7] border-[7px] flex items-center justify-center rounded-[100%]">
                  <GiArcheryTarget size={50} />
                </div>
                <b>Construction</b>
                <h1 className="opacity-[0.7]">
                  Fulfilling client requests on the go
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[70vh] bg-[#f1f1f1]">
        <div className="w-full min-h-[70vh] translate-x-[20rem] translate-y-[3.4rem]  bg-[#0e51ac]">
          <div className="w-full min-h-[70vh] translate-y-[0rem] bg-[#0e51ac] -translate-x-[10rem]">
            <div className="gap-y-6 pt-[6rem] lg:pr-[6rem] px-[2rem] flex flex-col items-center w-full min-h-screen bg-[#f1f1f1] -translate-x-[10rem] rounded-tr-[10rem] lg:rounded-tr-[20rem]">
              <div className="grid w-full grid-cols-3 gap-6 lg:grid-cols-5">
                <div className="relative bg-[blue] flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image
                    src={"/assets/cube1.jpg"}
                    layout="fill"
                    className="transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="flex flex-col items-start justify-center absolute w-[90%] h-[58%] bottom-0 transition-all duration-700 -translate-x-[16rem] group-hover:-translate-x-4   bg-[white] opacity-[0.5] group-hover:opacity-[1]">
                    <div className="pl-6 text-[1.5rem] pb-2 font-bold">
                      Industrial aero products
                    </div>
                    <div className="w-[14rem] flex items-center justify-center pl-6 mx-auto">
                      Synergistically evolve technologies rather than just in
                      time initiatives.
                    </div>
                  </div>
                </div>
                <div className="relative  col-span-2 flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image src={"/assets/cube2.jpg"} layout="fill" />
                  <div className="absolute w-full h-[58%] bottom-0 px-4 flex flex-col items-start justify-center  transition-all duration-700 -translate-x-[34.5rem] group-hover:-translate-x-10 bg-white">
                    <div className="pl-10 text-[1.5rem] pb-2 font-bold">
                      Berlin Railway elements
                    </div>
                    <div className="flex items-center justify-center w-full pl-6 mx-4">
                      Phosfluorescently expedite impactful supply chains via
                      focused results. Holistically generate open-source
                      applications through bleeding-edge sources. Compellingly
                      supply just in time catalysts for change through top-line
                      potentialities.
                    </div>
                  </div>
                </div>
                <div className="relative col-span-2 lg:col-span-1  flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image src={"/assets/cube3.jpg"} layout="fill" />
                  <div className="flex flex-col items-start justify-center absolute w-[90%] h-[58%] bottom-0 transition-all duration-700 -translate-x-[16rem] group-hover:-translate-x-4   bg-[white] opacity-[0.5] group-hover:opacity-[1]">
                    <div className="pl-6 text-[1.5rem] pb-2 font-bold">
                      Industrial aero products
                    </div>
                    <div className="w-[14rem] flex items-center justify-center pl-6 mx-auto">
                      Synergistically evolve technologies rather than just in
                      time initiatives.
                    </div>
                  </div>
                </div>
                <div className="relative  flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image src={"/assets/cube4.jpg"} layout="fill" />{" "}
                  <div className="flex flex-col items-start justify-center absolute w-[90%] h-[58%] bottom-0 transition-all duration-700 -translate-x-[16rem] group-hover:-translate-x-4   bg-[white] opacity-[0.5] group-hover:opacity-[1]">
                    <div className="pl-6 text-[1.5rem] pb-2 font-bold">
                      Industrial aero products
                    </div>
                    <div className="w-[14rem] flex items-center justify-center pl-6 mx-auto">
                      Synergistically evolve technologies rather than just in
                      time initiatives.
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-3 gap-6 lg:grid-cols-5">
                <div className="relative flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image src={"/assets/cube5.jpg"} layout="fill" />
                  <div className="flex flex-col items-start justify-center absolute w-[90%] h-[58%] bottom-0 transition-all duration-700 -translate-x-[16rem] group-hover:-translate-x-4   bg-[white] opacity-[0.5] group-hover:opacity-[1]">
                    <div className="pl-6 text-[1.5rem] pb-2 font-bold">
                      Industrial aero products
                    </div>
                    <div className="w-[14rem] flex items-center justify-center pl-6 mx-auto">
                      Synergistically evolve technologies rather than just in
                      time initiatives.
                    </div>
                  </div>
                </div>
                <div className="relative col-span-2 lg:col-span-1  flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image src={"/assets/cube6.jpg"} layout="fill" />{" "}
                  <div className="flex flex-col items-start justify-center absolute w-[90%] h-[58%] bottom-0 transition-all duration-700 -translate-x-[16rem] group-hover:-translate-x-4   bg-[white] opacity-[0.5] group-hover:opacity-[1]">
                    <div className="pl-6 text-[1.5rem] pb-2 font-bold">
                      Industrial aero products
                    </div>
                    <div className="w-[14rem] flex items-center justify-center pl-6 mx-auto">
                      Synergistically evolve technologies rather than just in
                      time initiatives.
                    </div>
                  </div>
                </div>
                <div className="relative  col-span-2 flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image src={"/assets/cube7.jpg"} layout="fill" />
                  <div className="absolute w-full h-[58%] bottom-0 px-4 flex flex-col items-start justify-center  transition-all duration-700 -translate-x-[34.5rem] group-hover:-translate-x-10 bg-white">
                    <div className="pl-10 text-[1.5rem] pb-2 font-bold">
                      Berlin Railway elements
                    </div>
                    <div className="flex items-center justify-center w-full pl-6 mx-4">
                      Phosfluorescently expedite impactful supply chains via
                      focused results. Holistically generate open-source
                      applications through bleeding-edge sources. Compellingly
                      supply just in time catalysts for change through top-line
                      potentialities.
                    </div>
                  </div>
                </div>
                <div className="relative  flex justify-center items-center cursor-pointer h-[16rem] group overflow-hidden">
                  <div className="absolute z-10 text-white text-[30px] text-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-0">
                    Industrial aero products
                  </div>
                  <Image src={"/assets/cube8.jpg"} layout="fill" />{" "}
                  <div className="flex flex-col items-start justify-center absolute w-[90%] h-[58%] bottom-0 transition-all duration-700 -translate-x-[16rem] group-hover:-translate-x-4   bg-[white] opacity-[0.5] group-hover:opacity-[1]">
                    <div className="pl-6 text-[1.5rem] pb-2 font-bold">
                      Industrial aero products
                    </div>
                    <div className="w-[14rem] flex items-center justify-center pl-6 mx-auto">
                      Synergistically evolve technologies rather than just in
                      time initiatives.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ParaSection;
