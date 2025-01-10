"use client";
import React, { useState } from "react";
import { Combobox, ComboboxOption } from "@headlessui/react";

const SearchBar = () => {
  const handleSearch = () => {};
  const [query, setquery] = useState("");
  const manufacturers = [
    "Audi",
    "BMW",
    "Mercedes",
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "Volkswagen",
    "Hyundai",
    "Kia",
    "Mazda",
    "Subaru",
    "Lexus",
    "Jaguar",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "Bentley",
    "Rolls-Royce",
    "Mitsubishi",
    "Peugeot",
    "Renault",
    "Fiat",
    "Alfa Romeo",
    "Aston Martin",
    "Bugatti",
    "Cadillac",
    "Chrysler",
    "Citroën",
    "Dodge",
    "Jeep",
    "Land Rover",
    "Maserati",
    "Mini",
    "Pagani",
    "Ram",
    "Saab",
    "Suzuki",
    "Tesla",
    "Volvo",
  ];

  const filterManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(query.toLowerCase().replace(/\s/g, ""))
        );

  return (
    <form className="w-full" onSubmit={handleSearch} action="">
      <div className="flex justify-start items-center">
        <div className="search-bar w-full md:w-1/2 border-2 flex">


          <Combobox>
            <Combobox.Input
              onChange={(event) => setquery(event.target.value)}
              className="flex"
            />

            <Combobox.Options className="absolute mt-10 p-2 w-[20%] bg-white border border-gray-300 rounded-md shadow-lg">
              {filterManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative ${
                      active ? "bg-slate-200" : ""
                    } cursor-default p-1 text-black h-auto gap-1  `
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>

         
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
