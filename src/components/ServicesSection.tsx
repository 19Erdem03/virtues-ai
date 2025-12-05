import { Phone, Calendar, MessageSquare, Globe, Palette, Zap, Check } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Phone,
      title: 'AI Voice Receptionist',
      description: 'Natural-sounding AI that answers calls, handles FAQs, and provides information just like a real receptionist—24/7.',
      benefits: ['Instant call answering', 'Natural conversations', 'Custom greetings'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'AI schedules appointments directly into your calendar while you sleep. No more phone tag or missed bookings.',
      benefits: ['Calendar integration', 'Automatic scheduling', 'Confirmation texts'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: MessageSquare,
      title: 'Lead Qualification',
      description: 'AI captures caller details, asks qualifying questions, and delivers hot leads straight to you instantly.',
      benefits: ['Lead capture forms', 'Quality scoring', 'Instant notifications'],
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Professional Website Design',
      description: 'Modern, mobile-optimized websites that make your business look credible and help customers find you online.',
      benefits: ['Mobile responsive', 'SEO optimized', 'Fast loading'],
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Websites tailored to your brand with your colors, images, and messaging that sets you apart from competitors.',
      benefits: ['Custom design', 'Brand consistency', 'Professional photos'],
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Quick Setup & Support',
      description: 'Get up and running in days, not months. We handle everything with full training and ongoing support included.',
      benefits: ['Fast deployment', 'Complete training', '24/7 tech support'],
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything Your Local Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voice AI and web solutions designed specifically for local businesses that want to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 transition-all hover:shadow-2xl hover:-translate-y-1 group"
              >
                <div className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <div className="mt-1 mr-3 flex-shrink-0">
                        <div className="bg-green-100 rounded-full p-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
