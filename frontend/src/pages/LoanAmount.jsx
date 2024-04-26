import React from "react";
import { Link } from "react-router-dom";

const LoanAmount = () => {
  return (
    <div className="flex flex-col w-screen h-screen  justify-center items-center bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A]">
      <div className="w-1/4 flex flex-col  border shadow-xl rounded-xl p-11 gap-8 bg-white">
        <div className="flex flex-col gap-10 justify-center">
          <h1 className="text-center justify-center items-center w-fit p-3 text-2xl rounded-3xl">
            Loan Amount required
          </h1>
          <input
            type="text"
            placeholder="Amount"
            className="  placeholder-[#112219] border rounded-xl px-2 py-3"
          />
          <div className="flex justify-center">
            <Link
              to="/ldash"
              className="w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanAmount;
