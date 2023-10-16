"use client";
import React, { useEffect, useState } from "react";
import NavbarAuth from "@/components/navbar-auth/NavbarAuth";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle, FaPlaneDeparture } from "react-icons/fa";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import convertDate from "@/utils/convertDate";
import Barcode from "react-barcode";

const BookingPass = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_FLIGHT_API;
  const { id } = useParams();
  const router = useRouter();

  const [dataTicket, setDataTicket] = useState({});

  const getTicketById = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/booking/tickets/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.data);
      setDataTicket(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTicketById();
  }, []);

  return (
    <>
      <NavbarAuth />
      <div className="bg-blue-500">
        <div className="px-6 lg:px-60 py-10">
          <div className="grid grid-cols-1">
            <div className="bg-white p-10 rounded-xl">
              <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Ticket Payment</h1>
                <div className="text-blue-600">
                  <Link href="">
                    <BsThreeDotsVertical />
                  </Link>
                </div>
              </div>
              {/* ticket */}
              <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12">
                <div className="md:col-span-6">
                  <div className="border-2 border-gray-200 rounded-lg">
                    <div className="p-6">
                      <div className="flex flex-row gap-6 items-center">
                        <div>
                          <Image
                            src={dataTicket?.result?.ticket.airline.photo}
                            alt="logo booking pass"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="flex flex-row justify-between gap-8">
                          <div>
                            <h1 className="text-lg font-semibold text-black">
                              {dataTicket?.result?.ticket.from.code}
                            </h1>
                          </div>
                          <div className="text-gray-400 self-center">
                            <FaPlaneDeparture size={20} />
                          </div>
                          <div>
                            <h1 className="text-lg font-semibold text-black">
                              {dataTicket?.result?.ticket.to.code}
                            </h1>
                          </div>
                        </div>
                      </div>
                      {/* code & class */}
                      <div className="mt-8">
                        <div className="flex flex-row gap-x-24">
                          <div>
                            <p className="text-xs text-gray-400">Code</p>
                            <p className="text-base text-gray-600">
                              AB-{dataTicket?.result?.id}
                            </p>
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
                          {convertDate(dataTicket?.result?.ticket.landing)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="flex justify-center items-center h-full">
                    <div className="rotate-0 sm:rotate-90">
                      <Barcode
                        value={dataTicket?.result?.code}
                        height={30}
                        width={0.6}
                        fontSize={12}
                      />
                    </div>
                  </div>
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

export default BookingPass;
