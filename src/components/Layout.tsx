import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);

    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPosition), behavior: 'auto' });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Earwax Removal', path: '/earwax-removal' },
    { label: 'Hearing Aids', path: '/hearing-aids' },
    { label: 'Aftercare', path: '/aftercare' },
    { label: 'Financing', path: '/financing' },
    { label: 'Home Visits', path: '/home-visits' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center gap-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center group cursor-pointer flex-shrink-0 bg-white p-2 rounded-lg"
            >
              <img
                src="/Logo.png"
                alt="Stourbridge Hearing Centre"
                className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`transition-all duration-300 font-medium hover:scale-105 inline-block text-sm whitespace-nowrap ${
                    location.pathname === item.path
                      ? 'text-rose-600'
                      : 'text-gray-700 hover:text-rose-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm whitespace-nowrap"
              >
                Book Now
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:text-rose-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/contact')}
                className="block w-full text-left px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </nav>
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
