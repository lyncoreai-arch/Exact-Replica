import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface IndustryPageProps {
  title: string;
  description: string;
  caseStudy: { company: string; stat: string };
  features: { title: string; desc: string }[];
}

function IndustryTemplate({ title, description, caseStudy, features }: IndustryPageProps) {
  return (
    <PageLayout title={`${title} AI Solutions`}>
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
              <div className="flex-1">
                <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-6">
                  Industry Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">{title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{description}</p>
                <div className="flex gap-4">
                  <Link href="/company/contact-us">
                    <Button size="lg" className="rounded-full px-8 font-semibold shadow-lg">
                      See it in action &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="text-gray-500 font-bold uppercase tracking-wider mb-2">Featured Case Study</h3>
                  <div className="text-3xl md:text-5xl font-black text-primary mb-4">{caseStudy.stat}</div>
                  <h4 className="text-xl font-bold text-foreground mb-6">{caseStudy.company}</h4>
                  <Link href="/resources/success-stories">
                    <Button variant="outline" className="rounded-full w-full">Read Full Story</Button>
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-12 text-center">Tailored for {title} Professionals</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 font-bold text-lg">{i + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function HvacIndustry() {
  return (
    <IndustryTemplate
      title="HVAC"
      description="Handle emergency no-heat/no-cool calls instantly, automate seasonal maintenance reminders, and keep your schedule full without adding dispatch headcount."
      caseStudy={{ company: "Comfort Air HVAC", stat: "100% of appointment bookings automated" }}
      features={[
        { title: "Emergency Dispatch", desc: "Prioritize and route urgent calls instantly to the right on-call technician." },
        { title: "Seasonal Campaigns", desc: "Automatically reach out to past customers for spring AC and fall furnace tune-ups." },
        { title: "Service Agreements", desc: "Pitch and process maintenance agreement renewals via conversational AI." }
      ]}
    />
  );
}

export function PlumbingIndustry() {
  return (
    <IndustryTemplate
      title="Plumbing"
      description="Manage pipe bursts, leak emergencies, and routine installations seamlessly. Never miss an urgent call even when your team is under a sink."
      caseStudy={{ company: "Elite Plumbing", stat: "99%+ accuracy rate on intake" }}
      features={[
        { title: "Emergency Triage", desc: "Assess severity of leaks and shut-off needs before dispatching." },
        { title: "Job Scheduling", desc: "Book estimates for repiping and remodels automatically into your calendar." },
        { title: "Customer Follow-up", desc: "Check in automatically post-service to ensure satisfaction and gather reviews." }
      ]}
    />
  );
}

export function ElectricalIndustry() {
  return (
    <IndustryTemplate
      title="Electrical"
      description="Streamline permit inquiries, panel upgrade estimates, and emergency outages. Capture high-value project leads effortlessly."
      caseStudy={{ company: "Spark Solutions", stat: "2X Higher Throughput" }}
      features={[
        { title: "Permit Inquiries", desc: "Answer common questions about local electrical codes and requirements." },
        { title: "Safety Communications", desc: "Provide automated pre-visit safety instructions to homeowners." },
        { title: "Estimate Scheduling", desc: "Qualify leads for EV chargers and panel upgrades before booking an estimator." }
      ]}
    />
  );
}

export function RoofingIndustry() {
  return (
    <IndustryTemplate
      title="Roofing"
      description="Capitalize on storm damage leads instantly. Automate the front-end of the insurance claim process and inspection scheduling."
      caseStudy={{ company: "Peak Roofing", stat: "3X Faster Workflow" }}
      features={[
        { title: "Storm Damage Triage", desc: "Handle sudden spikes in call volume after severe weather events automatically." },
        { title: "Insurance Claim Support", desc: "Guide homeowners through the initial steps of documenting damage." },
        { title: "Inspection Scheduling", desc: "Coordinate drone or physical inspections seamlessly." }
      ]}
    />
  );
}

export function CleaningIndustry() {
  return (
    <IndustryTemplate
      title="Residential Cleaning"
      description="Manage recurring schedules, handle cancellations, and customize service requests without drowning in administrative work."
      caseStudy={{ company: "BrightClean Services", stat: "60% reduction in call volume" }}
      features={[
        { title: "Recurring Booking", desc: "Allow customers to manage, skip, or modify their regular cleaning schedule via SMS." },
        { title: "Service Customization", desc: "Process special requests (e.g., inside fridge, deep clean) automatically." },
        { title: "Retention Campaigns", desc: "Win back lapsed customers with automated, personalized offers." }
      ]}
    />
  );
}

export function LawnCareIndustry() {
  return (
    <IndustryTemplate
      title="Lawn Care"
      description="Scale your seasonal routing efficiently. Automate quote generation for specific lot sizes and handle weather-related rescheduling."
      caseStudy={{ company: "GreenThumb Lawn Care", stat: "3x faster booking" }}
      features={[
        { title: "Automated Quoting", desc: "Generate preliminary quotes based on lot size data and specific service needs." },
        { title: "Weather Rescheduling", desc: "Send automated mass notifications when rain delays your routes." },
        { title: "Service Reminders", desc: "Notify customers before chemical treatments to keep pets indoors." }
      ]}
    />
  );
}

export function PestControlIndustry() {
  return (
    <IndustryTemplate
      title="Pest Control"
      description="Triage infestations, schedule recurring barrier treatments, and provide instant preparation instructions for specialized services."
      caseStudy={{ company: "Shield Pest", stat: "90% Reduction in TAT" }}
      features={[
        { title: "Infestation Triage", desc: "Identify pest type and severity to allocate proper time and materials." },
        { title: "Treatment Prep", desc: "Automatically send prep instructions (e.g., emptying cabinets) prior to arrival." },
        { title: "Follow-up Reminders", desc: "Schedule and confirm secondary treatments required for specific pests." }
      ]}
    />
  );
}
