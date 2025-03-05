import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! We will get back to you soon.');
      setSubmitted(true);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white px-4 py-16">
      <div className="w-full max-w-6xl">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/10 p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-gray-600 bg-clip-text text-transparent text-center">
            Get in Touch
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Our Office</h2>
                <p className="text-gray-300">
                  123 Blockchain Street<br />
                  Crypto Valley, CV 12345<br />
                  DeFi Land
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <a href="mailto:support@defibank.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    support@defibank.com
                  </a>
                  <a href="tel:+11234567890" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg bg-black/20 border border-white/10 placeholder-gray-400 text-white transition duration-300 focus:outline-none focus:border-blue-500"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg bg-black/20 border border-white/10 placeholder-gray-400 text-white transition duration-300 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-3 rounded-lg bg-black/20 border border-white/10 placeholder-gray-400 text-white transition duration-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    className="w-full p-3 rounded-lg bg-black/20 border border-white/10 placeholder-gray-400 text-white transition duration-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">We will get back to you as soon as possible.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
