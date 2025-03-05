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

          toast.success('Transactions loaded successfully');

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
    <div className="min-h-screen w-full flex items-center justify-center text-white px-4 py-10">
      <div className="w-full max-w-6xl">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/10 p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent text-center">
            Transaction History
          </h1>

          {transactions.length > 0 ? (
            <div className="space-y-6">
              {transactions.map((tx, index) => (
                <div key={index} 
                  className="p-6 bg-black/30 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                          Transaction #{index + 1}
                        </span>
                        <span className="text-green-400 font-medium">
                          {tx.amount} ETH
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-gray-400">From:</span>
                          <span className="font-mono text-sm text-blue-400 break-all">{tx.sender}</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-gray-400">To:</span>
                          <span className="font-mono text-sm text-blue-400 break-all">{tx.receiver}</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-gray-400">Hash:</span>
                          <span className="font-mono text-sm text-purple-400 break-all">{tx.message}</span>
                        </div>
                      </div>
                    </div>

                    <a 
                      href={`https://sepolia.etherscan.io/tx/${tx.message}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>View on Etherscan</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No transactions found</div>
              <p className="text-gray-500 mt-2">Make a transaction to see it appear here</p>
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

export default Transactions;
