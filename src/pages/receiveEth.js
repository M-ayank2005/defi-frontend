import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import QRCode from 'qrcode.react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BigNumber from 'bignumber.js';

function ReceiveEth() {
  const [account, setAccount] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [balance, setBalance] = useState(new BigNumber(0));
  const [lastNotifiedBalance, setLastNotifiedBalance] = useState(new BigNumber(0));

  useEffect(() => {
    const connectWallet = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
          setQrValue(address);

          const initialBalance = await provider.getBalance(address);
          setBalance(new BigNumber(initialBalance.toString()));
          setLastNotifiedBalance(new BigNumber(initialBalance.toString()));
        } catch (error) {
          console.error('Error connecting to MetaMask', error);
          toast.error('Error connecting to MetaMask');
        }
      } else {
        console.error('MetaMask is not installed.');
        toast.error('MetaMask is not installed.');
      }
    };

    connectWallet();
  }, []);

  useEffect(() => {
    const listenForIncomingTransactions = async () => {
      if (account) {
        const provider = new ethers.BrowserProvider(window.ethereum);

        provider.on('block', async () => {
          try {
            const newBalance = await provider.getBalance(account);
            const newBalanceBigNumber = new BigNumber(newBalance.toString());

            if (newBalanceBigNumber.gt(balance)) {
              const receivedAmount = newBalanceBigNumber.minus(balance).dividedBy(new BigNumber(10).pow(18));

              if (!newBalanceBigNumber.isEqualTo(lastNotifiedBalance)) {
                console.log(`Received ${receivedAmount.toFixed()} ETH!`);
                setLastNotifiedBalance(newBalanceBigNumber);
              }

              setBalance(newBalanceBigNumber);
            } else {
              setBalance(newBalanceBigNumber);
            }
          } catch (error) {
            console.error('Error fetching new balance', error);
          }
        });
      }
    };

    listenForIncomingTransactions();

    return () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        provider.removeAllListeners('block');
      }
    };
  }, [account, balance, lastNotifiedBalance]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(account);
    toast.success('Address copied to clipboard!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="w-full max-w-2xl">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/10 p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent text-center">
            Receive Ethereum
          </h1>

          {account ? (
            <div className="space-y-8">
              <div className="p-6 bg-black/30 rounded-xl border border-white/10">
                <p className="text-lg font-medium text-gray-400 mb-2">Your ETH Address</p>
                <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
                  <p className="font-mono text-sm text-blue-400 break-all">{account}</p>
                  <button 
                    onClick={copyToClipboard}
                    className="ml-4 p-2 hover:bg-blue-500/20 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-12a2 2 0 00-2-2h-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-2xl">
                  <QRCode value={qrValue} size={220} />
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-lg text-gray-300">
                  Scan this QR code to receive ETH
                </p>
                <p className="text-sm text-gray-400">
                  Only send Ethereum (ETH) to this address. Sending other tokens may result in permanent loss.
                </p>
              </div>

              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ready to receive payments</span>
                </div>
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

export default ReceiveEth;
