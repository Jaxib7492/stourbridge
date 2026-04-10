// Layout.tsx
import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scrolling for header shadow effect
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
    { label: 'Our Services', path: '#' }, // dropdown
    { label: 'FAQ', path: '/faq' }, // NEW
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
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

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center gap-2">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group cursor-pointer flex-shrink-0 bg-white p-2 rounded-lg"
            >
              <img
                src="/Logo.png"
                alt="Stourbridge Hearing Centre"
                className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path === '#' ? '#' : item.path}
                    onClick={(e) => item.path === '#' && e.preventDefault()}
                    className={`flex items-center gap-1 transition-all duration-300 font-medium hover:scale-105 text-sm whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-rose-600'
                        : 'text-gray-700 hover:text-rose-600'
                    }`}
                  >
                    {item.label}
                    {item.label === 'Our Services' && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>

                  {/* Dropdown for Our Services */}
                  {item.label === 'Our Services' && (
                    <div className="absolute left-0 mt-2 w-72 max-h-96 overflow-y-auto bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm whitespace-nowrap"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path === '#' ? '#' : item.path}
                    onClick={(e) => item.path === '#' && e.preventDefault()}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:text-rose-600'
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Mobile Dropdown */}
                  {item.label === 'Our Services' && (
                    <div className="ml-4 flex flex-col gap-1">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 hover:text-rose-600"
                        >
                          <ChevronDown className="w-3 h-3" />
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="block px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}