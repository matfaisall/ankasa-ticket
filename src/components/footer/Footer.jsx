import Link from "next/link";
import React from "react";

// import Logo from "/image/plane.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-full mx-auto max-w-screen-2xl p-4 py-6 lg:py-8 lg:px-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="flex item-center">
              <img src="/image/plane.png" alt="logo" className="h-8 mr-3" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ankasa
              </span>
            </Link>
            <p className="font-normal text-sm text-gray-600 my-6">
              Find your Flight and explore the <br />
              world with us. We will take care of the rest
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Features
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Find Ticket
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    My Booking
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    My Chat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Notification
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Download Ankasa App
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <img src="/image/app-store.png" alt="" width="90%" />
                </li>
                <li>
                  <img src="/image/google-store.png" alt="" width="90%" />
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Us
              </h2>
              <div className="flex align-middle justify-between">
                <div>
                  <FiFacebook size={18} color="gray" />
                </div>
                <div>
                  <FiTwitter size={18} color="gray" />
                </div>
                <div>
                  <FiInstagram size={18} color="gray" />
                </div>
                <div>
                  <FiYoutube size={18} color="gray" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between my-10">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <div className="flex align-middle">
              <FiMapPin size={18} color="gray" />
              <p className="font-normal text-sm ml-2">Jakarta Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
