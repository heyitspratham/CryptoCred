import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const VehicleCollateral = () => {
  const [propNo, setPropNo] = useState();
  const [address, setAddress] = useState("")
  const [date, setDate] = useState("")
  const [displayMsg, setDisplayMsg] = useState(
    "Put in the Vehicle number for it to be verified as collateral"
  );
  const [isValid, setIsValid] = useState(false);

  const checkProp = async () => {
    try {
      // console.log("test");
      const { data } = await axios.get(`http://localhost:8000/loanVehicle`, {
        params: {
          id: propNo,
        },
      });
      setDisplayMsg(data.msg);
      setAddress(data.address)
      setDate(data.date)
      // console.log(data.status);
      if (data.status == "success") {
        toast.success("Can get Loan against this Vehicle");
        setIsValid(true);
      } else {
        toast.error("Cannot get Loan against this Vehicle");
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
        <form
          action=""
          className="flex flex-col w-[80%] bg-white justify-center gap-10 p-10  rounded-md  border-2"
        >
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
                <span className="text-xl">Vehicle Number:</span>
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
                <span className="text-xl">Registration Address:</span>
                <input
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-2 pointer-events-none opacity-50"
                  type="text"
                  value={address}
                  placeholder="Enter Property No. First"
                  name=""
                  id=""
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
              {/* <didv className=" flex gap-5 items-center justify-between">
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
              </didv>
              <didv className="flex gap-10 items-center justify-between">
                <span className="text-xl">
                  Account Statement for last 6 Months:
                </span>
                <input className="" type="file" name="" id="" />
              </didv> */}
            </div>
            <div id="right" className="flex flex-col gap-10">
              {/* <div className=" flex gap-5 items-center justify-between">
                <label className=" text-xl" for="employeed">
                  Vehicle Ownership Status:
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
              {/* <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">Vehicle Ownership Document:</span>
                <input className="" type="file" name="" id="" />
              </div> */}
              <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">Date Of Registration:</span>
                <input
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-2 pointer-events-none opacity-50"
                  type="text"
                  value={date}
                  placeholder="Enter Property No. First"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-10 items-center justify-between">
                <span className="text-xl">Address Proof of the Vehicle:</span>
                <input className="" type="file" name="" id="" />
              </div>
              {/* <dijv className=" flex gap-5 items-center justify-between">
                <jlabel className=" text-xl" for="employeed">
                  Vehicle Condition:
                </jlabel>
                <select
                  className="w-[20vw]  placeholder-[#112219] border-2 rounded-md px-2 py-3"
                  name="prop"
                >
                  <option value="">Please select one…</option>
                  <option value="likeNew">Like New</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </dijv> */}
            </div>
          </div>

          <Link
            type="submit"
            to="/loanamount"
            className={
              isValid
                ? "w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl"
                : "w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl pointer-events-none opacity-50"
            }
          >
            Next
          </Link>
        </form>
      </div>
    </div>
  );
};

export default VehicleCollateral;
