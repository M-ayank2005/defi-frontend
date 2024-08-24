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
                //toast.success(`Received ${receivedAmount.toFixed()} ETH!`);
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

  return (
    <div className="h-auto p-20 flex flex-col w-auto opacity-70 my-10 rounded-3xl bg-black items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Receive ETH</h1>
      {account ? (
        <>
          <p className="mb-4 text-center text-lg">
            Your ETH Address: <span className="font-mono break-all">{account}</span>
          </p>
          <QRCode value={qrValue} size={220} bgColor="#000000" fgColor="#ffffff" />
          <p className="mt-4 text-center">Scan this QR code to receive ETH</p>
        </>
      ) : (
        <p>Connecting to MetaMask...</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default ReceiveEth;
