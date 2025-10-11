import React from 'react';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, Download, Play, Star } from 'lucide-react';

export default function GradientButtonShowcase() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Gradient Button Showcase
          </h2>
          <p className="text-xl text-gray-400 tracking-wide">
            Beautiful animated gradient buttons with hover effects
          </p>
        </div>

        <div className="space-y-12">
          {/* Basic Buttons */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-wide">Basic Variants</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <GradientButton>Get Started</GradientButton>
              <GradientButton variant="variant">Learn More</GradientButton>
            </div>
          </div>

          {/* Buttons with Icons */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-wide">With Icons</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <GradientButton className="gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </GradientButton>
              <GradientButton variant="variant" className="gap-2">
                <Download className="w-4 h-4" />
                Download
              </GradientButton>
              <GradientButton className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </GradientButton>
              <GradientButton variant="variant" className="gap-2">
                <Star className="w-4 h-4" />
                Premium
              </GradientButton>
            </div>
          </div>

          {/* Different Sizes */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-wide">Custom Sizes</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <GradientButton className="px-6 py-2 text-sm min-w-[100px]">
                Small
              </GradientButton>
              <GradientButton>
                Default
              </GradientButton>
              <GradientButton className="px-12 py-6 text-lg min-w-[180px]">
                Large
              </GradientButton>
            </div>
          </div>

          {/* Usage Example */}
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">Usage Example</h3>
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`import { GradientButton } from '@/components/ui/gradient-button';

function MyComponent() {
  return (
    <div className="flex gap-4">
      <GradientButton onClick={() => console.log('clicked')}>
        Get Started
      </GradientButton>
      <GradientButton variant="variant">
        Learn More
      </GradientButton>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}