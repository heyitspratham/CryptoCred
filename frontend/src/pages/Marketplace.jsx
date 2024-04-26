import {contractAddress, contractABI} from "../utils/walletInfo";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ethers = require("ethers");



const Marketplace = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545"
  );

  const walletAddress = contractAddress;
  const walletAbi = contractABI;

 
  const [formattedDetails, setFormattedDetails] = useState([]);
  // const [propNo, setPropNo] = useState();
  // const [landSize, setLandSize] = useState("")
  // const [landAddress, setLandAddress] = useState("");

  const checkProp = async (prp) => {
    try {
      // console.log("test");
      const { data } = await axios.get(`http://localhost:8000/loanProperty`, {
        params: {
          id: prp,
        },
      });
      console.log(data);
      return data;
      // setDisplayMsg(data.msg);
      // setLandAddress(data.address);
      // setLandSize(data.size);
      // console.log(data.status);
      

      // console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  let walletContract;

  async function fetchData() {
    walletContract = new ethers.Contract(
          walletAddress,
          walletAbi,
          provider
        ); 
    try {
      console.log(walletContract);
      const marketDetails = await walletContract.GetAllDetails();
      // await walletContract.GiveLoan("12345");
      console.log(marketDetails);
      // console.log(ethers.utils.formatEther(detail[0]));
      // const formattedDetail = await marketDetails.map(detail => {

        
      //   return {
      //     title: "XXX Land Loan",
      //     propId: parseInt(ethers.utils.formatEther(detail[0])), // Assuming propId is at index 0
      //     amount: ethers.utils.formatEther(detail[1]) * 1000000000000000000, // Assuming amount is at index 1
      //     // amount: detail[1], // Assuming amount is at index 1
      //     rate: ethers.utils.formatEther(detail[2]) * 1000000000000000000,/// Assuming rate is at index 2
      //     // size: {checkProp(parseInt(ethers.utils.formatEther(detail[0])))}
      //   };
      // }); 
      const formattedDetailPromises = marketDetails.map(async (detail) => {
        const propId = ethers.utils.formatEther(detail[0]);
        const amount = ethers.utils.formatEther(detail[1]) * 1000000000000000000;
        const rate = ethers.utils.formatEther(detail[2]) * 1000000000000000000;
        const size = await checkProp(propId).then(data => data.size);
        const address = await checkProp(propId).then(data => data.address);
        const type = await checkProp(propId).then(data => data.type);


        return {
            title: "XXX Land Loan",
            propId,
            amount,
            rate,
            size,
            address,
            type
        };
    });

    const formattedDetail = await Promise.all(formattedDetailPromises);
      // setPropNo(formattedDetail[0].propId)
      // checkProp(12345)
      setFormattedDetails(formattedDetail)
      console.log("Market Details: true", formattedDetail);
      // console.log(parseInt(formattedDetails[0].propId));
      // console.log(propNo);
      // console.log(propNo);
      // Do something with formattedDetails
    } catch (error) {
      console.error("Error fetching market details:", error);
    }
  }
  useEffect(() => {
    
    fetchData()
  }, []);

  const marketLand = [
    {
      title: "Potheri Land loan",
      amount: 25000,
      size: 1000,
      type: "Land",
    },
    {
      title: "Meenambakkam Land loan",
      amount: 200000,
      size: 1600,
      type: "Land",
    },
    {
      title: "Maraimalai NGR Land loan",
      amount: 35000,
      size: 1000,
      type: "Land",
    },
    {
      title: "Honda Activa loan",
      amount: 35000,
      old: 2,
      type: "Vehicle",
    },
    {
      title: "Mahindra Thar loan",
      amount: 135000,
      old: 7,
      type: "Vehicle",
    },
  ];

  return (
    <div class="flex flex-col h-screen bg-[#112219] overflow-y-auto">
      <div class="bg-[#25411A] text-white shadow w-full p-2 flex items-center justify-between">
        <div class="flex items-center">
          <div class="hidden md:flex items-center">
            <div className="text-[#9ECC3F] text-2xl">CryptoCred</div>
          </div>
          <div class="md:hidden flex items-center">
            <button id="menuBtn">
              <i class="fas fa-bars text-black text-lg"></i>
            </button>
          </div>
        </div>

        <div class="space-x-5">
          <button>
            <i class="fas fa-bell text-black text-lg"></i>
          </button>
          <button>
            <i class="fas fa-user text-black text-lg"></i>
          </button>
        </div>
      </div>

      <div class="flex-1 flex">
        <div
          class="p-2 bg-gray-200 w-60 flex flex-col hidden md:flex"
          id="sideNav"
        >
          <nav>
            <a
              class="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#112219] from-60% hover:to-[#25411A] hover:text-white"
              href="/marketplace"
            >
              <i class="fas fa-users mr-2"></i>Marketplace
            </a>
            <a
              class="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#112219] from-60% hover:to-[#25411A] hover:text-white"
              href="#"
            >
              <i class="fas fa-store mr-2"></i>Transactions
            </a>
            <a
              class="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#112219] from-60% hover:to-[#25411A] hover:text-white"
              href="/ldash"
            >
              <i class="fas fa-exchange-alt mr-2"></i>Money Lent
            </a>
          </nav>

          <a
            class="block text-white py-2.5 px-4 my-2 rounded transition duration-200 bg-gradient-to-r from-[#112219] from-60% to-[#25411A] hover:text-white mt-auto"
            href="/borrow"
          >
            <i class="fas fa-sign-out-alt mr-2"></i>Borrow Money
          </a>

          <div class="bg-gradient-to-r from-[#112219] from-60% to-[#25411A] h-px mt-2 "></div>
        </div>

        <div class="flex-1 p-4">
          <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2 p-2">
            <div class="bg-gray-200 p-4 h-full rounded-md">
              <h2 class="text-black text-lg font-semibold pb-4">Marketplace</h2>
              <div class="my-1"></div>
              <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <div className="box flex flex-col gap-8">
                <div className="text-3xl">New Requests</div>
                {formattedDetails &&
                  formattedDetails.map((i) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-between bg-[#24411A] text-white rounded-md p-10"
                      >
                        <div className="flex flex-col gap-2">
                          <div key={i.title}>{i.address}</div>
                          {i.size && <div>{i.size} {(i.type == 'land')? "SQ.FT": 'Yrs Old'}</div>}
                          {/* {i.old && <div>{i.old} Yrs Old</div>} */}
                          <div>{i.type}</div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div>Rs.{i.amount}</div>
                          <Link
                          to={`/invest/${i.propId}/${i.amount}`}
                          className="bg-[#9DCC3F] text-black p-2 rounded-md"
                          >
                            Invest Now
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                <a>Load More..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
