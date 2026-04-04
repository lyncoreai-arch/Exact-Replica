import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <PageLayout>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/40 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <AnimatedSection>
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gray-700 mb-6 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Experience Lyncore &rarr;
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] mb-6">
                  <span className="text-primary">AI Chatbot &</span><br />
                  Receptionist for Home Service Businesses
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Transform customer interactions with intelligent AI that handles appointments, answers questions, and keeps your business running 24/7—so you never miss an opportunity.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                  <Link href="/company/contact-us">
                    <Button size="lg" className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                      SCHEDULE A CUSTOM DEMO &rarr;
                    </Button>
                  </Link>
                  <Link href="/company/contact-us">
                    <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold w-full sm:w-auto border-gray-300 hover:bg-gray-50">
                      &#9654; EXPERIENCE LYNCORE
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e2e8f0`} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p>Built for home service professionals...<br />And more 100+ happy clients across the globe</p>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px]">
                  <div className="bg-primary px-6 py-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">LA</div>
                    <div>
                      <h3 className="text-white font-semibold">Lyncore AI Agent</h3>
                      <p className="text-primary-foreground/70 text-xs flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 overflow-y-auto flex flex-col gap-4">
                    <div className="self-end bg-primary text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">Hi, I need to schedule an HVAC repair appointment for tomorrow.</p>
                    </div>
                    <div className="self-start bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">Hello! I'd be happy to help you schedule an HVAC repair. What time works best for you tomorrow?</p>
                    </div>
                    <div className="self-end bg-primary text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">Morning would be great, around 9 AM.</p>
                    </div>
                    <div className="self-start bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">Perfect! I've scheduled your HVAC repair for tomorrow at 9:00 AM. You'll receive a confirmation text shortly. Is there anything else I can help you with?</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <div className="bg-gray-50 border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-400 flex items-center justify-between">
                      <span>Type your message...</span>
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">&uarr;</div>
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
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Metrics that matter</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Outcomes that drive real business value, across every workflow.</p>
            </div>
            
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {['INTERNAL WORKFLOWS', 'OUTBOUND', 'INBOUND'].map((tab, i) => (
                <button key={tab} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "60-70%", title: "Reduction in Processing Time", desc: "Automate repetitive, rule-based internal tasks end to end." },
                { metric: "3X", title: "Faster Workflow Completion", desc: "From intake to completion across multi-stage processes." },
                { metric: "50%", title: "Fewer Human Touchpoints", desc: "AI agents handle validation, routing, and execution autonomously." },
                { metric: "2X", title: "Higher Throughput", desc: "Scale operations without linear team growth or additional headcount." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black text-primary mb-4">{item.metric}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. ROI Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">ROI you can measure instantly</h2>
                <p className="text-lg text-gray-400">See measurable gains across key business metrics from day one with intelligent AI automation.</p>
              </div>
              <Link href="/resources/success-stories">
                <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                  View More Stories
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stat: "90%", desc: "Reduction in TAT" },
                { stat: "3-4x", desc: "Improvement in lead qualification", author: "Comfort Air HVAC" },
                { stat: "100%", desc: "Of appointment bookings automated", author: "Elite Plumbing", link: "Read Story" },
                { stat: "99%+", desc: "Accuracy Rate on customer inquiries", link: "Read Story" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between min-h-[240px]">
                  <div>
                    <div className="text-5xl font-black text-white mb-4">{item.stat}</div>
                    <p className="text-lg font-medium text-gray-300">{item.desc}</p>
                  </div>
                  {(item.author || item.link) && (
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                      {item.author && <span className="text-sm text-gray-400">{item.author}</span>}
                      {item.link && <span className="text-sm text-primary font-semibold hover:underline cursor-pointer">{item.link} &rarr;</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Any use case. Any channel</h2>
                <p className="text-lg text-gray-600 max-w-2xl">AI agents built to execute work across journeys and interfaces.</p>
              </div>
              <Link href="/resources/use-cases">
                <Button variant="outline" className="rounded-full">
                  Explore Use Cases
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-50/50 rounded-3xl p-10 border border-blue-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Journey Automation</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  From customer support to sales and beyond. Lyncore powers intelligent AI agents across the customer journey, from support and sales to automated operations, adapting to any use case.
                </p>
                <div className="w-full h-48 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                  <div className="w-full px-8 py-4">
                    <div className="h-2 bg-gray-100 rounded-full w-full mb-4 overflow-hidden"><div className="h-full bg-primary w-1/3 rounded-full"></div></div>
                    <div className="h-2 bg-gray-100 rounded-full w-full mb-4 overflow-hidden"><div className="h-full bg-blue-400 w-2/3 rounded-full"></div></div>
                    <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden"><div className="h-full bg-indigo-400 w-1/2 rounded-full"></div></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Channel Continuity</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  Across voice, chat, email and more. Make a call. Send a text. Chat instantly. Lyncore delivers seamless, context-aware conversations across voice, SMS, email, and chat—so customers never repeat themselves.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['VOICE', 'CHAT', 'EMAIL', 'SMS', 'WEB', 'API'].map(channel => (
                    <div key={channel} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm flex-1 text-center min-w-[100px]">
                      {channel}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. How We Build Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">How we build, deploy, and run AI agents at scale</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-6">
                {[
                  { title: "Low-Latency AI Infrastructure", desc: "Optimized for real-time conversations, not text-first systems from the ground up." },
                  { title: "Built for Long Conversations", desc: "Handles transfers, pauses, interruptions, and retries gracefully." },
                  { title: "Designed for Scale", desc: "From pilot to thousands of conversations without architectural rewrites." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="lg:col-span-7 bg-gray-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-12 bg-gray-800/50 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-xs text-gray-400 font-mono">agent.ts</span>
                </div>
                <div className="mt-8 font-mono text-sm leading-relaxed overflow-x-auto">
                  <pre className="text-gray-300">
<span className="text-blue-400">const</span> agent = lyncore.<span className="text-yellow-300">create</span>({`
  name: `}<span className="text-green-400">'HVAC Assistant'</span>{`,
  voice: `}<span className="text-green-400">'natural'</span>{`,
  language: `}<span className="text-green-400">'en-US'</span>{`,
  capabilities: [
    `}<span className="text-green-400">'booking'</span>{`,
    `}<span className="text-green-400">'support'</span>{`,
    `}<span className="text-green-400">'quotes'</span>{`
  ]
