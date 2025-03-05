import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white px-4 py-16">
      <div className="w-full max-w-6xl">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/10 p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent text-center">
            About DeFi Bank
          </h1>

          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to DeFi Bank, the future of decentralized finance. We are dedicated to providing a secure and seamless banking experience through blockchain technology.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to revolutionize the financial industry by removing intermediaries, reducing costs, and increasing transparency. With DeFi Bank, you have complete control over your assets, all while enjoying the benefits of cutting-edge technology and smart contracts.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Values</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At DeFi Bank, we believe in empowering individuals and fostering financial inclusivity. Our platform offers a range of DeFi services, including lending, borrowing, and yield farming, all built on a foundation of trust and innovation.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Join Our Journey</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join us in shaping the future of finance. Embrace the power of decentralization and experience a new era of banking with DeFi Bank.
              </p>
            </div>

            <div className="mt-12 backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-center text-teal-400 mb-6">Connect With Us</h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="mailto:support@defibank.com" 
                   className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@defibank.com
                </a>

                <a href="https://twitter.com/defibank" 
                   className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  @defibank
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
