import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, X } from "lucide-react";

const CALENDLY_BASE = "https://calendly.com/lyncore-ai/30min";

const INDUSTRIES = [
  "HVAC", "Plumbing", "Electrical", "Roofing",
  "Residential Cleaning", "Lawn Care", "Pest Control", "Other",
];

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 197,
    description: "Perfect for small home service businesses ready to automate their first customer touchpoints.",
    cta: "Get Started",
    popular: false,
    features: [
      "AI website chatbot",
      "10,000 messages/month",
      "Lead capture (name, email, phone)",
      "Smart AI Responses",
      "Calendar Integration",
      "Social media integration",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 497,
    description: "The complete AI receptionist suite — voice, chat, booking, and CRM in one powerful platform.",
    cta: "Get Pro",
    popular: true,
    features: [
      "Everything in Starter",
      "AI voice receptionist",
      "40,000 messages/month",
      "400 voice minutes/month",
      "Calendar booking integration",
      "CRM integration",
      "Custom automation workflows",
      "Priority support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 997,
    description: "Enterprise-grade AI for multi-location operators who demand full customization and scale.",
    cta: "Contact Sales",
    popular: false,
    features: [
      "Everything in Pro",
      "100,000 messages/month",
      "800 voice minutes/month",
      "Multi-location support",
      "Advanced automation workflows",
      "Branded business setup",
      "Custom configuration per client",
      "Priority support",
    ],
  },
];

const FAQS = [
  {
    q: "Can I change plans at any time?",
    a: "Yes — you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What happens if I exceed my message limit?",
    a: "You'll receive a notification when you're approaching your limit. Additional messages are billed at a small per-message rate, or you can upgrade your plan.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees on Starter or Pro. Premium includes a complimentary branded setup service with dedicated onboarding.",
  },
  {
    q: "Do you offer a free trial?",
    a: "We offer a personalized demo where you can experience Lyncore with your actual business scenarios before committing.",
  },
  {
    q: "What is a voice minute?",
    a: "Each inbound or outbound call handled by the AI voice receptionist consumes minutes from your monthly allocation.",
  },
];

interface LeadFormState {
  name: string;
  email: string;
  business: string;
  phone: string;
  industry: string;
  message: string;
}

