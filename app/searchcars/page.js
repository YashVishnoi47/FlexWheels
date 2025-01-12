import React from "react";
import { fetchcars } from "@/utils";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

const SearchCars = async ({ searchParams }) => {
  const params = (await searchParams) || {};
  const allCars = await fetchcars({
    manufacturers: params?.manufacturers,
    model: params?.model,
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log("cars", allCars);
  console.log("params", params);
  return (
    <div className="w-full h-screen flex justify-center items-start">
      <div className="search flex flex-col justify-center items-center mt-12 w-[80%] ">
        <SearchBar />

        <div className="w-full  mt-12 flex-wrap flex ">
          {!isDataEmpty ? (
            <section className="w-full h-full flex-wrap gap-10  flex  justify-center  mt-4">
              {allCars?.map((car) => (
                <CarCard key={car.id} car={car} url={"/hero.png"} />
              ))}
            </section>
          ) : (
            <div>
              <h2>Search Yor Car</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCars;
