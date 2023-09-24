"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogBody,
  Input,
} from "@material-tailwind/react";

import Link from "next/link";
// import icon from react-icon
import { FiBell, FiMail } from "react-icons/fi";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { FaPlaneDeparture, FaWifi } from "react-icons/fa6";
import { MdOutlineReplay } from "react-icons/md";

const NavbarAuth = () => {
  const [openNav, setOpenNav] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <form action="">
        <label
          htmlFor="search-ticket"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <FiSearch color="gray" />
          </div>
          <input
            type="search"
            id="search-ticket"
            className="block w-full p-2 pl-7 text-xs text-gray-600 border  rounded-lg bg-gray-50 outline-none focus:ring-blue-600 focus:border-blue-600"
            placeholder="Where you want to go?"
          />
        </div>
      </form>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          className="flex items-center hover:underline hover:underline-offset-8 hover:text-blue-600"
          onClick={handleOpenDialog}
        >
          Find Tickket
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          className="flex items-center  hover:underline hover:underline-offset-8 hover:text-blue-600"
        >
          My Booking
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div className="flex flex-row items-center gap-3">
              <img src="/image/plane.png" alt="" width={45} />
              <h4 className="font-semibold text-lg">Ankasa</h4>
            </div>
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-row items-center gap-6">
              <div className="">
                <FiMail size={20} color="gray" />
              </div>
              <div>
                <FiBell size={20} color="gray" />
              </div>
              <div className="border-blue-600 border-2 rounded-full overflow-hidden cursor-pointer">
                <div className="w-8">
                  <img
                    src="/image/fakeAvatar.jpg"
                    alt=""
                    className="rounded-full p-1"
                  />
                </div>
              </div>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <FiX size={22} /> : <FiMenu size={22} />}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {/* <div className="flex flex-row items-center gap-6">
            <div className="">
              <FiMail size={20} color="gray" />
            </div>
            <div>
              <FiBell size={20} color="gray" />
            </div>
            <div className="border-blue-600 border-2 rounded-full overflow-hidden cursor-pointer">
              <div className="w-8">
                <img
                  src="/image/fakeAvatar.jpg"
                  alt=""
                  className="rounded-full p-1"
                />
              </div>
            </div>
          </div> */}
        </Collapse>
      </Navbar>

      {/* Dialog / modal */}
      <Dialog
        open={openDialog}
        size="xs"
        handler={handleOpenDialog}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody divider className="rounded-lg">
          <div className="mb-4">
            <h5 className="text-base text-black">Hey,</h5>
            <h4 className="text-base text-black font-semibold">
              Where you want to go?
            </h4>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h5 className="text-blue-600 font-semibold">Recently Searched</h5>
            <div className="text-blue-600">
              <IoIosArrowForward size={22} />
            </div>
          </div>
          {/* card distination */}
          <div className="py-3">
            <div className="w-full p-4 shadow-lg rounded-lg">
              <div className="flex flex-row justify-between items-center">
                <div className="text-left">
                  <p className="text-xs font-light">From</p>
                  <h5 className="text-xl font-semibold text-black py-1">
                    Medan
                  </h5>
                  <p className="text-xs font-normal">Indonesia</p>
                </div>
                <div className="text-blue-600">
                  <LiaExchangeAltSolid size={24} />
                </div>
                <div className="text-right">
                  <p className="text-xs font-light">To</p>
                  <h5 className="text-xl font-semibold text-black py-1">
                    Tokyo
                  </h5>
                  <p className="text-xs font-normal">Japan</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-row gap-4 mt-4">
            <Button className="bg-blue-600 flex gap-2 w-[100%] justify-center items-center">
              <FaPlaneDeparture size={18} />
              One way
            </Button>
            <Button className="bg-gray-400 text-black flex gap-1 w-[100%] justify-center items-center">
              <MdOutlineReplay size={18} />
              Round trip
            </Button>
          </div>
          {/* date */}
          <div className="py-4">
            <p className="mb-2 text-sm font-normal text-gray-600">Departure</p>
            <div className="w-full mb-4">
              <Input
                type="date"
                className="!border !border-gray-300 bg-white ring-4 ring-transparent placeholder:text-gray-500"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <p className="mb-2 text-sm font-normal text-gray-600">
              How many person?
            </p>
            <div className="flex justify-between">
              <div>
                <select
                  id="child"
                  class="w-full px-5 p-3 mb-6 text-sm text-gray-600 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option selected>Select person</option>
                  <option value="2">2 Child</option>
                  <option value="3">3 Child</option>
                </select>
              </div>
              <div>
                <select
                  id="child"
                  class="w-full px-5 p-3 mb-6 text-sm text-gray-600 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option selected>Select person</option>
                  <option value="2">2 Adult</option>
                  <option value="3">3 Adult</option>
                </select>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-normal text-gray-600">
                Which class do you want?
              </p>
              <div className="flex justify-between pb-4">
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Ekonomi
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Business
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    First Class
                  </label>
                </div>
              </div>
            </div>
            <div>
              <Link href="/search-ticket">
                <Button size="lg" className="w-full bg-blue-600">
                  Search Flight
                </Button>
              </Link>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default NavbarAuth;