const EMPTY_FORM: LeadFormState = { name: "", email: "", business: "", phone: "", industry: "", message: "" };

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalPlan, setModalPlan] = useState<typeof PLANS[number] | null>(null);
  const [form, setForm] = useState<LeadFormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<LeadFormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function openModal(plan: typeof PLANS[number]) {
    localStorage.setItem(
      "selectedPlan",
      JSON.stringify({ id: plan.id, name: plan.name, price: plan.price, selectedAt: new Date().toISOString() }),
    );
    setModalPlan(plan);
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalPlan(null);
    document.body.style.overflow = "";
  }

  function validate(): boolean {
    const e: Partial<LeadFormState> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.business.trim()) e.business = "Business name is required";
    if (!form.industry) e.industry = "Please select your industry";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
    } catch {
      // Continue to redirect even if fetch fails in dev — Netlify captures on production
    } finally {
      setSubmitting(false);
    }
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = CALENDLY_BASE;
    }, 1000);
  }

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none transition-colors ${
      err ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#3B5BFE]"
    }`;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero text-center">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase mb-6">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Simple, <span className="text-[#C8E636]">transparent</span> pricing
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Choose the plan that fits your business. No hidden fees, no long-term contracts — cancel anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#1A1F36] shadow-2xl scale-[1.03] ring-2 ring-[#3B5BFE]"
                      : "bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-[#3B5BFE] text-white text-xs font-bold tracking-widest uppercase text-center py-2.5 px-4">
                      Most Popular
                    </div>
                  )}

                  <div className="flex flex-col flex-grow p-8 lg:p-10">
                    <div className="mb-8">
                      <h2 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-[#1A1F36]"}`}>
                        {plan.name}
                      </h2>
                      <div className="flex items-end gap-1 my-4">
                        <span className={`text-5xl font-black ${plan.popular ? "text-white" : "text-[#1A1F36]"}`}>
                          ${plan.price.toLocaleString()}
                        </span>
                        <span className={`text-sm mb-2 ${plan.popular ? "text-gray-400" : "text-[#6B7280]"}`}>/month</span>
                      </div>
                      <p className={`text-sm leading-relaxed ${plan.popular ? "text-gray-400" : "text-[#6B7280]"}`}>
                        {plan.description}
                      </p>
                    </div>

                    <div className={`border-t mb-8 ${plan.popular ? "border-white/10" : "border-gray-100"}`} />

                    <ul className="flex flex-col gap-3.5 flex-grow mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.popular ? "bg-[#C8E636]/20" : "bg-[#3B5BFE]/10"
                          }`}>
                            <Check className={`w-3 h-3 ${plan.popular ? "text-[#C8E636]" : "text-[#3B5BFE]"}`} strokeWidth={3} />
                          </div>
                          <span className={`text-sm leading-snug ${plan.popular ? "text-gray-300" : "text-[#1A1F36]/80"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA — opens lead form modal */}
                    <button
                      data-plan={plan.name}
                      onClick={() => openModal(plan)}
                      className={`w-full py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 ${
                        plan.popular
                          ? "bg-[#3B5BFE] text-white hover:bg-[#2a4ae8] shadow-lg shadow-[#3B5BFE]/30"
                          : plan.id === "premium"
                          ? "bg-[#1A1F36] text-white hover:bg-[#2d3655]"
                          : "bg-white border-2 border-[#3B5BFE] text-[#3B5BFE] hover:bg-[#3B5BFE] hover:text-white"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-[#6B7280] mt-10">
              Complete this step and book your setup call next.{" "}
              <Link href="/company/contact-us" className="text-[#3B5BFE] font-semibold hover:underline">
                Talk to us
              </Link>{" "}
              if you have questions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1A1F36] text-center mb-12">Compare plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-4 pr-6 text-[#1A1F36] font-semibold w-1/2">Feature</th>
                    <th className="text-center py-4 px-4 text-[#6B7280] font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 text-[#3B5BFE] font-bold">Pro</th>
                    <th className="text-center py-4 px-4 text-[#6B7280] font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "AI website chatbot", s: true, p: true, e: true },
                    { label: "Messages/month", s: "10,000", p: "40,000", e: "100,000" },
                    { label: "AI voice receptionist", s: false, p: true, e: true },
                    { label: "Voice minutes/month", s: "—", p: "400 min", e: "800 min" },
                    { label: "Lead capture", s: true, p: true, e: true },
                    { label: "Calendar Integration", s: true, p: true, e: true },
                    { label: "CRM integration", s: false, p: true, e: true },
                    { label: "Custom automation workflows", s: false, p: "Standard", e: "Advanced" },
                    { label: "Multi-location support", s: false, p: false, e: true },
                    { label: "Branded business setup", s: false, p: false, e: true },
                    { label: "Support", s: "Email", p: "Priority", e: "Priority" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                      <td className="py-4 pr-6 text-[#1A1F36]/80 font-medium">{row.label}</td>
                      <td className="py-4 px-4 text-center text-[#6B7280]">
                        {row.s === true ? <Check className="w-4 h-4 text-[#3B5BFE] mx-auto" strokeWidth={2.5} /> : row.s === false ? <span className="text-gray-300 text-lg">—</span> : row.s}
                      </td>
                      <td className="py-4 px-4 text-center font-medium text-[#3B5BFE]">
                        {row.p === true ? <Check className="w-4 h-4 text-[#3B5BFE] mx-auto" strokeWidth={2.5} /> : row.p === false ? <span className="text-gray-300 text-lg">—</span> : row.p}
                      </td>
                      <td className="py-4 px-4 text-center text-[#6B7280]">
                        {row.e === true ? <Check className="w-4 h-4 text-[#3B5BFE] mx-auto" strokeWidth={2.5} /> : row.e === false ? <span className="text-gray-300 text-lg">—</span> : row.e}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#1A1F36] text-center mb-12">Frequently asked questions</h2>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <button
                    className="w-full text-left px-7 py-5 flex items-start justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[#1A1F36] font-semibold text-sm leading-snug">{faq.q}</span>
                    <span className={`shrink-0 w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-200 ${openFaq === i ? "rotate-45 border-[#3B5BFE] text-[#3B5BFE]" : ""}`}>
                      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-7 pb-5 text-sm text-[#6B7280] leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#1A1F36] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-gray-400 mb-8">
              Book a free 20-minute call and we'll help you find the perfect fit for your business.
            </p>
            <Link href="/company/contact-us">
              <button className="btn-primary px-10 py-4 text-base">Talk to an Expert</button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lead Capture Modal ── */}
      {modalPlan && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(10,15,40,0.7)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gray-100">
              <div>
                {submitted ? (
                  <>
                    <div className="text-xs font-bold text-[#C8E636] uppercase tracking-widest mb-1">Success</div>
                    <h2 className="text-xl font-bold text-[#1A1F36]">Almost there…</h2>
                  </>
                ) : (
                  <>
                    <div className="text-xs font-bold text-[#3B5BFE] uppercase tracking-widest mb-1">Selected Plan</div>
                    <h2 className="text-xl font-bold text-[#1A1F36]">Book Your Setup Call</h2>
                  </>
                )}
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#1A1F36] hover:border-gray-400 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-8 py-6">
              {submitted ? (
                <div className="text-center py-10">
                  {/* Animated spinner */}
                  <div className="w-14 h-14 rounded-full border-4 border-[#3B5BFE]/20 border-t-[#3B5BFE] animate-spin mx-auto mb-6" />
                  <h3 className="text-lg font-bold text-[#1A1F36] mb-2">You're all set!</h3>
                  <p className="text-[#6B7280] text-sm">Redirecting you to book your call…</p>
                </div>
              ) : (
                <form
                  name="pricing-lead"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="pricing-lead" />
                  <input type="hidden" name="plan" value={`${modalPlan.name} — $${modalPlan.price}/month`} />

                  {/* Honeypot */}
                  <p style={{ position: "absolute", overflow: "hidden", clip: "rect(0 0 0 0)", height: "1px", width: "1px", margin: "-1px", padding: 0, border: 0 }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">Full Name <span className="text-red-500">*</span></label>
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
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className={inputCls(errors.email)}
                        placeholder="jane@hvacbusiness.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">Business Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="business"
                        value={form.business}
                        onChange={e => setForm({ ...form, business: e.target.value })}
                        className={inputCls(errors.business)}
                        placeholder="Smith HVAC Services"
                      />
                      {errors.business && <p className="text-red-500 text-xs mt-1">{errors.business}</p>}
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">Select Your Industry <span className="text-red-500">*</span></label>
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={e => setForm({ ...form, industry: e.target.value })}
                        className={inputCls(errors.industry) + " bg-white"}
                        required
                      >
                        <option value="">Select your industry…</option>
                        {INDUSTRIES.map(ind => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                    </div>

                    {/* Phone (optional) */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">
                        Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={inputCls()}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Message (optional) */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-1.5">
                        Message <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={3}
                        className={inputCls() + " resize-none"}
                        placeholder="Tell us a bit about your business…"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting…" : "Continue to Booking"}
                  </button>

                  <p className="text-center text-xs text-[#6B7280] mt-4">
                    Complete this step and book your setup call next.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
