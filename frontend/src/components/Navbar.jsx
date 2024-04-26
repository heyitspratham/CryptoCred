import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between py-6 px-24 w-screen bg-gradient-to-r from-[#112219] from-60% to-[#25411A]  text-white items-center font-mono">
      <Link to="/" className="text-[#9ECC3F] text-2xl">
        CryptoCred
      </Link>
      <div className="text-[#9DA29F] flex gap-14  ">
        <Link className="hover:text-white hover:scale-105 ">Invest</Link>
        <Link className="hover:text-white hover:scale-105 ">Community</Link>
        <Link className="hover:text-white hover:scale-105 ">Learn</Link>
        <Link className="hover:text-white hover:scale-105 ">About us</Link>
      </div>
      <Link to="/Login" className="bg-[#9ECC3F] px-8 py-3 rounded-lg">
        Member Log In
      </Link>
    </div>
  );
};

export default Navbar;