`});
                  </pre>
                </div>
                <div className="mt-8">
                  <h4 className="text-white font-bold text-lg mb-2">Build: AI Agents for Conversations</h4>
                  <p className="text-gray-400 text-sm mb-6">Lyncore builds AI agents designed for real-world interactions—not scripted demos. Agents are optimized for low latency, natural turn-taking, interruptions, and long conversations, ensuring they respond fluidly even in complex, multi-step interactions.</p>
                  <Link href="/resources/ai-explained">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for enterprises</h2>
              <p className="text-lg text-gray-600">Security, scale, and insights that power enterprise-grade AI operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Analytics", desc: "Lyncore gives teams deep visibility into every conversation with real-time and historical analytics, so they understand customer intent, track performance, and optimize confidently.", link: "/resources/success-stories" },
                { title: "Security", desc: "Enterprise-grade security is built into every layer of Lyncore, with strict access controls, auditability, and compliance to protect customer data as you scale conversations.", link: "/legal/privacy-policy", icon: "✓" },
                { title: "Integrations", desc: "Lyncore integrates seamlessly with CRMs, ticketing tools, & internal APIs, enabling AI agents to take real actions like creating tickets, updating records, & triggering workflows.", link: "/resources/use-cases" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col h-full group">
                  <div className="flex-grow bg-white border border-gray-200 rounded-3xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 text-xl font-bold">
                      {item.icon || (i + 1)}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-8">{item.desc}</p>
                    <Link href={item.link} className="inline-flex items-center text-primary font-semibold hover:underline mt-auto">
                      Know More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIwaDJ2LTIwaC0yem0wLTMyVjIyaDJWMmgtMnpNMTggMzR2MjBoMnYtMjBoLTJ6TTE4IDJWMjJoMlYyaC0yek0wIDM0aDE2djJoLTE2di0yem0wLTMyaDE2djJoLTE2VjJ6bTQ0IDMySDYwdjJoLTE2di0yem0wLTMySDYwdjJoLTE2VjJ6TTM0IDE4djJoMTh2LTJoLTE4em0tMjYgMnYtMmgxOHYyaC0xOHptLThfMTBoMTh2MmgtMTh2LTJ6bTQ0IDBoMTh2MmgtMTh2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black mb-6 max-w-3xl mx-auto leading-tight">Want to experience our AI agents in action?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Get a personalized demo to see how Lyncore powers human-like AI conversations at scale.</p>
            <Link href="/company/contact-us">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-50 rounded-full px-10 py-7 text-lg font-bold shadow-xl">
                Talk to Lyncore &rarr;
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
