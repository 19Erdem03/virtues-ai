import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import Navigation from './Navigation';

interface CookiePolicyProps {
  onBack: () => void;
  onHome: () => void;
  onBookCall: (service?: string) => void;
  onCookiePolicy: () => void;
  onPrivacyPolicy: () => void;
  onTermsOfService: () => void;
}

export default function CookiePolicy({ onBack, onHome, onBookCall, onCookiePolicy, onPrivacyPolicy, onTermsOfService }: CookiePolicyProps) {
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
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 tracking-wide">
              <strong>Last updated: 17/07/2025</strong>
            </p>
            
            <div className="space-y-6 text-gray-700 leading-relaxed tracking-wide">
              <p>
                At Virtues AI, we use cookies to improve your experience on our website. Cookies help us understand how you interact with our site, allowing us to enhance performance, personalize content, and provide relevant services.
              </p>
              
              <p>
                By using our website, you consent to the use of cookies. You can choose to disable cookies through your browser settings, though this may affect certain features of the site.
              </p>
              
              <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4 tracking-wide">
                Types of cookies we use:
              </h2>
              
              <div className="space-y-4">
                <div>
                  <strong className="text-black">Essential cookies:</strong> Required for basic site functionality.
                </div>
                
                <div>
                  <strong className="text-black">Analytics cookies:</strong> Help us track website traffic and usage patterns.
                </div>
                
                <div>
                  <strong className="text-black">Functional cookies:</strong> Enhance user experience (e.g., remembering preferences).
                </div>
              </div>
              
              <p className="mt-8">
                If you have questions about our use of cookies, please contact us at{' '}
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