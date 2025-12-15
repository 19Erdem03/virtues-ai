import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import FAQ from './FAQ';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    bottleneck: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            business_name: formData.businessName,
            bottleneck: formData.bottleneck
          }
        ]);

      if (error) throw error;

      await fetch('https://hook.eu2.make.com/ugfde8bbb95a6ic07vhsr2xrg6hc7dos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessName: formData.businessName,
          bottleneck: formData.bottleneck
        })
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        businessName: '',
        bottleneck: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.businessName.trim() !== '' &&
      formData.bottleneck.trim() !== ''
    );
  };

  return (
    <>
      <div id="contact" className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #050507 0%, #0B0B10 100%)'
          }}
        />

        <div className="absolute inset-0 opacity-100">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="honeycomb-contact" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M28 0L0 16V48L28 64L56 48V16L28 0Z"
                  fill="none"
                  stroke="rgba(42,42,51,0.10)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#honeycomb-contact)" />
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{ background: '#B8841C' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-12 blur-3xl"
            style={{ background: '#D14A66' }}
          />
        </div>

        <div className="relative z-10 max-w-[700px] mx-auto px-6 pt-16 md:pt-24 pb-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#D14A66] to-[#E8826F] bg-clip-text text-transparent">
              Describe the biggest bottleneck in your business
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#A6A6B0' }}>
              Share what feels stuck, messy, or too manual right now. We'll review it and outline whether we're a good fit and what a clear first step looks like.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 md:p-10 shadow-xl"
            style={{
              background: 'rgba(11, 11, 16, 0.6)',
              border: '1px solid rgba(42,42,51,0.6)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#EDEDF2' }}>
                  Name <span style={{ color: '#D14A66' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-[#D14A66] focus:ring-2 focus:ring-[#D14A66]/35 transition"
                  style={{
                    background: 'rgba(5, 5, 7, 0.8)',
                    color: '#EDEDF2',
                    border: '1px solid rgba(42,42,51,0.6)'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#EDEDF2' }}>
                  Email <span style={{ color: '#D14A66' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-[#D14A66] focus:ring-2 focus:ring-[#D14A66]/35 transition"
                  style={{
                    background: 'rgba(5, 5, 7, 0.8)',
                    color: '#EDEDF2',
                    border: '1px solid rgba(42,42,51,0.6)'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-2" style={{ color: '#EDEDF2' }}>
                  Business name <span style={{ color: '#D14A66' }}>*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-[#D14A66] focus:ring-2 focus:ring-[#D14A66]/35 transition"
                  style={{
                    background: 'rgba(5, 5, 7, 0.8)',
                    color: '#EDEDF2',
                    border: '1px solid rgba(42,42,51,0.6)'
                  }}
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="bottleneck" className="block text-sm font-medium mb-2" style={{ color: '#EDEDF2' }}>
                  What's your biggest bottleneck right now? <span style={{ color: '#D14A66' }}>*</span>
                </label>
                <textarea
                  id="bottleneck"
                  name="bottleneck"
                  required
                  value={formData.bottleneck}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-[#D14A66] focus:ring-2 focus:ring-[#D14A66]/35 transition resize-none"
                  style={{
                    background: 'rgba(5, 5, 7, 0.8)',
                    color: '#EDEDF2',
                    border: '1px solid rgba(42,42,51,0.6)'
                  }}
                  placeholder="Describe what feels stuck, messy, or too manual..."
                />
              </div>

              {submitStatus === 'success' && (
                <div
                  className="p-4 rounded-lg text-center"
                  style={{
                    background: 'rgba(184,132,28,0.15)',
                    border: '1px solid rgba(184,132,28,0.3)',
                    color: '#B8841C'
                  }}
                >
                  Thanks for sharing. We'll review your message and get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className="p-4 rounded-lg text-center"
                  style={{
                    background: 'rgba(209,74,102,0.15)',
                    border: '1px solid rgba(209,74,102,0.3)',
                    color: '#D14A66'
                  }}
                >
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className="w-full px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-[#D14A66] to-[#E8826F]"
              >
                {isSubmitting ? 'Sending...' : 'Share your challenge'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
}
