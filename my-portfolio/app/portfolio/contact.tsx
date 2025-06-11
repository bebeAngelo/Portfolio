"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form Submitted:', formData);
  setSubmitted(true);
  setFormData({ name: '', email: '', message: '' });
  setTimeout(() => setSubmitted(false), 5000);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                @
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400">gullejhonpaul@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                in
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-gray-400">www.linkedin.com/in/jhon-paul-gulle</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                gh
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-gray-400">https://github.com/bebeAngelo</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Send me a message</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Id love to hear about your project
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1 text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-1 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-1 text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-400 text-sm mt-2">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
