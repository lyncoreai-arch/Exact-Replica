import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

function LegalLayout({
  title, lastUpdated, tag, description, children
}: {
  title: string;
  lastUpdated: string;
  tag: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <PageLayout title={title}>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="tag-industry mb-6">{tag}</div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl">{title}</h1>
          <p className="text-gray-400 text-sm">Last Updated: {lastUpdated}</p>
          <p className="text-gray-300 mt-3 max-w-xl">{description}</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none
            prose-headings:text-[#1A1F36] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[#6B7280] prose-p:leading-relaxed
            prose-li:text-[#6B7280]
            prose-a:text-[#3B5BFE]
            prose-strong:text-[#1A1F36]">
            {children}
          </div>
          <div className="mt-16 p-6 bg-[#F5F5F7] rounded-2xl">
            <p className="text-[#6B7280] text-sm">Have questions about our legal documents?{" "}
              <Link href="/company/contact-us" className="text-[#3B5BFE] font-semibold hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="January 1, 2025"
      tag="Legal"
      description="By accessing and using Lyncore, you agree to be bound by these Terms of Service."
    >
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using the Lyncore platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access the Service.</p>

      <h2>2. Description of Service</h2>
      <p>Lyncore provides AI-powered communication tools for home service businesses, including but not limited to automated appointment booking, customer inquiry handling, and workflow automation. The Service is provided "as is" and we reserve the right to modify, suspend, or discontinue the Service at any time.</p>

      <h2>3. Use License</h2>
      <p>Subject to your compliance with these Terms, Lyncore grants you a limited, non-exclusive, non-transferable license to access and use the Service for your internal business purposes. You may not:</p>
      <ul>
        <li>Modify, copy, or create derivative works of the Service</li>
        <li>Use the Service for any commercial purpose beyond your authorized use</li>
        <li>Attempt to decompile, reverse engineer, or disassemble the Service</li>
        <li>Remove any proprietary notices or labels on the Service</li>
        <li>Use the Service to violate any applicable law or regulation</li>
      </ul>

      <h2>4. Account Responsibilities</h2>
      <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
      <p>You may update, correct, or delete your account information at any time by logging into your account or contacting us.</p>

      <h2>5. Payment Terms</h2>
      <p>Access to the Service requires payment of applicable fees as set forth in your subscription plan. Fees are billed in advance on a monthly or annual basis and are non-refundable except as required by law. Lyncore reserves the right to change its pricing with 30 days' notice.</p>

      <h2>6. Data and Privacy</h2>
      <p>Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to our collection and use of data as described in our Privacy Policy.</p>

      <h2>7. Intellectual Property</h2>
      <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Lyncore and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Lyncore.</p>

      <h2>8. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Lyncore shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the Service.</p>

      <h2>9. Service Availability</h2>
      <p>While we strive for 99.9% uptime, Lyncore does not guarantee that the Service will be uninterrupted, timely, secure, or error-free. We reserve the right to temporarily suspend access to the Service for maintenance or upgrades.</p>

      <h2>10. Termination</h2>
      <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease.</p>

      <h2>11. Governing Law</h2>
      <p>These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>

      <h2>12. Contact</h2>
      <p>If you have any questions about these Terms of Service, please contact us at legal@lyncore.ai.</p>
    </LegalLayout>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="January 1, 2025"
      tag="Legal"
      description="This Privacy Policy describes how Lyncore collects, uses, and shares information about you."
    >
      <h2>1. Information We Collect</h2>
      <p>We collect information to provide better services to our users. This includes:</p>
      <ul>
        <li>Account information (name, email, phone number, company name)</li>
        <li>Business information (industry, service area, business type)</li>
        <li>Conversation data processed by our AI agents on your behalf</li>
        <li>Payment information (processed securely through our payment partners)</li>
        <li>Usage data and analytics about how you interact with our Service</li>
      </ul>
      <p>We also collect information automatically when you use our services, including log data, device information, and usage patterns.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve the Service</li>
        <li>Process transactions and send related information</li>
        <li>Send technical notices and support messages</li>
        <li>Respond to your comments and questions</li>
        <li>Train and improve our AI models (using anonymized data only)</li>
        <li>Monitor and analyze usage patterns to improve user experience</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do not share your personal information with third parties except in the following circumstances:</p>
      <ul>
        <li>With your consent or at your direction</li>
        <li>With service providers who assist in our operations</li>
        <li>To comply with legal obligations</li>
        <li>To protect the rights and safety of Lyncore and our users</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We implement industry-standard security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes encryption in transit and at rest, access controls, and regular security audits.</p>

      <h2>5. Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications from us by following the instructions in those messages.</p>

      <h2>6. Data Retention</h2>
      <p>We retain your information for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

      <h2>7. Cookies</h2>
      <p>We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.</p>

      <h2>8. Children's Privacy</h2>
      <p>Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

      <h2>10. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at privacy@lyncore.ai.</p>
    </LegalLayout>
  );
}

export function DataProcessingAgreement() {
  return (
    <LegalLayout
      title="Data Processing Agreement"
      lastUpdated="January 1, 2025"
      tag="Legal"
      description="This Data Processing Agreement governs the processing of Personal Data by Lyncore on behalf of our customers."
    >
      <h2>1. Definitions</h2>
      <p><strong>"Controller"</strong> means the customer who determines the purposes and means of the processing of Personal Data.</p>
      <p><strong>"Processor"</strong> means Lyncore, which processes Personal Data on behalf of the Controller.</p>
      <p><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person.</p>
      <p><strong>"Processing"</strong> means any operation performed on Personal Data, including collection, storage, use, and disclosure.</p>

      <h2>2. Appointment of Processor</h2>
      <p>The Controller appoints the Processor to process Personal Data on its behalf as described in the Terms of Service.</p>
      <p>The Processor shall process Personal Data only in accordance with documented instructions from the Controller.</p>
      <p>The Processor shall process Personal Data only for the purposes specified in the Terms of Service.</p>

      <h2>3. Confidentiality</h2>
      <p>The Processor shall ensure that persons authorized to process Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.</p>

      <h2>4. Security</h2>
      <p>The Processor shall implement appropriate technical and organizational measures to protect Personal Data against unauthorized or unlawful processing and against accidental loss, destruction, damage, alteration, or disclosure.</p>

      <h2>5. Sub-processors</h2>
      <p>The Controller authorizes the Processor to engage subprocessors for the processing of Personal Data.</p>
      <p>The Processor shall maintain a list of subprocessors and notify the Controller of any changes.</p>
      <p>The Processor shall ensure that subprocessors are bound by data protection obligations equivalent to those in this DPA.</p>

      <h2>6. Data Subject Rights</h2>
      <p>The Processor shall assist the Controller in responding to requests from Data Subjects to exercise their rights under applicable data protection laws.</p>
      <p>The Processor shall promptly notify the Controller of any such requests received directly.</p>

      <h2>7. Security Measures</h2>
      <p>The Processor shall implement and maintain appropriate security measures to protect Personal Data.</p>
      <p>The Processor shall notify the Controller without undue delay upon becoming aware of a Personal Data breach.</p>

      <h2>8. Data Deletion</h2>
      <p>Upon termination of the Terms of Service, the Processor shall, at the Controller's choice, delete or return all Personal Data.</p>
      <p>This requirement shall not apply to the extent that applicable law requires storage of the Personal Data.</p>

      <h2>9. Audit Rights</h2>
      <p>The Processor shall make available to the Controller all information necessary to demonstrate compliance with this DPA.</p>
      <p>The Controller may conduct audits of the Processor's compliance with this DPA with reasonable notice.</p>

      <h2>10. Contact</h2>
      <p>For questions regarding this DPA, please contact us at dpa@lyncore.ai.</p>
    </LegalLayout>
  );
}

export function BusinessAssociateAgreement() {
  return (
    <LegalLayout
      title="Business Associate Agreement"
      lastUpdated="January 1, 2025"
      tag="Legal"
      description="This Business Associate Agreement governs the handling of Protected Health Information (PHI) by Lyncore in compliance with HIPAA regulations."
    >
      <h2>1. Purpose and Scope</h2>
      <p>This BAA is intended to comply with the Health Insurance Portability and Accountability Act (HIPAA) and its implementing regulations. This agreement applies where Lyncore acts as a Business Associate by creating, receiving, maintaining, or transmitting Protected Health Information on behalf of a Covered Entity.</p>

      <h2>2. Definitions</h2>
      <p><strong>"Business Associate"</strong> means Lyncore, acting in its capacity as a business associate under HIPAA.</p>
      <p><strong>"Covered Entity"</strong> means the customer who is a covered entity under HIPAA.</p>
      <p><strong>"Protected Health Information" (PHI)</strong> means individually identifiable health information as defined under HIPAA.</p>

      <h2>3. Permitted Uses and Disclosures</h2>
      <p>Business Associate may use or disclose PHI only as permitted by this BAA or as required by law.</p>
      <p>Business Associate may use PHI for the proper management and administration of its business or to carry out the legal responsibilities of the Business Associate.</p>

      <h2>4. Obligations of Business Associate</h2>
      <p>Business Associate shall implement appropriate safeguards to prevent the use or disclosure of PHI other than as provided for by this BAA.</p>
      <p>Business Associate shall comply with the Security Rule requirements with respect to electronic PHI.</p>
      <p>Business Associate shall report to Covered Entity any use or disclosure of PHI not provided for by this BAA of which it becomes aware.</p>
      <p>Business Associate shall report any security incident, including breaches of unsecured PHI, as required by HIPAA.</p>

      <h2>5. Subcontractors</h2>
      <p>Business Associate shall ensure that any subcontractors that create, receive, maintain, or transmit PHI on behalf of Business Associate agree to the same restrictions and conditions that apply to Business Associate.</p>

      <h2>6. Access to PHI</h2>
      <p>Business Associate shall make available PHI in a designated record set to Covered Entity as necessary for Covered Entity to fulfill its obligations under HIPAA.</p>
      <p>Business Associate shall make any amendments to PHI in a designated record set as directed by Covered Entity.</p>

      <h2>7. Accounting of Disclosures</h2>
      <p>Business Associate shall document such disclosures of PHI and information related to such disclosures as would be required for Covered Entity to respond to a request for an accounting of disclosures.</p>

      <h2>8. Termination</h2>
      <p>Upon termination of the Terms of Service, Business Associate shall return or destroy all PHI received from Covered Entity.</p>
      <p>This provision shall survive the termination of the Terms of Service.</p>

      <h2>9. Contact</h2>
      <p>For questions regarding this BAA, please contact us at baa@lyncore.ai.</p>
    </LegalLayout>
  );
}
