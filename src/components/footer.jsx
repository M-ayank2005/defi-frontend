import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">DeFi Bank</h2>
          <p className="text-sm text-gray-500 mt-2">Empowering decentralized finance.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mb-6 md:mb-0">
          <Link to="/nfts" className="text-gray-400 hover:text-white transition duration-300">
            NFTs
          </Link>
        <Link to="/mintNFT" className="text-gray-400 hover:text-white transition duration-300">
            Mint_NFTs
          </Link>
        <Link to="/policies" className="text-gray-400 hover:text-white transition duration-300">
            Policies
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-white transition duration-300">
            Services
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
            About
          </Link>

          <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
            Contact Us
          </Link>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.5.59-2.32.7a4.25 4.25 0 0 0 1.88-2.37 8.35 8.35 0 0 1-2.69 1.03 4.25 4.25 0 0 0-7.27 3.87 12.1 12.1 0 0 1-8.75-4.45 4.25 4.25 0 0 0 1.31 5.67 4.24 4.24 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.4 4.16 4.25 4.25 0 0 1-1.91.07 4.25 4.25 0 0 0 3.97 2.95A8.55 8.55 0 0 1 2 19.51 12.08 12.08 0 0 0 8.29 21a12.05 12.05 0 0 0 12.14-12.64c.83-.6 1.55-1.34 2.12-2.18z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
           <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.352C0 23.407.594 24 1.325 24h11.495V14.706h-3.125v-3.62h3.125V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.62h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.675 0z"/>
         </svg>
             </a>
             <a href="#" className="text-gray-400 hover:text-white transition duration-300">
        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 0C8.74 0 8.332.014 7.053.072 5.775.13 4.62.34 3.573.756c-1.045.417-1.947.98-2.855 1.888A7.92 7.92 0 0 0 .756 3.573C.34 4.62.13 5.775.072 7.053.014 8.332 0 8.74 0 12s.014 3.668.072 4.947c.058 1.278.268 2.433.684 3.48.417 1.045.98 1.947 1.888 2.855a7.92 7.92 0 0 0 1.717 1.717c1.045.417 2.201.626 3.48.684C8.332 23.986 8.74 24 12 24s3.668-.014 4.947-.072c1.278-.058 2.433-.268 3.48-.684a7.92 7.92 0 0 0 1.717-1.717c.417-1.045.626-2.201.684-3.48.058-1.278.072-1.686.072-4.947s-.014-3.668-.072-4.947c-.058-1.278-.268-2.433-.684-3.48a7.92 7.92 0 0 0-1.717-1.717c-1.045-.417-2.201-.626-3.48-.684C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 0 1 6.162 6.162A6.162 6.162 0 0 1 12 18.162 6.162 6.162 0 0 1 5.838 12 6.162 6.162 0 0 1 12 5.838zm0 1.485a4.677 4.677 0 0 0-4.677 4.677A4.677 4.677 0 0 0 12 16.677a4.677 4.677 0 0 0 4.677-4.677A4.677 4.677 0 0 0 12 7.323zM18.406 3.594a1.334 1.334 0 1 0 0 2.668 1.334 1.334 0 0 0 0-2.668z"/>
          </svg>
               </a>

          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.25 3H4.75A1.75 1.75 0 0 0 3 4.75v14.5A1.75 1.75 0 0 0 4.75 21h14.5A1.75 1.75 0 0 0 21 19.25V4.75A1.75 1.75 0 0 0 19.25 3zM8.91 15.19H6.62v-6.4h2.29v6.4zm-1.15-7.43a1.33 1.33 0 1 1 0-2.66 1.33 1.33 0 0 1 0 2.66zm9.27 7.43h-2.29v-3.3c0-.79-.28-1.34-.99-1.34-.54 0-.85.36-1 .7-.05.13-.07.32-.07.51v3.43h-2.28s.03-5.58 0-6.4h2.28v.91c.3-.47.83-1.14 2.02-1.14 1.48 0 2.58.97 2.58 3.05v3.58z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; 2024 DeFi Bank. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
