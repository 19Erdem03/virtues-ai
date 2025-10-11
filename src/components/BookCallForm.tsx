import React, { useState } from 'react';
import { X, User, Mail, Phone, Building, MessageSquare, Calendar } from 'lucide-react';

interface BookCallFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallForm({ isOpen, onClose }: BookCallFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-white border border-black/20 rounded-none shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative p-8 bg-black border-b border-black/20">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-none hover:bg-gray-800 transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Book Your Strategy Call</h2>
          <p className="text-gray-300 tracking-wide">Let's discuss how AI can transform your business</p>
        </div>

        {/* Form */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-black rounded-none flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">Thank You!</h3>
              <p className="text-gray-600 mb-6 tracking-wide">We've received your request and will contact you within 24 hours to schedule your strategy call.</p>
              <div className="text-sm text-gray-600">
                <p>• 30-minute consultation</p>
                <p>• Custom AI roadmap</p>
                <p>• No obligation</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-black/20 rounded-none text-black placeholder-gray-600 focus:border-black focus:outline-none transition-colors duration-200 tracking-wide"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-black/20 rounded-none text-black placeholder-gray-600 focus:border-black focus:outline-none transition-colors duration-200 tracking-wide"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-black/20 rounded-none text-black placeholder-gray-600 focus:border-black focus:outline-none transition-colors duration-200 tracking-wide"
                  />
                </div>

                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-black/20 rounded-none text-black placeholder-gray-600 focus:border-black focus:outline-none transition-colors duration-200 tracking-wide"
                  />
                </div>
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-black/20 rounded-none text-black focus:border-black focus:outline-none transition-colors duration-200 tracking-wide"
                >
                  <option value="">Preferred Call Time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                <textarea
                  name="message"
                  placeholder="Tell us about your business and AI automation goals..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-black/20 rounded-none text-black placeholder-gray-600 focus:border-black focus:outline-none transition-colors duration-200 resize-none tracking-wide"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black text-white font-bold rounded-none text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 tracking-wide"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Booking Your Call...</span>
                  </div>
                ) : (
                  'Book My Free Strategy Call'
                )}
              </button>

              <div className="text-center text-sm text-gray-600 tracking-wide">
                <p>We respect your privacy. Your information will never be shared.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}