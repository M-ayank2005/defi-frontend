import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
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
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setAccount(accounts[0]);
        fetchUserLoans(accounts[0]);
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
    } catch (error) {
      console.error('Error fetching user loans:', error);
    }
  };

  const createLoan = async () => {
    try {
      if (!account) return alert('Connect MetaMask first!');
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const loanManagerContract = new ethers.Contract(LoanManagerAddress, LoanManagerABI, signer);

      const tx = await loanManagerContract.createLoan(
        interestRate,
        duration,
        { value: ethers.parseEther(amount) }
      );
      await tx.wait();
      console.log('Loan created successfully');
      fetchUserLoans(account);
    } catch (error) {
      console.error('Error creating loan:', error);
    }
  };

  const repayLoan = async () => {
    try {
      if (!account) return alert('Connect MetaMask first!');
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
      console.log('Loan repaid successfully');
      fetchUserLoans(account);
    } catch (error) {
      console.error('Error repaying loan:', error);
    }
  };

  return (
    <div className="p-8 mt-10 mb-1 rounded-3xl bg-gray-900 text-white min-h-screen w-5/6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Loan Management System</h1>
      <div className="w-full max-w-lg">
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Create Loan</h2>
          <input
            type="number"
            placeholder="Amount (ETH)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 text-black mb-4 border border-gray-600 rounded"
          />
          <input
            type="number"
            placeholder="Interest Rate (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-2 mb-4 border text-black border-gray-600 rounded"
          />
          <input
            type="number"
            placeholder="Duration (seconds)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 mb-4 border text-black border-gray-600 rounded"
          />
          <button onClick={createLoan} className="w-full bg-blue-600 p-3 rounded">
            Create Loan
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Repay Loan</h2>
          <input
            type="number"
            placeholder="Loan ID"
            value={loanId}
            onChange={(e) => setLoanId(e.target.value)}
            className="w-full p-2 mb-4 text-black border border-gray-600 rounded"
          />
          <button onClick={repayLoan} className="w-full bg-green-600 p-3 rounded">
            Repay Loan
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Loans</h2>
          {loans.map(loan => (
            <div key={loan.id} className="mb-4 p-4 bg-gray-700 rounded">
              <p>Loan ID: {loan.id.toString()}</p>
              <p>Amount: {loan.amount} ETH</p>
              <p>Interest Rate: {loan.interestRate}%</p>
              <p>Duration: {loan.duration} seconds</p>
              <p>Status: {loan.isRepaid ? 'Repaid' : 'Active'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanPage;