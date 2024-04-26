import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <div className="flex flex-col w-screen h-screen  justify-center items-center bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A]">
      <div className="w-1/4 flex flex-col justify-center items-center border shadow-xl rounded-xl p-11 gap-8 bg-white">
        <Link
          to="/ldash"
          className="w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
        >
          Lend Money
        </Link>
        <Link
          to="/typeOfCollateral"
          className="w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
        >
          Borrow
        </Link>
      </div>
    </div>
  );
};

export default Choice;
