import Link from "next/link";
import React from "react";

const ButtonOutline = (props) => {
  return (
    <Link href={props?.navigate}>
      <button
        type={props?.type}
        className="block w-full text-blue-600 hover:text-white bg-white border-2 border-blue-600 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 focus:outline-none dark:focus:outline-none"
      >
        {props.text}
      </button>
    </Link>
  );
};

export default ButtonOutline;
