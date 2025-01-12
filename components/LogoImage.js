"use client"
import React from "react";
import Image from "next/image";

const LogoImage = () => {
  return (
    <div>
      <Image
        className="spin-animation"
        src="/round.png"
        width={200}
        height={200}
        alt="logo"
      />
      <style jsx>
        {`
          .spin-animation {
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoImage;
