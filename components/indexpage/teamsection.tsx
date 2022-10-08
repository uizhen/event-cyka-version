import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

type Props = {
  image: string;
  pro: string;
  name: string;
  para: string;
  url: string;
};

const TeamSection: React.FC = () => {
  return (
    <>
      <section className="lg:h-[178vh] md:h-[315vh] h-[585vh] bg-white z-10">
        <div className="items-center flex flex-col  w-full h-[40vh] bg-[white] rounded-tr-[20rem] rounded-br-[20rem] ">
          <div className="flex items-center justify-center w-full">
            <h1 className="stroke text-[10rem] opacity-[0.2]">Team</h1>
            <h1 className="absolute text-[3rem] font-[700] pt-2">Our people</h1>
          </div>
          <p className="w-[28.8rem] leading-6 opacity-[0.7] -translate-y-8 text-center lg:px-0 px-10">
            Year after year, multiple industries recognize Amwerk as a leader in
            quality, service, and innovation. We&apos;re proud to be one of the
            top custom solution manufacturers in the world.
          </p>
        </div>
        <div className="w-full h-[135vh] bg-[white]">
          <div className="w-full min-h-[120vh]  bg-[#f1f1f1] rounded-tl-[20rem] rounded-bl-[20rem]">
            <div className="flex flex-col items-center justify-center w-full gap-10 -translate-y-10 md:flex-row lg:flex-row">
              <div className="flex flex-col gap-10 lg:flex-row">
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
              </div>
              <div className="flex flex-col gap-10 lg:flex-row">
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-10 pt-10 -translate-y-10 md:flex-row lg:flex-row">
              <div className="flex flex-col gap-10 lg:flex-row">
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
              </div>
              <div className="flex flex-col gap-10 lg:flex-row">
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
                <WorkerSection
                  image={"/assets/sec1.jpg"}
                  pro={"Coowner, Lead Machinist"}
                  name={"Peter Kirkpatrick"}
                  para={
                    "At Amwerk, we value a culture of collaboration and service. We are passionate about serving our clients to the fullest, while continuously growing."
                  }
                  url={"https://www.facebook.com/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const WorkerSection = ({ image, pro, name, para, url }: Props) => {
  return (
    <div className="gap-y-4 items-center justify-center px-10 rounded-b-3xl pb-10 flex flex-col w-[20rem] bg-[white]">
      <div className="group cursor-pointer relative w-[12rem] h-[12rem] rounded-[100%] overflow-hidden flex ">
        <Image
          src={image}
          width={1000}
          height={900}
          className="transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute transition-all duration-700 group-hover:opacity-[0] opacity-[0.6] w-full h-[12rem] bg-[#0e51ac]"></div>
      </div>
      <div className="flex items-center w-full pl-4">
        <h1 className="z-10">{pro}</h1>
        <div className="-translate-x-4 absolute w-[2.2rem] h-[2.2rem] rounded-[100%] bg-[#09c6a7]"></div>
      </div>
      <b className="w-full text-[1.7rem]">{name}</b>
      <p className="leading-6 opacity-[0.7]">{para}</p>
      <div className="flex w-full gap-4">
        <Link href={url}>
          <div className="cursor-pointer w-8 h-8 items-center flex justify-center rounded-[100%] text-white bg-[#0e51ac]">
            <FaFacebookF />
          </div>
        </Link>
        <div className="cursor-pointer w-8 h-8 items-center flex justify-center rounded-[100%] text-white bg-[#0e51ac]">
          <FaTwitter />
        </div>
        <div className="cursor-pointer w-8 h-8 items-center flex justify-center rounded-[100%] text-white bg-[#0e51ac]">
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
