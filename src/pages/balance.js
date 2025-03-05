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
    <div className="flex items-center justify-center min-h-screen  text-white px-4">
      <div className="w-full max-w-2xl">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/10 p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent">
            Account Balance
          </h1>
          
          {account ? (
            <div className="space-y-8">
              <div className="p-6 bg-black/30 rounded-xl border border-white/5">
                <p className="text-lg font-medium text-gray-400 mb-2">Connected Address</p>
                <p className="font-mono text-sm text-blue-400 break-all">{account}</p>
              </div>
              
              <div className="p-6 bg-black/30 rounded-xl border border-white/5">
                <p className="text-lg font-medium text-gray-400 mb-2">Current Balance</p>
                <div className="flex items-baseline justify-center gap-2">
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {Number(balance).toFixed(4)}
                  </p>
                  <p className="text-xl text-gray-500 font-semibold">ETH</p>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Balance;
