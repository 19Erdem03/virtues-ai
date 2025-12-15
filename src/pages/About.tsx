import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#050507] to-[#0B0B10]">
      <div className="absolute inset-0 opacity-100">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="honeycomb-about" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M28 0L0 16V48L28 64L56 48V16L28 0Z"
                fill="none"
                stroke="#2A2A33"
                strokeWidth="0.5"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb-about)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: '#B8841C' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: '#D14A66' }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#D14A66] to-[#E8826F] bg-clip-text text-transparent">
              About Virtues AI
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#A6A6B0' }}>
            We're on a mission to help businesses scale without the complexity, overhead, or constant firefighting.
          </p>
        </div>

        <div className="mb-24">
          <div
            className="p-12 rounded-2xl backdrop-blur-sm"
            style={{
              background: 'rgba(11, 11, 16, 0.4)',
              border: '1.5px solid rgba(184, 132, 28, 0.7)',
              boxShadow: 'inset 0 0 20px rgba(184, 132, 28, 0.05)'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#EDEDF2' }}>
              Our Story
            </h2>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#A6A6B0' }}>
              <p>
                We've seen it firsthand: talented teams buried in repetitive work, businesses that can't scale without hiring more people, and founders who spend more time managing chaos than building their vision.
              </p>
              <p>
                That's why we started Virtues AI. We believe automation isn't just about efficiency, it's about freedom. Freedom to focus on what matters. Freedom to grow without growing pains. Freedom to build a business that serves you, not the other way around.
              </p>
              <p>
                We combine advanced AI with practical business sense to build systems that actually work. No fluff, no over-engineering. Just intelligent automation that runs reliably in the background while you focus on the work that drives your business forward.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#D14A66] to-[#E8826F] bg-clip-text text-transparent">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(11, 11, 16, 0.4)',
                border: '1.5px solid rgba(42,42,51,0.6)'
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#B8841C]/20 to-[#D14A66]/20 border border-[#B8841C]/30">
                  <Target className="w-8 h-8 text-[#B8841C]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#EDEDF2' }}>
                Clarity Over Complexity
              </h3>
              <p className="text-center leading-relaxed" style={{ color: '#A6A6B0' }}>
                We cut through the noise and build solutions that are simple, effective, and easy to understand.
              </p>
            </div>

            <div
              className="p-10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(11, 11, 16, 0.4)',
                border: '1.5px solid rgba(42,42,51,0.6)'
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#B8841C]/20 to-[#D14A66]/20 border border-[#D14A66]/30">
                  <Zap className="w-8 h-8 text-[#D14A66]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#EDEDF2' }}>
                Results Over Hype
              </h3>
              <p className="text-center leading-relaxed" style={{ color: '#A6A6B0' }}>
                We focus on measurable outcomes that move your business forward, not buzzwords or trends.
              </p>
            </div>

            <div
              className="p-10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(11, 11, 16, 0.4)',
                border: '1.5px solid rgba(42,42,51,0.6)'
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#B8841C]/20 to-[#D14A66]/20 border border-[#E8826F]/30">
                  <Users className="w-8 h-8 text-[#E8826F]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#EDEDF2' }}>
                Partnership Over Transactions
              </h3>
              <p className="text-center leading-relaxed" style={{ color: '#A6A6B0' }}>
                We're invested in your success. Your wins are our wins, and we're here for the long haul.
              </p>
            </div>
          </div>
        </div>

        <div
          className="p-12 rounded-2xl backdrop-blur-sm text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(184,132,28,0.12), rgba(209,74,102,0.10))',
            border: '1px solid rgba(184,132,28,0.35)',
            backdropFilter: 'blur(14px)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#EDEDF2' }}>
            Ready to transform your business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A6A6B0' }}>
            Let's talk about what automation can do for you. No sales pitch, just an honest conversation about whether we're the right fit.
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D14A66]/30 bg-gradient-to-r from-[#D14A66] to-[#E8826F]"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
