import React, { useState } from 'react';
import { ethers } from 'ethers';
import TransactionsABI from './contracts/Transactions.json';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contractAddress = '0x9ceed7b63162838afc2c5b7a4fe91352f840623f';

function SendEth() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const sendTransaction = async () => {
    if (!window.ethereum) {
      toast.error('MetaMask is not installed. Please install it to use this feature.');
      return;
    }

    if (!ethers.isAddress(recipient)) {
      toast.error('Invalid recipient address.');
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount of ETH.');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const amountInWei = ethers.parseEther(amount);
      const tx = {
        to: recipient,
        value: amountInWei,
      };

      const transactionResponse = await signer.sendTransaction(tx);
      toast.info(`Transaction sent! Hash: ${transactionResponse.hash}`);

      await transactionResponse.wait();
      toast.success(`Transaction confirmed! Hash: ${transactionResponse.hash}`);

      const contract = new ethers.Contract(contractAddress, TransactionsABI, signer);

      const txRecord = await contract.addTransaction(recipient, amountInWei.toString(), transactionResponse.hash);
      await txRecord.wait();

      toast.success(`Transaction recorded on the blockchain! TxHash: ${txRecord.hash}`);
      
    } catch (error) {
      console.error('Transaction failed', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="p-20  bg-gray-900  opacity-90 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Send Ethers</h1>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Recipient Address</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full px-2 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0x..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Amount (ETH)</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.01"
          />
        </div>
        <button
          onClick={sendTransaction}
          className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-lg font-bold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg"
        >
          Send ETH
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default SendEth;
