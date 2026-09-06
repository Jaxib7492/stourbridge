import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function FinancingPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(2000);
  const [term, setTerm] = useState(10);
  const [showCalculator, setShowCalculator] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const monthlyPayment = (amount / term).toFixed(2);
  const totalPayback = amount.toFixed(2);

  const scrollToCalculator = () => {
    setShowCalculator(true);
    setTimeout(() => {
      calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>0% Hearing Aid Finance Stourbridge | Interest-Free Monthly Payments</title>
        <meta name="description" content="Spread the cost of private digital hearing aids with 0% APR interest-free finance in Stourbridge. Instant online calculator, £0 deposit options & full aftercare." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/financing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900/40 via-black to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            0% APR Private Hearing Aid Financing in Stourbridge
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Spread the Cost of Advanced Digital Hearing Aids with Interest-Free Payment Plans
At Stourbridge Hearing Centre, we offer flexible, interest-free payment options to ensure world-class hearing technology is affordable. Purchase premium prescription hearing aids with zero hidden fees and lifetime clinical aftercare included.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={scrollToCalculator}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Try the Calculator
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
            >
              Request a Call Back
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      {showCalculator && (
        <section ref={calculatorRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Interactive Hearing Aid Monthly Repayment Estimator</h2>
                <p className="text-gray-300 mb-8">
                  Calculate interest-free monthly financing options for single or paired digital hearing instruments.
                </p>

                <div className="mb-8">
                  <label className="block text-white font-semibold mb-3">
                    Enter the amount you wish to finance*
                  </label>
                  <div className="flex items-center bg-gray-800 border border-gray-600 rounded-lg overflow-hidden">
                    <span className="px-4 text-gray-300 text-lg">£</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="flex-1 bg-transparent text-white text-lg px-4 py-3 outline-none"
                      min="300"
                      max="6000"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-white font-semibold mb-4">
                    Select the number of monthly payments
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {[3, 6, 10, 12].map((months) => (
                      <button
                        key={months}
                        onClick={() => setTerm(months)}
                        className={`py-4 rounded-lg font-semibold transition-all ${
                          term === months
                            ? 'bg-red-600 text-white border-2 border-red-500'
                            : 'bg-gray-800 text-gray-300 border border-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {months}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
                    <p className="text-gray-400 text-sm mb-2">Interest (APR)</p>
                    <p className="text-white text-2xl font-bold">
                      0.0% <span className="text-sm text-gray-400">(Fixed)</span>
                    </p>
                  </div>
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
                    <p className="text-gray-400 text-sm mb-2">Cost of credit</p>
                    <p className="text-white text-2xl font-bold">£0.00</p>
                  </div>
                </div>

                <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
                  <p className="text-gray-400 text-sm mb-2">Total to pay back</p>
                  <p className="text-white text-3xl font-bold">£{totalPayback}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-700 to-red-600 rounded-2xl p-8 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Your example monthly payment</h2>
                  <div className="text-center mb-8">
                    <p className="text-6xl font-bold mb-2">£{monthlyPayment}</p>
                    <p className="text-xl">per month for {term} months</p>
                  </div>

                  <div className="space-y-3 mb-10 text-sm">
                    <p>• 0.0% APR representative across short-term interest-free spreading options.</p>
                    <p>• Transparent clinical pricing with zero administration charges or hidden setup fees.</p>
                    <p>• Rapid credit decisions with instant soft-check eligibility assessments.</p>
                    <p>• Flexible application options available in-clinic at Stourbridge High Street or online.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-white text-red-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center"
                  >
                    Enquire about finance
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-red-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-800 transition-all text-center"
                  >
                    Book FREE hearing test
                  </button>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center">
              *Finance subject to status and affordability. Representative examples only. Terms & conditions apply.
            </p>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">How finance works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">1) Comprehensive Hearing Consultation</h3>
              <p className="text-gray-300">Select tailored prescription hearing instruments (Phonak, Oticon, Starkey, Resound) following a full diagnostic assessment.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">2) Custom Repayment Structuring</h3>
              <p className="text-gray-300">Tailor an interest-free finance schedule using our 0% APR payment terms (3, 6, 10, or 12 months).</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">3) Professional Fitting & Aftercare</h3>
              <p className="text-gray-300">Complete a rapid credit application and schedule your precision fitting with comprehensive lifetime clinical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Finance FAQs</h2>
          <div className="space-y-4">
            <details className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden group">
              <summary className="px-8 py-6 text-xl font-semibold text-white cursor-pointer hover:bg-gray-800 transition-colors list-none flex items-center justify-between">
                <span>Are there any hidden fees or interest charges on 0% APR hearing aid financing?</span>
                <span className="text-red-500 font-bold">↓</span>
              </summary>
              <div className="px-8 pb-6 text-gray-300 border-t border-gray-700 pt-4">
                No. On all 0% APR agreement terms (3, 6, 10, or 12 months), the interest rate is strictly 0.0% with a £0 cost of credit and zero arrangement fees.
              </div>
            </details>
            <details className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden group">
              <summary className="px-8 py-6 text-xl font-semibold text-white cursor-pointer hover:bg-gray-800 transition-colors list-none flex items-center justify-between">
                <span>What range of credit is available for private hearing aid purchases?</span>
                <span className="text-red-500 font-bold">↓</span>
              </summary>
              <div className="px-8 pb-6 text-gray-300 border-t border-gray-700 pt-4">
                Financing plans cover purchases between £300 and £6,000, allowing patients to spread payments across single devices, binaural pairs, and rechargeable custom products.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Apply for Interest-Free Hearing Aid Financing in Stourbridge</h2>
          <p className="text-xl text-white mb-10">Speak with our HCPC-registered audiology team to discuss 0% APR payment plans, arrange a device demonstration, or schedule your complimentary diagnostic hearing assessment.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg text-lg">
              Apply for finance
            </button>
            <button onClick={() => navigate('/contact')} className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg text-lg">
              Book Demonstration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}