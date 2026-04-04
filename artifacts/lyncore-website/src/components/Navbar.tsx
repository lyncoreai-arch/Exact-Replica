import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Platform", href: "/" },
  {
    name: "Solutions",
    items: [
      { name: "Sales", href: "/solutions/sales" },
      { name: "Support", href: "/solutions/support" },
      { name: "Document Processing & Research", href: "/solutions/document-processing" },
    ],
  },
  {
    name: "Industry",
    items: [
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
    name: "Resources",
    items: [
      { name: "Success Stories", href: "/resources/success-stories" },
      { name: "AI Explained", href: "/resources/ai-explained" },
      { name: "Use Cases", href: "/resources/use-cases" },
      { name: "Blogs", href: "/resources/blogs" },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "About Us", href: "/company/about-us" },
      { name: "Careers", href: "/company/careers" },
      { name: "Contact Us", href: "/company/contact-us" },
    ],
  },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-foreground">LYNCORE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group px-3 py-2"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.items ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.items && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-0 pt-2 w-64 opacity-100 translate-y-0 transition-all">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 flex flex-col gap-1">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="px-4 py-2.5 text-sm rounded-md text-foreground/80 hover:text-primary hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/company/contact-us" className="hidden md:inline-flex">
              <Button className="rounded-full px-6 font-semibold shadow-sm hover:shadow-md transition-all">
                LET'S TALK
              </Button>
            </Link>
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.items ? (
                  <>
                    <button
                      className="flex items-center justify-between p-3 font-semibold text-left text-foreground"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="flex flex-col bg-gray-50 rounded-lg p-2 gap-1 mb-2">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="p-3 text-sm font-medium text-foreground/80 rounded-md"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="p-3 font-semibold text-foreground block"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/company/contact-us" className="mt-4">
              <Button className="w-full rounded-full py-6 text-lg font-semibold">
                LET'S TALK
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
