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
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="w-full max-w-2xl">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/10 p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent text-center">
            Send Ethereum
          </h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-300">Recipient Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="Enter wallet address (0x...)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-gray-300">Amount</label>
              <div className="relative">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="Enter amount in ETH"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                  ETH
                </div>
              </div>
            </div>

            <button
              onClick={sendTransaction}
              className="w-full mt-8 py-4 px-6 rounded-xl bg-blue-400 text-white text-lg font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Send Transaction
            </button>

            <div className="text-center text-sm text-gray-400 mt-6">
              <p>Make sure you have enough ETH in your wallet to cover the transaction fee</p>
            </div>
          </div>
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

export default SendEth;
