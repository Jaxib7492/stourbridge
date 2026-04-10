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
    { label: 'Our Services', path: '#' },
    { label: 'FAQ', path: '/faq' },
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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
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
                    to={item.path === '#' ? '#' : item.path}
                    onClick={(e) => {
                      if (item.label === 'Our Services') {
                        e.preventDefault();
                        setServicesOpen(!servicesOpen);
                      }
                    }}
                    className={`flex items-center gap-1 font-medium text-sm transition ${
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

                  {item.label === 'Our Services' && (
                    <div
                      className={`absolute left-0 mt-2 w-72 max-h-96 overflow-y-auto bg-white shadow-lg rounded-lg transition-all duration-300 z-50 ${
                        servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                          onClick={handleNavClick}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              ))}

              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold"
              >
                Book Now
              </Link>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              ☰
            </button>

          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2 pb-4">

              {menuItems.map((item) => (
                <div key={item.label}>

                  <Link
                    to={item.path === '#' ? '#' : item.path}
                    onClick={(e) => {
                      if (item.label === 'Our Services') {
                        e.preventDefault();
                        setServicesOpen(!servicesOpen);
                      } else {
                        handleNavClick();
                      }
                    }}
                    className="block px-4 py-2 text-gray-700 hover:text-rose-600"
                  >
                    {item.label}
                  </Link>

                  {item.label === 'Our Services' && servicesOpen && (
                    <div className="ml-4 flex flex-col">

                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="px-4 py-2 text-sm text-gray-600 hover:text-rose-600"
                          onClick={handleNavClick}
                        >
                          {service.label}
                        </Link>
                      ))}

                    </div>
                  )}

                </div>
              ))}

              <Link
                to="/contact"
                onClick={handleNavClick}
                className="block px-4 py-2 bg-rose-600 text-white rounded-lg text-center"
              >
                Book Now
              </Link>

            </div>
          )}

        </div>
      </nav>

      <main className="pt-16">{children}</main>

      <Footer />
    </>
  );
}