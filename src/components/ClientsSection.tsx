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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
              className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center border-2 border-blue-100 hover:border-blue-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {client.name}
              </h3>
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.size} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
