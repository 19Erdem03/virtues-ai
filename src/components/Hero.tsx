import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Stop Missing Calls.</span>
            <br />
            <span className="text-blue-600">Start Capturing Every Roofing Job.</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            24/7 call answering trained specifically for roofing contractors. Books appointments and qualifies leads while you're on the roof.
          </p>

          <div className="flex justify-center mb-20">
            <Link to="/contact" className="group relative bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:bg-blue-700 flex items-center gap-2">
              <span>Book Your Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Calls Answered</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Always Available</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-8 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-2">Instant</div>
              <div className="text-gray-700 font-medium">Call Pickup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
