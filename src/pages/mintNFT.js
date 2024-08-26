import React, { useState } from 'react';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleNFTABI from '../abis/SimpleNFT.json';

function MintNFT() {
  const [recipient, setRecipient] = useState('');
  const [tokenURI, setTokenURI] = useState('');
  const [mintType, setMintType] = useState('addressTokenURI');
  const [mintedNFT, setMintedNFT] = useState(null);

  const contractAddress = '0xe47fc10cc5994b9794b5bd8bda1094e2ca9dff14'; 

  const mintNFT = async () => {
    if (!recipient) {
      toast.error('Please enter a recipient address.');
      return;
    }

    try {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, SimpleNFTABI, signer);

        let tx;
        if (mintType === 'addressTokenURI') {
          if (!tokenURI) {
            toast.error('Please enter a token URI.');
            return;
          }

          tx = await nftContract.mintToken(0, recipient, tokenURI); // Mint with address and tokenURI
        } else if (mintType === 'addr') {
          tx = await nftContract.mintToken(1, recipient, ''); // Mint without tokenURI
        }

        await tx.wait();

       
        const tokenIdBigInt = await nftContract.nextTokenId();
        const tokenId = Number(tokenIdBigInt) - 1;

       
        const newNFT = { tokenId, tokenURI, recipient, txHash: tx.hash };
        setMintedNFT(newNFT);

      
        toast.success(`NFT minted successfully! Transaction Hash: ${tx.hash}`);
      } else {
        toast.error('MetaMask is not installed.');
      }
    } catch (error) {
      console.error('Error minting NFT:', error);
      toast.error('Failed to mint NFT');
    }
  };

  return (
    <div className="mint-nft-container w-3/5 my-8 rounded-2xl items-center opacity-60 bg-black p-10 ">
      <ToastContainer />
      <h2 className="text-2xl text-center font-bold mb-4">Mint NFT</h2>
      <div className="mb-4">
        <label className="block mb-2">Recipient Address:</label>
        <input
          type="text"
          className="w-full p-2 border rounded text-black"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Mint Type:</label>
        <select
          className="w-full p-2 border rounded text-black"
          value={mintType}
          onChange={(e) => setMintType(e.target.value)}
        >
          <option value="addressTokenURI">Mint with Address and Token URI</option>
          <option value="addr">Mint with Address Only</option>
        </select>
      </div>
      {mintType === 'addressTokenURI' && (
        <div className="mb-4">
          <label className="block mb-2">Token URI:</label>
          <input
            type="text"
            className="w-full p-2 border rounded text-black"
            value={tokenURI}
            onChange={(e) => setTokenURI(e.target.value)}
          />
        </div>
      )}
      <div className=' flex justify-center items-center'>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={mintNFT} 
      >
        Mint NFT
      </button>
      </div>
      

      {mintedNFT && (
        <div className="mt-6 mb-5">
          <h3 className="text-xl font-bold mb-4">Minted NFT Details:</h3>
          <div className="p-4 border rounded">
            <p><strong>Token ID:</strong> {mintedNFT.tokenId}</p>
            <p><strong>Recipient:</strong> {mintedNFT.recipient}</p>
            <p><strong>Transaction Hash:</strong> {mintedNFT.txHash}</p>
            {mintedNFT.tokenURI && (
              <p>
                <strong>Token URI:</strong> <a href={mintedNFT.tokenURI} target="_blank" rel="noopener noreferrer">{mintedNFT.tokenURI}</a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MintNFT;
