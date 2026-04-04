import { Link } from "wouter";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/company/about-us" },
      { name: "Careers", href: "/company/careers" },
      { name: "Contact Us", href: "/company/contact-us" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Sales", href: "/solutions/sales" },
      { name: "Support", href: "/solutions/support" },
      { name: "Document Processing & Research", href: "/solutions/document-processing" },
    ],
  },
  {
    title: "Industry",
    links: [
      { name: "HVAC", href: "/industry/hvac" },
      { name: "Plumbing", href: "/industry/plumbing" },
      { name: "Electrical", href: "/industry/electrical" },
      { name: "Roofing", href: "/industry/roofing" },
      { name: "Residential Cleaning", href: "/industry/residential-cleaning" },
      { name: "Lawn Care", href: "/industry/lawn-care" },
      { name: "Pest Control", href: "/industry/pest-control" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Success Stories", href: "/resources/success-stories" },
      { name: "AI Explained", href: "/resources/ai-explained" },
      { name: "Use Cases", href: "/resources/use-cases" },
      { name: "Blogs", href: "/resources/blogs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Data Processing Agreement", href: "/legal/dpa" },
      { name: "Business Associate Agreement", href: "/legal/baa" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight">LYNCORE</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Chatbot & Receptionist for Home Service Businesses. Transform customer interactions 24/7.
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">{section.title}</h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lyncore Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
