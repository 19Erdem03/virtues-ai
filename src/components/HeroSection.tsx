import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-700 px-5 py-2.5 rounded-full mb-8 font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Voice AI & Web Solutions for Local Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Never Miss a Call.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient"> Never Lose a Customer.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            AI voice agents that answer every call 24/7 and professional websites that make your business shine online.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all hover:shadow-2xl hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2 group"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#solution"
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:bg-white hover:border-blue-400 transition-all hover:shadow-xl font-semibold text-lg"
            >
              Learn More
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 AI Answering</h3>
              <p className="text-gray-600 text-sm">Never miss another customer call</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-100 hover:border-cyan-300 transition-all hover:shadow-lg group">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Websites</h3>
              <p className="text-gray-600 text-sm">Build credibility and attract customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
