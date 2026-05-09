import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { sendEmail, createBookingEmailHTML } from '../lib/email';

interface BookingFormProps {
  onSuccess?: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [datetime, setDatetime] = useState('');
  const [messageText, setMessageText] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setMessage('Please consent to be contacted about your enquiry.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const bookingData = {
        name,
        email,
        phone,
        service,
        preferred_datetime: datetime,
        message: messageText,
        status: 'pending'
      };

      const { error } = await supabase.from('bookings').insert([bookingData]);

      if (error) throw error;

      try {
        await sendEmail({
          to: ['hafizjazib6@gmail.com', 'stourbridgehearingcentre@gmail.com'],
          subject: `New Booking Request - ${service}`,
          html: createBookingEmailHTML(bookingData),
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      setMessage('Booking request submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setDatetime('');
      setMessageText('');
      setConsent(false);

      if (onSuccess) onSuccess();
    } catch (error) {
      setMessage('Error submitting booking. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white/90 placeholder:text-gray-500"
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white/90 placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white/90 placeholder:text-gray-500"
          />
        </div>
        <div>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white/90 text-gray-700"
          >
            <option value="">Service</option>
            <option value="Earwax Removal (Microsuction)">Earwax Removal (Microsuction)</option>
            <option value="Hearing Test">Hearing Test</option>
            <option value="Hearing Aid Fitting">Hearing Aid Fitting</option>
            <option value="Consultation">Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <input
          type="text"
          id="datetime"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          placeholder="Preferred date & time (e.g., Tue 5 Nov, morning)"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white/90 placeholder:text-gray-500"
        />
      </div>

      <div>
        <textarea
          id="message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Message (optional)"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white/90 placeholder:text-gray-500 resize-none"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 w-4 h-4 text-rose-500 border-gray-300 rounded focus:ring-rose-400"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I consent to be contacted about my enquiry and agree to the privacy policy.
        </label>
      </div>

      {message && (
        <div className={`p-3 rounded-lg text-sm ${message.includes('Error') || message.includes('consent') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Send Booking Request'}
      </button>
    </form>
  );
}
