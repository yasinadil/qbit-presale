"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import check from "../../public/assets/check.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Roadmap() {
  return (
    <div className="min-h-screen flex flex-col justify-around">
      <h1 className="text-4xl text-center mb-16 divider">
        QBIT&apos;s Roadmap
      </h1>
      <div className="mx-4">
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 1
              </h1>
              <h1 className="text-3xl font-semibold ml-14 my-2 text-left text-white">
                QBIT Token
              </h1>
              <p className="ml-14 mt-8 text-lg text-left mr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                imperdiet mauris sed ipsum molestie auctor.
              </p>
              <div className="mt-4">
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 2
              </h1>
              <h1 className="text-3xl font-semibold ml-14 my-2 text-left text-white">
                Presale
              </h1>
              <p className="ml-14 mt-8 text-lg text-left mr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                imperdiet mauris sed ipsum molestie auctor.
              </p>
              <div className="mt-4">
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 3
              </h1>
              <h1 className="text-3xl font-semibold ml-14 my-2 text-left text-white">
                NFT Launch
              </h1>
              <p className="ml-14 mt-8 text-lg text-left mr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                imperdiet mauris sed ipsum molestie auctor.
              </p>
              <div className="mt-4">
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 4
              </h1>
              <h1 className="text-3xl font-semibold ml-14 my-2 text-left text-white">
                Airdrops
              </h1>
              <p className="ml-14 mt-8 text-lg text-left mr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                imperdiet mauris sed ipsum molestie auctor.
              </p>
              <div className="mt-4">
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
                <div className="ml-14 flex flex-row gap-2 my-2 items-center">
                  <Image className="w-6 h-6" src={check} alt="check" />
                  <p>Launch the project</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
