import React from 'react';

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <div className="bg-black opacity-60 rounded-lg shadow-xl p-8 max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-8  text-white bg-clip-text ">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-8 animate-colorChange animate__animated animate__fadeIn animate__delay-2s">
          Welcome to DeFi Bank, the future of decentralized finance. We are dedicated to providing a secure and seamless banking experience through blockchain technology.
        </p>
        
        <p className="text-lg leading-relaxed mb-8 animate-colorChange animate__animated animate__fadeIn animate__delay-3s">
          Our mission is to revolutionize the financial industry by removing intermediaries, reducing costs, and increasing transparency. With DeFi Bank, you have complete control over your assets, all while enjoying the benefits of cutting-edge technology and smart contracts.
        </p>
        <p className="text-lg leading-relaxed mb-8 animate-colorChange animate__animated animate__fadeIn animate__delay-4s">
          At DeFi Bank, we believe in empowering individuals and fostering financial inclusivity. Our platform offers a range of DeFi services, including lending, borrowing, and yield farming, all built on a foundation of trust and innovation.
        </p>
        <p className="text-lg leading-relaxed mb-8 animate-colorChange animate__animated animate__fadeIn animate__delay-5s">
          Join us in shaping the future of finance. Embrace the power of decentralization and experience a new era of banking with DeFi Bank.
        </p>
        <div className="mt-12">
          <p className="text-2xl font-semibold mb-4 animate-colorChange animate__animated animate__fadeIn animate__delay-6s text-teal-400">
            Contact Us
          </p>
          <p className="text-md mb-4 animate-colorChange animate__animated animate__fadeIn animate__delay-7s">
            Email: <a href="mailto:support@defibank.com" className="text-white hover:underline">support@defibank.com</a>
          </p>
          <p className="text-md animate-colorChange animate__animated animate__fadeIn animate__delay-8s">
            Twitter: <a href="https://twitter.com/defibank" className="text-white hover:underline">@defibank</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
