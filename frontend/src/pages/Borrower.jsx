import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Borrower = () => {
  return (
    <div>
      <Navbar />
      <Link
        to="/ldash"
        className="w-fit px-5 py-2 z-10 absolute top-52 left-52 bg-[#25411A] text-white text-2xl rounded-2xl"
      >
        Lend Instead
      </Link>
      <div className="bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A] h-screen w-screen flex flex-col justify-center items-center ">
        <form
          action="/collateral"
          className="flex flex-col w-fit bg-white   p-10 gap-10 rounded-md  border-2"
        >
          <h1 className="text-5xl text-center w-full">Borrow Money</h1>
          <div className=" flex gap-5 items-center justify-between">
            <label for="fName" className=" text-xl">
              Full Name:{" "}
            </label>
            <input
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              type="text"
              placeholder="Your Name...."
            />
          </div>
          <div className=" flex gap-5 items-center justify-between">
            <label for="DOB" className=" text-xl">
              Date Of Birth:{" "}
            </label>
            <input
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              type="Date"
              placeholder="First Name"
            />
          </div>
          <div className=" flex gap-5 items-center justify-between">
            <label className=" text-xl" for="gender">
              Gender:
            </label>
            <select
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              name="gender"
            >
              <option value="">Please select one…</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
              <option value="Prefer not to answer">Perfer not to Answer</option>
            </select>
          </div>
          <div className=" flex gap-5 items-center justify-between">
            <label className=" text-xl" for="maritial">
              Marital Status:
            </label>
            <select
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              name="gender"
            >
              <option value="">Please select one…</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
          </div>
          <div className=" flex gap-5 items-center justify-between">
            <label className=" text-xl" for="pan">
              PAN No:
            </label>
            <input
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              type="text"
              placeholder="NHX782...."
            />
          </div>
          <div className=" flex gap-5 items-center justify-between">
            <label className=" text-xl" for="aadhaar">
              Aadhaar No:
            </label>

            <input
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              type="text"
              placeholder="7104 382...."
            />
          </div>
          <div className=" flex gap-5 items-center justify-between">
            <label className=" text-xl" for="phone">
              Phone No:
            </label>

            <input
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              type="text"
              placeholder="843XXX...."
            />
          </div>
          <div className=" flex gap-5 items-center justify-between">
            <label className=" text-xl" for="email">
              Email:
            </label>

            <input
              className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
              type="text"
              placeholder="youremail@gmai..."
            />
          </div>
          <button
            type="submit"
            className="w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
          >
            Next
          </button>
          {/* <input className="border-[#15221A] border-2 rounded-md px-2 py-3" type="text" placeholder="Loan Amount"/>
        <input className="border-[#15221A] border-2 rounded-md px-2 py-3" type="text" placeholder="Loan Purpose"/> */}
        </form>
      </div>
    </div>
  );
};

export default Borrower;
