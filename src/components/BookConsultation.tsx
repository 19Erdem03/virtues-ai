import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, CheckCircle, Users, Target, Lightbulb } from 'lucide-react';

interface BookConsultationProps {
  onBack: () => void;
  onSchedule: () => void;
}

export default function BookConsultation({ onBack, onSchedule }: BookConsultationProps) {

  const benefits = [
    {
      icon: Target,
      title: 'Custom AI Strategy',
      description: 'Get a personalized roadmap tailored to your specific business needs and goals.'
    },
    {
      icon: Lightbulb,
      title: 'Expert Insights',
      description: 'Learn from our AI specialists about the latest trends and best practices in automation.'
    },
    {
      icon: Users,
      title: 'Implementation Plan',
      description: 'Receive a detailed plan for implementing AI solutions in your organization.'
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <div className="relative py-8 px-6 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-none hover:bg-white/10 transition-colors duration-200 flex items-center gap-2 text-gray-400 hover:text-white tracking-wide"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Book Your Free
            <span className="block text-gray-300">
              AI Consultation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed tracking-wide">
            Get expert guidance on how AI can transform your business. Our 30-minute consultation is completely free with no strings attached.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-gray-300 tracking-wide">
              <Calendar className="w-6 h-6 text-white" />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 tracking-wide">
              <Clock className="w-6 h-6 text-white" />
              <span>Free of Charge</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 tracking-wide">
              <CheckCircle className="w-6 h-6 text-white" />
              <span>No Obligation</span>
            </div>
          </div>

          <button
            onClick={onSchedule}
            className="group relative px-10 py-5 bg-purple-600 text-white font-bold rounded-none text-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 tracking-wide"
          >
            Schedule Your Consultation
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black tracking-tight">
            What You'll Get
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-none border border-black/20 bg-white hover:border-black/40 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-none bg-black/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-black mb-4 tracking-wide">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed tracking-wide">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 tracking-wide">
            Join hundreds of businesses that have transformed their operations with AI. Book your free 30-minute consultation today.
          </p>
          
          <button
            onClick={onSchedule}
            className="group relative px-10 py-5 bg-purple-600 text-white font-bold rounded-none text-xl hover:bg-purple-700 transition-all duration-300 hover:scale-105 tracking-wide"
          >
            Book Your Free Consultation
          </button>
          
          <p className="text-gray-400 mt-6 tracking-wide">
            No credit card required • 30-minute session • Custom AI roadmap included
          </p>
        </div>
      </section>
    </div>
  );
}