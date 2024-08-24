import React from 'react';

function Policies() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6">
      <div className="bg-black opacity-70 rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-white">Policies</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Privacy Policy</h2>
          <p className="text-lg leading-relaxed text-white">
            Our Privacy Policy explains how we collect, use, and protect your personal information. We are committed to safeguarding your privacy and ensuring that your information is secure.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Terms of Service</h2>
          <p className="text-lg leading-relaxed text-white">
            Our Terms of Service outline the rules and guidelines for using our platform. By using our services, you agree to comply with these terms and conditions.
          </p>
        </section>
        
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
          <p className="text-lg leading-relaxed text-white">
            If you have any questions or concerns about our policies, please feel free to contact us at <a href="mailto:support@defibank.com" className="text-blue-500 hover:underline">support@defibank.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Policies;
