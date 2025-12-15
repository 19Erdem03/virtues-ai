import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does it take to see results from automation?",
    answer: "Most clients see immediate time savings within the first week of implementation. Full workflow optimization typically takes 2-4 weeks, depending on complexity. We prioritize quick wins first, then build toward comprehensive automation."
  },
  {
    question: "Do I need technical knowledge to use these automations?",
    answer: "Not at all. We build everything to be intuitive and user-friendly. You'll receive clear documentation and training on any tools we implement. Our goal is to make your life easier, not more complicated."
  },
  {
    question: "What if my business processes change?",
    answer: "We design flexible systems that adapt as your business evolves. You'll have the ability to modify workflows yourself, and we're always available for adjustments or new automation needs as they arise."
  },
  {
    question: "How much can automation actually save my business?",
    answer: "On average, our clients save 15-25 hours per week on repetitive tasks. That translates to thousands of dollars monthly in recovered time. The exact savings depend on your current processes and bottlenecks."
  },
  {
    question: "What happens after the initial setup?",
    answer: "You'll have fully functional automations running independently. We provide ongoing support for questions, updates, or new automation needs. Most clients continue working with us to optimize additional areas of their business."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden" style={{ background: '#000000' }}>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#D14A66] to-[#E8826F] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#A6A6B0' }}>
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(11, 11, 16, 0.6)',
                border: openIndex === index ? '1px solid #B8841C' : '1px solid rgba(42,42,51,0.6)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 hover:bg-white/5"
              >
                <span className="text-lg font-semibold pr-8" style={{ color: '#EDEDF2' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#D14A66' }}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className="px-6 pb-5 pt-2 text-base leading-relaxed"
                  style={{ color: '#A6A6B0' }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
