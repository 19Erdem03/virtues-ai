import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AIComparisonChart() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: chartRef, isVisible: chartVisible } = useScrollAnimation();

  // Generate data points from February 2025 to December 2025
  const months = [
    'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 
    'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025'
  ];

  // AI business revenue with realistic fluctuations and seasonal patterns (150-200% growth)
  const aiRevenue = [100, 120, 135, 180, 165, 210, 240, 220, 280, 290, 320];
  
  // Traditional business revenue with small fluctuations and seasonal dips (20-40% growth)
  const traditionalRevenue = [100, 105, 98, 115, 110, 125, 118, 130, 125, 135, 140];

  // Calculate maximum revenue for chart scaling
  const maxRevenue = Math.max(...aiRevenue, ...traditionalRevenue);

  return (
    <section id="ai-comparison" className="py-20 px-6 relative overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-800 ${
            headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
            Businesses with and without AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide">
            See the dramatic difference in revenue growth between AI-powered businesses and traditional approaches.
          </p>
        </div>

        <div 
          ref={chartRef}
          className={`max-w-5xl mx-auto transition-all duration-800 animation-delay-200 ${
            chartVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Chart Container */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg">
            {/* Legend */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
                <span className="text-black font-medium tracking-wide flex items-center gap-2 font-mono">
                  With AI
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
                <span className="text-black font-medium tracking-wide flex items-center gap-2 font-mono">
                  Without AI
                  <TrendingDown className="w-4 h-4 text-red-500" />
                </span>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-96 border-l-2 border-b-2 border-gray-300">
              {/* Y-axis labels */}
              <div className="absolute -left-16 top-0 text-sm text-gray-600 tracking-wide font-mono">$400k</div>
              <div className="absolute -left-16 top-1/4 text-sm text-gray-600 tracking-wide font-mono">$300k</div>
              <div className="absolute -left-16 top-2/4 text-sm text-gray-600 tracking-wide font-mono">$200k</div>
              <div className="absolute -left-16 top-3/4 text-sm text-gray-600 tracking-wide font-mono">$100k</div>
              <div className="absolute -left-12 bottom-0 text-sm text-gray-600 tracking-wide font-mono">$0</div>

              {/* Grid lines */}
              <div className="absolute inset-0">
                {[0, 25, 50, 75].map((percent) => (
                  <div
                    key={percent}
                    className="absolute w-full border-t border-gray-200"
                    style={{ top: `${percent}%` }}
                  ></div>
                ))}
              </div>

              {/* AI Revenue Line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.5"
                  points={aiRevenue.map((revenue, index) => 
                    `${(index / (aiRevenue.length - 1)) * 100},${100 - (revenue / maxRevenue) * 100}`
                  ).join(' ')}
                  className={chartVisible ? 'animate-draw-line' : 'opacity-0'}
                  style={{ 
                    strokeDasharray: '200',
                    strokeDashoffset: chartVisible ? '0' : '200',
                    transition: 'stroke-dashoffset 2s ease-in-out',
                    animationDelay: '0.5s'
                  }}
                />
              </svg>

              {/* Traditional Revenue Line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="0.5"
                  points={traditionalRevenue.map((revenue, index) => 
                    `${(index / (traditionalRevenue.length - 1)) * 100},${100 - (revenue / maxRevenue) * 100}`
                  ).join(' ')}
                  className={chartVisible ? 'animate-draw-line' : 'opacity-0'}
                  style={{ 
                    strokeDasharray: '200',
                    strokeDashoffset: chartVisible ? '0' : '200',
                    transition: 'stroke-dashoffset 2s ease-in-out',
                    animationDelay: '1s'
                  }}
                />
              </svg>

              {/* Data points */}
              {aiRevenue.map((revenue, index) => (
                <div
                  key={`ai-${index}`}
                  className={`absolute w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 shadow-sm ${
                    chartVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    left: `${(index / (aiRevenue.length - 1)) * 100}%`,
                    top: `${100 - (revenue / maxRevenue) * 100}%`,
                    transform: 'translateX(-50%) translateY(-8px)',
                    transitionDelay: `${1.5 + index * 0.1}s`
                  }}
                ></div>
              ))}

              {/* Traditional data points */}
              {traditionalRevenue.map((revenue, index) => (
                <div
                  key={`traditional-${index}`}
                  className={`absolute w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2 translate-y-1/2 transition-all duration-500 shadow-sm ${
                    chartVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    left: `${(index / (traditionalRevenue.length - 1)) * 100}%`,
                    top: `${100 - (revenue / maxRevenue) * 100}%`,
                    transform: 'translateX(-50%) translateY(-8px)',
                    transitionDelay: `${2 + index * 0.1}s`
                  }}
                ></div>
              ))}
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between mt-4 text-sm text-gray-600 tracking-wide font-mono">
              {months.filter((_, index) => index % 2 === 0).map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center p-8 bg-red-50 border border-red-200 rounded-lg">
              <div className="w-16 h-16 bg-red-100 border border-red-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-2 tracking-wide font-mono">Without AI</h3>
              <p className="text-4xl font-bold text-red-700 mb-2 font-mono">$140k</p>
              <p className="text-red-600 tracking-wide">+40% growth over 10 months</p>
            </div>

            <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 border border-green-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2 tracking-wide font-mono">With AI</h3>
              <p className="text-4xl font-bold text-green-700 mb-2 font-mono">$320k</p>
              <p className="text-green-600 tracking-wide">+220% growth with AI automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}