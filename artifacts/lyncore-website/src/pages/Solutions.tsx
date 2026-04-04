import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

interface SolutionChatMessage {
  role: "user" | "agent";
  text: string;
}

interface SolutionPageProps {
  tag: string;
  title: string;
  titleHighlight?: string;
  description: string;
  capabilities: { title: string; desc: string; bullets: string[] }[];
  metrics: { num: string; label: string }[];
  testimonial?: { quote: string; name: string; role: string; company: string };
  chatMessages?: SolutionChatMessage[];
  ctaText: string;
  ctaSubtext: string;
}

function SolutionTemplate({
  tag, title, titleHighlight, description, capabilities,
  metrics, testimonial, chatMessages, ctaText, ctaSubtext
}: SolutionPageProps) {
  return (
    <PageLayout title={title}>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="tag-industry mb-6">{tag}</div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                {titleHighlight ? (
                  <>{title} <span className="text-[#C8E636]">{titleHighlight}</span></>
                ) : title}
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/company/contact-us">
                  <button className="btn-primary">Schedule a Demo</button>
                </Link>
                <Link href="/resources/use-cases">
                  <button className="btn-outline-white">See How It Works</button>
                </Link>
              </div>
            </div>
            {/* Chat widget or testimonial */}
            {chatMessages && (
              <div className="chat-widget max-w-sm ml-auto w-full">
                <div className="bg-[#3B5BFE] px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">L</div>
                    <div>
                      <div className="text-white font-semibold text-sm">Lyncore AI</div>
                      <div className="text-white/70 text-xs">Online</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-5 space-y-3 bg-[#F5F5F7]">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.role === "agent" && (
                        <div className="w-7 h-7 rounded-full bg-[#3B5BFE] flex items-center justify-center text-white text-xs font-bold mr-2 shrink-0 self-end">L</div>
                      )}
                      <div className={msg.role === "user" ? "chat-user" : "chat-agent"}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-1 pl-9">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {metrics.map((m, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-bold text-[#3B5BFE] mb-2">{m.num}</div>
                <div className="text-sm text-[#6B7280] font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Key Capabilities</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">Everything you need to automate and optimize your customer interactions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="feature-card">
                <div className="w-10 h-10 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center mb-6">
                  <div className="text-[#3B5BFE] font-bold text-lg">{i + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{cap.title}</h3>
                <p className="text-[#6B7280] text-sm mb-5 leading-relaxed">{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#1A1F36]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BFE] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-20 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-[#1A1F36] to-[#2d3655] rounded-2xl p-12">
              <blockquote className="text-xl text-gray-200 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="text-white font-bold">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role} · {testimonial.company}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{ctaText}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{ctaSubtext}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/company/contact-us">
              <button className="btn-white">Schedule a Demo</button>
            </Link>
            <Link href="/resources/success-stories">
              <button className="btn-outline-white">View Success Stories</button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export function SalesSolution() {
  return (
    <SolutionTemplate
      tag="Solutions — Sales"
      title="AI-Powered"
      titleHighlight="Sales"
      description="Turn every inbound inquiry into a booked appointment. Lyncore's AI handles lead qualification, follow-ups, and appointment scheduling so your sales team can focus on closing deals."
      capabilities={[
        {
          title: "Instant Response",
          desc: "Respond to inquiries within seconds, 24/7. Speed-to-lead is critical — never let a hot lead go cold.",
          bullets: ["Automated follow-up sequences", "CRM integration", "Better lead quality"]
        },
        {
          title: "Appointment Setting",
          desc: "AI schedules consultations and sales calls directly into your calendar, eliminating back-and-forth.",
          bullets: ["Faster sales cycles", "Higher conversion rates", "Real-time calendar sync"]
        },
        {
          title: "Upselling & Cross-selling",
          desc: "AI suggests additional services and maintenance plans during conversations, increasing revenue per customer.",
          bullets: ["Higher ticket values", "More recurring revenue", "Automated sales"]
        },
      ]}
      metrics={[
        { num: "40%", label: "Improvement in lead qualification" },
        { num: "3X", label: "Faster response to inbound leads" },
        { num: "65%", label: "Reduction in no-show appointments" },
        { num: "24/7", label: "Always available to capture leads" },
      ]}
      chatMessages={[
        { role: "user", text: "Hi, I need a quote for replacing my old HVAC system." },
        { role: "agent", text: "I'd be happy to help! How old is your current system and what's the square footage of your home?" },
        { role: "user", text: "It's about 15 years old, 2,200 sq ft home." },
        { role: "agent", text: "Perfect. I can schedule a free consultation with our sales team. What time works best for you?" },
      ]}
      testimonial={{
        quote: "The AI qualifies leads better than our previous receptionist. We spend less time on tire-kickers and more time on real projects.",
        name: "Sarah Chen",
        role: "Operations Manager",
        company: "Spark Electric"
      }}
      ctaText="Ready to close more deals?"
      ctaSubtext="See how Lyncore's AI sales agent converts more leads into booked appointments, automatically."
    />
  );
}

export function SupportSolution() {
  return (
    <SolutionTemplate
      tag="Solutions — Support"
      title="AI Customer"
      titleHighlight="Support"
      description="Resolve customer issues instantly without wait times. Lyncore handles everything from emergency dispatch to routine inquiries with accuracy and empathy."
      capabilities={[
        {
          title: "Faster Resolution",
          desc: "Quick answers to common customer questions without placing them on hold or routing to a human.",
          bullets: ["Instant responses", "Consistent answers", "Multilingual support"]
        },
        {
          title: "Emergency Dispatch",
          desc: "Urgent calls get immediate attention with AI that can assess severity and dispatch technicians instantly.",
          bullets: ["Faster response times", "Better customer satisfaction", "Capture emergency revenue"]
        },
        {
          title: "First Call Resolution",
          desc: "Resolve issues on the first interaction — no callbacks, no hold queues, no frustrated customers.",
          bullets: ["Higher satisfaction", "Reduced callbacks", "Better NPS scores"]
        },
      ]}
      metrics={[
        { num: "99%", label: "First-contact resolution rate" },
        { num: "60s", label: "Average response time" },
        { num: "92%", label: "Customer satisfaction score" },
        { num: "24/7", label: "Round-the-clock availability" },
      ]}
      chatMessages={[
        { role: "user", text: "My AC isn't working and it's 95 degrees outside!" },
        { role: "agent", text: "I'm so sorry to hear that! I'm marking this as an emergency. Can I get your address and the best number to reach you?" },
        { role: "user", text: "123 Main St. Call me at 555-0101." },
        { role: "agent", text: "Done! A technician will call you within 15 minutes. You're our top priority right now." },
      ]}
      testimonial={{
        quote: "Emergency calls used to go to voicemail after hours. Now Lyncore handles them instantly. We've seen a 60% increase in emergency job bookings.",
        name: "Mike Johnson",
        role: "Owner",
        company: "Elite Plumbing"
      }}
      ctaText="Ready to deliver exceptional support?"
      ctaSubtext="Join home service businesses using Lyncore to provide 24/7 support without expanding their team."
    />
  );
}

export function DocumentProcessingSolution() {
  return (
    <SolutionTemplate
      tag="Solutions — Document Processing"
      title="Document Processing"
      titleHighlight="& Research"
      description="Automate your back-office workflows. Lyncore extracts, processes, and routes documents so your team can focus on higher-value work."
      capabilities={[
        {
          title: "Data Extraction",
          desc: "Automatically extract key information from forms, emails, and attachments — no manual entry required.",
          bullets: ["Auto-populate CRM fields", "Extract data from emails", "Eliminate manual forms"]
        },
        {
          title: "Workflow Automation",
          desc: "Trigger actions based on document content — create tickets, update records, notify teams automatically.",
          bullets: ["Streamline approvals", "Generate service reports", "Route to right team"]
        },
        {
          title: "Research & Summarization",
          desc: "AI reads and summarizes lengthy documents so your team gets the insights they need in seconds.",
          bullets: ["Faster decision making", "Fewer errors", "Audit trails"]
        },
      ]}
      metrics={[
        { num: "60-70%", label: "Reduction in processing time" },
        { num: "3X", label: "Faster workflow completion" },
        { num: "50%", label: "Fewer human touchpoints" },
        { num: "2X", label: "Higher throughput" },
      ]}
      testimonial={{
        quote: "Processing service agreements used to take our team hours. Lyncore handles the entire document flow in minutes with near-perfect accuracy.",
        name: "Amanda White",
        role: "Operations Director",
        company: "Green Lawn Pro"
      }}
      ctaText="Ready to automate your back office?"
      ctaSubtext="See how Lyncore's document processing AI eliminates manual work and accelerates every workflow."
    />
  );
}
