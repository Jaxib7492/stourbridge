import React, { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 h-full flex flex-col">
      <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>

      {status === 'success' && (
        <div className="mb-4 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
          Your message has been sent successfully.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
        <input type="hidden" name="access_key" value="d78d8bd2-a661-44ef-a263-806f9a0777b8" />

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder="Full Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
          <textarea
            name="message"
            className="w-full flex-1 px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
