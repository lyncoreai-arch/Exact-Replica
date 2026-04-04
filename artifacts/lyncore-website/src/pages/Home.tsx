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

      {/* 2. Metrics Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Metrics that matter</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Outcomes that drive real business value, across every workflow.</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {METRICS_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${activeTab === tab ? "bg-foreground text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {METRICS[activeTab].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl md:text-5xl font-black text-primary mb-4">{item.metric}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/company/contact-us">
                <Button size="lg" className="rounded-full px-8 font-semibold">
                  Schedule a Custom Demo →
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. ROI Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">ROI you can measure instantly</h2>
                <p className="text-lg text-gray-500 max-w-xl">See measurable gains across key business metrics from day one with intelligent AI automation.</p>
              </div>
              <Link href="/resources/success-stories">
                <Button variant="outline" className="rounded-full border-gray-300 text-foreground hover:bg-gray-50 whitespace-nowrap">
                  View More Stories
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top row - two wide cards */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-5xl font-black text-foreground mb-2">90%</div>
                <p className="text-gray-500 font-medium">Reduction in TAT</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-5xl font-black text-foreground mb-2">3-4x</div>
                <p className="text-gray-500 font-medium mb-3">Improvement in lead qualification</p>
                <span className="text-sm font-semibold text-foreground">Comfort Air HVAC</span>
              </div>

              {/* Bottom row */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-black text-foreground mb-2">100%</div>
                  <p className="text-gray-500 font-medium mb-4">Of appointment bookings automated</p>
                  <span className="text-sm font-semibold text-foreground">Comfort Air HVAC</span>
                </div>
                <Link href="/resources/success-stories" className="inline-flex items-center text-primary font-semibold text-sm mt-6 hover:underline">
                  Read Story →
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-black text-foreground mb-2">99%+</div>
                  <p className="text-gray-500 font-medium mb-4">Accuracy Rate on customer inquiries</p>
                  <span className="text-sm font-semibold text-foreground">Elite Plumbing</span>
                </div>
                <Link href="/resources/success-stories" className="inline-flex items-center text-primary font-semibold text-sm mt-6 hover:underline">
                  Read Story →
                </Link>
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

      {/* 6. Enterprise Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for enterprises</h2>
              <p className="text-lg text-gray-500">Security, scale, and insights that power enterprise-grade AI operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col border border-gray-200 rounded-3xl p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Analytics</h3>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  Lyncore gives teams deep visibility into every conversation with real-time and historical analytics, so they understand customer intent, track performance, and optimize confidently.
                </p>
                <Link href="/resources/success-stories" className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                  Know More →
                </Link>
              </div>

              <div className="flex flex-col border border-gray-200 rounded-3xl p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold">Security</span>
                  <span className="text-green-500 font-bold text-lg">✓</span>
                </div>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  Enterprise-grade security is built into every layer of Lyncore, with strict access controls, auditability, and compliance to protect customer data as you scale conversations.
                </p>
                <Link href="/legal/privacy-policy" className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                  Know More →
                </Link>
              </div>

              <div className="flex flex-col border border-gray-200 rounded-3xl p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                {/* L watermark */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-2xl">
                  L
                </div>
                <h3 className="text-2xl font-bold mb-4">Integrations</h3>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  Lyncore integrates seamlessly with CRMs, ticketing tools, & internal APIs, enabling AI agents to take real actions like creating tickets, updating records, & triggering workflows.
                </p>
                <Link href="/resources/use-cases" className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                  Know More →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
              Want to experience our<br /> AI agents in action?
            </h2>
            <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
              Get a personalized demo to see how Lyncore powers human-like AI conversations at scale.
            </p>
            <Link href="/company/contact-us">
              <Button size="lg" className="rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Talk to Lyncore
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
