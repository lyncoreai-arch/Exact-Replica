import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

function LegalLayout({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode }) {
  return (
    <PageLayout title={title}>
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-gray-500 mb-12">Last Updated: {lastUpdated}</p>
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary">
              {children}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="October 1, 2023">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using the Lyncore platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
      
      <h2>2. Use License</h2>
      <p>Permission is granted to temporarily download one copy of the materials (information or software) on Lyncore's website for personal, non-commercial transitory viewing only.</p>
      <ul>
        <li>Modify or copy the materials</li>
        <li>Use the materials for any commercial purpose</li>
        <li>Attempt to decompile or reverse engineer any software</li>
      </ul>

      <h2>3. Service Availability</h2>
      <p>While we strive for 99.9% uptime, Lyncore does not guarantee that the service will be uninterrupted or error-free.</p>
    </LegalLayout>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 1, 2023">
      <h2>1. Information We Collect</h2>
      <p>We collect information to provide better services to our users. This includes:</p>
      <ul>
        <li>Account information (name, email, phone number)</li>
        <li>Business information (company name, industry)</li>
        <li>Conversation data processed by our AI agents</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>We use the information we collect to operate, maintain, and improve our services, as well as to develop new ones. We do not sell your personal data to third parties.</p>

      <h2>3. Data Rights (GDPR/CCPA)</h2>
      <p>Depending on your location, you may have the right to access, correct, or delete your personal data. Contact our DPO team to exercise these rights.</p>
    </LegalLayout>
  );
}

export function DPA() {
  return (
    <LegalLayout title="Data Processing Agreement" lastUpdated="October 1, 2023">
      <h2>1. Scope and Applicability</h2>
      <p>This DPA applies to the processing of personal data by Lyncore on behalf of the Customer in the course of providing the Services.</p>

      <h2>2. Roles of the Parties</h2>
      <p>The Customer is the Controller and Lyncore is the Processor of the personal data provided to the platform.</p>

      <h2>3. Security Measures</h2>
      <p>Lyncore implements appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption at rest and in transit.</p>
    </LegalLayout>
  );
}

export function BAA() {
  return (
    <LegalLayout title="Business Associate Agreement" lastUpdated="October 1, 2023">
      <h2>1. Purpose</h2>
      <p>This Business Associate Agreement (BAA) satisfies the requirements of the Health Insurance Portability and Accountability Act (HIPAA) for Covered Entities using Lyncore services.</p>

      <h2>2. Obligations of Business Associate</h2>
      <p>Lyncore agrees to:</p>
      <ul>
        <li>Not use or disclose Protected Health Information (PHI) other than as permitted</li>
        <li>Use appropriate safeguards to prevent use or disclosure of PHI</li>
        <li>Report to the Covered Entity any use or disclosure not provided for by the Agreement</li>
      </ul>
    </LegalLayout>
  );
}
