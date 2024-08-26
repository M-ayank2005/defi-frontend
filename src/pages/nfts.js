import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

export default function Nfts() {
   
    const [details, setDetails] = useState([]);

    const fetchNFTs = async () => {
        const apiKey = 'nrUoIP_lDIa21atla2H5IEYaqW_Z5qlF';
        const owner = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
   
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        try {
            toast.info('Fetching NFTs...', { autoClose: 2000 });
            const response = await fetch('https://eth-mainnet.g.alchemy.com/nft/v3/nrUoIP_lDIa21atla2H5IEYaqW_Z5qlF/getNFTsForOwner?owner=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&withMetadata=true&pageSize=100', options)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const res = await response.json();
            setDetails(res.ownedNfts.slice(50,100));
            toast.success('NFTs fetched successfully!');
            return res;
        } catch (error) {
            console.error("Error fetching NFTs:", error);
         
          //  throw error;
        }
    };

    useEffect(() => {
        fetchNFTs();
    }, []);

    const handleExploreAndBuy = (url) => {
        window.open(url || 'https://opensea.io/');
        toast.info('Redirecting to NFT marketplace');
    };

    return (
        <div>
            <div className='text-center text-extrabold pt-5 text-5xl'>Buy NFTs</div>
            <div className='flex flex-row flex-wrap opacity-60 rounded-3xl w-full h-auto bg-black p-5 m-10 ml-5'>
                {details && details.map((detail, index) => (
                    <div key={index} className='w-72 h-96 border-2 m-4 p-2 rounded-2xl flex flex-col bg-gray-600'>
                        <div className='h-2/3 w-full rounded-t-2xl bg-blue-50'>
                            <img className='w-full h-full object-cover rounded-t-2xl' src={detail.collection.bannerImageUrl} alt="thumbnail" />
                        </div>
                        <div className='flex flex-col p-2 bg-gray-900 opacity-70 rounded-b-3xl text-white'>
                            <div className='truncate'>Token Id : {detail.tokenId}</div>
                            <div>Token Name : {detail.collection.name}</div>
                            <div>Token type : {detail.tokenType}</div>
                            <div>Balance : {detail.balance}</div>
                            <div className='truncate'> Address :{detail.contract.address}</div>
                        </div>
                        <div className='flex mt-1 justify-center'>
                            <button 
                                className='flex justify-center p-2 w-full bg-blue-600 rounded-3xl' 
                                onClick={() => handleExploreAndBuy(detail.collection.url)}
                            >
                                Explore and Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    )
}