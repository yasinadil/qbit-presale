import React from "react";
// import videoBanner from "../../public/unscreen.gif";
// import Image from "next/image";
export default function Banner() {
  return (
    <div className="">
      <div className="min-h-[100vh] min-w-[90vw]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-screen h-[90vh]"
        >
          <source src="./enterprise.mp4" type="video/mp4" />
        </video>
        {/* <Image className="absolute w-1/2 h-[90vh]" src={videoBanner} alt="bg" /> */}
      </div>
    </div>
  );
}
