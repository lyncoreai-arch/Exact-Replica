import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

interface ChatMessage {
  role: "user" | "agent";
  text: string;
}

interface IndustryData {
  tag: string;
  industry: string;
  title: string;
  description: string;
  features: { title: string; desc: string }[];
  bullets: string[];
  stats: { num: string; label: string }[];
  whyTitle: string;
  whyDesc: string;
  testimonial: { quote: string; name: string; role: string; company: string; metric: string; metricLabel: string };
  chat: ChatMessage[];
  ctaTitle: string;
  ctaDesc: string;
}

const INDUSTRIES: Record<string, IndustryData> = {
  hvac: {
    tag: "Industry Solution",
    industry: "HVAC",
    title: "AI Receptionist for HVAC",
    description: "Never miss a service call, even after hours or during peak seasons. Lyncore's AI handles scheduling, emergency dispatch, and customer follow-ups 24/7.",
    features: [
      { title: "Emergency Dispatch", desc: "Never miss a service call, even after hours or during peak seasons." },
      { title: "Smart Scheduling", desc: "AI books appointments based on technician availability and job type." },
      { title: "Instant Quotes", desc: "Provide customers with accurate estimates for common services." },
    ],
    bullets: ["Reduce missed calls by 90%", "Increase booking rate by 40%", "Eliminate after-hours voicemail", "Scale without adding staff", "Improve customer satisfaction", "Capture emergency service requests"],
    stats: [
      { num: "90%", label: "Reduction in missed calls" },
      { num: "40%", label: "Increase in booking rate" },
      { num: "100%", label: "Appointment bookings automated" },
      { num: "24/7", label: "Emergency coverage" },
    ],
    whyTitle: "Why HVAC Companies Choose Lyncore",
    whyDesc: "Seasonal demand spikes, emergency calls, and after-hours inquiries are no longer a challenge. Our AI scales with your business needs.",
    testimonial: {
      quote: "We used to miss calls during peak season. Now Lyncore handles every inquiry instantly and books jobs while we're out in the field.",
      name: "Tom Bradley",
      role: "Owner",
      company: "Comfort Air HVAC",
      metric: "100%",
      metricLabel: "Of appointment bookings automated",
    },
    chat: [
      { role: "user", text: "Hi, I need to schedule an HVAC repair appointment for tomorrow." },
      { role: "agent", text: "Hello! I'd be happy to help you schedule an HVAC repair. What time works best for you tomorrow?" },
      { role: "user", text: "Morning would be great, around 9 AM." },
      { role: "agent", text: "Perfect! I've scheduled your HVAC repair for tomorrow at 9:00 AM. You'll receive a confirmation text shortly." },
    ],
    ctaTitle: "Ready to transform your HVAC business?",
    ctaDesc: "Join hundreds of HVAC companies already using Lyncore to capture more leads, book more appointments, and deliver better customer service.",
  },
  plumbing: {
    tag: "Industry Solution",
    industry: "Plumbing",
    title: "AI Receptionist for Plumbing",
    description: "Emergencies don't wait for business hours. Neither should your customers. Lyncore ensures every call gets the right response, instantly.",
    features: [
      { title: "Emergency Response", desc: "Immediate response to plumbing emergencies like leaks, bursts, and flooding." },
      { title: "Service Scheduling", desc: "Book routine maintenance and repairs based on your availability." },
      { title: "Quote Requests", desc: "Capture and qualify new project inquiries automatically." },
    ],
    bullets: ["Handle emergency calls 24/7", "Reduce response time by 80%", "Capture more service requests", "Eliminate phone tag with customers", "Schedule jobs while you work", "Never miss a leak emergency"],
    stats: [
      { num: "80%", label: "Reduction in response time" },
      { num: "60%", label: "Increase in emergency bookings" },
      { num: "99%", label: "Accuracy rate on inquiries" },
      { num: "24/7", label: "Emergency coverage" },
    ],
    whyTitle: "Why Plumbers Choose Lyncore",
    whyDesc: "Emergencies don't wait for business hours. Neither should your customers. Our AI ensures every call gets the right response.",
    testimonial: {
      quote: "Emergency calls used to go to voicemail after hours. Now Lyncore handles them instantly. We've seen a 60% increase in emergency job bookings.",
      name: "Mike Johnson",
      role: "Owner",
      company: "Elite Plumbing",
      metric: "60%",
      metricLabel: "Increase in emergency job bookings",
    },
    chat: [
      { role: "user", text: "I have a burst pipe in my basement!" },
      { role: "agent", text: "I understand this is urgent. I'm dispatching this as an emergency to our on-call technician. They'll call you within 10 minutes. What's the best number to reach you?" },
      { role: "user", text: "555-0123 please hurry!" },
      { role: "agent", text: "You're all set! A technician will call you at 555-0123 within 10 minutes. In the meantime, turn off your main water valve if it's safe to do so." },
    ],
    ctaTitle: "Ready to never miss another emergency?",
    ctaDesc: "Join plumbing companies using Lyncore to respond faster, book more jobs, and keep customers happy.",
  },
  electrical: {
    tag: "Industry Solution",
    industry: "Electrical",
    title: "AI Receptionist for Electrical",
    description: "From emergency outages to scheduled inspections, Lyncore handles every electrical inquiry with precision and proper safety protocols.",
    features: [
      { title: "Emergency Dispatch", desc: "Instant response to electrical emergencies with proper safety protocols." },
      { title: "Project Scheduling", desc: "Book inspections, installations, and maintenance visits efficiently." },
      { title: "Permit Assistance", desc: "Guide customers through permit requirements and documentation." },
    ],
    bullets: ["Handle outage emergencies 24/7", "Qualify commercial projects", "Schedule code inspections", "Reduce callback volume", "Capture panel upgrade leads", "Automate appointment reminders"],
    stats: [
      { num: "75%", label: "Reduction in missed calls" },
      { num: "50%", label: "More qualified project leads" },
      { num: "90%", label: "Customer satisfaction score" },
      { num: "24/7", label: "Emergency coverage" },
    ],
    whyTitle: "Why Electricians Choose Lyncore",
    whyDesc: "Electrical emergencies require immediate, knowledgeable responses. Our AI delivers the right message every time.",
    testimonial: {
      quote: "The AI qualifies leads better than our previous receptionist. We spend less time on tire-kickers and more time on real projects.",
      name: "Sarah Chen",
      role: "Operations Manager",
      company: "Spark Electric",
      metric: "3X",
      metricLabel: "Project Bookings",
    },
    chat: [
      { role: "user", text: "We have a power outage affecting half our building." },
      { role: "agent", text: "This sounds like an emergency. I'm alerting our on-call electrician now. Are there any safety concerns we should know about?" },
      { role: "user", text: "No injuries, just no power in the east wing." },
      { role: "agent", text: "Got it. A licensed electrician will be at your location within 45 minutes. I'll text you their ETA." },
    ],
    ctaTitle: "Ready to electrify your business growth?",
    ctaDesc: "Join electrical companies using Lyncore to capture more leads and deliver faster emergency response.",
  },
  roofing: {
    tag: "Industry Solution",
    industry: "Roofing",
    title: "AI Receptionist for Roofing",
    description: "Storm season never sleeps. Lyncore's AI captures every emergency call, books inspections, and qualifies leads — so you can focus on putting roofs over heads.",
    features: [
      { title: "Storm Response", desc: "Rapid response to storm damage calls with emergency tarping dispatch." },
      { title: "Inspection Booking", desc: "Schedule free roof inspections and estimates automatically." },
      { title: "Photo Intake", desc: "Guide customers to submit damage photos for faster quotes." },
    ],
    bullets: ["Capture storm damage leads instantly", "Book inspections 24/7", "Qualify insurance claims", "Reduce estimator drive time", "Automate follow-up sequences", "Scale during peak season"],
    stats: [
      { num: "3X", label: "More leads captured during storms" },
      { num: "50%", label: "Reduction in estimator drive time" },
      { num: "80%", label: "Faster quote turnaround" },
      { num: "24/7", label: "Storm season coverage" },
    ],
    whyTitle: "Why Roofers Choose Lyncore",
    whyDesc: "Storm season means call volume spikes. Our AI scales instantly to capture every lead, while you focus on the roofs.",
    testimonial: {
      quote: "During storm season, we were overwhelmed with calls. Lyncore handled the volume effortlessly and we captured 3x more leads than before.",
      name: "David Park",
      role: "Owner",
      company: "Top Shield Roofing",
      metric: "3X",
      metricLabel: "Storm Leads Captured",
    },
    chat: [
      { role: "user", text: "The storm last night damaged my roof. I need someone to check it ASAP." },
      { role: "agent", text: "I'm so sorry about the damage. I can schedule a free emergency inspection for you. What's your address?" },
      { role: "user", text: "456 Oak Lane." },
      { role: "agent", text: "A roofing inspector will be at 456 Oak Lane tomorrow at 8 AM. We'll also send you instructions for documenting the damage for your insurance claim." },
    ],
    ctaTitle: "Ready to capture every storm lead?",
    ctaDesc: "Join roofing companies using Lyncore to respond faster, capture more leads, and scale during peak season.",
  },
  "residential-cleaning": {
    tag: "Industry Solution",
    industry: "Residential Cleaning",
    title: "AI Receptionist for Cleaning",
    description: "Keep your calendar full and your team busy. Lyncore handles the entire booking flow while you deliver spotless results.",
    features: [
      { title: "Recurring Bookings", desc: "Automatically schedule and confirm recurring cleaning appointments." },
      { title: "One-Time Requests", desc: "Handle deep cleaning, move-in/move-out, and special occasion bookings." },
      { title: "Feedback Collection", desc: "Automatically follow up for reviews and satisfaction ratings." },
    ],
    bullets: ["Reduce no-shows by 70%", "Increase recurring bookings", "Handle scheduling 24/7", "Collect more 5-star reviews", "Scale without hiring office staff", "Upsell premium services"],
    stats: [
      { num: "70%", label: "Reduction in no-shows" },
      { num: "45%", label: "Increase in recurring clients" },
      { num: "5X", label: "More reviews collected" },
      { num: "24/7", label: "Booking availability" },
    ],
    whyTitle: "Why Cleaners Choose Lyncore",
    whyDesc: "Keep your calendar full and your team busy. Our AI handles the booking flow while you deliver spotless results.",
    testimonial: {
      quote: "Lyncore doesn't just book appointments — it upsells recurring cleanings. Our monthly recurring revenue has never been higher.",
      name: "Lisa Rodriguez",
      role: "Sales Director",
      company: "Sparkle Cleaners",
      metric: "45%",
      metricLabel: "Increase in Recurring Clients",
    },
    chat: [
      { role: "user", text: "I need a deep cleaning for a 3-bedroom house this weekend." },
      { role: "agent", text: "We'd love to help! For a 3-bedroom deep clean, we typically schedule 4-5 hours. Do you prefer Saturday or Sunday?" },
      { role: "user", text: "Saturday morning." },
      { role: "agent", text: "We have availability Saturday at 9 AM. Total is $280. Would you also like to set up a recurring bi-weekly service at a 15% discount?" },
    ],
    ctaTitle: "Ready to fill your cleaning calendar?",
    ctaDesc: "Join cleaning businesses using Lyncore to reduce no-shows, increase recurring bookings, and scale without adding staff.",
  },
  "lawn-care": {
    tag: "Industry Solution",
    industry: "Lawn Care",
    title: "AI Receptionist for Lawn Care",
    description: "Route density is everything. Lyncore's AI optimizes your schedule while you focus on the work that matters.",
    features: [
      { title: "Route Optimization", desc: "Schedule new customers into efficient routes based on location." },
      { title: "Weather Alerts", desc: "Automatically reschedule appointments due to rain or extreme weather." },
      { title: "Seasonal Services", desc: "Upsell fertilization, aeration, and seasonal add-on services automatically." },
    ],
    bullets: ["Fill routes to capacity", "Reduce drive time by 30%", "Sell more add-on services", "Handle seasonal spikes", "Automate reminder calls", "Grow without adding office staff"],
    stats: [
      { num: "30%", label: "Reduction in drive time" },
      { num: "40%", label: "More add-on services sold" },
      { num: "90%", label: "Customer retention rate" },
      { num: "24/7", label: "Scheduling availability" },
    ],
    whyTitle: "Why Lawn Pros Choose Lyncore",
    whyDesc: "Route density is everything. Our AI optimizes your schedule while you focus on the work that matters.",
    testimonial: {
      quote: "The AI books customers in the same neighborhoods, increasing our route density and reducing drive time by 30%.",
      name: "Amanda White",
      role: "Owner",
      company: "Green Lawn Pro",
      metric: "30%",
      metricLabel: "Reduction in drive time",
    },
    chat: [
      { role: "user", text: "I need weekly lawn mowing for my home." },
      { role: "agent", text: "Great! We have availability in your area. What's the approximate size of your lawn?" },
      { role: "user", text: "It's about a quarter acre." },
      { role: "agent", text: "Perfect. Weekly service for a quarter acre is $55/visit. We have a slot this Thursday at 10 AM — and would you like to add a fertilization treatment to kickstart your lawn?" },
    ],
    ctaTitle: "Ready to optimize your lawn care routes?",
    ctaDesc: "Join lawn care businesses using Lyncore to fill routes faster, reduce drive time, and grow recurring revenue.",
  },
  "pest-control": {
    tag: "Industry Solution",
    industry: "Pest Control",
    title: "AI Receptionist for Pest Control",
    description: "Pest emergencies can't wait. Lyncore's AI ensures every call gets immediate attention while you focus on eliminating pests.",
    features: [
      { title: "Emergency Response", desc: "Immediate response to urgent pest issues like bed bugs, rodents, or wasp nests." },
      { title: "Treatment Scheduling", desc: "Book one-time treatments and set up recurring pest prevention programs." },
      { title: "Service Plans", desc: "Sell annual protection plans with automated renewal reminders." },
    ],
    bullets: ["Respond to emergencies instantly", "Reduce callback requests", "Sell more annual plans", "Handle seasonal surges", "Automate treatment reminders", "Scale without adding staff"],
    stats: [
      { num: "95%", label: "Emergency response within 1 min" },
      { num: "60%", label: "Increase in annual plan sales" },
      { num: "80%", label: "Reduction in callback requests" },
      { num: "24/7", label: "Emergency coverage" },
    ],
    whyTitle: "Why Pest Pros Choose Lyncore",
    whyDesc: "Pest emergencies can't wait. Our AI ensures every call gets immediate attention while you focus on eliminating pests.",
    testimonial: {
      quote: "Bed bug calls at 2 AM used to go to voicemail. Now Lyncore books the emergency treatment instantly and our technicians are more productive.",
      name: "Tom Bradley",
      role: "General Manager",
      company: "Shield Pest Control",
      metric: "60%",
      metricLabel: "Increase in Annual Plan Sales",
    },
    chat: [
      { role: "user", text: "I think I have bed bugs. I need someone here as soon as possible!" },
      { role: "agent", text: "I understand this is very stressful. We take bed bug reports seriously. Can I get your address to check our nearest technician's availability?" },
      { role: "user", text: "789 Elm Street." },
      { role: "agent", text: "We have an emergency slot available tomorrow at 8 AM. We'll perform a full inspection and same-day treatment if confirmed. Shall I book that?" },
    ],
    ctaTitle: "Ready to capture every pest emergency?",
    ctaDesc: "Join pest control companies using Lyncore to respond faster, sell more service plans, and scale without adding staff.",
  },
};

