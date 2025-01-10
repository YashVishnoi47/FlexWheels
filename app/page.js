import Image from "next/image";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="">
      <div className="main flex justify-center items-center w-full h-screen">
        <div className="right w-[50%] flex justify-center items-center h-full ">
          <div className="hero w-[80%] text-left">
            <h1 className="font-bold text-6xl text-blue-600">
              Find, Buy, or Rent Your Dream Car
            </h1>
            <p className="mt-7 text-xl text-gray-700">
              Streamline your car buying or renting process with our effortless
              booking system.
            </p>

            <button className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="left w-[40%] h-full flex justify-center items-center">
          <Image
            src={"/hero.png"}
            width={800}
            height={800}
            alt="Fortuner"
          ></Image>
        </div>
      </div>

      <div className="catalogue w-full flex flex-col items-center py-3 h-screen border-2 border-black">
        <div className="hero w-[80%] text-left">
          <h1 className="font-semibold text-4xl">Car Catalogue</h1>
          <p className=" text-md font-thin mt-2">Explore the cars you might like.</p>
        </div>

        <div className="search mt-4 w-[80%]">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
