import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle2, Users } from 'lucide-react';

function AboutUs() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setHeaderVisible(true);
      });
    }, observerOptions);

    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setContentVisible(true);
      });
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
    };
  }, []);

  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Customer Calls You',
      description: 'A homeowner needs a roof repair and dials your number.'
    },
    {
      number: 2,
      icon: CheckCircle2,
      title: 'Our Tool Answers & Books Automatically',
      description: 'We pick up in 2 rings, qualify the lead, and schedule the estimate.'
    },
    {
      number: 3,
      icon: Users,
      title: 'You Get More Happy Customers',
      description: 'Show up to pre-qualified jobs and close more deals.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Three simple steps to never miss another roofing job
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-800 max-w-4xl mx-auto mb-16 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-8 top-16 bottom-16 w-1 bg-blue-200 hidden md:block"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className="flex items-start gap-6">
                    {/* Step number and icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-600 font-bold text-blue-600 text-sm">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-1 bg-blue-50 rounded-xl border-2 border-blue-200 p-6 mt-2">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`transition-all duration-800 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 tracking-wide">
                    Who I Am
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
                    Hi! My name is Erdem. I'm an AI automation specialist who helps roofing contractors capture every lead and grow their business through intelligent automation.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide mb-6">
                    I've seen too many roofers lose jobs simply because they couldn't answer the phone. That's why I developed a solution specifically for the roofing industry to ensure you never miss a call or a job again.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
                    My goal is simple: help roofers answer every call, qualify every lead, and book more jobs automatically.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20"></div>
                    <img
                      src="https://i.imgur.com/2WKsK7z.jpeg"
                      alt="Erdem - AI Specialist"
                      className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
