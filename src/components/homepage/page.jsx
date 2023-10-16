import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// import image
import trend01 from "../../../public/image/trend01.jpg";
import trend02 from "../../../public/image/trend02.jpg";
import trend03 from "../../../public/image/trend03.jpg";
import trend04 from "../../../public/image/trend04.jpg";
import trend05 from "../../../public/image/trend05.jpg";
import trend06 from "../../../public/image/trend06.jpg";

const dataTrend = [
  {
    id: 1,
    image: trend01,
    country: "Indonesia",
    city: "Malang",
    count: 15,
  },
  {
    id: 2,
    image: trend02,
    country: "UEA",
    city: "Dubai",
    count: 22,
  },
  {
    id: 3,
    image: trend03,
    country: "Indonesia",
    city: "SukaBumi",
    count: 18,
  },
  {
    id: 4,
    image: trend04,
    country: "Japan",
    city: "Tokyo",
    count: 12,
  },
  {
    id: 5,
    image: trend05,
    country: "Japan",
    city: "Hiroshima",
    count: 9,
  },
  // {
  //   id: 6,
  //   image: trend06,
  //   country: "Japan",
  //   city: "Shibuya",
  //   count: 26,
  // },
];

// console.log(dataTrend);

const Homepage = () => {
  return (
    <>
      <div className="pt-6 grid grid-cols-1 md:grid-cols-7">
        <div className="col-span-1  md:col-span-4">
          <div className="my-16 ms-12">
            <h1 className="text-4xl font-semibold mb-4">
              Find your <span className="text-blue-600">Flight</span>
            </h1>
            <p className="text-sm">and explore the world with us</p>
          </div>
          <Image
            src="/image/japan1.png"
            width={600}
            height={400}
            alt="festival in japan"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-end">
            <Image
              src="/image/japan2.png"
              width={350}
              height={260}
              alt="home in japan"
            />
          </div>
          <div className="md:flex md:justify-center sm:hidden mt-8">
            <Image
              src="/image/decorate1.png"
              width={160}
              height={160}
              alt="decoration"
            />
          </div>
        </div>
      </div>
      {/* trending */}
      <div className="w-screen px-10 mx-auto my-16">
        <p className="text-blue-600">TRENDING</p>
        <div className="flex justify-between align-middle">
          <h1 className="text-xl font-semibold">Trending destination</h1>
          <Link href="#" className="text-blue-600">
            view all
          </Link>
        </div>
      </div>

      {/* swipper */}
      <div className="w-screen px-12 mx-auto my-16">
        <div className="flex flex-row">
          {dataTrend.map((item, index) => (
            <article
              className="relative isolate flex flex-col shadow-lg overflow-hidden rounded-2xl px-4 py-4 w-48 h-64 max-w-sm my-2 mx-auto"
              key={index}
            >
              <img
                src={item.image.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-300/40"></div>
              <div className="flex flex-col justify-between h-full">
                <div className="relative flex py-1 px-2 bg-slate-300 opacity-70 w-min rounded-2xl">
                  <p className=" ">
                    <span className="pr-1">{item.count}</span>Airlines
                  </p>
                </div>
                <div className="relative flex justify-between">
                  <div className="text-white">
                    <p className="text-sm">{item.city}</p>
                    <h1 className="text-lg">{item.country}</h1>
                  </div>
                  <div className="my-auto">
                    <div className="p-1 rounded-xl bg-slate-600">
                      <FiChevronRight color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Top 10 distination */}
      <div className="w-screen p-10 mx-auto">
        <div className="bg-blue-600 py-10 px-20 rounded-3xl">
          <div className="text-center text-white">
            <p>TOP 10</p>
            <p className="font-semibold">TOP 10 Distinations</p>
          </div>
          <div className="w-full mt-10 flex gap-4 justify-center">
            {dataTrend.map((distination) => (
              <div
                className="flex flex-col place-items-center"
                key={distination.id}
              >
                <div className="border-white border-2 p-2 rounded-full">
                  <div className="w-44 h-44 overflow-hidden rounded-full">
                    {/* <div className=""></div> */}
                    <Image
                      src={distination.image.src}
                      alt={distination.country}
                      height={200}
                      width={200}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-white font-semibold">
                    {distination.country}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <div className="w-10 h-10 flex items-center justify-center">
              <FiChevronLeft size={24} color="white" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <FiChevronRight size={24} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
