import React, { useContext, useRef, useState, useCallback } from "react";
import { ScrollContext } from "../../utils/scroll-observer";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { type } from "os";

const Masthead: React.FC = () => {
  const [aIndex, setAIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const titles = ["Challenge Solved", "Precission machinery", "Dick Cuter"];
  const props1 = [
    "Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures.",
    "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust idea customer service.",
    "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust idea customer service.",
  ];

  return (
    <div
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
      className="sticky top-0 flex flex-col items-center justify-center min-h-screen overflow-hidden -z-10"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover w-full h-full"
      >
        <source src="assets/video.m4v" type="video/mp4; codecs=hvc1" />
        <source src="assets/video.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className="lg:px-[10rem]  w-full p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-start flex-1 flex item-center justify-end flex-col">
        <div className="flex">
          <div className="w-full  lg:w-[55rem] ">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              onSlideChange={(index) => {
                setAIndex(index.realIndex);
                console.log(index.realIndex + "rindex");
              }}
              autoplay={{
                delay: 2500,
              }}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
            >
              {titles.map(function (d, idx) {
                console.log(idx);
                return (
                  <SwiperSlide key={d}>
                    <div
                      className={
                        aIndex == idx * 1
                          ? `transition-all duration-700 opacity-[1]`
                          : `transition-all duration-700 opacity-0`
                      }
                    >
                      <div className="flex items-center">
                        <h1 className="mb-6 text-[6rem] tracking-[10px] absolute stroke opacity-[0.4]">
                          Ашигт малтмал
                        </h1>
                        <h1 className="mb-6 text-[5rem] w-[10rem]">
                          {titles[idx]}
                        </h1>
                      </div>
                      <h2 className="mb-2 text-2xl w-[40rem]">
                        <span>{props1[idx]} </span>
                      </h2>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="hidden lg:flex border-[10px] rounded-[50%] border-[#09c6a7] opacity-[0.8] w-[8rem] h-[8rem]"></div>
        </div>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pd-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/arrow-down.png"
          width={188 / 3}
          height={105 / 3}
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
