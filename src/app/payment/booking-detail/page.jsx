import React from "react";
import NavbarAuth from "@/components/navbar-auth/NavbarAuth";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle, FaPlaneDeparture } from "react-icons/fa";
import Image from "next/image";

const BookingDetail = () => {
  return (
    <>
      <NavbarAuth />
      <div className="bg-blue-500">
        <div className="px-6 lg:px-60 py-10">
          <div className="grid grid-cols-1">
            <div className="bg-white p-10 rounded-xl">
              <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Booking Pass</h1>
                <div className="text-blue-600">
                  <Link href="">
                    <BsThreeDotsVertical />
                  </Link>
                </div>
              </div>
              {/* ticket */}
              <div className="grid grid-cols-1">
                <div className="col-span-1">
                  <div className="border-2 border-gray-200 rounded-lg">
                    <div className="p-6">
                      <div className="flex flex-row gap-6 items-center">
                        <div>
                          <Image
                            src="/image/garuda-indo.png"
                            alt="logo booking pass"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="flex flex-row justify-between gap-8">
                          <div>
                            <h1 className="text-lg font-semibold text-black">
                              IND
                            </h1>
                          </div>
                          <div className="text-gray-400 self-center">
                            <FaPlaneDeparture size={20} />
                          </div>
                          <div>
                            <h1 className="text-lg font-semibold text-black">
                              JPN
                            </h1>
                          </div>
                        </div>
                      </div>
                      {/* code & class */}
                      <div className="mt-8">
                        <div className="flex flex-row gap-x-24">
                          <div>
                            <p className="text-xs text-gray-400">Code</p>
                            <p className="text-base text-gray-600">AB-221</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Class</p>
                            <p className="text-base text-gray-600">Economy</p>
                          </div>
                        </div>
                      </div>
                      {/* code & class */}
                      <div className="mt-4">
                        <div className="flex flex-row gap-x-24">
                          <div>
                            <p className="text-xs text-gray-400">Terminal</p>
                            <p className="text-base text-gray-600">A</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Gate</p>
                            <p className="text-base text-gray-600">221</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-gray-400">Departure</p>
                        <p className="text-base text-gray-600">
                          Monday, 20 July '20 - 12:33
                        </p>
                      </div>
                    </div>
                    <div>{/* for barcode */}</div>
                  </div>
                </div>
                {/* <div className="col-span-1">
                  <div className="border-2 border-gray-200 rounded-lg">
                    <div className="h-[100%]">hello</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingDetail;
