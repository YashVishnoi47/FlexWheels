import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import Link from "next/link";
import {
  fetchcars,
  fetchcars2,
  fetchcars3,
  fetchcars4,
  fetchcars5,
  fetchcars6,
  fetchcars7,
} from "@/utils";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const allCars = await fetchcars({
    manufacturers: params.manufacturers || "audi",
    model: params.model || "q3",
  });

  const bmw = await fetchcars2({});
  const bmww = await fetchcars3({});
  const audi = await fetchcars4({});
  const audi2 = await fetchcars5({});
  const lamborghini = await fetchcars6({});
  const lamborghini2 = await fetchcars7({});
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
            <Link href={"/searchcars"}>
              <button className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300">
                Search Cars
              </button>
            </Link>
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

      <div className="catalogue w-full flex flex-col mt-4 items-center py-3 min-h-screen ">
        {/* <div className="w-full flex items-center"> */}
        {/* Hero Section */}
        <div className="hero w-[80%] text-left">
          <h1 className="font-semibold text-3xl md:text-4xl">Car Catalogue</h1>
          <p className="text-sm md:text-md font-thin mt-2">
            Explore the cars you might like.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search mt-4 w-[80%]">
          <Link href={"/searchcars"}>
            <button className=" px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300">
              Search Cars
            </button>
          </Link>
        </div>

        <div className="w-full mt-12 flex-wrap flex ">
          {!isDataEmpty ? (
            <section className="w-full flex-wrap  min-h-screen gap-10  flex  justify-center  mt-4">
              {bmw?.map((car) => (
                <CarCard key={car.id} car={car} url={"/bwm-x1.png"} />
              ))}

              {bmww?.map((car) => (
                <CarCard key={car.id} car={car} url={"/m8.png"} />
              ))}

              {audi?.map((car) => (
                <CarCard key={car.id} car={car} url={"/audiq7.png"} />
              ))}

              {audi2?.map((car) => (
                <CarCard key={car.id} car={car} url={"/q3.png"} />
              ))}

              {lamborghini?.map((car) => (
                <CarCard key={car.id} car={car} url={"/urus.png"} />
              ))}

              {lamborghini2?.map((car) => (
                <CarCard key={car.id} car={car} url={"/lam.png"} />
              ))}
            </section>
          ) : (
            <div>
              <h2>Oops, No results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
