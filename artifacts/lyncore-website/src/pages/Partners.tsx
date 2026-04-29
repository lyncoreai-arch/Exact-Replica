import { useState, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const CALENDLY_PARTNERS = "https://calendly.com/lyncore-partners/30min";

const STEPS = [
  {
    number: "01",
    title: "Refer a Business",
    desc: "Share your unique partner link with home service businesses in your network.",
  },
  {
    number: "02",
    title: "They Sign Up",
    desc: "When they subscribe to any Lyncore plan, you're automatically credited.",
  },
  {
    number: "03",
    title: "You Earn Monthly",
    desc: "Collect 20% recurring commission every month for as long as they stay active.",
  },
];

const EARNINGS = [
  { clients: 5, monthly: "$500+", annual: "$6,000+" },
  { clients: 10, monthly: "$1,000+", annual: "$12,000+" },
  { clients: 25, monthly: "$2,500+", annual: "$30,000+" },
  { clients: 50, monthly: "$5,000+", annual: "$60,000+" },
];

const AUDIENCES = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.89L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
    ),
    title: "Content Creators",
    desc: "TikTok, YouTube, Instagram creators who speak to home service business owners.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><circle cx="12" cy="12" r="1"/>
      </svg>
    ),
    title: "Freelancers",
    desc: "Web designers, marketers, and consultants who already work with small businesses.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Agency Owners",
    desc: "Digital agencies and business coaches looking to add a high-value recurring revenue stream.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Networked Professionals",
    desc: "Anyone well-connected to local trades — real estate agents, accountants, business groups.",
  },
];

const FEATURES = [
  {
    title: "AI Website Chatbot",
    desc: "Captures leads and answers customer questions 24/7, right on their website.",
  },
  {
    title: "AI Voice Receptionist",
    desc: "Handles inbound calls, books appointments, and never misses a customer.",
  },
  {
    title: "Lead Capture & Automation",
    desc: "Automatically collects contact details and follows up so no opportunity slips through.",
  },
];

const DETAILS = [
  { label: "Commission Rate", value: "20% recurring" },
  { label: "Payment Frequency", value: "Paid monthly" },
  { label: "Eligibility", value: "Active customers only" },
];

interface FormState {
  name: string;
  email: string;
  platform: string;
  audience: string;
  plan: string;
}

const EMPTY: FormState = { name: "", email: "", platform: "", audience: "", plan: "" };

