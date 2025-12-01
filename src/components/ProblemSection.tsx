import { PhoneOff, TrendingDown, Users, AlertCircle } from 'lucide-react';

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
                className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg group"
              >
                <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 text-center">
          <p className="text-xl font-semibold text-gray-900">
            The average local business loses $50,000+ per year in missed opportunities. It's time to stop the bleeding.
          </p>
        </div>
      </div>
    </section>
  );
}
