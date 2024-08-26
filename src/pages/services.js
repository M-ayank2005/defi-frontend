import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-6">
      <div className="bg-gray-900 opacity-85 rounded-lg shadow-xl p-9 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Send ETH</h2>
            <p className="text-lg mb-4">Easily send Ethereum to any address securely.</p>
            <Link to="/sendEth" className="text-blue-400 hover:underline">Go to page</Link>
          </div>

          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Receive ETH</h2>
            <p className="text-lg mb-4">Receive Ethereum securely with our QR code system.</p>
            <Link to="/receiveEth" className="text-blue-400 hover:underline">Go to page</Link>
          </div>

          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Check Balance</h2>
            <p className="text-lg mb-4">View the current balance of your Ethereum account.</p>
            <Link to="/balance" className="text-blue-400 hover:underline">Go to page</Link>
          </div>

          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Mint NFTs</h2>
            <p className="text-lg mb-4">Create and mint your own NFTs on the blockchain.</p>
            <Link to="/mintNFT" className="text-blue-400 hover:underline">Go to page</Link>
          </div>

          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">View Transactions</h2>
            <p className="text-lg mb-4">Track and view your previous Ethereum transactions.</p>
            <Link to="/transactions" className="text-blue-400 hover:underline">Go to page</Link>
          </div>
          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Buy NFTs from MarketPalce</h2>
            <p className="text-lg mb-4">Explore NFTs and buy them from the open MarketPlace.</p>
            <Link to="/transactions" className="text-blue-400 hover:underline">Go to page</Link>
          </div>
          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Loan</h2>
            <p className="text-lg mb-4">Taking Loan and Repay the loan.</p>
            <Link to="/transactions" className="flex-end text-blue-400 hover:collapse">Go to page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
