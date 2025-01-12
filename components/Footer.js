import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full  p-10 bottom-0 flex  justify-center items-center h-40 border-2 text-center text-black">
      <div className="flex left justify-center items-start gap-6 flex-col  w-1/2">
        <h1 className="font-semibold text-4xl">FlexWheels</h1>

        <div className="flex left gap-6">
          <Image
            className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            src="/instagram-brands-solid.svg"
            width={25}
            height={25}
            alt="insta"
          />

          <Image
            className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            src="/facebook-brands-solid.svg"
            width={25}
            height={25}
            alt="insta"
          />

          <Image
            className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            src="/twitter-brands-solid.svg"
            width={25}
            height={25}
            alt="insta"
          />
        </div>
      </div>

      <div className="flex justify-end items-center right w-1/2 gap-6">
        <p className="text-2xl font-semibold">Thanks for Visiting</p>
      </div>

    </div>
  );
};

export default Footer;
