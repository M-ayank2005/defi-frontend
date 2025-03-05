import React from 'react';

function Policies() {
  return (
    <div className="min-h-screen w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent">
            Our Policies
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Important information about how we operate
          </p>
        </div>

        <div className="grid gap-8">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
            <p className="text-gray-400">
              Our Privacy Policy explains how we collect, use, and protect your personal information. We are committed to safeguarding your privacy and ensuring that your information is secure.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
            <p className="text-gray-400">
              Our Terms of Service outline the rules and guidelines for using our platform. By using our services, you agree to comply with these terms and conditions.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="h-14 w-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions or concerns about our policies, please feel free to contact us at{' '}
              <a href="mailto:support@defibank.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                support@defibank.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies;
