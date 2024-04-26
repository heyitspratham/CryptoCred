import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import borrow from "../assets/borrow.png";
import invest from "../assets/invest.png";
import borrowLogo from "../assets/BorrowL.png";
import investLogo from "../assets/investL.png";
const {Web3} = require('web3');

const Home = () => {

  console.log(Web3.givenProvider);
  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  return (
    <div className="snap-proximity snap-y">
      <Navbar />
      <div
        id="hero"
        className="bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A] h-screen w-screen flex "
      >
        <div
          id="hero left"
          className="p-24 m-28 rounded-2xl hover:bg-[#25411A] hover:scale-110 flex flex-col gap-6 group transition ease-out duration-300"
        >
          <h1 className="text-center text-white  group-hover:block bg-[#112219] w-fit font-mono px-4 py-2 rounded-2xl text-3xl  ">
            Borrow Money
          </h1>
          <h1 className="text-[#9BC93E] text-2xl">Instant Loans</h1>
          <h1 className=" text-white text-5xl ">
            Empower Your business and infuse Cash in it with easy to get loans
          </h1>
          <p className="text-[#9DA29F] font-mono">
            Smart Tools that simplify and enhance your Borrowing experience.
          </p>
          {/* <Link
            to="/Register"
            className="text-white bg-[#7DA230] px-8 w-fit py-2 text-3xl rounded-lg"
          >
            Sign Up
          </Link> */}
        </div>
        <div
          id="hero right"
          className="p-24 m-28 rounded-2xl hover:bg-[#25411A] hover:scale-110 flex flex-col  gap-6 group transition ease-linear duration-300"
        >
          <h1 className="text-center text-white  group-hover:block bg-[#112219] w-fit font-mono px-4 py-2 rounded-2xl text-3xl  ">
            Invest Money
          </h1>
          <h1 className="text-[#9BC93E] text-2xl">Higher returns</h1>
          <h1 className=" text-white text-5xl ">
            Invest into Small and medium-sized enterprises and earn healthy
            returns
          </h1>
          <p className="text-[#9DA29F] font-mono">
            Smart Tools that simplify and enhance your Investment experience.
          </p>
          
        </div>
        <Link
            to="/Register"
            className="text-white absolute bottom-10 mx-auto hover:scale-110 left-0 right-0 bg-[#7DA230] px-8 w-fit py-2 text-3xl rounded-lg"
          >
            Sign Up Now
          </Link>
      </div>
      <div className="bg-[#112219] snap-start h-screen text-white flex justify-around items-center">
        <div id="left" className="">
          <img src={invest} alt="" />
        </div>
        <div id="right" className="flex flex-col w-[30vw] gap-24 justify-center items-center">
          <img src={investLogo} alt="" className="w-1/2" />
          <h1 className="text-5xl text-center leading-[130%] ">Earn upto 15% interest when you Invest</h1>
          <p className="text-2xl w-[26vw] leading-[135%]">Daily Interest Credit | Instant Withdrawal | No Withdrawal Fee</p>
        </div>
      </div>
      <div className="bg-[#112219] snap-start h-screen text-white flex justify-around items-center">
        <div id="left" className="">
          <img src={borrow} alt="" />
        </div>
        <div id="right" className="flex flex-col w-[30vw] gap-24 justify-center items-center">
          <img src={borrowLogo} alt="" className="w-1/2" />
          <h1 className="text-5xl text-center leading-[130%] ">Pay upto 15% interest when you Borrow</h1>
          <p className="text-2xl w-[23vw] leading-[135%]">Easy Repayment | Prepay Anytime | No Charges</p>
        </div>
      </div>
      <div className="bg-[#112219] text-white flex justify-center items-center pber-10">
      <Link
            to="/Register"
            className="text-white bg-[#7DA230] px-8 w-fit py-2 mb-5  text-3xl rounded-lg"
          >
            Sign Up Now
          </Link>
      </div>
    </div>
  );
};

export default Home;

