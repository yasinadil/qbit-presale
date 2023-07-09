import React from "react";
import videoBanner from "../../public/assets/unscreen.gif";
import Image from "next/image";
export default function Banner() {
  return (
    // <div className="flex justify-center align-middle">
    //   <div>
    //     <Image className="" src={videoBanner} alt="bg" />
    //   </div>
    // </div>

    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image className="" src={videoBanner} alt="bg" />
        </div>
      </div>
    </div>
  );
}
