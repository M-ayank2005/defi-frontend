import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast.success('Message sent successfully!');
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center bg-black opacity-60 my-6 rounded-2xl justify-center min-h-screen text-white p-4">
      <div className=" rounded-lg shadow-xl p-8 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Contact Us
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg text-lg font-bold text-white bg-green-700 hover:bg-green-800 shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-lg mt-6 animate__animated animate__fadeIn animate__delay-3s">
            Thank you for your message! We will get back to you soon.
          </p>
        )}

        <div className="mt-8">
          <p className="text-xl font-semibold mb-2 animate__animated animate__fadeIn animate__delay-4s">
            Additional Contact Information
          </p>
          <p className="text-md mb-2 animate__animated animate__fadeIn animate__delay-5s">
            Email: <a href="mailto:support@defibank.com" className="text-blue-400 hover:underline">support@defibank.com</a>
          </p>
          <p className="text-md animate__animated animate__fadeIn animate__delay-6s">
            Twitter: <a href="https://twitter.com/defibank" className="text-blue-400 hover:underline">@defibank</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
