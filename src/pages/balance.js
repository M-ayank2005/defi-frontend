import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Balance() {
  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send('eth_requestAccounts', []);
          setAccount(accounts[0]);
          const balanceInWei = await provider.getBalance(accounts[0]);
          const balanceInEth = ethers.formatEther(balanceInWei);
          setBalance(balanceInEth);
        } catch (error) {
          console.error('Error fetching balance:', error);
          toast.error('An error occurred while fetching the balance.');
        }
      } else {
        toast.error('MetaMask is not connected.');
      }
    };

    getBalance();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black opacity-70 rounded-lg shadow-xl p-12 px-20 w-full text-center">
        <h1 className="text-3xl font-extrabold mb-4">Account Balance</h1>
        {account ? (
          <>
            <p className="text-lg font-semibold text-gray-100 mb-2">Connected Address:</p>
            <p className="text-sm mb-4 text-gray-200 break-all">{account}</p>
            <p className="text-2xl font-bold text-white">Balance:</p>
            <p className="text-2xl font-extrabold text-red-700">{balance} ETH</p>
          </>
        ) : (
          <p className="text-gray-200 text-center">Loading account information...</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Balance;
