import { Link } from "react-router-dom";
import { ArrowRight, Anchor, Video, Sparkles, TrendingUp, Target, Send, Play } from "lucide-react";
import { useState } from "react";
import { useScrollToContact } from "@/hooks/useScrollToContact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import yachtThumb1 from "@/assets/yachting/yacht-thumb-1.jpg";
import sfcThumb2 from "@/assets/work/sfc-thumb-2.jpg";
import yachtThumb3 from "@/assets/yachting/yacht-thumb-3.jpg";

const yachtingFaqs = [
  {
    question: "Do you handle posting and scheduling?",
    answer:
      "Yes — we manage the full posting process. Once content is approved, we schedule and publish across your platforms at optimal times for engagement.",
  },
  {
    question: "What results should we expect?",
    answer:
      "A consistent, premium visual presence that builds trust and attracts high-value inquiries. Most clients see improved engagement and brand perception within the first 30-60 days.",
  },
  {
    question: "What content do you need from us?",
    answer:
      "Raw footage, photos, and any brand assets you have. We handle editing, graphics, captions, and posting. If you need filming, we can arrange that as an add-on.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Monthly packages start from €1,500–€3,500 depending on content volume and platforms. We'll scope exact pricing after the initial audit.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a Visual Presence Audit — we'll review your current presence, discuss goals, and propose a tailored plan. No commitment required for the initial call.",
  },
];

const services = [
  {
    icon: Video,
    title: "Premium Yacht Content",
    description:
      "We turn your yacht content into premium, ready-to-post videos and visuals that highlight design, experience, and lifestyle. If needed, we can also handle filming as an add-on.",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Visuals",
    description:
      "Selective AI enhancements to elevate quality, speed up delivery, and increase scroll-stopping impact — without losing the premium look.",
  },
  {
    icon: TrendingUp,
    title: "Social Presence Management",
    description:
      "Strategy, content creation, posting, and optimization across the platforms that matter for yacht sales and charter (Instagram, YouTube, Facebook, TikTok).",
  },
  {
    icon: Anchor,
    title: "Brand Identity for Yachting",
    description:
      "A clear visual and content direction that positions your brand as premium, trustworthy, and competitive internationally.",
  },
];

const process = [
  {
    icon: Target,
    title: "Visual Presence Audit",
    week: "Week 1",
    description: "We review your current presence, identify gaps, and define goals for your yachting brand.",
    step: "01",
  },
  {
    icon: Sparkles,
    title: "30-Day Plan",
    week: "Week 1–2",
    description: "Platforms, content pillars, posting cadence, and month-one deliverables for yacht content.",
    step: "02",
  },
  {
    icon: Send,
    title: "Monthly Execution",
    week: "Week 2–4",
    description: "We create yacht content, design posts/covers, write captions, and publish across platforms.",
    step: "03",
  },
  {
    icon: TrendingUp,
    title: "Optimization + Iteration",
    week: "Ongoing",
    description: "We track performance, learn what resonates with yacht buyers, and improve the next cycle.",
    step: "04",
  },
];

const projects = [
  {
    title: "Yacht Brand Teaser",
    description: "Short-form AI brand reel for creative presentation",
    tag: "Short Form",
    videoSrc: "https://storage.googleapis.com/nicks-media/sfc/1.mp4",
    thumbnail: yachtThumb1,
  },
  {
    title: "Cinematic Yacht Identity Reel",
    description: "Sketch-to-yacht transformation with dynamic pacing and transitions",
    tag: "Identity Reel",
    videoSrc: "https://storage.googleapis.com/nicks-media/sfc/2.mp4",
    thumbnail: sfcThumb2,
  },
  {
    title: "Luxury Yacht Presentation",
    description: "High-end reel presenting a premium yacht",
    tag: "Premium Reel",
    videoSrc: "https://storage.googleapis.com/nicks-media/sfc/3%20(1).mp4",
    thumbnail: yachtThumb3,
  },
];

