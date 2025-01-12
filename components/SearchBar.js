"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManu from "./SearchManu";
import Image from "next/image";

const SearchBar = () => {
  const [manufacturers, setmanufacturers] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (manufacturers === "" || model === "") {
      alert("Please enter a valid manufacturer and model");
      return;
    }

    Updatesearchparams(model.toLowerCase(), manufacturers.toLowerCase());
  };

  const Updatesearchparams = (model, manufacturers) => {
    const searchparams = new URLSearchParams(window.location.search);

    if (model) {
      searchparams.set("model", model);
    } else {
      searchparams.delete("model");
    }
    if (manufacturers) {
      searchparams.set("manufacturers", manufacturers);
    } else {
      searchparams.delete("manufacturers");
    }

    const newpathname = `${
      window.location.pathname
    }?${searchparams.toString()}`;

    router.push(newpathname);
  };

  return (
    <form className="w-full" onSubmit={handleSearch} action="">
      <div className="flex justify-start items-center">
        {/* Search Bar for manufacturers */}
        <SearchManu
          manufacturers={manufacturers}
          setmanufacturers={setmanufacturers}
          model={model}
          setmodel={setmodel}
        />
        {/* Search Button */}
        <button
          type="submit"
          className="text-white transition-all duration-200 ease-in-out py-1 px-1 rounded-full"
        >
          <Image
            src="magnifying-glass.svg"
            width={30}
            height={30}
            alt="search"
            className="object-contain"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
