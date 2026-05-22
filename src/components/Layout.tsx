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
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' }, // ONLY TOP NAV
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
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`font-medium text-sm transition relative ${
                    location.pathname === item.path
                      ? 'text-rose-600'
                      : 'text-gray-700 hover:text-rose-600'
                  }`}
                >
                  {item.label}

                  {location.pathname === item.path && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-rose-600 rounded-full"></span>
                  )}
                </Link>
              ))}

              {/* BOOK BUTTON */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </Link>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-2xl text-gray-700"
            >
              ☰
            </button>

          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 space-y-1 pb-4 border-t pt-3 bg-white rounded-2xl shadow-xl">

              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-lg transition ${
                    location.pathname === item.path
                      ? 'bg-rose-50 text-rose-600 font-semibold'
                      : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* SERVICES */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
                >
                  Service Locations
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-2 mt-2 border-l pl-3 space-y-2">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={handleNavClick}
                        className="block text-sm text-gray-600 hover:text-rose-600 py-1"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/faq"
                onClick={handleNavClick}
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg"
              >
                FAQ
              </Link>

              <Link
                to="/about"
                onClick={handleNavClick}
                className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={handleNavClick}
                className="block mx-4 mt-3 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl text-center font-semibold shadow-lg"
              >
                Contact
              </Link>

            </div>
          )}
        </div>
      </nav>

      {/* FLOATING RIGHT SIDE MENU (NO BLOG HERE) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col">

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

        {servicesOpen && (
          <div className="bg-white shadow-2xl max-h-96 overflow-y-auto w-64">
            {servicesDropdown.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block px-4 py-3 text-sm text-gray-700 border-b hover:bg-rose-50 hover:text-rose-600 transition"
                onClick={handleNavClick}
              >
                {service.label}
              </Link>
            ))}
          </div>
        )}

        <Link
          to="/faq"
          className="bg-white text-gray-800 px-5 py-4 text-sm font-semibold shadow-2xl border-t hover:bg-rose-600 hover:text-white transition"
        >
          FAQ
        </Link>

        <Link
          to="/contact"
          className="bg-black text-white px-5 py-4 text-sm font-semibold shadow-2xl border-t hover:bg-rose-600 transition"
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