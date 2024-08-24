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
    <div className="w-full overflow-hidden my-8">
      <div className="whitespace-nowrap inline-block animate-marquee text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
        Let's use a decentralized banking system
      </div>
      <div className="text-center mt-8 p-5">
        <p className="text-gray-400 text-lg">
          DeFi Bank is a decentralized banking system that allows you to manage your assets without a central authority.
        </p>
        {!account && (
          <Link to="/signin">
            <button className="px-6 py-3 mt-10 rounded-full text-lg font-bold text-white bg-blue-600 hover:bg-blue-800 shadow-md transition duration-300">
              Get Started
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
