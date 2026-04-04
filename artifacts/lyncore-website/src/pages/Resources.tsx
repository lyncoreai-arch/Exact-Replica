import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

/* ─────────────────────────────────────────
   SUCCESS STORIES
───────────────────────────────────────── */
export function SuccessStories() {
  const stories = [
    {
      company: "Comfort Air HVAC",
      role: "Owner",
      name: "Tom Bradley",
      industry: "HVAC",
      metric: "100%",
      metricLabel: "Of appointment bookings automated",
      quote: "We used to miss calls during peak season. Now Lyncore handles every inquiry instantly and books jobs while we're out in the field. It's transformed our business.",
      href: "/industry/hvac",
    },
    {
      company: "Elite Plumbing",
      role: "Owner",
      name: "Mike Johnson",
      industry: "Plumbing",
      metric: "60%",
      metricLabel: "Increase in emergency job bookings",
      quote: "Emergency calls used to go to voicemail after hours. Now Lyncore handles them instantly. We've seen a 60% increase in emergency job bookings.",
      href: "/industry/plumbing",
    },
    {
      company: "Spark Electric",
      role: "Operations Manager",
      name: "Sarah Chen",
      industry: "Electrical",
      metric: "3X",
      metricLabel: "Project Bookings",
      quote: "The AI qualifies leads better than our previous receptionist. We spend less time on tire-kickers and more time on real projects.",
      href: "/industry/electrical",
    },
    {
      company: "Top Shield Roofing",
      role: "Owner",
      name: "David Park",
      industry: "Roofing",
      metric: "3X",
      metricLabel: "Storm Leads Captured",
      quote: "During storm season, we were overwhelmed with calls. Lyncore handled the volume effortlessly and we captured 3x more leads than before.",
      href: "/industry/roofing",
    },
    {
      company: "Sparkle Cleaners",
      role: "Sales Director",
      name: "Lisa Rodriguez",
      industry: "Residential Cleaning",
      metric: "45%",
      metricLabel: "Increase in Recurring Clients",
      quote: "Lyncore doesn't just book appointments — it upsells recurring cleanings. Our monthly recurring revenue has never been higher.",
      href: "/industry/residential-cleaning",
    },
    {
      company: "Green Lawn Pro",
      role: "Owner",
      name: "Amanda White",
      industry: "Lawn Care",
      metric: "30%",
      metricLabel: "Reduction in Drive Time",
      quote: "The AI books customers in the same neighborhoods, increasing our route density and reducing drive time by 30%.",
      href: "/industry/lawn-care",
    },
  ];

  return (
    <PageLayout title="Success Stories">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className="tag-industry mb-6">Success Stories</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Real Results, <span className="text-[#C8E636]">Real Businesses</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how home service businesses across the country are transforming their operations and growing revenue with Lyncore.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Home Service Businesses" },
              { num: "1M+", label: "Conversations Handled" },
              { num: "98%", label: "Customer Satisfaction" },
              { num: "40%", label: "Avg. Revenue Increase" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-bold text-[#3B5BFE] mb-2">{s.num}</div>
                <div className="text-sm text-[#6B7280] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stories grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <div key={i} className="story-card flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#3B5BFE] flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{story.name}</div>
                    <div className="text-gray-400 text-sm">{story.role} · {story.company}</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic flex-grow">
                  "{story.quote}"
                </blockquote>
                <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-[#C8E636] mb-1">{story.metric}</div>
                    <div className="text-gray-400 text-xs">{story.metricLabel}</div>
                  </div>
                  <Link href={story.href}>
                    <button className="btn-outline-white text-xs px-4 py-2">Learn More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to write your own success story?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Join 500+ home service businesses using Lyncore to capture more leads and grow their revenue.</p>
          <Link href="/company/contact-us">
            <button className="btn-white">Get a Free Demo</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

/* ─────────────────────────────────────────
   AI EXPLAINED
───────────────────────────────────────── */
export function AIExplained() {
  const concepts = [
    {
      title: "Conversational AI",
      desc: "Lyncore uses advanced large language models (LLMs) to understand natural language — not rigid phone trees or keyword matching. Our AI understands context, slang, and complex multi-part questions just like a human receptionist would.",
      points: ["Understands natural conversation", "Handles complex multi-part questions", "Context-aware responses", "Learns from every interaction"],
    },
    {
      title: "Intent Recognition & Routing",
      desc: "The AI instantly identifies whether a caller needs emergency service, a quote, appointment booking, or general support — and routes the conversation accordingly with zero manual intervention.",
      points: ["Emergency vs. routine classification", "Service type identification", "Instant escalation when needed", "Seamless human handoff"],
    },
    {
      title: "Low-Latency AI Infrastructure",
      desc: "Lyncore's AI is optimized for real-time conversations, not text-first systems. We've built our infrastructure from the ground up for the speed and reliability that voice interactions demand.",
      points: ["Sub-second response times", "Built for long conversations", "Handles pauses and interruptions", "Scales to thousands of calls"],
    },
    {
      title: "Continuous Learning",
      desc: "Every interaction improves the system. Lyncore learns your business's specific terminology, pricing, and workflows — getting smarter and more accurate with every conversation.",
      points: ["Business-specific training", "Automatic updates", "Accuracy improvements over time", "Custom vocabulary support"],
    },
    {
      title: "Enterprise-Grade Security",
      desc: "Security is built into every layer of Lyncore. Strict access controls, full auditability, and compliance with data protection regulations protect your customers' data at every step.",
      points: ["End-to-end encryption", "SOC 2 compliant", "HIPAA-ready (BAA available)", "Full audit trails"],
    },
    {
      title: "Seamless Integrations",
      desc: "Lyncore connects with your existing tools — CRM, scheduling software, and calendar systems — so the AI can actually take action, not just answer questions.",
      points: ["CRM integration", "Calendar sync", "Scheduling software", "Custom webhooks"],
    },
  ];

  return (
    <PageLayout title="AI Explained">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="tag-industry mb-6">AI Explained</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            How Lyncore AI Works
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The technology powering intelligent, reliable conversations for home service businesses.
          </p>
        </div>
      </div>

      {/* Concepts */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concepts.map((c, i) => (
              <div key={i} className="feature-card">
                <div className="w-10 h-10 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-[#3B5BFE]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{c.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{c.desc}</p>
                <ul className="space-y-2">
                  {c.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#1A1F36]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8E636] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works flow */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">How we build, deploy, and run AI agents at scale</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">Security, scale, and insights that power enterprise-grade AI operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Build", desc: "We train custom AI agents on your business data — pricing, services, workflows, and FAQs — creating a receptionist that truly knows your business." },
              { step: "02", title: "Deploy", desc: "Setup takes 24-48 hours. We integrate with your existing calendar, CRM, and phone system — no tech team required." },
              { step: "03", title: "Optimize", desc: "Real-time analytics give you full visibility into every conversation. Track performance, spot opportunities, and continuously improve." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                <div className="text-5xl font-black text-[#3B5BFE]/20 mb-4">{s.step}</div>
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to experience our AI firsthand?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Get a personalized demo to see how Lyncore powers human-like AI conversations at scale.</p>
          <Link href="/company/contact-us">
            <button className="btn-white">Schedule a Demo</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

/* ─────────────────────────────────────────
   USE CASES
───────────────────────────────────────── */
export function UseCases() {
  const useCases = [
    {
      title: "Appointment Booking",
      category: "Scheduling",
      desc: "AI schedules appointments directly into your calendar, checking availability and sending confirmations automatically.",
      bullets: ["Reduce no-shows", "Fill empty slots", "Sync with your calendar"],
    },
    {
      title: "Emergency Dispatch",
      category: "Operations",
      desc: "Urgent calls get immediate attention with AI that can assess severity and dispatch technicians instantly.",
      bullets: ["Faster response times", "Better customer satisfaction", "Capture emergency revenue"],
    },
    {
      title: "Lead Qualification",
      category: "Sales",
      desc: "AI asks the right questions to qualify leads before they reach your sales team, saving valuable time.",
      bullets: ["Better lead quality", "Faster sales cycles", "Higher conversion rates"],
    },
    {
      title: "Customer Support",
      category: "Support",
      desc: "Answer common questions about services, pricing, and policies instantly — no waiting, no hold times.",
      bullets: ["Instant responses", "Consistent answers", "Multilingual support"],
    },
    {
      title: "Instant Quotes",
      category: "Sales",
      desc: "Provide accurate estimates for common services during the conversation — no callbacks needed.",
      bullets: ["Faster decisions", "Higher close rates", "Less back-and-forth"],
    },
    {
      title: "Outbound Follow-ups",
      category: "Outbound",
      desc: "Automatically follow up with leads, confirm appointments, and collect reviews without manual outreach.",
      bullets: ["More 5-star reviews", "Reduced no-shows", "Better retention"],
    },
    {
      title: "Upselling & Cross-selling",
      category: "Revenue",
      desc: "AI suggests additional services and maintenance plans during conversations, increasing revenue per customer.",
      bullets: ["Higher ticket values", "More recurring revenue", "Automated sales"],
    },
    {
      title: "Document Processing",
      category: "Operations",
      desc: "Automatically extract, process, and route documents and forms — no manual data entry required.",
      bullets: ["Eliminate manual forms", "Auto-populate CRM", "Generate reports"],
    },
    {
      title: "After-Hours Coverage",
      category: "Availability",
      desc: "Never miss a call again — Lyncore handles inquiries, books appointments, and dispatches emergencies 24/7.",
      bullets: ["Zero missed opportunities", "Emergency coverage", "Round-the-clock booking"],
    },
  ];

  const categories = [...new Set(useCases.map(u => u.category))];

  return (
    <PageLayout title="Use Cases">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="tag-industry mb-6">Use Cases</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Explore Use Cases
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From customer support to sales and beyond. Lyncore powers intelligent AI agents across the customer journey, adapting to any use case.
          </p>
        </div>
      </div>

      {/* Use cases grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="feature-card group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#3B5BFE]" />
                  </div>
                  <span className="text-xs font-semibold text-[#3B5BFE] bg-[#3B5BFE]/10 px-3 py-1 rounded-full">{uc.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{uc.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{uc.desc}</p>
                <ul className="space-y-2">
                  {uc.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#1A1F36]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8E636] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey automation section */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Journey Automation</h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto mb-12">
            From customer support to sales and beyond. Lyncore powers intelligent AI agents across the customer journey, from support and sales to automated operations, adapting to any use case.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Channel Continuity", desc: "Consistent experience across voice, SMS, and chat — customers get the same quality service no matter how they reach you." },
              { title: "Low-Latency Infrastructure", desc: "Optimized for real-time conversations, not text-first systems built from the ground up for speed and reliability." },
              { title: "Designed for Scale", desc: "From pilot to thousands of conversations without architectural rewrites. Start small, grow fast." },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{f.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to automate your workflows?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">See Lyncore in action with a personalized demo for your specific use case.</p>
          <Link href="/company/contact-us">
            <button className="btn-white">Schedule a Demo</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

/* ─────────────────────────────────────────
   BLOGS
───────────────────────────────────────── */
export function Blogs() {
  const posts = [
    {
      date: "March 1, 2025",
      category: "Industry Trends",
      title: "5 Ways AI is Changing How Home Service Businesses Communicate",
      excerpt: "Learn proven strategies to ensure every call turns into a potential customer. From response time to personalization, AI is rewriting the rules.",
      readTime: "6 min read",
    },
    {
      date: "February 25, 2025",
      category: "Lead Generation",
      title: "The True Cost of Missed Calls for Service Businesses",
      excerpt: "Calculate how much revenue you're losing to voicemail and busy signals. The numbers might surprise you.",
      readTime: "5 min read",
    },
    {
      date: "February 18, 2025",
      category: "Business Growth",
      title: "AI vs. Human Receptionists: Finding the Right Balance",
      excerpt: "How to combine AI efficiency with human touch for the best customer experience. It doesn't have to be either/or.",
      readTime: "7 min read",
    },
    {
      date: "February 10, 2025",
      category: "Customer Experience",
      title: "How to Reduce No-Shows by 70% with Automated Reminders",
      excerpt: "A step-by-step guide to implementing AI-powered appointment reminders that actually get customers to show up.",
      readTime: "4 min read",
    },
    {
      date: "January 28, 2025",
      category: "Operations",
      title: "After-Hours AI: Turning Missed Calls Into Booked Jobs",
      excerpt: "Discover how HVAC, plumbing, and electrical companies are capturing emergency revenue they used to lose to voicemail.",
      readTime: "5 min read",
    },
    {
      date: "January 15, 2025",
      category: "Technology",
      title: "What Is Conversational AI and Why Does It Matter for Your Business?",
      excerpt: "A plain-English explanation of how conversational AI works and why home service businesses are adopting it faster than any other sector.",
      readTime: "8 min read",
    },
  ];

  const categories = ["All", "Industry Trends", "Lead Generation", "Business Growth", "Customer Experience", "Operations", "Technology"];

  return (
    <PageLayout title="Blogs">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="tag-industry mb-6">Blog</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Insights for Home Service Businesses
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tips, strategies, and insights to help you grow your home service business with AI.
          </p>
        </div>
      </div>

      {/* Blog posts */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-[#3B5BFE] text-white"
                    : "bg-[#F5F5F7] text-[#6B7280] hover:bg-[#3B5BFE]/10 hover:text-[#3B5BFE]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-[#1A1F36] to-[#2d3655] flex items-end p-6">
                  <span className="text-xs font-semibold text-[#C8E636] bg-[#C8E636]/20 px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-4">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1F36] mb-3 leading-snug">{post.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <button className="text-[#3B5BFE] text-sm font-semibold hover:underline">Read more →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1A1F36] mb-4">Subscribe to our Newsletter</h2>
          <p className="text-[#6B7280] mb-8">Get the latest tips and insights on AI for home service businesses delivered to your inbox.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3B5BFE] transition-colors"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to see results like these?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Stop reading about AI. Start using it. Get a personalized demo today.</p>
          <Link href="/company/contact-us">
            <button className="btn-white">Schedule a Demo</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
