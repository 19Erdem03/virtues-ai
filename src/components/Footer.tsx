import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="https://yf697dlbug.ufs.sh/f/kTacBU5Q0yTvjHGuMVnmHS2OF9NvEkL4q0iIGsnygR5edQD1" alt="Virtues AI" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Helping local businesses capture every opportunity with AI voice agents and professional websites. Never miss a call again.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@virtues-ai.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Virtues AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
