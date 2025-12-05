import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6 group">
              <img src="https://yf697dlbug.ufs.sh/f/kTacBU5Q0yTvjHGuMVnmHS2OF9NvEkL4q0iIGsnygR5edQD1" alt="Virtues AI" className="h-10 w-auto transition-transform group-hover:scale-110" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Helping local businesses capture every opportunity with AI voice agents and professional websites. Never miss a call again.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all hover:shadow-xl hover:scale-105 font-medium"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-blue-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-blue-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-blue-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Solution
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-blue-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  FAQs
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-blue-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@virtues-ai.com">info@virtues-ai.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Virtues AI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
