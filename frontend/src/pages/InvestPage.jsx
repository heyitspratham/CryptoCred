import {contractAddress, contractABI} from "../utils/walletInfo";
import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
const ethers = require("ethers");


const InvestPage = () => {
    
    const walletAddress = contractAddress
    const walletAbi = contractABI
    const { propId, amount } = useParams();
    const [done, setDone] = useState(true)

    // console.log(amount);

    useEffect(() => {
        const writeContract = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(walletAddress, walletAbi, signer);
        
            // Convert the amount to a BigNumber
            // const amountInWei = ethers.utils.parseEther(amount.toString());
            try {
                const transactionValue = ethers.utils.parseEther(amount); // Set your transaction value here
                const overrides = {
                  value: transactionValue
                };
                // console.log(1);
                await contract.GiveLoan(propId, overrides);
                setDone(!done) 
              } catch (error) {
                console.error("Error giving loan:", error);
              }
            // await contract.GiveLoan(propId);
            // console.log(contract);
          };

          writeContract()
    }, [])
  return (
    <div className="flex flex-col w-screen h-screen  justify-center items-center bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A]">
            {done?<div className=" text-3xl text-white">Please wait, The transaction is in process.....</div>:
            <div className="flex flex-col justify-center items-center gap-5">
                <div className=" text-3xl text-white">The transaction Successfully completed. You may procede to Dashboard </div>
            <Link className=" text-2xl text-blue-400" to="/ldash"> Click Here</Link>
            </div> }
        </div>
  )
}

export default InvestPage