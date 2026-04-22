import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 197,
    description: "Perfect for small home service businesses ready to automate their first customer touchpoints.",
    cta: "Get Started",
    ctaHref: "/company/contact-us",
    popular: false,
    features: [
      "AI website chatbot",
      "10,000 messages/month",
      "Lead capture (name, email, phone)",
      "Basic automation responses",
      "Social media integration (basic)",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 497,
    description: "The complete AI receptionist suite — voice, chat, booking, and CRM in one powerful platform.",
    cta: "Get Pro",
    ctaHref: "/company/contact-us",
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
    ctaHref: "/company/contact-us",
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

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { toast } = useToast();

  function handlePlanSelect(plan: typeof PLANS[number]) {
    localStorage.setItem("selectedPlan", JSON.stringify({ id: plan.id, name: plan.name, price: plan.price, selectedAt: new Date().toISOString() }));
    toast({
      title: `${plan.name} plan selected`,
      description: plan.id === "premium" ? "A sales specialist will reach out shortly." : `You've chosen the ${plan.name} plan at $${plan.price}/month.`,
    });
  }

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
                  {/* Most Popular badge */}
                  {plan.popular && (
                    <div className="bg-[#3B5BFE] text-white text-xs font-bold tracking-widest uppercase text-center py-2.5 px-4">
                      Most Popular
                    </div>
                  )}

                  <div className="flex flex-col flex-grow p-8 lg:p-10">
                    {/* Plan name + price */}
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

                    {/* Divider */}
                    <div className={`border-t mb-8 ${plan.popular ? "border-white/10" : "border-gray-100"}`} />

                    {/* Features */}
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

                    {/* CTA */}
                    <Link href={plan.ctaHref}>
                      <button
                        onClick={() => handlePlanSelect(plan)}
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
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* All plans note */}
            <p className="text-center text-sm text-[#6B7280] mt-10">
              All plans include a 14-day onboarding period. No credit card required for demo.{" "}
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
                    { label: "Calendar booking integration", s: false, p: true, e: true },
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
                    className="w-full text-left px-7 py-5 flex items-start justify-between gap-4 group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[#1A1F36] font-semibold text-sm leading-snug">{faq.q}</span>
                    <span className={`shrink-0 w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-200 ${openFaq === i ? "rotate-45 border-[#3B5BFE] text-[#3B5BFE]" : ""}`}>
                      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-7 pb-5 text-sm text-[#6B7280] leading-relaxed">
                      {faq.a}
                    </div>
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
    </PageLayout>
  );
}
