import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col w-screen h-screen  justify-center items-center bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A]">
      <div className="w-1/4 flex flex-col  border shadow-xl rounded-xl p-11 gap-8 bg-white">
        <div className="flex justify-center">
          <h1 className="text-center w-fit p-3 text-4xl rounded-3xl">
            Sign In
          </h1>
        </div>

        <input
          type="text"
          placeholder="Email"
          className="  placeholder-[#112219] border rounded-xl px-2 py-3"
        />
        <input
          type="text"
          placeholder="Password"
          className="  placeholder-[#112219] border rounded-xl px-2 py-3"
        />
        <div className="flex justify-center">
          <Link
            to="/choose"
            className="w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
          >
            Login
          </Link>
        </div>
        <div className="flex gap-2">
          <span>Not a member?</span>
          <Link to="/register" className="text-blue-700">
            Sign Up Here
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
