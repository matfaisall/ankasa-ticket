"use client";
import React from "react";
import NavbarAuth from "@/components/navbar-auth/NavbarAuth";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

// logo
import { GrCreditCard } from "react-icons/gr";
import { BiSolidLockAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import Button from "@/components/button/Button";
import Link from "next/link";

const Payment = () => {
  return (
    <>
      <NavbarAuth />
      <div className="w-screen bg-blue-500">
        <div className="px-6 lg:px-32 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 justify-center w-full bg-white p-8 gap-4">
            <div className="col-span-6">
              {/* payment method */}
              <div className="w-full">
                <h1>Payment Method</h1>
                <div className="bg-gray-100 px-3 py-3 ">
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="text-md">Paypal</p>
                    </div>
                    <div>
                      <Image
                        src="/image/paypal.png"
                        width={20}
                        height={20}
                        alt="payment method paypal"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 px-3 py-3">
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="text-md">Credit card</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/image/card-payment.png"
                        width={20}
                        height={20}
                        alt="payment method paypal"
                      />
                      <Image
                        src="/image/visa.png"
                        width={20}
                        height={20}
                        alt="payment method paypal"
                      />
                      <Image
                        src="/image/card-payment.png"
                        width={20}
                        height={20}
                        alt="payment method paypal"
                      />
                      <Image
                        src="/image/visa.png"
                        width={20}
                        height={20}
                        alt="payment method paypal"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <label
                  htmlFor="card-number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Card Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <GrCreditCard />
                  </div>
                  <input
                    type="number"
                    id="card-number"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>

              <div className="grid gap-4 mb-6 md:grid-cols-2 pt-4">
                <div>
                  <label
                    htmlFor="expire-date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    id="expire-date"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvc-cvv"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CVC/CVV
                  </label>
                  <input
                    type="number"
                    id="cvc-cvv"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="000"
                    required
                  />
                </div>
              </div>
              <div className=" flex flex-row items-center gap-2">
                <BiSolidLockAlt size={12} />
                <p className="text-xs">
                  Your transaction is second with ssl certificate
                </p>
              </div>
            </div>
            {/*  */}
            <div className="col-span-6">
              {/* payment method */}
              <div className="w-full">
                <h1>Summary</h1>
                <div className="px-3 py-3">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <p className="text-md">Pro(Billed Monthly)</p>
                        <IoIosArrowDown />
                      </div>
                      <p className="underline underline-offset-2 text-blue-600 text-xs">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div>
                      <p className="text-base">
                        $9.99 <span className="text-xs">/Month</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="px-3 py-3">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div>
                      <p className="text-md">Refferal Bonouses</p>
                    </div>
                    <div>
                      <p className="text-sm">-$2.00</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div className="flex flex-row items-center">
                      <p className="text-md mr-1">Vat</p>
                      <IoMdTime />
                    </div>
                    <div>
                      <p className="text-sm">-20%</p>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="px-3 py-3">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div className="flex flex-col">
                      <p className="text-md">Today you pay(US Dollars)</p>
                      <p className="text-xs">After 30 days $9.59</p>
                    </div>
                    <div>
                      <p className="text-base">$0</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <Link href="/my-booking">
                  <Button type="submit" text="Try it free for 30 days" />
                </Link>

                <div className="underline underline-offset-2 text-blue-600 text-center text-xs">
                  Have a promo code ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
