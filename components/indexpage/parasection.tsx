import React from "react";
import Image from "next/image";

const ParaSection: React.FC = () => {
  return (
    <section className="bg-[#f1f1f1]">
      <div className="min-h-[75vh] bg-[white] rounded-tl-[20rem] items-center justify-center flex lg:flex-row flex-col rounded-bl-[20rem]">
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
        <div className="relative w-[24rem] h-[24rem] rounded-[30px] overflow-hidden flex ml-10 bg-[red]">
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
    </section>
  );
};

export default ParaSection;
