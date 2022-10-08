import React from "react";
import { GiMonkeyWrench, GiPowerGenerator } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaVest } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";

type Props = {
  title: string;
  para: string;
};

const Grid: React.FC = () => {
  return (
    <section className="flex flex-col py-20 bg-white ">
      <div className="grid items-center justify-center grid-cols-2 lg:flex lg:flex-row gap-x-10">
        <div className="w-full lg:w-[260px] p-4">
          <div className="pb-4 text-[#00396a]">
            <GiMonkeyWrench size={70} />
          </div>
          <h1 className="text-[1.5rem] pb-2 ">Integrity</h1>
          <div className="mr-[10rem] border-b-[4px] border-[#09c6a7]"></div>
          <p className="text-[1rem] leading-6 pt-2">
            Taking seamless key performance indicators offline to maximise the
            tail processes.
          </p>
        </div>
        <div className="w-full lg:w-[260px] p-4">
          <div className="pb-4 text-[#00396a]">
            <GiPowerGenerator size={70} />
          </div>
          <h1 className="text-[1.5rem] pb-2 ">Automation</h1>
          <div className="mr-[10rem] border-b-[4px] border-[#09c6a7]"></div>
          <p className="text-[1rem] leading-6 pt-2">
            Nanotechnology immersion will close the loop on focusing solely on
            the bottom line.
          </p>
        </div>
        <div className="w-full lg:w-[260px] p-4">
          <div className="pb-4 text-[#00396a]">
            <TbDeviceDesktopAnalytics size={70} />
          </div>
          <h1 className="text-[1.5rem] pb-2 ">Tradition</h1>
          <div className="mr-[10rem] border-b-[4px] border-[#09c6a7]"></div>
          <p className="text-[1rem] leading-6 pt-2">
            Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </p>
        </div>
        <div className="w-full lg:w-[260px] p-4">
          <div className="pb-4 text-[#00396a]">
            <FaVest size={60} />
          </div>
          <h1 className="text-[1.5rem] pb-2 ">Safety</h1>
          <div className="mr-[10rem] border-b-[4px] border-[#09c6a7]"></div>
          <p className="text-[1rem] leading-6 pt-2">
            Assertively iterate resource maximizing products after leading
            intellectual capital.
          </p>
        </div>
      </div>
    </section>
  );
};

const Columns = ({ title, para }: Props) => {
  return (
    <div className="w-[260px] p-4">
      <div className="pb-4 text-[#00396a]">
        <GiMonkeyWrench size={70} />
      </div>
      <h1 className="text-[1.5rem] pb-2 ">{title}</h1>
      <div className="mr-[10rem] border-b-[4px] border-[#09c6a7]"></div>
      <p className="text-[1rem] leading-6 pt-2">{para}</p>
    </div>
  );
};
export default Grid;
