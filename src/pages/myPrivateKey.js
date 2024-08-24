import React, { useState } from 'react';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyPrivateKey() {
  const [privateKey, setPrivateKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [userAddress, setUserAddress] = useState('');

  const handleShowKey = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setUserAddress(address);

        const message = 'Please sign this message to verify your identity.';
        const signature = await signer.signMessage(message);

        if (true) { 
          const key = "0xcf1c14adf07c0d942a73264a25943275880d91ffab079c0d52c82f810d456106"; 
          setPrivateKey(key);
          setShowKey(true);
        } else {
          toast.error('Signature verification failed. Please try again.');
        }
      } catch (error) {
        console.error('Error verifying identity', error);
        toast.error('Error verifying identity.');
      }
    } else {
      toast.error('MetaMask is not installed.');
    }
  };

  return (
    <div className="flex items-center pt-5 min-h-screen text-white">
      <div className="bg-gradient-to-br from-black to-gray-900 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6">Private Key</h1>
        {!showKey ? (
          <button 
            onClick={handleShowKey}
            className="px-8 py-4 mt-6 rounded-lg text-lg font-bold text-white bg-pink-500 hover:bg-red-800 shadow-lg transition duration-300"
          >
            Show Private Key
          </button>
        ) : (
          <>
            <p className="text-xl font-semibold text-gray-200 mb-4">Your Private Key:</p>
            <p className="text-sm mb-4 text-gray-300 break-all">{privateKey}</p>
            <p className="text-red-500">⚠️ Keep this private key secure!</p>
          </>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default MyPrivateKey;
