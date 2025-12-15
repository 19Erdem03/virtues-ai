import { Cpu, Globe, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050507] to-[#0B0B10]">
      {/* Honeycomb Pattern Background */}
      <div className="absolute inset-0 opacity-100">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M28 0L0 16V48L28 64L56 48V16L28 0Z"
                fill="none"
                stroke="#2A2A33"
                strokeWidth="0.5"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>
      </div>

      {/* Ambient Glow Blobs */}
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

      {/* Content Container */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6">

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center pt-4 md:pt-20 pb-12 md:pb-32">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 md:mb-8 border backdrop-blur-sm shadow-[0_0_40px_rgba(184,132,28,0.35)]"
            style={{
              background: 'rgba(11, 11, 16, 0.6)',
              borderColor: '#2A2A33'
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#B8841C] animate-pulse" />
            <span className="text-sm font-medium text-[#A6A6B0]">
              Powered by advanced AI
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4 md:mb-6">
            <div
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight leading-none"
              style={{ color: '#B8841C' }}
            >
              Automate the work.
            </div>
            <div
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
              style={{ color: '#EDEDF2' }}
            >
              Grow without hiring.
            </div>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl max-w-2xl mb-6 md:mb-10 leading-relaxed"
            style={{ color: '#A6A6B0' }}
          >
            Where human judgment meets AI execution. We build systems that run your business forward.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D14A66]/30 w-full sm:w-auto bg-gradient-to-r from-[#D14A66] to-[#E8826F]"
            >
              Get Started
            </button>
            <a
              href="#how-we-help"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/5 w-full sm:w-auto backdrop-blur-sm border"
              style={{
                background: 'transparent',
                borderColor: '#B8841C',
                color: '#B8841C'
              }}
            >
              See how we can help
            </a>
          </div>
        </div>

        {/* What We Help With Section */}
        <div id="how-we-help" className="mt-20 pb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#D14A66] to-[#E8826F] bg-clip-text text-transparent">
            What we help with
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div
              className="h-auto md:h-[550px] p-8 md:p-12 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(184,132,28,0.4)] hover:border-[#B8841C] group cursor-pointer flex flex-col justify-center"
              style={{
                background: 'rgba(11, 11, 16, 0.4)',
                border: '1.5px solid rgba(184, 132, 28, 0.7)',
                boxShadow: 'inset 0 0 20px rgba(184, 132, 28, 0.05)'
              }}
            >
              <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#B8841C] to-[#D14A66] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: '#EDEDF2' }}
                >
                  Custom AI Automation Systems
                </h3>
                <p
                  className="leading-relaxed text-lg"
                  style={{ color: '#A6A6B0' }}
                >
                  Custom AI automations designed to replace manual work, reduce operational friction, and run reliably in the background so your business functions smoothly without constant oversight.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="h-auto md:h-[550px] p-8 md:p-12 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(184,132,28,0.4)] hover:border-[#B8841C] group cursor-pointer flex flex-col justify-center"
              style={{
                background: 'rgba(11, 11, 16, 0.4)',
                border: '1.5px solid rgba(184, 132, 28, 0.7)',
                boxShadow: 'inset 0 0 20px rgba(184, 132, 28, 0.05)'
              }}
            >
              <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#B8841C] to-[#D14A66] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: '#EDEDF2' }}
                >
                  Web Apps & Websites
                </h3>
                <p
                  className="leading-relaxed text-lg"
                  style={{ color: '#A6A6B0' }}
                >
                  Intelligent front-ends that adapt to user behavior, simplify complex workflows, and turn complicated processes into clear, intuitive experiences.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div
              className="h-auto md:h-[550px] p-8 md:p-12 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(184,132,28,0.4)] hover:border-[#B8841C] group cursor-pointer flex flex-col justify-center"
              style={{
                background: 'rgba(11, 11, 16, 0.4)',
                border: '1.5px solid rgba(184, 132, 28, 0.7)',
                boxShadow: 'inset 0 0 20px rgba(184, 132, 28, 0.05)'
              }}
            >
              <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#B8841C] to-[#D14A66] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: '#EDEDF2' }}
                >
                  Save Time at Scale
                </h3>
                <p
                  className="leading-relaxed text-lg"
                  style={{ color: '#A6A6B0' }}
                >
                  Replace manual work with intelligent systems that run 24/7, automate critical operations, and free up hours every week so your team can focus on growth instead of busywork.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started CTA */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D14A66]/30 w-full sm:w-auto bg-gradient-to-r from-[#D14A66] to-[#E8826F]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