function IndustryTemplate({ data }: { data: IndustryData }) {
  return (
    <PageLayout title={`${data.industry} AI Solutions`}>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="tag-industry mb-6">{data.tag}</div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">{data.title}</h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">{data.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {data.bullets.slice(0, 6).map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8E636] shrink-0" />
                    <span className="text-sm text-gray-300">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/company/contact-us">
                  <button className="btn-primary">Book Your Demo</button>
                </Link>
                <Link href="/resources/success-stories">
                  <button className="btn-outline-white">See How It Works</button>
                </Link>
              </div>
            </div>

            {/* Chat Demo */}
            <div className="chat-widget max-w-sm ml-auto w-full">
              <div className="bg-[#3B5BFE] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">L</div>
                  <div>
                    <div className="text-white font-semibold text-sm">Lyncore AI</div>
                    <div className="text-white/70 text-xs flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Online
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-5 space-y-3 bg-[#F5F5F7] min-h-[260px]">
                {data.chat.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
                    {msg.role === "agent" && (
                      <div className="w-7 h-7 rounded-full bg-[#3B5BFE] flex items-center justify-center text-white text-xs font-bold shrink-0">L</div>
                    )}
                    <div className={msg.role === "user" ? "chat-user" : "chat-agent"}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-white border-t border-gray-100 flex items-center gap-3">
                <div className="flex-1 text-sm text-gray-400">Type your message...</div>
                <div className="w-8 h-8 rounded-full bg-[#3B5BFE] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {data.stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-bold text-[#3B5BFE] mb-2">{s.num}</div>
                <div className="text-sm text-[#6B7280] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">Built for {data.industry} Businesses</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">Our AI understands the {data.industry.toLowerCase()} industry — every workflow, every customer need, every emergency.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="w-10 h-10 rounded-xl bg-[#3B5BFE]/10 flex items-center justify-center mb-6">
                  <div className="text-[#3B5BFE] font-bold">{i + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1F36] mb-3">{f.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 lg:py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1F36] mb-4">{data.whyTitle}</h2>
              <p className="text-[#6B7280] mb-8 leading-relaxed">{data.whyDesc}</p>
              <div className="grid grid-cols-2 gap-3">
                {data.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#3B5BFE] shrink-0" />
                    <span className="text-sm text-[#1A1F36] font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="story-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#3B5BFE] flex items-center justify-center text-white font-bold text-lg">
                  {data.testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{data.testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{data.testimonial.role} · {data.testimonial.company}</div>
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-8 italic">
                "{data.testimonial.quote}"
              </blockquote>
              <div className="border-t border-white/10 pt-6">
                <div className="text-4xl font-bold text-[#C8E636] mb-1">{data.testimonial.metric}</div>
                <div className="text-gray-400 text-sm">{data.testimonial.metricLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3B5BFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{data.ctaTitle}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{data.ctaDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/company/contact-us">
              <button className="btn-white">Book Your Demo</button>
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

export function HvacIndustry() { return <IndustryTemplate data={INDUSTRIES.hvac} />; }
export function PlumbingIndustry() { return <IndustryTemplate data={INDUSTRIES.plumbing} />; }
export function ElectricalIndustry() { return <IndustryTemplate data={INDUSTRIES.electrical} />; }
export function RoofingIndustry() { return <IndustryTemplate data={INDUSTRIES.roofing} />; }
export function ResidentialCleaningIndustry() { return <IndustryTemplate data={INDUSTRIES["residential-cleaning"]} />; }
export function LawnCareIndustry() { return <IndustryTemplate data={INDUSTRIES["lawn-care"]} />; }
export function PestControlIndustry() { return <IndustryTemplate data={INDUSTRIES["pest-control"]} />; }
