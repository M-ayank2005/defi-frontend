import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ABI from './contracts/Loan.json'

const LoanManagerAddress = "0x44ceb3891b9c19c57f69ba9e7892ac1338db9da1";
const LoanManagerABI = ABI;

const LoanPage = () => {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [loanId, setLoanId] = useState('');
  const [account, setAccount] = useState(null);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send('eth_requestAccounts', []);
          setAccount(accounts[0]);
          fetchUserLoans(accounts[0]);
        } catch (error) {
          toast.error('Failed to connect to MetaMask');
        }
      } else {
        toast.error('MetaMask is not installed');
      }
    };

    checkMetaMaskConnection();
  }, []);

  const fetchUserLoans = async (userAddress) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const loanManagerContract = new ethers.Contract(LoanManagerAddress, LoanManagerABI, provider);
      
      const userLoanIds = await loanManagerContract.getUserLoans(userAddress);
      const loanPromises = userLoanIds.map(id => loanManagerContract.getLoanDetails(id));
      const loanDetails = await Promise.all(loanPromises);
      
      setLoans(loanDetails.map((loan, index) => ({
        id: userLoanIds[index],
        amount: ethers.formatEther(loan.amount),
        interestRate: loan.interestRate.toString(),
        duration: loan.duration.toString(),
        isRepaid: loan.isRepaid
      })));
      toast.success('Loans fetched successfully');
    } catch (error) {
      toast.error('Error fetching user loans: ' + error.message);
    }
  };

  const createLoan = async () => {
    try {
      if (!account) {
        toast.error('Connect MetaMask first!');
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const loanManagerContract = new ethers.Contract(LoanManagerAddress, LoanManagerABI, signer);

      const tx = await loanManagerContract.createLoan(
        interestRate,
        duration,
        { value: ethers.parseEther(amount) }
      );
      await tx.wait();
      toast.success('Loan created successfully');
      fetchUserLoans(account);
    } catch (error) {
      toast.error('Error creating loan: ' + error.message);
    }
  };

  const repayLoan = async () => {
    try {
      if (!account) {
        toast.error('Connect MetaMask first!');
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const loanManagerContract = new ethers.Contract(LoanManagerAddress, LoanManagerABI, signer);

      const loan = await loanManagerContract.getLoanDetails(loanId);
      const interest = loan.amount * loan.interestRate / 100n;
      const repaymentAmount = loan.amount + interest;

      const tx = await loanManagerContract.repayLoan(loanId, {
        value: repaymentAmount
      });
      await tx.wait();
      toast.success('Loan repaid successfully');
      fetchUserLoans(account);
    } catch (error) {
      toast.error('Error repaying loan: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 py-12">
      <div className="w-full max-w-4xl">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/10 p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent text-center">
            Loan Management System
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Create Loan</h2>
                <div className="space-y-4">
                  <input
                    type="number"
                    placeholder="Amount (ETH)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  />
                  <input
                    type="number"
                    placeholder="Interest Rate (%)"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  />
                  <input
                    type="number"
                    placeholder="Duration (seconds)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  />
                  <button 
                    onClick={createLoan} 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Create Loan
                  </button>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-green-400">Repay Loan</h2>
                <div className="space-y-4">
                  <input
                    type="number"
                    placeholder="Loan ID"
                    value={loanId}
                    onChange={(e) => setLoanId(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200"
                  />
                  <button 
                    onClick={repayLoan} 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Repay Loan
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Your Loans</h2>
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {loans.map(loan => (
                  <div 
                    key={loan.id} 
                    className="p-4 bg-black/30 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                        Loan #{loan.id.toString()}
                      </span>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${loan.isRepaid ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {loan.isRepaid ? 'Repaid' : 'Active'}
                      </span>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p>Amount: <span className="text-blue-400">{loan.amount} ETH</span></p>
                      <p>Interest Rate: <span className="text-blue-400">{loan.interestRate}%</span></p>
                      <p>Duration: <span className="text-blue-400">{loan.duration} seconds</span></p>
                    </div>
                  </div>
                ))}
              </div>
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
};

export default LoanPage;