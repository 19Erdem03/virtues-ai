import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
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
    <footer className="relative overflow-hidden" style={{ background: '#000000' }}>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.virtues-ai-removebg-preview.png"
                alt="Virtues AI"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-base leading-relaxed" style={{ color: '#A6A6B0' }}>
              Where human judgment meets AI execution. We build systems that run your business forward.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#EDEDF2' }}>
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-base transition-colors duration-200 hover:text-[#B8841C]"
                style={{ color: '#A6A6B0' }}
              >
                About
              </Link>
              <button
                onClick={scrollToContact}
                className="text-base text-left transition-colors duration-200 hover:text-[#B8841C]"
                style={{ color: '#A6A6B0' }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t text-center text-sm"
          style={{
            borderColor: 'rgba(42,42,51,0.6)',
            color: '#A6A6B0'
          }}
        >
          © {new Date().getFullYear()} Virtues AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
