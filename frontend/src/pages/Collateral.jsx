import {contractAddress, contractABI} from "../utils/walletInfo";
import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const ethers = require("ethers");

const Collateral = () => {
  // Connecting to smart contract and performing transactions

  const walletAddress = contractAddress
  const walletAbi = contractABI
  const navigate = useNavigate();

  const writeContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletAbi, signer);

    // Convert the amount to a BigNumber
    // const amountInWei = ethers.utils.parseEther(amount.toString());

    await contract.GiveDetails(propNo,amount,rate);
    navigate("/bdash");
    // console.log(contract);
  };

  // useEffect(() => {
  //   return () => {};
  // }, []);

  // Hooks to store values

  const [propNo, setPropNo] = useState();
  const [displayMsg, setDisplayMsg] = useState(
    "Put in the property number for it to be verified as collateral"
  );
  const [landAddress, setLandAddress] = useState("");
  const [landSize, setLandSize] = useState("");
  const [amount, setAmount] = useState(false);
  const [rate, setRate] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // To retreive data from the backend

  const checkProp = async () => {
    try {
      // console.log("test");
      const { data } = await axios.get(`http://localhost:8000/loanProperty`, {
        params: {
          id: propNo,
        },
      });
      setDisplayMsg(data.msg);
      setLandAddress(data.address);
      setLandSize(data.size);
      // console.log(data.status);
      if (data.status == "success") {
        toast.success("Can get Loan against this property");
        setIsValid(true);
      } else {
        toast.error("Cannot get Loan against this property");
        setIsValid(false);
      }

      // console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
      <Navbar />
      <div className="bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A] h-screen w-screen flex flex-col justify-center items-center ">
        <div className="flex flex-col w-[80%] bg-white justify-center gap-10 p-10  rounded-md  border-2">
          <div>
            <div className="flex flex-col gap-3">
              {/* <span className="text-4xl">Hello,</span> */}
              <h1 className="text-5xl">Hello, Pratham Shukla</h1>
              <h2 className="text-2xl">
                submit the below details for getting approved for an instant
                Loan.
              </h2>
            </div>
          </div>

          <div className="flex gap-10">
            <div id="left" className="flex flex-col gap-10">
              {/* <div>
                <div className="flex gap-10 items-center justify-between">
                  <span className="text-xl">Add Photo:</span>
                  <input className="" type="file" name="" id="" />
                </div>
              </div> */}
              <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">Property Number:</span>
                <input
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-2"
                  value={propNo}
                  onChange={(event) => setPropNo(event.target.value)}
                  type="number"
                  placeholder=""
                  name=""
                  id=""
                />
                <button
                  type="button"
                  className="w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
                  onClick={checkProp}
                >
                  Verify
                </button>
              </div>
              <div className="underline">{displayMsg}</div>
              <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">Address:</span>
                <input
                  className="w-[20vw] pointer-events-none placeholder-[#112219] border-2 rounded-md px-2 py-2"
                  type="text"
                  placeholder="Enter Property No. First"
                  value={landAddress}
                />
              </div>

              {/* <div>
                <div className="flex gap-10 items-center justify-between">
                  <span className="text-xl">Annual Income:</span>
                  <input
                    className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-2"
                    type="text"
                    placeholder="Rs.XXX"
                    name=""
                    id=""
                  />
                </div>
              </div> */}
              {/* <div className=" flex gap-5 items-center justify-between">
                <label className=" text-xl" for="employeed">
                  Employment Status:
                </label>
                <select
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
                  name="employeed"
                >
                  <option value="">Please select one…</option>
                  <option value="employeed">Employeed</option>
                  <option value="selfEmployeed">Self Employeed</option>
                </select>
              </div> */}
              {/* <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">
                  Account Statement for last 6 Months:
                </span>
                <input className="" type="file" name="" id="" />
              </div> */}
            </div>
            <div id="right" className="flex flex-col gap-10">
              {/* <div className=" flex gap-5 items-center justify-between">
                <label className=" text-xl" for="employeed">
                  Property Ownership Status:
                </label>
                <select
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
                  name="prop"
                >
                  <option value="">Please select one…</option>
                  <option value="selfOwned">self-owned</option>
                  <option value="coOwned">co-owned</option>
                </select>
              </div> */}
              <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">Property Ownership Document:</span>
                <input className="" type="file" name="" id="" />
              </div>
              {/* <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">Address Proof of the Property:</span>
                <input className="" type="file" name="" id="" />
              </div> */}
              <div className=" flex gap-5 items-center justify-between">
                <label for="propArea" className=" text-xl">
                  Size and Area of the Property:{" "}
                </label>
                <input
                  className="w-[20vw] pointer-events-none placeholder-[#112219] border-2 rounded-md px-2 py-3"
                  type="text"
                  value={landSize}
                  placeholder="Enter Property No. First"
                />
              </div>
              <div className=" flex gap-5 items-center justify-between">
                <label for="amt" className=" text-xl">
                  Amount:{" "}
                </label>
                <input
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
                  type="numbers"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    // console.log(value);
                    setAmount(value);
                  }}
                  placeholder="Type Here..."
                />
              </div>
              <div className=" flex gap-5 items-center justify-between">
                <label for="amt" className=" text-xl">
                  Rate:{" "}
                </label>
                <input
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
                  type="numbers"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    // console.log(value);
                    setRate(value);
                  }}
                  placeholder="Type Here..."
                />
              </div>
            </div>
          </div>

          <button
            className={
              isValid && amount && rate
                ? "w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
                : "w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl pointer-events-none opacity-50"
            }
            onClick={ () => {
                writeContract();
               
            }}
          >
            Put up for Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collateral;
