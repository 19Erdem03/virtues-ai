"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ICONS_ROW1 = [
  "https://cdn.prod.website-files.com/657639ebfb91510f45654149/684b0e84bca6e63d2fc38b29_n8n-color.webp",
  "https://play-lh.googleusercontent.com/48jrCqrPKi0Af5z9gMVGVVap1EEfswtQuwh9tAdF7nL478jKzg2i9KiC6b2NMMoSaVM=w240-h480-rw",
"https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0Jrtx7vKE7KI9OTpwNWfq0o-yZWEOCBvGQ&s",
  "https://cdn.brandfetch.io/vapi.ai?c=1idGuZjjNQsbnvHtiGk",
"https://phantombuster.imgix.net/assets/images/Phantombuster+logo.png",
  "data:image/png;base64,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",
];

const ICONS_ROW2 = [
"https://yt3.googleusercontent.com/Cc736_65oWUSp_BV-JgSuCeORQaUgSzO3Vywpdawiga6cM_T4sLLIOzkJVVXZajgxczIJavl=s900-c-k-c0x00ffffff-no-rj",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzaiwDsxzzXlgk5iJ0HKedyqN-crcX5qc1g&s",
  "data:image/png;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwKiaVHgAu30DQM6T6gz_P1-HKTv4HYa6ew&s",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAsVBMVEX///9ChfT7vAQ0qFMYgDgZZ9Iac+jqQzWHtvP0oJmMuPNyqfHw9v4keen3+v8hd+hSle3F3Pmjx/Yrfeno8f1Aiux3rPE8ftkhbNPZ6PuRvPRKkO3K3/oygerg7Pxbm+6y0PeAsfI7k1azzvt4qPdel/VKivRck9+jw+2Mtfh1o+TA1vunxvqTuOqyzPDT4vZnmuFtofZloe9UoWySw6Hf7uNmq3uy1Lx0s4fu9vGjzbBFjlpLAAAD50lEQVR4nO3caXeaQBgF4OnC1CKi4pKgoliTpq1t0ybd//8PKxqGxRnisATeybn3m+jh3MdhFIZExhAEQRAEQRAEQRAEOY2zu7p+/6KlWAW5vLj54FSqP/3YVvdHAUfEp2n5/vtW6z8OiAhfy/b/3HL/MwDL+kL7/T8PsEqNwbr1/ucBl7clAFcEAdY30gOgAbDW2oDWZ7AeQH8ef6cJuNEGXNMEXGgDWjt/KAe41AZ00F8HYAEAAAAAAAAAAAAAAAAAAAAAAAAAANA9QHtnmnmpEQAAAAAAAAAAAAAAAACAMsDfewvbDiv8kRsFQLgZ8DhLe/XI/p0IadtjYoBwxnOZjRV7PmYVHF/QIwWYLrmUrXrvvfhpUgA/kPtzPnLlfa8TKSWAo+zP+UbatZdME1KAkbq/dBQ5m8xzhABe2moZfbz003eZ5/7ObZUbKEKAiejU94+PXS/5RJpnXtbjnCYgGYAw3SaOlUGyZX36OUUHsIrbLjLbXHG0+EI54GQB0bvbi46iILfJzo+KnxafEQRECUde7vE4rim2zkX/O5cm4DTiLRfHlfMw04cRyAzAKq65ExvCw6PgMCXMACzimulZ6eZw+DBjAPFUHaZbppN4PhgBEAOQPZcQlzkmAER/rvrvHfIAJz2TWKieJwxYjKJkThn6ylcRBvR5Lnfq3ZsCGHrK15gD6CsuKI0C8EnBEBgDKJoEBgEUV/W0Af44itfbFC09kAeIOL2hECjW5wwAZFbqZoYCmDsrHAIzAMk15Vx6xhCAWC2SjyFTAGJpyAyAs5DuaIh1COl2DUGAPx/KdwPu4qLSNQ05wP64OD05PXcLTDmExPnDydWXWFehP4lD8aXr53YivsnkqzJqgGR1Pcgc7W5yK2NPHyDWcTMXALfJZX0g754cwE1vvCy98dRd2Zk7roqLGnIAtuOFUZzLEQSwbVH/ieq3IAgC5EuxuL/y50QoAlgo3UE6HD/qnwUiCWBTeRC2BesqNAEPJ0RpBnNffgltQHRKGm5Hs8OxFGzColWtopAA1AkAAAAAAAAAAAAAAAA8E8BrjbxqOG/O563hAP3+NAEl+pMElOlPEVCqP0FAuf70ACX7kwOU7U8NULo/MUD5/rQAFfqTAlTpTwlQqT8hQLX+dAAV+5MBVO1PBVC5PxFA9f40ADX6kwDU6U8BUKs/AUC9/t0DavbvHFC3f9eA2v3Zu04B9fuz+y4BDfRnPzoENNGf/ewO0Eh/xn51BWiov84QPAmgqf6M/e4E0Fx/jXn8BIAm+58fg+YBzfaP5sGfdgFN94/y99998Xdy04An6I8gCIIgCIIgCIIgzzr/AVPYyAITD+zfAAAAAElFTkSuQmCC",
  "data:image/png;base64,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",
"https://yt3.googleusercontent.com/IZbSoYUQI84hzK0P8JO-0nPmq1WLiZCVwTcNoVIlzysjGp26LtzWJvD-cdJK_1X02JRXszuSAw=s900-c-k-c0x00ffffff-no-rj",
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-black">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white">
          ⚡ Integrations
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Integrate with favorite tools
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-white max-w-xl mx-auto">
          250+ top apps are available to integrate seamlessly with your workflow.
        </p>
        <Button variant="default" className="mt-8 px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition">
          Get started
        </Button>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center">
                <img src={src} alt="icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center">
                <img src={src} alt="icon" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}