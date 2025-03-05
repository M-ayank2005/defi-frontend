import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="min-h-screen w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Explore our comprehensive suite of decentralized financial services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Send ETH</h2>
            <p className="text-gray-400 mb-6">Transfer Ethereum securely to any wallet address with low transaction fees.</p>
            <Link to="/sendEth" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Receive ETH</h2>
            <p className="text-gray-400 mb-6">Generate your unique QR code to receive Ethereum payments instantly.</p>
            <Link to="/receiveEth" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Check Balance</h2>
            <p className="text-gray-400 mb-6">Monitor your wallet balance and track your portfolio performance.</p>
            <Link to="/balance" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-pink-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Mint NFTs</h2>
            <p className="text-gray-400 mb-6">Create and mint your own unique NFTs on the blockchain.</p>
            <Link to="/mintNFT" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">View Transactions</h2>
            <p className="text-gray-400 mb-6">Track and monitor all your Ethereum transactions in real-time.</p>
            <Link to="/transactions" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">DeFi Loans</h2>
            <p className="text-gray-400 mb-6">Access instant crypto-backed loans with competitive interest rates.</p>
            <Link to="/loan" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
