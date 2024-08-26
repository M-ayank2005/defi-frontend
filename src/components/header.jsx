import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../pages/profile';


function Header({ onProfileClick } ) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    console.log("value chaneged")
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="bg-blue-900 text-white py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-0">
        <div className="flex items-center space-x-3">
          <img 
            src="https://imgs.search.brave.com/qA5RXJlMkZRuYCnUC0R2tfesmOcBEBeBn4czHH_zlww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSplRGhRRmNB/Rm9kM3dzU3gzX3Fx/QlhBLnBuZw" 
            alt="Workflow" 
            className="w-10 h-10 rounded-full border-2 border-white" 
          />
          <h1 className="text-3xl font-bold tracking-wide">DeFi Bank</h1>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-lg hover:text-gray-200 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/balance" className="text-lg hover:text-gray-200 transition duration-300">Balance</Link>
            </li>
            <li>
              <Link to="/sendEth" className="text-lg hover:text-gray-200 transition duration-300">SendEth</Link>
            </li>
            <li>
              <Link to="/receiveEth" className="text-lg hover:text-gray-200 transition duration-300">ReceiveEth</Link>
            </li>
            <li>
              <Link to="/transactions" className="text-lg hover:text-gray-200 transition duration-300">Prev Txns</Link>
            </li>
            <li>
              <Link to="/myPrivateKey" className="text-lg hover:text-gray-200 transition duration-300">MyPrivateKey</Link>
            </li>
    
            <li>
              <Link to="/contact" className="text-lg hover:text-gray-200 transition duration-300">ContactUs</Link>
            </li>
            <li>
            
            </li>
            <button
                className="px-5 ml-3 py-2 rounded-full text-sm font-bold text-white bg-green-500 hover:bg-red-600 shadow-md transition duration-300"
                onClick={toggleProfile}
              >
                Profile
              </button>
          </ul>
          
        </nav>
      </div>
      <div>
      {
        isProfileOpen && <Profile/ >
      }
      </div>
     
    </header>
  );
}

export default Header;
