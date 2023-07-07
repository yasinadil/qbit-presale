import React from "react";
// import videoBanner from "../assets/enterprise.mp4";
export default function Banner() {
  return (
    <div className="">
      <div className="min-h-[90vh] min-w-[90vw] bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-screen h-[90vh]"
        >
          <source src="./enterprise.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
