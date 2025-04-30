import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-800">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
              placeholder="John Doe"
              />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
              placeholder="you@example.com"
              />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
              placeholder="Write your message..."
              ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer />
              </>
  );
};

export default Contact;