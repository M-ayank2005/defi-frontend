import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Balance from './pages/balance';
import MyPrivateKey from './pages/myPrivateKey';
import Profile from './pages/profile';
import SendEth from './pages/sendEth';
import About from './pages/about';
import ContactUs from './pages/contactus';
import SignIn from './pages/login';
import Transactions from './pages/transactions';
import ReceiveEth from './pages/receiveEth';
import MintNFT from './pages/mintNFT';
import Policies from './pages/policies';
import Services from './pages/services';
import { BrowserProvider, Transaction } from 'ethers';
import { useState } from 'react';


function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <Header  onProfileClick={toggleProfile} />
        <div className="flex-grow container mx-auto flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/sendEth" element={<SendEth />} />
            <Route path="/myPrivateKey" element={<MyPrivateKey />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/receiveEth" element={<ReceiveEth />} />
            <Route path="/mintNFT" element={<MintNFT />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/services" element={<Services />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
