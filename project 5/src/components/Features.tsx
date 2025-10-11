import React, { useState, useEffect } from 'react';
import { Bot, Globe, Zap, TrendingUp, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'AI solutions live in days, not months. Rapid implementation with immediate results.',
    color: 'blue'
  },
  {
    icon: Globe,
    title: 'Worldwide',
    description: 'Global AI solutions serving customers across all time zones and languages.',
    color: 'blue'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description: 'Increase revenue by automating sales processes and improving customer engagement.',
    color: 'blue'
  },
  {
    icon: Clock,
    title: '24/7 Automation',
    description: 'AI agents work around the clock, capturing leads and serving customers while you sleep.',
    color: 'blue'
  }
];

export default function Features() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === features.length - 1;

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight font-mono">
            Why Choose Our AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology that delivers real results
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div 
            ref={gridRef}
            className={`transition-all duration-800 animation-delay-200 ${
              gridVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Features Container with Navigation */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Left Navigation Button */}
              {!isAtStart && (
                <button
                  onClick={prevFeature}
                  className="absolute left-0 z-10 p-2 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              {/* Features Display */}
              <div className="flex-1 max-w-sm mx-16 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    
                    return (
                      <div
                        key={index}
                        className="group relative p-4 md:p-8 rounded-lg border border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-500 hover:scale-105 min-h-[200px] md:min-h-[280px] flex flex-col shadow-sm flex-shrink-0 w-full"
                      >
                        <div className="mb-4 md:mb-6">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center shadow-sm">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                          </div>
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4 tracking-wide transition-colors duration-300 font-mono">
                          {feature.title}
                        </h3>
                        
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-wide transition-colors duration-300 flex-grow">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Navigation Button */}
              {!isAtEnd && (
                <button
                  onClick={nextFeature}
                  className="absolute right-0 z-10 p-2 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 rounded-lg shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Feature Indicators */}
            <div className="flex justify-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto transition-all duration-800 animation-delay-200 ${
              gridVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className={`group relative p-4 md:p-8 rounded-lg border border-blue-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-500 hover:scale-105 min-h-[200px] md:min-h-[280px] flex flex-col shadow-sm ${
                    gridVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4 tracking-wide transition-colors duration-300 font-mono">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed tracking-wide transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}