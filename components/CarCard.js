"use client";
import React, { useState } from "react";
import Image from "next/image";
import CarDetails from "./CarDetails";

const CarCard = ({ car }) => {
  const {
    city_mpg,
    highway_mpg,
    engine,
    transmission,
    price,
    make,
    model,
    year,
    car_image,
    drive,
  } = car;


  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-12 bg-[#F5F8FE] cursor-pointer  hover:bg-white hover:rounded-none transition-all duration-200 ease-in-out  relative items-center flex flex-col gap-8 w-full max-w-[25%] h-[85%]  px-4 py-6 shadow-lg rounded-2xl" onClick={() => setIsOpen(true)}>
      <div className="name w-full text-center">
        <h1 className="font-semibold text-2xl capitalize">{model}</h1>
        <p className="text-gray-500">
          {make} - {year}
        </p>
      </div>

      <div className="price text-black w-full text-center">
        <h3 className="text-black font-bold text-xl">
          <span>₹</span>1,00,000
        </h3>
      </div>

      <div className="image  relative flex justify-center w-[80%] h-44">
        <Image
          src="/hero.png"
          layout="fill"
          objectFit="cover"
          priority
          alt={model}
          className="rounded-lg"
        />
      </div>

      <div className="details gap-2 w-[80%] flex justify-between  text-center mt-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Image src="/steering-wheel.svg" alt="stw" width={20} height={20} />
          <p className="text-sm text-gray-600 capitalize">
            {transmission === "a" ? "Automatic" : "Manual"}
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <Image src="/tire.svg" alt="stw" width={20} height={20} />
          <p className="text-sm text-gray-600 uppercase">{drive}</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <Image src="/gas.svg" alt="stw" width={20} height={20} />
          <p className="text-sm text-gray-600">{city_mpg} MPG</p>
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
