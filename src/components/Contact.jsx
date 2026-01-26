import { portfolioData } from '../data/portfolio';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${portfolioData.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-12 max-w-2xl">Reach out for opportunities or just to say hello.</p>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-2.5 bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Email</p>
              <a href={`mailto:${portfolioData.email}`} className="text-gray-900 hover:text-gray-600 transition break-all">
                {portfolioData.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Phone</p>
              <a href={`tel:${portfolioData.phone}`} className="text-gray-900 hover:text-gray-600 transition">
                {portfolioData.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Location</p>
              <p className="text-gray-900">{portfolioData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
