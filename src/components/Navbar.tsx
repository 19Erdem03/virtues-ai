import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="https://yf697dlbug.ufs.sh/f/kTacBU5Q0yTvjHGuMVnmHS2OF9NvEkL4q0iIGsnygR5edQD1" alt="Virtues AI Logo" className="h-8 w-auto transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Virtues AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#problem" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                  Problem
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#solution" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                  Solution
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                  FAQs
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              </>
            ) : (
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Back to Home
              </Link>
            )}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all hover:shadow-xl hover:scale-105 font-medium flex items-center space-x-2"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <div className="flex flex-col space-y-3">
              {isHomePage ? (
                <>
                  <a
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="#problem"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                  >
                    Problem
                  </a>
                  <a
                    href="#solution"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                  >
                    Solution
                  </a>
                  <a
                    href="#faq"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                  >
                    FAQs
                  </a>
                </>
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                >
                  Back to Home
                </Link>
              )}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all font-medium flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
