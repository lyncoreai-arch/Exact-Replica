import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

/* ─────────────────────────────────────────
   ABOUT US
───────────────────────────────────────── */
export function AboutUs() {
  const values = [
    { title: "Customer First", desc: "We believe every customer interaction is an opportunity to build trust and loyalty." },
    { title: "Innovation", desc: "We push the boundaries of what AI can do for small and medium businesses." },
    { title: "Integrity", desc: "We are transparent, honest, and accountable in everything we do." },
    { title: "Collaboration", desc: "We succeed together — with our customers, partners, and each other." },
  ];

  const stats = [
    { num: "500+", label: "Home Service Businesses" },
    { num: "1M+", label: "Conversations Handled" },
    { num: "98%", label: "Customer Satisfaction" },
    { num: "24/7", label: "AI Availability" },
  ];

  return (
    <PageLayout title="About Us">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="tag-industry mb-6">About Lyncore</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Empowering Home Service Businesses with AI
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Lyncore was founded with a simple belief: every home service business deserves access to intelligent customer communication tools that were once only available to enterprises.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-bold text-[#3B5BFE] mb-2">{s.num}</div>
                <div className="text-sm text-[#6B7280] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] text-sm font-semibold mb-6">Our Story</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-6">Born from a passion for helping small businesses thrive</h2>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Lyncore was founded with a simple belief: every home service business deserves access to intelligent customer communication tools that were once only available to enterprises.
              </p>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Our team of engineers, designers, and customer success experts work every day to make AI accessible, reliable, and transformative for HVAC companies, plumbers, electricians, and every home service professional in between.
              </p>
              <div className="flex gap-6 mt-8">
                <div>
                  <div className="text-sm text-[#6B7280] mb-1">Founded</div>
                  <div className="font-bold text-[#1A1F36]">2023</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div className="text-sm text-[#6B7280] mb-1">Headquarters</div>
                  <div className="font-bold text-[#1A1F36]">Based in San Francisco, CA</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div className="text-sm text-[#6B7280] mb-1">Team</div>
                  <div className="font-bold text-[#1A1F36]">Remote-first</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1A1F36] to-[#2d3655] rounded-2xl p-10 text-white">
              <div className="text-[#C8E636] font-semibold text-sm uppercase tracking-wider mb-4">Our Mission</div>
              <h3 className="text-2xl font-bold mb-4">To empower home service businesses with AI that delivers exceptional customer experiences, 24/7.</h3>
              <div className="w-12 h-px bg-[#C8E636] my-6" />
              <div className="text-[#C8E636] font-semibold text-sm uppercase tracking-wider mb-4">Our Vision</div>
              <p className="text-gray-300 leading-relaxed">A world where every home service business, regardless of size, can provide enterprise-level customer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Our Core Values</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">The principles that guide everything we build and every decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="feature-card">
                <div className="w-10 h-10 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-[#3B5BFE]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{v.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Our Team</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto mb-12">Engineers, designers, and customer success experts — all passionate about helping businesses succeed.</p>
          <div className="bg-gradient-to-br from-[#1A1F36] to-[#2d3655] rounded-2xl p-12 text-center">
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              We're a remote-first team passionate about empowering small businesses. We believe in building tools that are simple, powerful, and built to last.
            </p>
            <div className="mt-8">
              <Link href="/company/careers">
                <button className="btn-white">View Open Positions</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to see Lyncore in action?</h2>
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
   CAREERS
───────────────────────────────────────── */
export function Careers() {
  const jobs = [
    { title: "Senior Software Engineer", dept: "Engineering", type: "Full-time", location: "Remote" },
    { title: "AI/ML Engineer", dept: "Engineering", type: "Full-time", location: "Remote" },
    { title: "Customer Success Manager", dept: "Customer Success", type: "Full-time", location: "Remote" },
    { title: "Sales Development Representative", dept: "Sales & Marketing", type: "Full-time", location: "Remote" },
    { title: "Product Designer", dept: "Design", type: "Full-time", location: "Remote" },
    { title: "Marketing Manager", dept: "Sales & Marketing", type: "Full-time", location: "Remote" },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Unlimited PTO",
    "Home office stipend",
    "Professional development budget",
    "Flexible work hours",
    "Team retreats",
  ];

  const whyUs = [
    { title: "Engineering", desc: "Build the future of AI communication." },
    { title: "Customer Success", desc: "Help our customers achieve their goals." },
    { title: "Design", desc: "Craft beautiful, intuitive experiences." },
    { title: "Sales & Marketing", desc: "Spread the word about Lyncore." },
  ];

  return (
    <PageLayout title="Careers">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="tag-industry mb-6">We're Hiring</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Help us build the future of AI communication for home service businesses. We're a remote-first team passionate about empowering small businesses.
          </p>
        </div>
      </div>

      {/* Why Work at Lyncore */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Why Work at Lyncore?</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">We're building the future of AI for home service businesses, and we need talented people to help us get there.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyUs.map((w, i) => (
              <div key={i} className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center mx-auto mb-6">
                  <div className="w-5 h-5 rounded-full bg-[#3B5BFE]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1F36] mb-2">{w.title}</h3>
                <p className="text-[#6B7280] text-sm">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-[#1A1F36] to-[#2d3655] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Benefits & Perks</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C8E636] shrink-0" />
                  <span className="text-gray-300 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-12 text-center">Open Positions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#3B5BFE]/30 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1A1F36] mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm text-[#3B5BFE] font-medium bg-[#3B5BFE]/10 px-3 py-1 rounded-full">{job.dept}</span>
                    <span className="text-sm text-[#6B7280]">{job.type}</span>
                    <span className="text-sm text-[#6B7280]">{job.location}</span>
                  </div>
                </div>
                <button className="btn-primary shrink-0 text-sm py-3 px-6">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't see your role?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">We're always looking for talented people who are passionate about helping businesses succeed.</p>
          <Link href="/company/contact-us">
            <button className="btn-white">Get In Touch</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

/* ─────────────────────────────────────────
   CONTACT US
───────────────────────────────────────── */
export function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "", email: "", industry: "", message: ""
  });

  const industries = [
    "HVAC", "Plumbing", "Electrical", "Roofing",
    "Residential Cleaning", "Lawn Care", "Pest Control", "Other"
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData(e.currentTarget);
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
    } catch {
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }

  return (
    <PageLayout title="Contact Us">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="tag-industry mb-6">Get in Touch</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-2xl">
            Talk to Lyncore
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Ready to transform your customer communication? Get in touch and we'll show you how Lyncore can help your business grow.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1F36] mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="#3B5BFE" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1F36] mb-1">Office</div>
                    <div className="text-[#6B7280] text-sm">Based in New York City, NY</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="#3B5BFE" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1F36] mb-1">Email</div>
                    <div className="text-[#6B7280] text-sm">hello@lyncore.ai</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" fill="none" stroke="#3B5BFE" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.15a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1F36] mb-1">Phone</div>
                    <div className="text-[#6B7280] text-sm">+1 (347) 617-0342</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F7] rounded-2xl p-6">
                <h3 className="font-bold text-[#1A1F36] mb-3">Business Hours</h3>
                <div className="text-sm text-[#6B7280] space-y-1">
                  <div>Monday – Friday: 9am – 6pm EST</div>
                  <div>Saturday – Sunday: 9am – 5pm EST</div>
                  <div className="mt-3 text-[#3B5BFE] font-medium">AI Support: 24/7</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#F5F5F7] rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" fill="none" stroke="#22c55e" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1F36] mb-3">Message Sent!</h3>
                  <p className="text-[#6B7280]">We've received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-[#1A1F36] mb-8">Send us a message</h2>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* Netlify hidden fields */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot for spam protection */}
                    <p style={{ position: "absolute", overflow: "hidden", clip: "rect(0 0 0 0)", height: "1px", width: "1px", margin: "-1px", padding: 0, border: 0 }}>
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1F36] mb-2">First Name</label>
                        <input
                          type="text"
                          name="first-name"
                          value={form.firstName}
                          onChange={e => setForm({...form, firstName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3B5BFE] transition-colors"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1F36] mb-2">Last Name</label>
                        <input
                          type="text"
                          name="last-name"
                          value={form.lastName}
                          onChange={e => setForm({...form, lastName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3B5BFE] transition-colors"
                          placeholder="Smith"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={e => setForm({...form, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3B5BFE] transition-colors"
                        placeholder="Your Business Name"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3B5BFE] transition-colors"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-2">Select your industry <span className="text-red-500">*</span></label>
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={e => setForm({...form, industry: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3B5BFE] transition-colors bg-white"
                        required
                      >
                        <option value="">Select your industry</option>
                        {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                      </select>
                    </div>
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-[#1A1F36] mb-2">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#3B5BFE] transition-colors resize-none"
                        placeholder="Tell us about your business and how we can help..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
