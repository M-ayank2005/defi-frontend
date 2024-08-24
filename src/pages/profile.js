import React, { useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';

function Profile({ onClose }) {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchAccountData = async () => {
      if (window.ethereum) {
        try {
          const provider = new BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          
          
          const address = await signer.getAddress();
          setAccount(address);

         
          const balanceBigInt = await provider.getBalance(address);
          const balanceInEther = balanceBigInt.toString();
          setBalance(parseFloat(balanceInEther / 1e18).toFixed(4)); 
        } catch (error) {
          console.error("Error fetching account data", error);
        }
      }
    };

    fetchAccountData();
  }, []);
  return (
    <div className="absolute flex items-center justify-center bg-opacity-50 right-0 top-[5rem] z-50">
      <div className="bg-black opacity-80 rounded-lg  shadow-3xl border-2 p-6 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-3xl font-extrabold mb-4 text-center text-white">Profile</h2>
        {account ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-white mb-2">Connected Address:</p>
            <p className="text-sm mb-4 text-gray-200 break-all">{account}</p>
            <p className="text-lg font-semibold text-white mb-2">Balance:</p>
            <p className="text-sm text-gray-200">{balance} ETH</p>
          </div>
        ) : (
          <p className="text-gray-200 text-center">Loading account information...</p>
        )}
      </div>
    </div>
  );
  
  
}

export default Profile;
