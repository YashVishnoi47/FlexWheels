import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { fetchcars } from "@/utils";
import CarCard from "@/components/CarCard";

export default async function Home() {
  const allCars = await fetchcars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="">
      <div className="main flex flex-col md:flex-row justify-center items-center w-full h-screen">
        <div className="right w-full md:w-[50%] flex justify-center items-center h-full">
          <div className="hero w-[80%] text-left">
            <h1 className="font-bold text-4xl md:text-6xl text-blue-600">
              Find, Buy, or Rent Your Dream Car
            </h1>
            <p className="mt-7 text-lg md:text-xl text-gray-700">
              Streamline your car buying or renting process with our effortless
              booking system.
            </p>

            <button className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="left w-full md:w-[40%] h-full flex justify-center items-center">
          <Image
            src={"/hero.png"}
            width={800}
            height={800}
            alt="Fortuner"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="catalogue w-full flex flex-col mt-4 items-center py-3 h-screen ">
        {/* Hero Section */}
        <div className="hero w-[80%] text-left">
          <h1 className="font-semibold text-3xl md:text-4xl">Car Catalogue</h1>
          <p className="text-sm md:text-md font-thin mt-2">
            Explore the cars you might like.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search mt-4 w-[80%]">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section className="w-full h-screen flex wrap justify-center mt-4">
            <div className="w-full h-full flex justify-center  flex-wrap">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2>Oops, No results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
