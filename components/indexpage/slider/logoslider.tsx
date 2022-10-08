import React from "react";
import Image from "next/image";

const LogoSlider: React.FC = () => {
  return (
    <section className="bg-[white] min-h-[80vh]">
      <div className="bg-[#0e51ac] flex lg:flex-row  h-[40vh] items-end overflow-hidden rounded-bl-[15rem] rounded-tr-[15rem]">
        <div className="w-full lg:w-[50%] h-full relative">
          <Image
            src={"/assets/sliderheader.jpg"}
            objectFit={"cover"}
            layout="fill"
          />
        </div>
        <div className=" absolute sm:-translate-y-16 lg:relative w-full text-white   lg:w-[50%] lg:h-full items-start flex flex-col justify-center p-10">
          <div className="flex items-center pt-[6rem] pb-2 pl-2 ">
            <span className="absolute w-8 rounded-[100%] h-8 -translate-x-2 bg-[#09c6a7]"></span>
            <h1 className="z-10 opacity-[0.7]">Join our team</h1>
          </div>
          <b className=" text-[2.5rem] w-[30rem]">
            An inspiring career awaits you in Amwerk
          </b>
          <div className="flex justify-center w-full cursor-pointer lg:justify-start">
            <div className="font-[600] bg-[#09c6a7] p-4 rounded-[100px]">
              Бүртгүүлэх
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0e51ac] h-[40vh]  w-full">
        <div className="bg-[white] h-[40vh] overflow-hidden rounded-tr-[15rem]">
          <div className="w-full h-full bg-[red]"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
