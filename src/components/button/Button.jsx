import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        className="block w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 mr-2 mb-2 focus:outline-none dark:focus:outline-none"
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
