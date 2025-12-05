import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

export default function RiskReversalSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 font-medium">
          <Shield className="w-4 h-4" />
          <span>Risk-Free Guarantee</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          7-Day Free Trial
        </h2>

        <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
          Try our AI voice agent for 7 days. If you don't like it, you don't pay. Simple as that.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          {[
            { icon: CheckCircle, text: 'No Credit Card Required' },
            { icon: CheckCircle, text: 'Cancel Anytime' },
            { icon: CheckCircle, text: '30-Day Money Back' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center space-x-2 text-white">
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-2xl hover:scale-105 font-bold text-lg flex items-center justify-center space-x-2 group"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#faq"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-bold text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
