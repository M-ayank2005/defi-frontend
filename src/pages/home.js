import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './marquee.css';
import { Link } from 'react-router-dom';

function Home() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send('eth_accounts', []);
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error('Error checking MetaMask connection:', error);
        }
      }
    };

    checkMetaMaskConnection();
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden my-8">
      <div className="text-5xl font-bold text-center bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent drop-shadow-lg pt-20">
        Welcome to the Future of Banking
      </div>
      
      <div className="text-center mt-8 p-5">
        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          DeFi Bank revolutionizes traditional banking by putting the power back in your hands. Experience secure, transparent, and decentralized financial services powered by blockchain technology.
        </p>

        {!account ? (
          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Secure & Private</h3>
                <p className="text-gray-400 mt-2">Your assets are protected by military-grade encryption and blockchain security</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Lightning Fast</h3>
                <p className="text-gray-400 mt-2">Instant transactions and settlements across the globe</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Low Fees</h3>
                <p className="text-gray-400 mt-2">Minimal transaction fees compared to traditional banks</p>
              </div>
            </div>

            <Link to="/signin">
              <button className="px-8 py-4 mt-8 rounded-full text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-green-700 shadow-lg transition duration-300 transform hover:scale-105">
                Start Your DeFi Journey
              </button>
            </Link>
          </div>
        ) : (
          <div className="mt-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/sendEth" className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl hover:from-blue-800/50 hover:to-gray-800/50 transition duration-300 border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Send ETH</h3>
                <p className="text-gray-400">Transfer ETH securely to any address worldwide</p>
              </Link>

              <Link to="/loan" className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl hover:from-blue-800/50 hover:to-gray-800/50 transition duration-300 border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">DeFi Loans</h3>
                <p className="text-gray-400">Access instant crypto-backed loans with competitive rates</p>
              </Link>

              <Link to="/receiveEth" className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl hover:from-blue-800/50 hover:to-gray-800/50 transition duration-300 border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Receive ETH</h3>
                <p className="text-gray-400">Generate your unique QR code for easy deposits</p>
              </Link>

              <Link to="/balance" className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl hover:from-blue-800/50 hover:to-gray-800/50 transition duration-300 border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Balance</h3>
                <p className="text-gray-400">Track your assets and portfolio performance</p>
              </Link>

              <Link to="/transactions" className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl hover:from-blue-800/50 hover:to-gray-800/50 transition duration-300 border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Transaction History</h3>
                <p className="text-gray-400">View detailed history of all your transactions</p>
              </Link>

              <Link to="/settings" className="p-6 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-xl hover:from-blue-800/50 hover:to-gray-800/50 transition duration-300 border border-white/10">
                <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Settings</h3>
                <p className="text-gray-400">Customize your account preferences and security</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
