import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Does the AI voice agent sound robotic?',
      answer: 'Not at all! Our AI uses the latest natural language technology that sounds human and conversational. Callers often don\'t realize they\'re talking to AI. We customize the voice, tone, and personality to match your business perfectly.',
    },
    {
      question: 'How long does it take to set up?',
      answer: 'Most businesses are up and running within 3-5 business days. We handle all the technical setup—you just need to provide us with basic business information and your preferences. For websites, the timeline is 7-10 days from design approval.',
    },
    {
      question: 'What happens during the 7-day free trial?',
      answer: 'We set up your AI voice agent and connect it to a test number so you can experience it firsthand. Make test calls, see how it handles questions, books appointments, and captures leads. No credit card required. If you love it (and you will), we\'ll transfer it to your business line.',
    },
    {
      question: 'Can the AI handle my specific type of business?',
      answer: 'Yes! We customize the AI for your industry—whether you\'re a restaurant, salon, law firm, medical office, contractor, or any local service business. We program it with your services, pricing, hours, and frequently asked questions so it represents your business accurately.',
    },
    {
      question: 'What if I already have a website?',
      answer: 'Perfect! We can add the AI voice system to your existing site, or if your current website needs an upgrade, we can build you a new modern one that works seamlessly with the voice AI and converts more visitors into customers.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Pricing depends on your call volume and specific needs, but most local businesses pay between $200-$500/month—far less than hiring a part-time receptionist. Websites start at $997 one-time. Book a free consultation and we\'ll create a custom quote for your business.',
    },
    {
      question: 'What if I don\'t like it after the trial?',
      answer: 'No problem! Simply let us know before the 7 days are up and you won\'t be charged. No contracts, no commitments. We also offer a 30-day money-back guarantee if you subscribe and change your mind later.',
    },
    {
      question: 'Can I use my existing phone number?',
      answer: 'Absolutely. We can forward your existing business number to the AI, or the AI can be an additional line that handles overflow and after-hours calls while your team handles regular business hours. You have complete flexibility.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our voice AI and web services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors group"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-blue-50 mb-6 text-lg max-w-2xl mx-auto">
              Our team is here to help. Get in touch and we'll show you exactly how voice AI and a professional website can transform your business. Need custom automations? We can help with that too.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:scale-105 font-bold text-lg"
            >
              <span>Free Consultation</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
