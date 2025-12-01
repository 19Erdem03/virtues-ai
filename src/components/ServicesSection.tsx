import { Phone, Calendar, MessageSquare, Globe, Palette, Zap } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Phone,
      title: 'AI Voice Receptionist',
      description: 'Natural-sounding AI that answers calls, handles FAQs, and provides information just like a real receptionist—24/7.',
      benefits: ['Instant call answering', 'Natural conversations', 'Custom greetings'],
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'AI schedules appointments directly into your calendar while you sleep. No more phone tag or missed bookings.',
      benefits: ['Calendar integration', 'Automatic scheduling', 'Confirmation texts'],
    },
    {
      icon: MessageSquare,
      title: 'Lead Qualification',
      description: 'AI captures caller details, asks qualifying questions, and delivers hot leads straight to you instantly.',
      benefits: ['Lead capture forms', 'Quality scoring', 'Instant notifications'],
    },
    {
      icon: Globe,
      title: 'Professional Website Design',
      description: 'Modern, mobile-optimized websites that make your business look credible and help customers find you online.',
      benefits: ['Mobile responsive', 'SEO optimized', 'Fast loading'],
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Websites tailored to your brand with your colors, images, and messaging that sets you apart from competitors.',
      benefits: ['Custom design', 'Brand consistency', 'Professional photos'],
    },
    {
      icon: Zap,
      title: 'Quick Setup & Support',
      description: 'Get up and running in days, not months. We handle everything with full training and ongoing support included.',
      benefits: ['Fast deployment', 'Complete training', '24/7 tech support'],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
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
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 transition-all hover:shadow-xl group"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {benefit}
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
