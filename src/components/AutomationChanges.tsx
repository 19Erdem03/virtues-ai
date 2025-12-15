import { Clock, TrendingUp, Rocket, ArrowRight } from 'lucide-react';

export default function AutomationChanges() {
  return (
    <section className="relative overflow-hidden isolate w-full py-32 px-6">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #050507 0%, #0B0B10 100%)'
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(900px circle at 50% 18%, rgba(209,74,102,0.20), transparent 62%),
              radial-gradient(1100px circle at 50% 58%, rgba(184,132,28,0.22), transparent 68%),
              radial-gradient(1200px circle at 15% 55%, rgba(91,42,110,0.12), transparent 70%),
              radial-gradient(1300px circle at 85% 45%, rgba(74,42,18,0.12), transparent 72%)
            `
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(42,42,51,0.10) 35px, rgba(42,42,51,0.10) 36px),
              repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(42,42,51,0.10) 35px, rgba(42,42,51,0.10) 36px),
              repeating-linear-gradient(60deg, transparent, transparent 35px, rgba(42,42,51,0.10) 35px, rgba(42,42,51,0.10) 36px),
              repeating-linear-gradient(-60deg, transparent, transparent 35px, rgba(42,42,51,0.10) 35px, rgba(42,42,51,0.10) 36px)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A2A33]/30 border border-[#2A2A33]/50 backdrop-blur-sm mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#B8841C] to-[#D14A66]" />
            <span className="text-sm font-medium text-[#A6A6B0]">Transformation starts here</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#EDEDF2] mb-6 leading-tight">
            What changes when your business
            <br />
            runs on{' '}
            <span className="bg-gradient-to-r from-[#D14A66] to-[#E8826F] bg-clip-text text-transparent">
              automation
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#A6A6B0] max-w-3xl mx-auto leading-relaxed">
            Clear outcomes that give your team time, increase revenue, and support sustainable growth.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="hidden md:block absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-16 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A2A33] to-transparent" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r-2 border-t-2 border-[#2A2A33]" />
          </div>

          <div className="hidden md:block absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-16 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A2A33] to-transparent" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r-2 border-t-2 border-[#2A2A33]" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(42,42,51,0.6)] bg-[#0B0B10]/80 backdrop-blur-sm shadow-xl group transition-all duration-300 group-hover:border-[rgba(184,132,28,0.85)] hover:-translate-y-1 hover:shadow-2xl">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `
                  radial-gradient(900px circle at 30% 25%, rgba(184,132,28,0.28), transparent 60%),
                  radial-gradient(900px circle at 75% 55%, rgba(209,74,102,0.22), transparent 62%),
                  linear-gradient(135deg, rgba(184,132,28,0.10), rgba(209,74,102,0.08))
                `
              }}
            />

            <div className="relative z-10 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8841C] to-[#D14A66] text-white font-bold text-lg shadow-lg">
                  01
                </div>
                <ArrowRight className="w-6 h-6 text-[#B8841C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#B8841C]/20 to-[#D14A66]/20 border border-[#B8841C]/30">
                  <Clock className="w-7 h-7 text-[#B8841C]" />
                </div>
              </div>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2A2A33]/40 border border-[#2A2A33]/60 mb-4">
                <span className="text-xs font-semibold text-[#B8841C] uppercase tracking-wider">Focus</span>
              </div>

              <h3 className="text-2xl font-bold text-[#EDEDF2] mb-4">
                More time for real work
              </h3>

              <p className="text-[#A6A6B0] leading-relaxed">
                Automation removes repetitive admin so your team can focus on the work that actually drives the business forward.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(42,42,51,0.6)] bg-[#0B0B10]/80 backdrop-blur-sm shadow-xl group transition-all duration-300 group-hover:border-[rgba(184,132,28,0.85)] hover:-translate-y-1 hover:shadow-2xl">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `
                  radial-gradient(900px circle at 30% 25%, rgba(184,132,28,0.28), transparent 60%),
                  radial-gradient(900px circle at 75% 55%, rgba(209,74,102,0.22), transparent 62%),
                  linear-gradient(135deg, rgba(184,132,28,0.10), rgba(209,74,102,0.08))
                `
              }}
            />

            <div className="relative z-10 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8841C] to-[#D14A66] text-white font-bold text-lg shadow-lg">
                  02
                </div>
                <ArrowRight className="w-6 h-6 text-[#B8841C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#B8841C]/20 to-[#D14A66]/20 border border-[#D14A66]/30">
                  <TrendingUp className="w-7 h-7 text-[#D14A66]" />
                </div>
              </div>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2A2A33]/40 border border-[#2A2A33]/60 mb-4">
                <span className="text-xs font-semibold text-[#D14A66] uppercase tracking-wider">Throughput</span>
              </div>

              <h3 className="text-2xl font-bold text-[#EDEDF2] mb-4">
                More revenue with the same team
              </h3>

              <p className="text-[#A6A6B0] leading-relaxed">
                Freed-up time means faster response, more capacity, and more opportunities captured without adding headcount.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[rgba(42,42,51,0.6)] bg-[#0B0B10]/80 backdrop-blur-sm shadow-xl group transition-all duration-300 group-hover:border-[rgba(184,132,28,0.85)] hover:-translate-y-1 hover:shadow-2xl">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `
                  radial-gradient(900px circle at 30% 25%, rgba(184,132,28,0.28), transparent 60%),
                  radial-gradient(900px circle at 75% 55%, rgba(209,74,102,0.22), transparent 62%),
                  linear-gradient(135deg, rgba(184,132,28,0.10), rgba(209,74,102,0.08))
                `
              }}
            />

            <div className="relative z-10 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8841C] to-[#D14A66] text-white font-bold text-lg shadow-lg">
                  03
                </div>
                <ArrowRight className="w-6 h-6 text-[#B8841C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#B8841C]/20 to-[#D14A66]/20 border border-[#E8826F]/30">
                  <Rocket className="w-7 h-7 text-[#E8826F]" />
                </div>
              </div>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2A2A33]/40 border border-[#2A2A33]/60 mb-4">
                <span className="text-xs font-semibold text-[#E8826F] uppercase tracking-wider">Growth</span>
              </div>

              <h3 className="text-2xl font-bold text-[#EDEDF2] mb-4">
                A business that scales
              </h3>

              <p className="text-[#A6A6B0] leading-relaxed">
                Systems scale better than people. Cleaner operations lead to better delivery, happier customers, and sustainable growth.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden min-w-[420px] px-10 py-4 rounded-full font-semibold text-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(184,132,28,0.12), rgba(209,74,102,0.10))',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(184,132,28,0.35)',
              color: 'rgba(237,237,242,0.85)',
              boxShadow: 'inset 0 0 20px rgba(184,132,28,0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '1px solid rgba(184,132,28,0.75)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(184,132,28,0.14), rgba(209,74,102,0.12))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '1px solid rgba(184,132,28,0.35)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(184,132,28,0.12), rgba(209,74,102,0.10))';
            }}
          >
            <span className="flex items-center justify-center gap-3">
              <span>Ready to see these changes?</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" style={{ color: '#B8841C' }} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
