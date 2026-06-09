import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import {
  ChevronDown,
  Phone,
  CheckCircle2,
} from 'lucide-react';
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

  // Prevents background scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Earwax Removal', path: '/earwax-removal' },
    { label: 'Hearing Aids', path: '/hearing-aids' },
    { label: 'Aftercare', path: '/aftercare' },
    { label: 'Financing', path: '/financing' },
    { label: 'Home Visits', path: '/home-visits' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
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
      {/* TOP PROMOTION BAR */}
      <div className="fixed top-0 left-0 w-full z-[60]">

        {/* DESKTOP VERSION */}
        <div className="hidden md:flex h-[60px]">

          {/* FREE EAR CHECK */}
          <div className="flex-1 bg-green-700 text-white px-6 flex items-center justify-between shadow-md">

            <div className="flex items-center gap-3">
              <div className="bg-white/15 p-2 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-base font-bold uppercase tracking-wide leading-none">
                  FREE EAR CHECK SERVICE
                </h3>

                <p className="text-xs text-green-100 mt-1">
                  Quick, professional and no obligation.
                </p>
              </div>
            </div>

            <div className="bg-white text-green-700 font-bold px-4 py-1.5 rounded-full text-xs shadow-md">
              FREE
            </div>
          </div>

          {/* CALL NOW */}
          <a
            href="tel:01384476306"
            className="flex-1 bg-red-600 text-white px-6 flex items-center justify-between shadow-md hover:bg-red-700 transition"
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/15 p-2 rounded-full">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-base font-bold uppercase tracking-wide leading-none">
                  CALL NOW
                </h3>

                <p className="text-xs text-red-100 mt-1">
                  Speak to our friendly team today!
                </p>
              </div>
            </div>

            <div className="bg-white text-red-600 font-bold px-4 py-1.5 rounded-full text-sm shadow-md">
              01384 476 306
            </div>
          </a>

        </div>

        {/* MOBILE VERSION */}
        <div className="md:hidden px-3 pt-3 space-y-2 bg-white">

          {/* FREE EAR CHECK VOUCHER */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 to-green-600 shadow-xl">

            <div className="flex items-center justify-between px-4 py-4">

              <div className="flex items-center gap-3">
                <div className="bg-white/15 backdrop-blur-md p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="text-white font-extrabold uppercase text-sm tracking-wide leading-none">
                    Free Ear Check
                  </h3>

                  <p className="text-green-100 text-xs mt-1">
                    Quick, professional & no obligation
                  </p>
                </div>
              </div>

              <div className="bg-white text-green-700 font-extrabold text-xs px-4 py-2 rounded-full shadow-md">
                FREE
              </div>

            </div>
          </div>

          {/* CALL NOW VOUCHER */}
          <a
            href="tel:01384476306"
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 shadow-xl block"
          >

            <div className="flex items-center justify-between px-4 py-4">

              <div className="flex items-center gap-3">
                <div className="bg-white/15 backdrop-blur-md p-2 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="text-white font-extrabold uppercase text-sm tracking-wide leading-none">
                    Call Now
                  </h3>

                  <p className="text-red-100 text-xs mt-1">
                    Speak to our friendly team
                  </p>
                </div>
              </div>

              <div className="bg-white text-red-600 font-extrabold text-sm px-4 py-2 rounded-full shadow-md">
                01384 476 306
              </div>

            </div>
          </a>

        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        } md:top-[60px] top-[145px]`}
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
            <div className="lg:hidden mt-4 space-y-1 pb-4 border-t pt-3 bg-white rounded-2xl shadow-xl max-h-[calc(100vh-220px)] overflow-y-auto scrolling-touch">

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

      {/* FLOATING RIGHT SIDE MENU */}
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

      {/* FLOATING WHATSAPP BUTTON (With added distance from bottom and right side) */}
      <a
        href="https://wa.me/447405816870"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* MAIN CONTENT */}
      <main className="pt-[220px] md:pt-[125px]">
        {children}
      </main>

      <Footer />
    </>
  );
}