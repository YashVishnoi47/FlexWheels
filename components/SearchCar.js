import React from "react";
import SearchBar from "./SearchBar";
import { fetchcars } from "@/utils";
import CarCard from "@/components/CarCard";

export default async function SearchCar() {
    
    // const params = await searchParams || {}
    // const allCars = await fetchcars({
    //     manufacturers: params.manufacturers,
    //     model: params.model,
    // });

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    // console.log("cars",allCars)
    // console.log("params",params)
    
  return (
    <div>HEllo</div>
  );
};


