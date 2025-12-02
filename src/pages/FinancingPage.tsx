import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-black">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900/40 via-black to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Flexible Finance — 0% APR Available
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Spread the cost of your private hearing aids with simple monthly payments and lifetime aftercare included.
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

      {showCalculator && (
        <section ref={calculatorRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Finance calculator</h2>
                <p className="text-gray-300 mb-8">
                  Enter an amount and choose a term to see example monthly payments.
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

              <div className="bg-gradient-to-br from-red-700 to-red-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Your example monthly payment</h2>
                <div className="text-center mb-8">
                  <p className="text-6xl font-bold mb-2">£{monthlyPayment}</p>
                  <p className="text-xl">per month for {term} months</p>
                </div>

                <div className="space-y-3 mb-10 text-sm">
                  <p>• Representative 0% APR on selected plans</p>
                  <p>• No setup fees | No hidden costs</p>
                  <p>• Instant decision in most cases</p>
                  <p>• Apply online or in-clinic</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-white text-red-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                  >
                    Enquire about finance
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-red-900 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-800 transition-all"
                  >
                    Book FREE hearing test
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all"
                  >
                    Book a Free Hearing Aids Demonstration
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">How finance works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">1) Choose your aids</h3>
              <p className="text-gray-300">
                Pick from leading brands and styles — RIC, ITE, CIC and more.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">2) Select a plan</h3>
              <p className="text-gray-300">
                Use the calculator to see payments at 0% APR on selected terms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">3) Apply & get fitted</h3>
              <p className="text-gray-300">
                Quick application and fitting with lifetime aftercare included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Finance FAQs</h2>
          <div className="space-y-4">
            <details className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden group">
              <summary className="px-8 py-6 text-xl font-semibold text-white cursor-pointer hover:bg-gray-800 transition-colors list-none flex items-center justify-between">
                <span>▼ Is the 0% APR truly interest-free?</span>
              </summary>
              <div className="px-8 pb-6 text-gray-300">
                Yes — on selected terms (e.g. 3, 6, 10 or 12 months) there's no interest charged and your cost of credit is £0.
              </div>
            </details>

            <details className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden group">
              <summary className="px-8 py-6 text-xl font-semibold text-white cursor-pointer hover:bg-gray-800 transition-colors list-none flex items-center justify-between">
                <span>▼ What amounts can I finance?</span>
              </summary>
              <div className="px-8 pb-6 text-gray-300">
                Typical finance ranges from £300–£6,000. Use the calculator to try an example, or contact us to discuss other options.
              </div>
            </details>

            <details className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden group">
              <summary className="px-8 py-6 text-xl font-semibold text-white cursor-pointer hover:bg-gray-800 transition-colors list-none flex items-center justify-between">
                <span>▼ How do I apply?</span>
              </summary>
              <div className="px-8 pb-6 text-gray-300">
                Click "Enquire about finance" and we'll guide you through a quick application online or in-clinic.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to make hearing easier?
          </h2>
          <p className="text-xl text-white mb-10">
            Talk to an audiologist today about interest-free options and the best aids for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Apply for finance
            </button>
            <button
              onClick={scrollToCalculator}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-4 rounded-lg font-semibold transition-all text-lg"
            >
              Recalculate
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg text-lg"
            >
              Book a Free Hearing Aids Demonstration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
