import { Star } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    {
      name: 'Treu Video Productions',
      logo: 'https://js7m8gd3ns.ufs.sh/f/9hrIK8ogtzPUX0MWLnhQEMUwmpvaDudZr5O9tPBG3jbWqh7s',
      size: 'max-h-32',
    },
    {
      name: 'The Austin Roof Dr',
      logo: 'https://js7m8gd3ns.ufs.sh/f/9hrIK8ogtzPUTBd18zlIt7B6hpMiyOEKTZQbugmx9l4fdezH',
      size: 'max-h-24',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6 font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Businesses We've Worked With
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses to capture every opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center border-2 border-gray-200 hover:border-blue-300 hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-blue-600 transition-colors">
                {client.name}
              </h3>
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.size} w-auto object-contain transition-transform group-hover:scale-105`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
