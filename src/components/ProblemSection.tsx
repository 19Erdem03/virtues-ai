import { PhoneOff, TrendingDown, Users, AlertCircle, AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: PhoneOff,
      title: 'Missed Calls = Lost Revenue',
      description: 'Every unanswered call is a customer choosing your competitor. When you\'re busy or closed, potential customers are slipping away.',
    },
    {
      icon: TrendingDown,
      title: 'No Online Presence',
      description: 'Without a professional website, customers can\'t find you online. You\'re invisible to the 97% of consumers searching online first.',
    },
    {
      icon: Users,
      title: 'Can\'t Afford More Staff',
      description: 'Hiring full-time receptionists or phone staff is expensive. You need coverage but don\'t have the budget for 24/7 employees.',
    },
    {
      icon: AlertCircle,
      title: 'After-Hours Opportunities Wasted',
      description: 'Customers call evenings and weekends, but you\'re closed. These are hot leads looking to book right now, going elsewhere.',
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 bg-gradient-to-b from-white to-red-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6 font-medium">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Business Is Losing Money Right Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every missed call and weak online presence costs you customers. Here's what's holding you back:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-red-200 hover:border-red-400 transition-all hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 relative bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-3xl p-10 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              The average local business loses $50,000+ per year in missed opportunities.
            </p>
            <p className="text-xl text-red-50">
              It's time to stop the bleeding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
