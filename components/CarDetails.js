"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const CarDetails = ({ isOpen, closeModel, car }) => {
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

  return (
    <div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 w-full h-full z-10 flex items-center justify-center"
            onClose={closeModel}
          >
            <Transition.Child
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="opacity-20 fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              enter="transition-transform duration-300"
              enterFrom="scale-90"
              enterTo="scale-100"
              leave="transition-transform duration-200"
              leaveFrom="scale-100"
              leaveTo="scale-90"
            >
              <Dialog.Panel className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
                <div className="relative">
                  <button
                    type="button"
                    onClick={closeModel}
                    className="absolute z-50 top-2 border-2 border-white rounded-full bg-white p-1 right-2"
                  >
                    <Image
                      src={"./close.svg"}
                      width={15}
                      height={15}
                      className="object-contain"
                      alt="close"
                    />
                  </button>

                  <div className=" flex gap-4  flex-col items-center justify-center ">
                    
                    <div className="relative w-full flex justify-center items-center h-52 rounded-xl bg-blue-400">
                        {car_image ? (
                            <Image
                                src={car_image}
                                width={300}
                                height={400}
                                className="object-contain"
                                alt={`${make} ${model}`}
                            />
                        ) : (
                            <p>Image not available</p>
                        )}
                    </div>

                    <div className="flex w-full">
                      <h2 className="text-2xl top-0 font-bold capitalize mb-2">{` ${make} ${model}`}</h2>
                    </div>

                    {/* car details */}
                    <div className="flex flex-col font-normal gap-3 w-full">
                      <p
                        className="text-gray-700  w-full flex justify-between
                      px-4 "
                      >
                        <span>Year:</span> {year}
                      </p>

                      <p
                        className="text-gray-700  flex justify-between
                      px-4 "
                      >
                        <span>Transmission</span>{transmission
                          ? transmission === "a"
                            ? "Automatic"
                            : "Manual"
                          : "N/A"}
                      </p>

                      <p
                        className="text-gray-700 flex justify-between
                      px-4   uppercase"
                      >
                        <span>Drive:</span> {drive}
                      </p>

                      <p
                        className="text-gray-700 flex justify-between
                      px-4  "
                      >
                        <span>City MPG:</span> {city_mpg}
                      </p>

                      <p
                        className="text-gray-700 flex justify-between
                      px-4  "
                      >
                        <span>Highway MPG:</span> {highway_mpg}
                      </p>

                      {/* <p
                        className="text-gray-700 flex justify-between
                      px-4  "
                      >
                        <span>Engine:</span> {engine}
                      </p> */}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default CarDetails;
