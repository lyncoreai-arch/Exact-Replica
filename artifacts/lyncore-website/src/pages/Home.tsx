import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const METRICS_TABS = ["INTERNAL WORKFLOWS", "OUTBOUND", "INBOUND"] as const;

const METRICS: Record<string, { metric: string; title: string; desc: string }[]> = {
  "INTERNAL WORKFLOWS": [
    { metric: "60-70%", title: "Reduction in Processing Time", desc: "Automate repetitive, rule-based internal tasks end to end." },
    { metric: "3X", title: "Faster Workflow Completion", desc: "From intake to completion across multi-stage processes." },
    { metric: "50%", title: "Fewer Human Touchpoints", desc: "AI agents handle validation, routing, and execution autonomously." },
    { metric: "2X", title: "Higher Throughput", desc: "Scale operations without linear team growth or additional headcount." },
  ],
  "OUTBOUND": [
    { metric: "4X", title: "Increase in Outbound Reach", desc: "Scale outbound campaigns without adding headcount." },
    { metric: "65%", title: "Reduction in Call Time", desc: "AI handles initial qualification before human handoff." },
    { metric: "3X", title: "More Qualified Leads", desc: "Automated screening ensures only warm leads reach your team." },
    { metric: "80%", title: "Lower Cost Per Lead", desc: "AI-powered outreach at a fraction of traditional cost." },
  ],
  "INBOUND": [
    { metric: "99%", title: "First-Contact Resolution", desc: "Instantly resolve common inquiries without human involvement." },
    { metric: "24/7", title: "Always-On Availability", desc: "Never miss a call or inquiry, day or night, weekends included." },
    { metric: "90%", title: "Reduction in Wait Time", desc: "Customers get answers instantly — no hold queues." },
    { metric: "5X", title: "Faster Response Rate", desc: "AI responds to inbound leads within seconds, not hours." },
  ],
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("INTERNAL WORKFLOWS");

  return (
    <PageLayout>
      {/* 1. Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{
          background: "linear-gradient(120deg, #bcc8ff 0%, #d4dbff 18%, #e8ecff 32%, #f2f4fb 45%, #edf1e8 58%, #ddeabd 78%, #cde099 100%)"
        }}
      >
        {/* Extra soft blobs for depth */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 90% at 15% 45%, rgba(155,168,255,0.45) 0%, transparent 65%)"
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 80% at 85% 50%, rgba(180,218,100,0.35) 0%, transparent 65%)"
        }} />

        <div className="container mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left column */}
            <div className="flex-1 text-left max-w-xl">
              <AnimatedSection>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-700 mb-8 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  Experience Lyncore
                  <span className="text-gray-400">→</span>
                </div>

                {/* Headline — stacked like reference */}
                <h1 className="font-black tracking-tight leading-[1.05] mb-6" style={{ fontSize: "clamp(42px,5.5vw,72px)" }}>
                  <span className="text-primary">AI Chatbot &</span>
                  <br />
                  <span className="text-foreground">Receptionist</span>
                  <br />
                  <span className="text-foreground">for Home Service</span>
                  <br />
                  <span className="text-foreground">Businesses</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Transform customer interactions with intelligent AI that handles appointments, answers questions, and keeps your business running 24/7—so you never miss an opportunity.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                  <Link href="/company/contact-us">
                    <Button size="lg" className="rounded-full px-8 py-6 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all">
                      SCHEDULE A CUSTOM DEMO →
                    </Button>
                  </Link>
                  <Link href="/company/contact-us">
                    <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-sm font-semibold tracking-wide border-gray-300 bg-white/60 hover:bg-white/80">
                      ▶ EXPERIENCE LYNCORE
                    </Button>
                  </Link>
                </div>

                {/* Social proof */}
                <div className="text-sm text-gray-600 leading-relaxed max-w-sm">
                  <p>Built for home service professionals who want to capture every lead, reduce no-shows, and deliver exceptional customer experiences.</p>
                  <p className="font-bold text-foreground mt-2">And more 100+ happy clients across the globe</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right column — Chat widget */}
            <div className="flex-1 w-full max-w-[520px] lg:max-w-none">
              <AnimatedSection delay={0.15}>
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden" style={{ maxWidth: 500, marginLeft: "auto" }}>
                  {/* Chat header — matches reference exactly */}
                  <div className="bg-primary px-5 py-4 flex items-center gap-3">
                    {/* L avatar */}
                    <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      L
                    </div>
                    {/* Title block */}
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Appointment Booking</div>
                      <div className="text-white/70 text-xs">Lyncore AI Agent</div>
                    </div>
                    {/* Traffic lights (macOS style) on right */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="bg-white px-5 py-5 flex flex-col gap-4 min-h-[320px]">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] text-sm">
                        Hi, I need to schedule an HVAC repair appointment for tomorrow.
                      </div>
                    </div>

                    {/* Agent message */}
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold flex-shrink-0 mt-0.5">
                        L
                      </div>
                      <div className="bg-primary text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] text-sm">
                        Hello! I'd be happy to help you schedule an HVAC repair. What time works best for you tomorrow?
                      </div>
                    </div>

                    {/* User message */}
                    <div className="flex justify-start pl-9">
                      <div className="text-gray-600 text-sm px-1 py-1">
                        Morning would be great, around 9 AM.
                      </div>
                    </div>

                    {/* Agent message */}
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold flex-shrink-0 mt-0.5">
                        L
                      </div>
                      <div className="bg-primary text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] text-sm">
                        Perfect! I've scheduled your HVAC repair for tomorrow at 9:00 AM. You'll receive a confirmation text shortly. Is there anything else I can help you with?
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex items-center gap-1.5 pl-9">
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="px-5 py-4 border-t border-gray-100 bg-white">
                    <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5">
                      <span className="text-sm text-gray-400 flex-1">Type your message...</span>
                      <button className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 hover:bg-primary/90 transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics Section — dark navy to match reference section-dark */}
      <section className="py-24 lg:py-32" style={{ background: "#1A1F36" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 rounded-full shrink-0 mt-1" style={{ background: "#C8E636" }} />
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Metrics that matter</h2>
                  <p className="text-gray-400 max-w-md">Outcomes that drive real business value, across every workflow.</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-10 flex-wrap">
              {METRICS_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all border ${
                    activeTab === tab
                      ? "bg-white text-[#1A1F36] border-white"
                      : "bg-transparent text-gray-400 border-white/20 hover:border-white/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {METRICS[activeTab].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-black text-white mb-3">{item.metric}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/company/contact-us">
                <button className="btn-primary">Schedule a Custom Demo →</button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. ROI / Success Stories Section — gray bg with dark story cards */}
      <section className="py-24 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">
                  ROI you can measure <span className="text-[#3B5BFE]">instantly</span>
                </h2>
                <p className="text-[#6B7280] max-w-xl">See measurable gains across key business metrics from day one with intelligent AI automation.</p>
              </div>
              <Link href="/resources/success-stories">
                <button className="btn-secondary whitespace-nowrap">View More Stories</button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stat card 1 — dark with lime green metric */}
              <div className="bg-gradient-to-br from-[#1A1F36] to-[#2d3655] rounded-2xl p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-bold text-[#C8E636] mb-2">90%</div>
                  <p className="text-white/80 text-sm">Reduction in TAT</p>
                </div>
              </div>

              {/* Stat card 2 — dark with lime green metric */}
              <div className="bg-gradient-to-br from-[#2d3655] to-[#1A1F36] rounded-2xl p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-bold text-[#C8E636] mb-2">3-4x</div>
                  <p className="text-white/80 text-sm mb-3">Improvement in lead qualification</p>
                  <span className="text-white font-semibold text-sm">Comfort Air HVAC</span>
                </div>
              </div>

              {/* Story card 1 — Comfort Air HVAC */}
              <div className="story-card flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3B5BFE] flex items-center justify-center text-white font-bold shrink-0">T</div>
                  <div>
                    <div className="text-white font-semibold text-sm">Tom Bradley</div>
                    <div className="text-gray-400 text-xs">Owner · Comfort Air HVAC</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow italic">
                  "We used to miss calls during peak season. Now Lyncore handles every inquiry instantly and books jobs while we're out in the field."
                </p>
                <div className="border-t border-white/10 mt-6 pt-6 flex items-end justify-between">
                  <div>
                    <div className="text-4xl font-bold text-[#C8E636] mb-1">100%</div>
                    <div className="text-gray-400 text-xs">Of appointment bookings automated</div>
                  </div>
                  <Link href="/resources/success-stories">
                    <button className="btn-outline-white text-xs py-2 px-4">Read Story</button>
                  </Link>
                </div>
              </div>

              {/* Story card 2 — Elite Plumbing */}
              <div className="story-card flex flex-col" style={{ background: "linear-gradient(135deg, #2d3655, #1A1F36)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3B5BFE] flex items-center justify-center text-white font-bold shrink-0">M</div>
                  <div>
                    <div className="text-white font-semibold text-sm">Mike Johnson</div>
                    <div className="text-gray-400 text-xs">Owner · Elite Plumbing</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow italic">
                  "Emergency calls used to go to voicemail after hours. Now Lyncore handles them instantly — we've seen a 60% increase in emergency job bookings."
                </p>
                <div className="border-t border-white/10 mt-6 pt-6 flex items-end justify-between">
                  <div>
                    <div className="text-4xl font-bold text-[#C8E636] mb-1">99%+</div>
                    <div className="text-gray-400 text-xs">Accuracy Rate on inquiries</div>
                  </div>
                  <Link href="/resources/success-stories">
                    <button className="btn-outline-white text-xs py-2 px-4">Read Story</button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Use Cases Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Any use case. Any channel</h2>
                <p className="text-lg text-gray-500">AI agents built to execute work across journeys and interfaces.</p>
              </div>
              <Link href="/resources/use-cases">
                <Button variant="outline" className="rounded-full border-gray-300 text-foreground hover:bg-gray-50 whitespace-nowrap">
                  Explore Use Cases
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Journey Automation</h3>
                <p className="text-gray-500 leading-relaxed">
                  From customer support to sales and beyond. Lyncore powers intelligent AI agents across the customer journey, from support and sales to automated operations, adapting to any use case.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Channel Continuity</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Across voice, chat, email and more. Make a call. Send a text. Chat instantly. Lyncore delivers seamless, context-aware conversations across voice, SMS, email, and chat—so customers never repeat themselves.
                  </p>
                </div>

                <div className="mt-4">
                  {/* L badge */}
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-6">
                    L
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['VOICE', 'CHAT', 'EMAIL', 'SMS', 'WEB', 'API'].map(channel => (
                      <div key={channel} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 shadow-sm tracking-wider">
                        {channel}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. How We Build Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl">How we build, deploy, and run AI agents at scale</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col gap-6">
                {[
                  { title: "Low-Latency AI Infrastructure", desc: "Optimized for real-time conversations, not text-first systems from the ground up." },
                  { title: "Built for Long Conversations", desc: "Handles transfers, pauses, interruptions, and retries gracefully." },
                  { title: "Designed for Scale", desc: "From pilot to thousands of conversations without architectural rewrites." },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-7 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                {/* Mac window chrome */}
                <div className="flex items-center gap-1.5 px-5 py-3 bg-gray-800/60">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Code snippet */}
                <div className="px-8 py-6 font-mono text-sm leading-7">
                  <div><span className="text-gray-500">1</span><span className="ml-4 text-blue-400">const</span><span className="text-white"> agent </span><span className="text-blue-400">=</span><span className="text-white"> lyncore.</span><span className="text-yellow-300">create</span><span className="text-white">({"{"}</span></div>
                  <div><span className="text-gray-500">2</span><span className="ml-8 text-white">name: </span><span className="text-green-400">'HVAC Assistant'</span><span className="text-white">,</span></div>
                  <div><span className="text-gray-500">3</span><span className="ml-8 text-white">voice: </span><span className="text-green-400">'natural'</span><span className="text-white">,</span></div>
                  <div><span className="text-gray-500">4</span><span className="ml-8 text-white">language: </span><span className="text-green-400">'en-US'</span><span className="text-white">,</span></div>
                  <div><span className="text-gray-500">5</span><span className="ml-8 text-white">capabilities: [</span></div>
                  <div><span className="text-gray-500">6</span><span className="ml-12 text-green-400">'booking'</span><span className="text-white">,</span></div>
                  <div><span className="text-gray-500">7</span><span className="ml-12 text-green-400">'support'</span><span className="text-white">,</span></div>
                  <div><span className="text-gray-500">8</span><span className="ml-12 text-green-400">'quotes'</span></div>
                  <div><span className="text-gray-500">9</span><span className="ml-8 text-white">]</span></div>
                  <div><span className="text-gray-500">10</span><span className="ml-4 text-white">{"}"});</span></div>
                </div>

                <div className="px-8 pb-8">
                  <h4 className="text-white font-bold text-xl mb-3">Build: AI Agents for Conversations</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Lyncore builds AI agents designed for real-world interactions—not scripted demos. Agents are optimized for low latency, natural turn-taking, interruptions, and long conversations, ensuring they respond fluidly even in complex, multi-step interactions.
                  </p>
                  <Link href="/resources/ai-explained">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold">
                      Know More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Enterprise Section — horizontal scroll cards to match reference */}
      <section className="py-24 lg:py-32 bg-[#F5F5F7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <AnimatedSection>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-1 h-10 rounded-full shrink-0 mt-1" style={{ background: "#3B5BFE" }} />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36]">
                  Built for <span className="text-[#3B5BFE]">enterprises</span>
                </h2>
                <p className="text-[#6B7280] max-w-xl mt-2">Security, scale, and insights that power enterprise-grade AI operations</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Horizontal scroll track */}
        <div className="flex gap-6 overflow-x-auto pb-4 px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {/* Analytics card */}
          <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-start bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="h-40 mb-6 rounded-2xl bg-gradient-to-t from-[#3B5BFE] to-[#3B5BFE]/60 flex items-end p-4 overflow-hidden">
              <div className="w-full">
                <div className="flex justify-between items-end gap-1 h-20">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? "#C8E636" : "rgba(255,255,255,0.3)" }} />
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1F36] mb-3">Analytics</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed flex-grow mb-6">
              Deep visibility into every conversation with real-time and historical analytics, so you understand customer intent, track performance, and optimize confidently.
            </p>
            <Link href="/resources/success-stories" className="inline-flex items-center text-[#3B5BFE] font-semibold text-sm hover:underline">
              Know More →
            </Link>
          </div>

          {/* Security card */}
          <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-start bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="h-40 mb-6 rounded-2xl bg-[#1A1F36] flex items-center justify-center relative overflow-hidden">
              <div className="w-16 h-20 border-2 border-[#C8E636] rounded-t-full flex items-end justify-center pb-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#C8E636] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#C8E636]" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-[#C8E636] text-xs font-bold">SOC 2 Type II</div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-[#1A1F36]">Security</h3>
              <span className="text-green-500 font-bold">✓</span>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed flex-grow mb-6">
              Enterprise-grade security built into every layer — strict access controls, auditability, and compliance to protect customer data as you scale.
            </p>
            <Link href="/legal/privacy-policy" className="inline-flex items-center text-[#3B5BFE] font-semibold text-sm hover:underline">
              Know More →
            </Link>
          </div>

          {/* Integrations card */}
          <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-start bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden">
            <div className="h-40 mb-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center relative">
              <div className="grid grid-cols-3 gap-3 p-4">
                {['CRM', 'SMS', 'API', 'Cal', 'ERP', 'Slack'].map((tool, i) => (
                  <div key={i} className="w-10 h-10 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center text-[9px] font-bold text-[#3B5BFE]">
                    {tool}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#3B5BFE]/10 flex items-center justify-center text-[#3B5BFE] font-black text-sm">L</div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1F36] mb-3">Integrations</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed flex-grow mb-6">
              Connect seamlessly with CRMs, ticketing tools, and internal APIs — enabling AI agents to take real actions like creating tickets, updating records, and triggering workflows.
            </p>
            <Link href="/resources/use-cases" className="inline-flex items-center text-[#3B5BFE] font-semibold text-sm hover:underline">
              Know More →
            </Link>
          </div>

          {/* Compliance card */}
          <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-start bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="h-40 mb-6 rounded-2xl bg-gradient-to-br from-[#3B5BFE]/10 to-[#C8E636]/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-[#1A1F36] mb-1">99.9%</div>
                <div className="text-xs text-[#6B7280]">Uptime SLA</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1A1F36] mb-3">Reliability</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed flex-grow mb-6">
              Built for mission-critical operations with 99.9% uptime SLA, automatic failover, and redundant infrastructure across multiple regions.
            </p>
            <Link href="/company/about-us" className="inline-flex items-center text-[#3B5BFE] font-semibold text-sm hover:underline">
              Know More →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Pricing Preview Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-xl">
                <span className="inline-block text-[#3B5BFE] font-bold text-xs tracking-widest uppercase mb-3">Pricing</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">
                  Plans built for every stage of growth
                </h2>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  From your first AI chatbot to a full-scale voice receptionist with CRM integration — pick the plan that fits where you are today.
                </p>
                <Link href="/pricing">
                  <button className="btn-primary">See All Plans →</button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                {[
                  { name: "Starter", price: "$197", desc: "AI chatbot + leads", popular: false },
                  { name: "Pro", price: "$497", desc: "Voice + CRM + booking", popular: true },
                  { name: "Premium", price: "$997", desc: "Multi-location + custom", popular: false },
                ].map((plan) => (
                  <Link key={plan.name} href="/pricing">
                    <div className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-200 w-full sm:w-[160px] ${
                      plan.popular
                        ? "bg-[#1A1F36] ring-2 ring-[#3B5BFE] shadow-xl"
                        : "bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}>
                      {plan.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3B5BFE] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide whitespace-nowrap">
                          Most Popular
                        </span>
                      )}
                      <div className={`text-xs font-bold mb-2 ${plan.popular ? "text-gray-400" : "text-[#6B7280]"}`}>{plan.name}</div>
                      <div className={`text-2xl font-black mb-1 ${plan.popular ? "text-white" : "text-[#1A1F36]"}`}>{plan.price}</div>
                      <div className={`text-[10px] ${plan.popular ? "text-gray-400" : "text-[#6B7280]"}`}>/month</div>
                      <div className={`text-xs mt-3 leading-snug ${plan.popular ? "text-gray-300" : "text-[#6B7280]"}`}>{plan.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. CTA Section — matches reference DemoCTA with grid background */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            backgroundColor: "#F5F5F7",
            opacity: 0.6,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F36] mb-6 leading-tight">
              Want to experience our{" "}
              <span className="text-[#3B5BFE]">AI agents</span>{" "}
              in action?
            </h2>
            <p className="text-lg text-[#6B7280] mb-10 max-w-xl mx-auto">
              Get a personalized demo to see how Lyncore powers human-like AI conversations at scale.
            </p>
            <Link href="/company/contact-us">
              <button className="btn-primary text-base px-10 py-4">Talk to Lyncore</button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
