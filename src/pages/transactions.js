import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import TransactionsABI from '../abis/Transactions.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const contractAddress = "0x9ceed7b63162838afc2c5b7a4fe91352f840623f"; 

  useEffect(() => {
    const fetchTransactions = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(contractAddress, TransactionsABI, signer);

          const txs = await contract.getAllTransactions();
          console.log("Fetched Transactions: ", txs); 

          const formattedTxs = txs.map(tx => ({
            sender: tx.sender,
            receiver: tx.recipient,
            amount: ethers.formatEther(tx.amount),
            message: tx.txHash,
          }));

          console.log("Formatted Transactions: ", formattedTxs); 
          setTransactions(formattedTxs); 

          // Show success toast notification
          toast.success('Fetched all transactions successfully');

        } catch (err) {
          console.error("Error fetching transactions:", err);
          toast.error('Error fetching transactions');
        }
      } else {
        console.log("Ethereum provider not found");
        toast.error('Ethereum provider not found');
      }
    };

    fetchTransactions();
  }, [contractAddress]);

  return (
    <div className="flex my-5 rounded-lg flex-col items-center bg-black opacity-85 h-auto pt-10 px-5">
      <h1 className="text-5xl font-extrabold text-white mb-8">Previous Transactions</h1>
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg  mb-5 shadow-lg overflow-hidden">
        {transactions.length > 0 ? (
          <ul className="divide-y py-2 divide-gray-700">
            {transactions.map((tx, index) => (
              <li key={index} className="p-4 transition duration-300 ease-in-out rounded-lg mb-4">
                <p className="text-lg text-gray-300 mb-1"><span className="font-semibold text-white">Txs No:</span> {index + 1}</p>
                <p className="text-lg text-gray-300 mb-1"><span className="font-semibold text-white">Sender:</span> {tx.sender}</p>
                <p className="text-lg text-gray-300 mb-1"><span className="font-semibold text-white">Receiver:</span> {tx.receiver}</p>
                <p className="text-lg text-gray-300 mb-1"><span className="font-semibold text-white">Amount:</span> {tx.amount} ETH</p>
                <p className="text-lg text-gray-300"><span className="font-semibold text-white">Tx Hash:</span> {tx.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center p-6">No transactions found.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Transactions;
