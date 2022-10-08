import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

interface Props {
  url: string;
}

const LogoSlider: React.FC = () => {
  return (
    <section className="bg-[white] min-h-[70vh]">
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
      <div className="bg-[#0e51ac] h-[30vh]  w-full">
        <div className="bg-[white] h-[30vh] overflow-hidden rounded-tr-[15rem]">
          <div className="flex w-full h-full bg-[white] relative p-10">
            <Swiper
              loop={true}
              freeMode={true}
              spaceBetween={0}
              loopFillGroupWithBlank={true}
              slidesPerView={5}
              centeredSlides={true}
              autoplay={{
                delay: 1,
              }}
              speed={2500}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <Slider url="/assets/logo/001.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/002.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/003.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/004.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/005.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/006.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/007.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/001.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider url="/assets/logo/002.jpg" />
              </SwiperSlide>
            </Swiper>
            <div className="absolute z-10 w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Slider: React.FC<Props> = ({ url }) => {
  return (
    <div className="w-[20rem] h-[10rem] bg-[pink] relative">
      <Image src={url} layout="fill" />
    </div>
  );
};

export default LogoSlider;
