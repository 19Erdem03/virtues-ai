import { TrendingUp, Cog, Target } from 'lucide-react';

export default function WhoWeWorkWith() {
  const cards = [
    {
      icon: TrendingUp,
      title: 'Operators who value leverage',
      description: 'Founders and teams who build systems once and let them run, instead of hiring more people to manage chaos.',
    },
    {
      icon: Cog,
      title: 'Businesses ready for real automation',
      description: 'Teams that understand automation means changing workflows, not just adding AI on top and hoping it fixes everything.',
    },
    {
      icon: Target,
      title: 'Decision-makers who want clarity',
      description: 'People who want clean systems, clear answers, and outcomes they can actually measure. No buzzwords, no tech theatre.',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#0B0B10] to-[#050507] py-24 md:py-32">
      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-[#EDEDF2]">Who we </span>
            <span className="text-[#D14A66]">work with</span>
          </h2>
        </div>

        {/* Subheadline */}
        <p className="text-center text-lg md:text-xl text-[#A6A6B0] max-w-3xl mx-auto mb-16">
          We partner with businesses ready to move beyond the chaos and into clarity.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D14A66]/10 cursor-pointer"
                style={{
                  background: 'rgba(18, 18, 24, 0.6)',
                  border: '1px solid #2A2A33',
                }}
              >
                {/* Icon Container */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 bg-gradient-to-br from-[#B8841C] to-[#D14A66] transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-[#EDEDF2] mb-4 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-[#A6A6B0] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