const Yachting = () => {
  const scrollToContact = useScrollToContact();

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-col flex-1 animate-page-enter">
        {/* Hero Section */}
        <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1520] to-black" />
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
          <div className="absolute bottom-[-100px] right-[-200px] w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[120px]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 backdrop-blur-sm mb-6">
                <Anchor className="w-4 h-4 text-brand-orange" />
                <span className="text-brand-orange text-xs sm:text-sm font-medium tracking-wide">
                  For Yachting Brands
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Premium Visual Presence for <span className="text-brand-orange">Yachting Brands</span>
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                We help yacht sales, charter companies, and marine brands build a consistent, premium social presence
                that attracts high-value clients.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold text-sm sm:text-lg shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative whitespace-nowrap">Request a Visual Presence Audit</span>
                  <ArrowRight className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-foreground font-semibold text-sm sm:text-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  <span className="whitespace-nowrap">Contact Us</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do for Yachting */}
        <ScrollReveal>
          <section className="py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-orange/[0.03] rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
                  What We Do for <span className="text-brand-orange">Yachting Brands</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                  A done-for-you visual presence system tailored to the luxury marine market.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="glass-card glass-card-hover glass-accent-top group p-6">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-red/20 border border-brand-orange/20 flex items-center justify-center mb-5 group-hover:border-brand-orange/40 group-hover:shadow-lg group-hover:shadow-brand-orange/10 transition-all duration-300">
                      <service.icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* How It Works */}
        <ScrollReveal>
          <section className="py-16 sm:py-24 relative overflow-hidden">
            {/* Bold orange gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a00] to-black" />
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-orange/20 blur-[150px]" />
            <div className="absolute bottom-[-100px] left-[-200px] w-[600px] h-[600px] rounded-full bg-brand-orange/15 blur-[120px]" />

            {/* Top edge glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
            {/* Bottom edge glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 backdrop-blur-sm mb-6">
                  <span className="text-brand-orange text-xs sm:text-sm font-medium tracking-wide">How It Works</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
                  Your First 30 Days
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
                  Audit → Plan → Execute → Optimize
                </p>
              </div>

              <div className="relative max-w-6xl mx-auto">
                {/* Connection line (desktop) */}
                <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-brand-orange/20 via-brand-orange/40 to-brand-orange/20" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                  {process.map((step, index) => (
                    <div key={index} className="group relative">
                      <div className="glass-card glass-card-hover glass-accent-top p-6 h-full">
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center shadow-lg shadow-brand-orange/20 group-hover:shadow-xl group-hover:shadow-brand-orange/30 transition-shadow duration-300">
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-3xl font-bold text-brand-orange/20 group-hover:text-brand-orange/40 transition-colors">
                            {step.step}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-brand-orange font-medium uppercase tracking-wider mb-1 block">
                          {step.week}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-brand-orange transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Proof / Projects */}
        <ScrollReveal>
          <section className="py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-orange/[0.03] rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
                  Yachting <span className="text-brand-orange">Projects</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                  Recent work for yacht and marine brands.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                  <div key={index} className="glass-card glass-card-hover glass-accent-top p-6">
                    {/* Video or placeholder */}
                    {project.videoSrc && project.thumbnail ? (
                      <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-5 shadow-lg">
                        <video
                          className="w-full h-full object-cover"
                          src={project.videoSrc}
                          poster={project.thumbnail}
                          controls
                          loop
                          playsInline
                        />
                      </div>
                    ) : (
                      <div className="aspect-[9/16] rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-red/10 border border-white/[0.08] mb-5 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.tag}</span>
                      </div>
                    )}
                    <span className="text-brand-orange font-semibold text-[10px] sm:text-xs uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <section className="py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-red/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
                  Ready to Elevate Your <span className="text-brand-orange">Yachting Brand</span>?
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-10">
                  Let's build a visual presence that attracts high-value clients and positions your brand as the premium
                  choice.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={scrollToContact}
                    className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold text-sm sm:text-lg shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative whitespace-nowrap">Request a Visual Presence Audit</span>
                    <ArrowRight className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-foreground font-semibold text-sm sm:text-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                  >
                    <span className="whitespace-nowrap">Contact Us</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base mt-6">
                  If you want to learn more of our strategies, check the{" "}
                  <Link to="/" className="text-brand-orange hover:underline">
                    home page
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Yachting FAQ */}
        <ScrollReveal>
          <section className="py-16 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/[0.03] rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center mb-10 sm:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                  Frequently Asked <span className="text-brand-orange">Questions</span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {yachtingFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="glass-card border border-white/[0.08] rounded-xl px-5 sm:px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left py-4 sm:py-5 hover:no-underline group">
                        <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-brand-orange transition-colors pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 sm:pb-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </main>
  );
};

export default Yachting;
