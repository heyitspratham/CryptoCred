import React from "react";
import LdashInvest from "../../assets/LdashInvest.png";
import chart from "../../assets/chart.png";

const Lender = () => {
  const trx = [
    {
      type: "Debit",
      to: "Ojjuas Gupta",
      date: "18/3/24",
      amount: 10000,
    },
    {
      type: "Debit",
      to: "Ojjuas Gupta",
      date: "18/3/24",
      amount: 10000,
    },
    {
      type: "Credit",
      to: "Ojjuas Gupta",
      date: "18/3/24",
      amount: 10000,
    },
    {
      type: "Credit",
      to: "Ojjuas Gupta",
      date: "18/3/24",
      amount: 10000,
    },
  ];
  return (
    <div class="flex flex-col h-screen bg-[#112219]">
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
              href="/bdash"
            >
              <i class="fas fa-exchange-alt mr-2"></i>Borrowed Money
            </a>
            <a
              class="block text-black py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#112219] from-60% hover:to-[#25411A] hover:text-white"
              href="/bdash"
            >
              <i class="fas fa-exchange-alt mr-2"></i>Borrowed Money
            </a>
          </nav>

          <a
            class="block text-white py-2.5 px-4 my-2 rounded transition duration-200 bg-gradient-to-r from-[#112219] from-60% to-[#25411A] hover:text-white mt-auto"
            href="/borrow"
          >
            <i class="fas fa-sign-out-alt mr-2"></i>Borrow Money
          </a>

          <div class="bg-gradient-to-r from-[#112219] from-60% to-[#25411A] h-px mt-2"></div>
        </div>

        <div class="flex-1 p-4">
          <div class="relative max-w-md w-full">
            <div class="absolute top-1 left-2 inline-flex items-center p-2">
              <i class="fas fa-search text-gray-400"></i>
            </div>
            <input
              class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
              type="search"
              placeholder="Search..."
            ></input>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2 p-2">
            <div class="bg-gray-200 p-4 rounded-md">
              <h2 class="text-black text-lg font-semibold pb-4">
                Investments Overview
              </h2>
              <div class="my-1"></div>
              <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <div className="box flex justify-around">
                <div className="h-[30vh] w-full">
                  <div className="flex h-full w-full flex-col justify-center items-center">
                    <div className="text-xl font-semibold underline">
                      Amount Invested
                    </div>
                    <div className="h-full flex justify-center items-center text-5xl">
                      ₹1,23,456
                    </div>
                  </div>
                </div>
                <div className="h-[30vh] w-full">
                  <div className="flex h-full w-full flex-col justify-center items-center">
                    <div className="text-xl font-semibold underline">
                      Interest Yield
                    </div>
                    <div className="h-full flex justify-center items-center text-5xl">
                      ₹23,456
                    </div>
                  </div>
                </div>
                <div className="h-[30vh] w-full">
                  <div className="flex h-full w-full flex-col justify-center items-center">
                    <div className="text-xl font-semibold underline">
                      Average Rate Of Interest
                    </div>
                    <div className="h-full  flex justify-center items-center text-5xl">
                      11%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-200 p-4 h-[40vh] rounded-md mt-4">
              <h2 class="text-black text-lg font-semibold pb-4">
                Recent Transaction's
              </h2>
              <div class="my-1"></div>
              <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table class="w-full table-auto text-sm">
                <thead>
                  <tr class="text-sm leading-normal">
                    <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      D/C
                    </th>
                    <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      To
                    </th>
                    <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Date
                    </th>
                    <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                {trx &&
                  trx.map((i) => {
                    return (
                      <tbody>
                        <tr className="w-full ">
                          <th>{i.type}</th>
                          <td>{i.to}</td>
                          <td>{i.date}</td>
                          <td>Rs. {i.amount}</td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lender;
