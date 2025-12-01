import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RiskReversalSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          7-Day Free Trial
        </h2>

        <p className="text-lg text-blue-100 mb-8">
          Try our AI voice agent for 7 days. If you don't like it, you don't pay. Simple as that.
        </p>

        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all hover:shadow-2xl font-bold text-lg flex items-center space-x-2 group"
          >
            <span>Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
