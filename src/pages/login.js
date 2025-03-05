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
    <div className="min-h-screen flex items-center justify-center  text-white px-4">
      <div className="p-8 sm:p-12 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] w-full max-w-md border border-gray-700">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Welcome Back
          </h1>
          <p className="text-gray-300 text-lg">
            Connect your MetaMask wallet to access your DeFi account
          </p>
        </div>

        <div className="space-y-8">
          {isConnected ? (
            <div className="space-y-6">
              <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                <p className="text-sm text-gray-400 mb-1">Connected Account</p>
                <p className="text-green-400 font-mono break-all">
                  {account}
                </p>
              </div>
              <button
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                onClick={handleMetaMaskDisconnect}
              >
                Disconnect Wallet
              </button>
            </div>
          ) : (
            <button
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-3"
              onClick={handleMetaMaskConnect}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" 
                alt="metamask"
                className="w-6 h-6"
              />
              <span>Connect with MetaMask</span>
            </button>
          )}

          <div className="text-center text-sm text-gray-400">
            <p>By connecting your wallet, you agree to our</p>
            <div className="mt-1 space-x-2">
              <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
              <span>&</span>
              <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
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
    </div>
  );
}

export default SignIn;