export default function Partners() {
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.platform.trim()) e.platform = "Please tell us your platform or channel";
    if (!form.plan.trim()) e.plan = "Please describe how you plan to get clients";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch {
      // Continue even if fetch fails in dev — Netlify captures on production
    } finally {
      setSubmitting(false);
    }
    setSubmitted(true);
    const url = new URL(CALENDLY_PARTNERS);
    if (form.name.trim()) url.searchParams.set("name", form.name.trim());
    if (form.email.trim()) url.searchParams.set("email", form.email.trim());
    setTimeout(() => {
      window.location.href = url.toString();
    }, 1200);
  }

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none transition-colors ${
      err ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#3B5BFE]"
    }`;

  return (
    <PageLayout title="Partner Program">
      {/* ── HERO ── */}
      <div className="page-hero text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase mb-6">
              Partner Program
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Earn <span className="text-[#C8E636]">20% Recurring</span> Commission<br className="hidden md:block" /> Every Single Month
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Refer home service businesses to Lyncore and get paid every month they stay active — no cap, no expiry.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3B5BFE] text-white font-semibold text-base hover:bg-[#3B5BFE]/90 transition-colors shadow-lg"
            >
              Apply to Become a Partner →
            </button>
          </AnimatedSection>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] text-sm font-semibold mb-4">How It Works</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36]">Three steps to recurring income</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="feature-card relative">
                  <div className="text-5xl font-black text-[#3B5BFE]/10 leading-none mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{step.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── EARNING POTENTIAL ── */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] text-sm font-semibold mb-4">Earning Potential</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">The numbers speak for themselves</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Based on 20% commission on active clients — paid to you every month.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1A1F36] text-white text-sm font-semibold px-6 py-4">
                <div>Active Clients</div>
                <div className="text-center">Monthly Earnings</div>
                <div className="text-right">Annual Earnings</div>
              </div>
              {EARNINGS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-6 py-5 items-center ${i < EARNINGS.length - 1 ? "border-b border-gray-100" : ""} ${i === EARNINGS.length - 1 ? "bg-[#3B5BFE]/5" : ""}`}
                >
                  <div className="font-bold text-[#1A1F36] text-lg">{row.clients} clients</div>
                  <div className="text-center font-bold text-[#3B5BFE] text-xl">{row.monthly}</div>
                  <div className="text-right text-[#6B7280] font-semibold">{row.annual}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-[#6B7280] mt-4">Earnings estimates based on average plan value. Actual commissions vary by plan.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] text-sm font-semibold mb-4">Who This Is For</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Built for people with the right connections</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">If you know business owners or can reach them, you're a great fit.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="feature-card">
                  <div className="w-11 h-11 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center text-[#3B5BFE] mb-5">
                    {a.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1F36] mb-2">{a.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT LYNCORE DOES ── */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] text-sm font-semibold mb-6">What You're Selling</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-6">AI that home service businesses can't ignore</h2>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Lyncore is an AI-powered chatbot and receptionist purpose-built for home service companies — the kind that still rely on missed calls and manual follow-ups. It sells itself.
              </p>
              <div className="space-y-4">
                {FEATURES.map((f, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#C8E636] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#1A1F36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1F36] text-sm">{f.title}</div>
                      <div className="text-[#6B7280] text-sm mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[#1A1F36] to-[#2d3655] rounded-2xl p-10 text-white">
                <div className="text-[#C8E636] font-semibold text-sm uppercase tracking-wider mb-4">Why Partners Love Us</div>
                <ul className="space-y-5">
                  {[
                    "High-intent market — every HVAC company needs this",
                    "Strong product that sells itself on demo",
                    "Recurring revenue: one sale pays forever",
                    "Dedicated partner support & resources",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-gray-300 text-sm leading-relaxed">
                      <span className="text-[#C8E636] mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROGRAM DETAILS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] text-sm font-semibold mb-4">Program Details</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36]">Clear, straightforward terms</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid sm:grid-cols-3 gap-6">
              {DETAILS.map((d, i) => (
                <div key={i} className="text-center bg-[#F5F5F7] rounded-2xl p-8">
                  <div className="text-2xl font-bold text-[#3B5BFE] mb-2">{d.value}</div>
                  <div className="text-sm text-[#6B7280] font-medium">{d.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]" ref={formRef}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] text-sm font-semibold mb-4">Apply Now</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Apply to Become a Partner</h2>
            <p className="text-[#6B7280]">Takes less than 2 minutes. We'll be in touch within 24 hours.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full border-4 border-[#3B5BFE]/20 border-t-[#3B5BFE] animate-spin mx-auto mb-6" />
                  <h3 className="text-lg font-bold text-[#1A1F36] mb-2">Application received!</h3>
                  <p className="text-[#6B7280] text-sm">Redirecting you to book your partner onboarding call…</p>
                </div>
              ) : (
                <form
                  name="partner"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="partner" />

                  {/* Honeypot */}
                  <p style={{ position: "absolute", overflow: "hidden", clip: "rect(0 0 0 0)", height: "1px", width: "1px", margin: "-1px", padding: 0, border: 0 }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={inputCls(errors.name)}
                        placeholder="Jane Smith"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className={inputCls(errors.email)}
                        placeholder="jane@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Platform */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">
                        Platform / Channel <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="platform"
                        value={form.platform}
                        onChange={e => setForm({ ...form, platform: e.target.value })}
                        className={inputCls(errors.platform)}
                        placeholder="e.g. TikTok, Instagram, LinkedIn, Agency, Freelance"
                      />
                      {errors.platform && <p className="text-red-500 text-xs mt-1">{errors.platform}</p>}
                    </div>

                    {/* Audience size (optional) */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">
                        Audience / Network Size <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="audience"
                        value={form.audience}
                        onChange={e => setForm({ ...form, audience: e.target.value })}
                        className={inputCls()}
                        placeholder="e.g. 10,000 followers, 50 agency clients"
                      />
                    </div>

                    {/* How they plan to get clients */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">
                        How do you plan to refer clients? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="plan"
                        value={form.plan}
                        onChange={e => setForm({ ...form, plan: e.target.value })}
                        rows={4}
                        className={inputCls(errors.plan) + " resize-none"}
                        placeholder="Tell us about your audience, network, or marketing approach…"
                      />
                      {errors.plan && <p className="text-red-500 text-xs mt-1">{errors.plan}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting…" : "Apply to Become a Partner →"}
                  </button>

                  <p className="text-center text-xs text-[#6B7280] mt-4">
                    After applying, you'll book a short onboarding call with our team.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to start earning?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg">
              Join a growing network of partners earning 20% monthly commission by connecting home service businesses with AI that actually works.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#3B5BFE] font-semibold text-base hover:bg-white/90 transition-colors shadow-sm"
            >
              Apply Now — It's Free →
            </button>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
