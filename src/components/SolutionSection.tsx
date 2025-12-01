import { Phone, Globe, Clock, TrendingUp } from 'lucide-react';

export default function SolutionSection() {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'Capture Every Lead',
      description: 'Stop losing potential customers to voicemail. Every caller gets an instant response, gets their questions answered, and books an appointment—even at 2 AM.',
    },
    {
      icon: Phone,
      title: 'Free Up Your Time',
      description: 'No more answering the same questions over and over. Your AI handles FAQs, pricing inquiries, and scheduling so you can focus on serving customers.',
    },
    {
      icon: Globe,
      title: 'Build Instant Credibility',
      description: 'A professional website makes you look established and trustworthy. Customers find you on Google, see you are legitimate, and choose you over competitors.',
    },
    {
      icon: Clock,
      title: 'Generate Revenue 24/7',
      description: 'Make money while you sleep. Customers can discover your business, book appointments, and become paying clients any time, day or night.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Solution: Voice AI + Web Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We give local businesses the tools to compete online and capture every opportunity that comes their way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all hover:shadow-xl group"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            The Result? More Customers, More Revenue, Less Stress
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our clients capture 3x more leads, book more appointments, and build trust with a professional online presence—all without hiring more staff.
          </p>
        </div>
      </div>
    </section>
  );
}
