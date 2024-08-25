import React, { useState } from 'react';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyPrivateKey() {
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


        const recoveredAddress = ethers.verifyMessage(message, signature);
        if (recoveredAddress === address) {
          toast.success('Identity verified successfully.');
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
        <h1 className="text-4xl font-extrabold mb-6">Verify Identity</h1>
        {!showKey ? (
          <button 
            onClick={handleShowKey}
            className="px-8 py-4 mt-6 rounded-lg text-lg font-bold text-white bg-pink-500 hover:bg-red-800 shadow-lg transition duration-300"
          >
            Verify Identity
          </button>
        ) : (
          <>
            <p className="text-xl font-semibold text-gray-200 mb-4">Identity Verified!</p>
            <p className="text-sm mb-4 text-gray-300 break-all">Address: {userAddress}</p>
            <p className="text-red-500">⚠️ Your identity has been confirmed.</p>
          </>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default MyPrivateKey;
