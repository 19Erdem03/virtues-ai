import { Phone, Globe, Clock, TrendingUp, CheckCircle } from 'lucide-react';

export default function SolutionSection() {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'Capture Every Lead',
      description: 'Stop losing potential customers to voicemail. Every caller gets an instant response, gets their questions answered, and books an appointment—even at 2 AM.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-400',
    },
    {
      icon: Phone,
      title: 'Free Up Your Time',
      description: 'No more answering the same questions over and over. Your AI handles FAQs, pricing inquiries, and scheduling so you can focus on serving customers.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
    },
    {
      icon: Globe,
      title: 'Build Instant Credibility',
      description: 'A professional website makes you look established and trustworthy. Customers find you on Google, see you are legitimate, and choose you over competitors.',
      color: 'from-cyan-500 to-sky-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      hoverBorder: 'hover:border-cyan-400',
    },
    {
      icon: Clock,
      title: 'Generate Revenue 24/7',
      description: 'Make money while you sleep. Customers can discover your business, book appointments, and become paying clients any time, day or night.',
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      hoverBorder: 'hover:border-teal-400',
    },
  ];

  return (
    <section id="solution" className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>Proven Solutions</span>
          </div>
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
                className={`bg-white p-8 rounded-2xl border-2 ${solution.borderColor} ${solution.hoverBorder} transition-all hover:shadow-2xl hover:-translate-y-1 group`}
              >
                <div className={`bg-gradient-to-br ${solution.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
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

        <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-12 text-white text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              The Result? More Customers, More Revenue, Less Stress
            </h3>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-8">
              Our clients capture 3x more leads, book more appointments, and build trust with a professional online presence—all without hiring more staff.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-blue-100">More Leads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Call Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
