import React from 'react';
import { Shield, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Guarantee() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Our Guarantee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We stand behind our AI solutions with a promise of real, measurable results
          </p>
        </div>

        <div
          ref={contentRef}
          className={`max-w-5xl mx-auto transition-all duration-800 animation-delay-200 ${
            contentVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Results Within 30 Days or Your Money Back
              </h3>
              <p className="text-xl text-blue-100">
                We're so confident in our AI solutions that we guarantee measurable improvements to your business within the first month.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">
                    Increased Revenue
                  </h4>
                  <p className="text-gray-600">
                    See measurable growth in lead conversion and sales within 30 days
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">
                    Time Saved
                  </h4>
                  <p className="text-gray-600">
                    Reduce manual work by at least 20 hours per week through automation
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">
                    Zero Risk
                  </h4>
                  <p className="text-gray-600">
                    If you don't see results, we'll refund 100% of your investment
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">
                  What You Get With Every Solution:
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      <strong className="text-lg md:text-lg">Rapid Deployment:</strong> Your AI solution will be live and operational within 7 days
                    </p>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      <strong className="text-lg md:text-lg">Dedicated Support:</strong> Direct access to our team for troubleshooting and optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      <strong className="text-lg md:text-lg">Performance Tracking:</strong> Real-time analytics dashboard showing your ROI and key metrics
                    </p>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      <strong className="text-lg md:text-lg">Continuous Optimization:</strong> Weekly refinements to improve performance and results
                    </p>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-7 h-7 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      <strong className="text-lg md:text-lg">Full Ownership:</strong> You own all data, leads, and systems we build for you
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-lg italic">
                  "We don't get paid unless you get results. That's how confident we are in our solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
