import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Earwax Removal', path: '/earwax-removal' },
    { label: 'Hearing Aids', path: '/hearing-aids' },
    { label: 'Aftercare', path: '/aftercare' },
    { label: 'Financing', path: '/financing' },
    { label: 'Home Visits', path: '/home-visits' },
  ];

  const servicesDropdown = [
    { label: 'Birmingham', path: '/hearing-aids-birmingham' },
    { label: 'Dudley', path: '/hearing-aids-dudley' },
    { label: 'Halesowen', path: '/hearing-aids-halesowen' },
    { label: 'Wolverhampton', path: '/hearing-aids-wolverhampton' },
    { label: 'Kidderminster', path: '/hearing-aids-kidderminster' },
    { label: 'Bromsgrove', path: '/hearing-aids-bromsgrove' },
    { label: 'Redditch', path: '/hearing-aids-redditch' },
    { label: 'Oldbury', path: '/hearing-aids-oldbury' },
    { label: 'Kingswinford', path: '/hearing-aids-kingswinford' },
    { label: 'Brierley Hill', path: '/hearing-aids-brierley-hill' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

          <div className="flex justify-between items-center gap-2">

            {/* LOGO */}
            <Link
              to="/"
              onClick={handleNavClick}
              className="flex items-center flex-shrink-0 bg-white p-2 rounded-lg"
            >
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-6">

              {menuItems.map((item) => (
                <div key={item.label} className="relative">

                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`flex items-center gap-1 font-medium text-sm transition ${
                      location.pathname === item.path
                        ? 'text-rose-600'
                        : 'text-gray-700 hover:text-rose-600'
                    }`}
                  >
                    {item.label}
                  </Link>

                </div>
              ))}

              {/* BOOK BUTTON */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-2xl"
            >
              ☰
            </button>

          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 space-y-1 pb-4 border-t pt-3">

              {menuItems.map((item) => (
                <div key={item.label}>

                  <div
                    className="flex justify-between items-center px-4 py-2"
                    onClick={handleNavClick}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-rose-600"
                    >
                      {item.label}
                    </Link>
                  </div>

                </div>
              ))}

              {/* MOBILE BOOK BUTTON */}
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="block mx-4 mt-3 px-4 py-3 bg-rose-600 text-white rounded-lg text-center font-semibold"
              >
                Book Now
              </Link>

            </div>
          )}

        </div>
      </nav>

      {/* FLOATING RIGHT SIDE MENU */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col">

        {/* SERVICE LOCATIONS */}
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="bg-rose-600 text-white px-5 py-4 text-sm font-semibold shadow-2xl hover:bg-rose-700 transition-all duration-300 flex items-center gap-2"
        >
          Service Locations

          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              servicesOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* DROPDOWN */}
        {servicesOpen && (
          <div className="bg-white shadow-2xl max-h-96 overflow-y-auto w-64">

            {servicesDropdown.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block px-4 py-3 text-sm text-gray-700 border-b hover:bg-rose-50 hover:text-rose-600 transition-all duration-300"
                onClick={handleNavClick}
              >
                {service.label}
              </Link>
            ))}

          </div>
        )}

        {/* FAQ */}
        <Link
          to="/faq"
          className="bg-white text-gray-800 px-5 py-4 text-sm font-semibold shadow-2xl border-t border-gray-200 hover:bg-rose-600 hover:text-white transition-all duration-300"
        >
          FAQ
        </Link>

        {/* ABOUT US */}
        <Link
          to="/about"
          className="bg-white text-gray-800 px-5 py-4 text-sm font-semibold shadow-2xl border-t border-gray-200 hover:bg-rose-600 hover:text-white transition-all duration-300"
        >
          About Us
        </Link>

        {/* CONTACT */}
        <Link
          to="/contact"
          className="bg-black text-white px-5 py-4 text-sm font-semibold shadow-2xl border-t border-white/10 hover:bg-rose-600 transition-all duration-300"
        >
          Contact
        </Link>

      </div>

      {/* MAIN CONTENT */}
      <main className="pt-16">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}