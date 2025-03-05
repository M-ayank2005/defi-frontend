import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../pages/profile';

function Header({ onProfileClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white py-3 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://imgs.search.brave.com/qA5RXJlMkZRuYCnUC0R2tfesmOcBEBeBn4czHH_zlww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSplRGhRRmNB/Rm9kM3dzU3gzX3Fx/QlhBLnBuZw" 
              alt="Workflow" 
              className="w-10 h-10 rounded-full border-2 border-white" 
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">DeFi Bank</h1>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
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
                <button
                  className="px-5 py-2 rounded-full text-sm font-bold text-white bg-green-500 hover:bg-red-600 shadow-md transition duration-300"
                  onClick={toggleProfile}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" className="block text-lg hover:text-gray-200 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/balance" className="block text-lg hover:text-gray-200 transition duration-300">Balance</Link>
              </li>
              <li>
                <Link to="/sendEth" className="block text-lg hover:text-gray-200 transition duration-300">SendEth</Link>
              </li>
              <li>
                <Link to="/receiveEth" className="block text-lg hover:text-gray-200 transition duration-300">ReceiveEth</Link>
              </li>
              <li>
                <Link to="/transactions" className="block text-lg hover:text-gray-200 transition duration-300">Prev Txns</Link>
              </li>
              <li>
                <button
                  className="w-full px-5 py-2 rounded-full text-sm font-bold text-white bg-green-500 hover:bg-red-600 shadow-md transition duration-300"
                  onClick={toggleProfile}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {isProfileOpen && <Profile />}
    </header>
  );
}

export default Header;
