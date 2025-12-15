import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-[#050507]/80 border-b border-[#2A2A33]/50'
          : 'bg-[#050507]'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80">
          <img
            src="/assets/logo.virtues-ai-removebg-preview.png"
            alt="Virtues AI Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-2xl font-semibold text-[#EDEDF2]">Virtues AI</span>
        </Link>
        <button
          onClick={handleGetStarted}
          className="px-5 py-2.5 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D14A66]/20 bg-gradient-to-r from-[#D14A66] to-[#E8826F]"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
