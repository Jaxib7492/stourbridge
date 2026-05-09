import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-white font-semibold text-lg">Stourbridge Hearing</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your local, independent hearing care experts in Stourbridge.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/earwax-removal')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Earwax Removal
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/hearing-aids')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Private Hearing Aids
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/aftercare')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Aftercare
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/home-visits')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Home Visits
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/financing')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Financing Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  59 High St, Stourbridge, DY8 1DE
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="tel:01384476306" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  01384 476 306
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="mailto:stourbridgehearingcentre@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 break-all">
                  stourbridgehearingcentre@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Stourbridge Hearing Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
