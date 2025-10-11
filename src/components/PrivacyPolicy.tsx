import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import Navigation from './Navigation';

interface PrivacyPolicyProps {
  onBack: () => void;
  onHome: () => void;
  onBookCall: (service?: string) => void;
  onCookiePolicy: () => void;
  onPrivacyPolicy: () => void;
  onTermsOfService: () => void;
}

export default function PrivacyPolicy({ onBack, onHome, onBookCall, onCookiePolicy, onPrivacyPolicy, onTermsOfService }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navigation 
        onBookCall={onBookCall}
        onCookiePolicy={onCookiePolicy}
        onPrivacyPolicy={onPrivacyPolicy}
        onTermsOfService={onTermsOfService}
        onHome={onHome}
      />

      {/* Main Content */}
      <div className="py-20 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 tracking-wide">
              <strong>Last updated: 17/07/2025</strong>
            </p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed tracking-wide">
              <p>
                At Virtues AI, we value your privacy. This policy explains what data we collect, how we use it, and your rights regarding your personal information.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                What we collect:
              </h2>
              
              <ul className="space-y-2 ml-6">
                <li>Name, email address, phone number (only when you fill out a form or contact us)</li>
                <li>Usage data (pages visited, time on site, etc.)</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                How we use your data:
              </h2>
              
              <ul className="space-y-2 ml-6">
                <li>To provide and improve our services</li>
                <li>To communicate with you regarding your inquiries</li>
                <li>To analyze website usage for performance improvements</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                Your rights:
              </h2>
              
              <ul className="space-y-2 ml-6">
                <li>You can request to view, update, or delete your personal data at any time.</li>
                <li>We do not sell your personal data to third parties.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                Data security:
              </h2>
              
              <p>
                We implement security measures to protect your information, but no method of transmission is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                Contact:
              </h2>
              
              <p>
                For any privacy-related concerns, please email us at{' '}
                <a 
                  href="mailto:info@virtues-ai.com" 
                  className="text-blue-600 hover:underline font-medium"
                >
                  info@virtues-ai.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}