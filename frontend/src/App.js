import { Fragment } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Borrower from "./pages/Borrower";
import Collateral from "./pages/Collateral";
import Lender from "./pages/dashboards/Lender";
import Borrow from "./pages/dashboards/Borrow";
import Choice from "./pages/Choice";
import TypeOfCollateralimport from "./pages/TypeOfCollateral";
import VehicleCollateral from "./pages/VehicleCollateral";
import LoanAmount from "./pages/LoanAmount";
import Marketplace from "./pages/Marketplace";
import InvestPage from "./pages/InvestPage";
import EmiPage from "./pages/EmiPage";

import React, { useState, useEffect } from "react";
import Web3 from "web3"; // Import Web3 library
import YourContractABI from "./assets/lendContract.json";

function App() {
  const [web3, setWeb3] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);

  useEffect(() => {
    // Connect to Ganache
    const connectToGanache = async () => {
      if (window.ethereum) {
        try {
          // Request account access
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const ganacheWeb3 = new Web3(window.ethereum);
          setWeb3(ganacheWeb3);

          // Instantiate contract
          const contractAddress = "0xcC122DBd9A7Ab6422c35111D58a55b75Ff983Ae6"; // Replace with your contract address
          const contract = new ganacheWeb3.eth.Contract(
            YourContractABI,
            contractAddress
          );
          setContractInstance(contract);
        } catch (error) {
          console.error("Error connecting to Ganache:", error);
        }
      } else {
        console.error(
          "Please install MetaMask or another Ethereum-compatible browser extension."
        );
      }
    };

    connectToGanache();
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Borrow" element={<Borrower />} />
        <Route exact path="/Collateral" element={<Collateral />} />
        <Route
          exact
          path="/VehicleCollateral"
          element={<VehicleCollateral />}
        />
        <Route exact path="/LDash" element={<Lender />} />
        <Route exact path="/BDash" element={<Borrow />} />
        <Route exact path="/choose" element={<Choice />} />
        <Route
          exact
          path="/typeOfCollateral"
          element={<TypeOfCollateralimport />}
        />
        <Route exact path="/loanamount" element={<LoanAmount />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/invest/:propId/:amount" element={<InvestPage/>} />
        <Route exact path="/emi/:propId" element={<EmiPage/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
