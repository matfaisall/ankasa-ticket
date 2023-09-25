import React from "react";
import NavbarAuth from "@/components/navbar-auth/NavbarAuth";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/button/Button";

// icon
import { RiAlertFill } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const MyBooking = () => {
  return (
    <>
      <NavbarAuth />
      {/* blue background */}
      <div className="bg-gray-100">
        <div className="bg-blue-600 w-full h-28 rounded-b-2xl right-0 left-0 top-18 -z-50">
          <div className="p-2">
            <Image
              src="/image/shadow-plane.png"
              alt="shadow plane"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="px-4 lg:px-16 relative -top-24">
          <div className="gap-6 max-w-screen-xl flex flex-wrap items-center mx-auto">
            <div className="flex flex-row w-full gap-6">
              <main className="w-[60%]">
                <div className="py-6">
                  <h1 className="text-white text-base font-semibold">
                    Contact Person Details
                  </h1>
                </div>
                {/* card contact */}
                <div className="px-6 py-10 bg-white rounded-lg">
                  <form action="">
                    <div className="relative z-0 mb-8">
                      <input
                        type="text"
                        id="name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Full Name
                      </label>
                    </div>

                    <div className="relative z-0 mb-8">
                      <input
                        type="email"
                        id="user-email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="user-email"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative z-0 mb-8">
                      <input
                        type="number"
                        id="phone-number"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone-number"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone Number
                      </label>
                    </div>
                    <div
                      className="p-4 text-sm text-yellow-800 rounded-lg bg-red-100"
                      role="alert"
                    >
                      <div className="flex flex-row items-center">
                        <div className="mr-2">
                          <RiAlertFill size={20} color="red" />
                        </div>
                        <span className="font-medium">
                          Make sure the customer data is correct.
                        </span>
                      </div>
                    </div>
                  </form>
                </div>

                {/* passanger details card */}
                <div className="py-6">
                  <h1 className="text- text-base font-semibold">
                    Passanger Details
                  </h1>
                </div>
                {/* card passanger */}
                <div className="px-6 py-10 bg-white rounded-lg">
                  <div
                    className="p-4 text-sm text-yellow-800 rounded-lg bg-blue-100 mb-6"
                    role="alert"
                  >
                    <div className="flex flex-row items-center justify-between">
                      <div>
                        <p className="font-normal">Passanger: 1 Adult</p>
                      </div>
                      <div>
                        <p className="font-normal">Some as contact person</p>
                      </div>
                    </div>
                  </div>
                  <form action="">
                    <div className="relative z-0 mb-8">
                      <label htmlFor="underline_select" className="sr-only">
                        Underline select
                      </label>
                      <select
                        id="underline_select"
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      >
                        <option>Choose Call Name</option>
                        <option defaultValue="mr">Mr.</option>
                        <option defaultValue="mis">Mis.</option>
                      </select>
                    </div>

                    <div className="relative z-0 mb-8">
                      <input
                        type="text"
                        id="user-name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="user-name"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="relative z-0">
                      <label htmlFor="underline_select" className="sr-only">
                        Underline select
                      </label>
                      <select
                        id="underline_select"
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      >
                        <option>Nationality</option>
                        <option defaultValue="indo">Indonesia</option>
                        <option defaultValue="others">others</option>
                      </select>
                    </div>
                  </form>
                </div>

                {/* passanger details card */}
                <div className="py-6">
                  <h1 className="text- text-base font-semibold">
                    Passanger Details
                  </h1>
                </div>
                {/* card passanger */}
                <form action="">
                  <div className="px-6 py-10 bg-white rounded-lg">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 text-blue-600 bg-white border-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                        >
                          Trevel Insurance
                        </label>
                      </div>
                      <div>
                        <p className="text-blue-600 font-semibold">
                          $ 2,00{" "}
                          <span className="text-xs text-gray-600">/pax</span>
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-4">
                      <p className="text-sm font-normal text-gray-600">
                        Get trevel compensation up to $ 10.000,00
                      </p>
                    </div>
                  </div>
                  <div className="my-6 w-[36%] mx-auto">
                    <Link href="my-booking/payment">
                      <Button type="submit" text="Proceed to Payment" />
                    </Link>
                  </div>
                </form>
              </main>

              {/* aside menu */}
              <aside className="w-[40%]">
                <div className="py-6">
                  <div className="flex flex-row justify-between">
                    <div>
                      <h1 className="text-white text-base font-semibold">
                        Flight Details
                      </h1>
                    </div>
                    <div className="text-white text-sm">
                      <Link href="#">View Details</Link>
                    </div>
                  </div>
                </div>

                {/* card contact */}
                <div className="px-4 py-10 bg-white rounded-lg">
                  <div className="w-full flex flex-row items-center gap-5">
                    <Image
                      src="/image/garuda-indo.png"
                      width={90}
                      height={60}
                      alt="garuda indonesia"
                    />
                    <p className="font-semibold text-sm text-gray-600">
                      Garuda Indonesia
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="w-fit">
                      <div className="flex flex-row justify-between py-4 gap-10 items-center">
                        <div>
                          <h1 className="text-xl font-semibold text-black">
                            Medan (IND)
                          </h1>
                        </div>
                        <div className="text-gray-400">
                          <FaPlaneDeparture size={24} />
                        </div>
                        <div>
                          <h1 className="text-xl font-semibold text-black">
                            Tokyo (JPN)
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <p className="text-black text-xs font-light">
                      Sunday, August 15, 2020{" "}
                      <span className="px-3 text-gray-600">●</span> 12:33 -
                      15:21
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 text-blue-600 bg-white border-blue-600 rounded-full focus:ring-blue-500 focus:ring-2"
                      />
                      <p className="text-blue-600 text-sm">Refundable</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 text-blue-600 bg-white border-blue-600 rounded-full focus:ring-blue-500 focus:ring-2"
                      />
                      <p className="text-blue-600 text-sm">Can resechedule</p>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="flex flex-row justify-between pt-4">
                    <div>
                      <h4 className="font-semibold text-black">
                        Total Payment
                      </h4>
                    </div>
                    <div className="flex flex-row items-center gap-3 text-blue-600 font-semibold">
                      <h4>$ 145,00</h4>
                      <IoIosArrowDown size={24} />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyBooking;
