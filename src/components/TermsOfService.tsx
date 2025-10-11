import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import Navigation from './Navigation';

interface TermsOfServiceProps {
  onBack: () => void;
  onHome: () => void;
  onBookCall: (service?: string) => void;
  onCookiePolicy: () => void;
  onPrivacyPolicy: () => void;
  onTermsOfService: () => void;
}

export default function TermsOfService({ onBack, onHome, onBookCall, onCookiePolicy, onPrivacyPolicy, onTermsOfService }: TermsOfServiceProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black tracking-tight">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 tracking-wide">
              <strong>Last updated: 17/07/2025</strong>
            </p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed tracking-wide">
              <p>
                Welcome to Virtues AI. By accessing or using our website or services, you agree to the following Terms of Service. Please read them carefully.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                1. Acceptance of Terms
              </h2>
              <p>
                By using our website or engaging with our services (such as AI chatbot creation or website development), you agree to be bound by these Terms and any future updates.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                2. Services Offered
              </h2>
              <p>
                Virtues AI provides AI automation solutions including chatbot development, website creation, and related consulting services. We reserve the right to modify or discontinue services at any time without notice.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                3. User Responsibilities
              </h2>
              <p>You agree to:</p>
              <ul className="space-y-2 ml-6">
                <li>Provide accurate and up-to-date information when contacting or working with us.</li>
                <li>Use our services for lawful purposes only.</li>
                <li>Not reproduce, duplicate, sell, or exploit any part of the service without express written permission.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                4. Payments
              </h2>
              <p>
                All pricing and payment terms will be clearly communicated before project initiation. Payments are due according to the terms outlined in your project agreement or invoice.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                5. Intellectual Property
              </h2>
              <p>
                All content, code, and designs created by Virtues AI remain our intellectual property until full payment is received. After full payment, you will have full usage rights, unless otherwise specified.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                6. Limitation of Liability
              </h2>
              <p>
                Virtues AI is not liable for any indirect, incidental, or consequential damages resulting from your use of our services. We strive for high-quality results but do not guarantee specific business outcomes.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                7. Termination
              </h2>
              <p>
                We reserve the right to terminate service or access to our website for any user who violates these terms or engages in harmful behavior.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                8. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of Republic of Turkey. Any disputes will be resolved in the courts of that jurisdiction.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                9. Contact Us
              </h2>
              <p>
                If you have questions about these Terms, please reach out to us at{' '}
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