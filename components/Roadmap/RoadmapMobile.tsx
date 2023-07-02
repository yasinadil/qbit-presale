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
      <h1 className="text-2xl md:text-4xl text-center divider">
        QBIT&apos;s Roadmap
      </h1>
      <div className="mx-4">
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={"auto"}
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
              <h1 className="text-2xl font-semibold ml-14 my-2 text-left text-white">
                Creation
              </h1>
              <p className="ml-14 mt-8 text-base text-left mr-4">
                Witness the birth of an extraordinary digital realm,
                meticulously crafted to immerse you in unparalleled experiences
                and possibilities.
              </p>
              {/* <div className="mt-4">
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
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 2
              </h1>
              <h1 className="text-2xl font-semibold ml-14 my-2 text-left text-white">
                Presale
              </h1>
              <p className="ml-14 mt-8 text-base text-left mr-4">
                Secure your exclusive access during this limited-time pre-sale
                phase, enabling you to become an early pioneer and shape the
                destiny of the hyper-realm metaverse.
              </p>
              {/* <div className="mt-4">
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
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 3
              </h1>
              <h1 className="text-2xl font-semibold ml-14 my-2 text-left text-white">
                NFT Launch
              </h1>
              <p className="ml-14 mt-8 text-base text-left mr-4">
                Unleash the power of non-fungible tokens (NFTs) as we introduce
                a collection of unique and coveted digital assets, allowing you
                to own a piece of the hyper-realm&apos;s digital tapestry.
              </p>
              {/* <div className="mt-4">
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
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 4
              </h1>
              <h1 className="text-2xl font-semibold ml-14 my-2 text-left text-white">
                Metaverse
              </h1>
              <p className="ml-14 mt-8 text-base text-left mr-4">
                Step into a boundless expanse of virtual reality, where the
                hyper-realm transcends conventional boundaries, offering an
                immersive playground for exploration, social interaction, and
                endless adventures.
              </p>
              {/* <div className="mt-4">
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
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-base ml-14 mt-8 text-left text-gray-500">
                Phase 5
              </h1>
              <h1 className="text-2xl font-semibold ml-14 my-2 text-left text-white ">
                The Great Cognitive Upload
              </h1>
              <p className="ml-14 mt-8 text-base text-left mr-4">
                Prepare to transcend the limits of human consciousness as we
                embark on an extraordinary journey to merge mind and machine,
                unlocking the potential for an unprecedented cognitive
                experience within the hyper-realm metaverse.
              </p>
              {/* <div className="mt-4">
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
              </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-[80vw]">
          <p className="mx-4 text-white text-left font-medium text-base">
            {" "}
            Join us on this groundbreaking voyage as we{" "}
            <span className="text-[#8E00FE]">redefine</span> the future of
            digital existence and empower you to shape the very fabric of the
            hyper-realm metaverse. Secure your place in history today.
          </p>
        </div>
      </div>
    </div>
  );
}
