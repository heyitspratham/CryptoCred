import {contractAddress, contractABI} from "../utils/walletInfo";
import React, {useEffect, useState} from 'react'
import { useParams, Link} from 'react-router-dom';
const ethers = require("ethers");

const EmiPage = () => {

    const walletAddress = contractAddress
    const walletAbi = contractABI
    const { propId } = useParams();

    const [done, setDone] = useState(true)

    useEffect(() => {
        const writeContract = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(walletAddress, walletAbi, signer);
        
            const marketDetails = await contract.GetDetails(propId)
            console.log(marketDetails[2]);
            const tx = await signer.sendTransaction({
                to: '0x64F4A329B8e624d5612c01Dff009a7Dee930a7Ce',
                value: ethers.utils.parseUnits('10', 'ether')
            })
                setDone(!done)
            console.log(tx);
            const amt = ethers.utils.formatEther(marketDetails[0]);
            console.log(amt * 1000000000000000000);
            console.log(ethers.utils.formatEther(marketDetails[1]) * 1000000000000000000);
            // console.log( );
          };

          writeContract()
    }, [])


    return (
        <div className="flex flex-col w-screen h-screen  justify-center items-center bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A]">
            {done?<div className=" text-3xl text-white">Please wait, The transaction is in process.....</div>:
            <div className="flex flex-col justify-center items-center gap-5">
                <div className=" text-3xl text-white">The transaction Successfully completed. You may procede to Dashboard </div>
            <Link className=" text-2xl text-blue-400" to="/bdash"> Click Here</Link>
            </div> }
        </div>
      )
}

export default EmiPage