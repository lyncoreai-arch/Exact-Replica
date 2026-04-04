import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface SolutionPageProps {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  features: { title: string; desc: string }[];
}

function SolutionTemplate({ title, description, stat, statLabel, features }: SolutionPageProps) {
  return (
    <PageLayout title={title}>
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">{title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{description}</p>
              <Link href="/company/contact-us">
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-semibold shadow-lg">
                  Book a Demo &rarr;
                </Button>
              </Link>
            </div>

            <div className="bg-primary text-white rounded-3xl p-10 text-center mb-24 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIwaDJ2LTIwaC0yem0wLTMyVjIyaDJWMmgtMnpNMTggMzR2MjBoMnYtMjBoLTJ6TTE4IDJWMjJoMlYyaC0yek0wIDM0aDE2djJoLTE2di0yem0wLTMyaDE2djJoLTE2VjJ6bTQ0IDMySDYwdjJoLTE2di0yem0wLTMySDYwdjJoLTE2VjJ6TTM0IDE4djJoMTh2LTJoLTE4em0tMjYgMnYtMmgxOHYyaC0xOHptLThfMTBoMTh2MmgtMTh2LTJ6bTQ0IDBoMTh2MmgtMTh2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-8xl font-black mb-4">{stat}</div>
                <div className="text-xl md:text-2xl font-medium text-white/90">{statLabel}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function SalesSolution() {
  return (
    <SolutionTemplate
      title="AI-Powered Sales Automation"
      description="Capture, qualify, and convert leads automatically. Lyncore acts as your tireless SDR, engaging prospects the moment they reach out and booking appointments directly onto your calendar."
      stat="3-4x"
      statLabel="Improvement in lead qualification"
      features={[
        { title: "Lead Capture", desc: "Instantly respond to inbound inquiries across web chat, SMS, and voice. Never let a prospect wait." },
        { title: "Intelligent Qualification", desc: "Ask the right questions to determine job size, urgency, and service needs before routing to human agents." },
        { title: "Automated Follow-up", desc: "Persistently nurture leads that haven't booked yet through automated, personalized SMS and email sequences." }
      ]}
    />
  );
}

export function SupportSolution() {
  return (
    <SolutionTemplate
      title="24/7 AI Customer Support"
      description="Provide immediate, accurate answers to customer questions at any hour. Reduce your call volume while improving customer satisfaction."
      stat="99%+"
      statLabel="Accuracy on customer inquiries"
      features={[
        { title: "Always Available", desc: "Your support desk never closes. Handle emergencies, rescheduling, and general inquiries 24/7/365." },
        { title: "FAQ Handling", desc: "Instantly answer common questions about pricing, service areas, warranties, and preparation for service visits." },
        { title: "Smart Escalation", desc: "Seamlessly hand off complex issues to your human team with full context and conversation history." }
      ]}
    />
  );
}

export function DocumentProcessingSolution() {
  return (
    <SolutionTemplate
      title="Document Processing & Research"
      description="Automate the tedious paperwork. Extract data from invoices, intake forms, and service reports instantly."
      stat="90%"
      statLabel="Reduction in turnaround time"
      features={[
        { title: "Automated Data Entry", desc: "Extract customer details, job specifications, and pricing from unstructured text and forms." },
        { title: "Quote Generation", desc: "Automatically draft preliminary estimates based on customer inputs and historical pricing data." },
        { title: "CRM Syncing", desc: "Keep your systems of record updated in real-time without manual data entry from technicians." }
      ]}
    />
  );
}
