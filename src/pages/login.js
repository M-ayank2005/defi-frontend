import React, { useState } from 'react';
import { BrowserProvider } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const handleMetaMaskConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        console.log("Account:", await signer.getAddress());

    
        toast.success(`Connected to ${accounts[0]}`);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
        toast.error("Failed to connect to MetaMask");
      }
    } else {
      toast.error('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  const handleMetaMaskDisconnect = () => {
    setAccount(null);
    setIsConnected(false);
    localStorage.removeItem('connectedAccount');
    toast.info('You have been disconnected.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="p-8 sm:p-12 bg-gray-900 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Sign In / Register
        </h1>
        <p className="text-gray-400 mb-8">Connect your MetaMask wallet to sign in or register.</p>
        {isConnected ? (
          <div>
            <p className="text-green-400 font-semibold mb-6">
              Connected to {account}
            </p>
            <button
              className="w-full py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-800 transition duration-300 ease-in-out"
              onClick={handleMetaMaskDisconnect}
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-lg font-bold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg"
            onClick={handleMetaMaskConnect}
          >
            Connect MetaMask
          </button>
        )}
        {/* Toast container to show toast messages */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default SignIn;
