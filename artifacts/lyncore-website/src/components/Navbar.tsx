import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "PLATFORM", href: "/" },
  { name: "PRICING", href: "/pricing" },
  {
    name: "SOLUTIONS",
    items: [
      { name: "Sales", href: "/solutions/sales" },
      { name: "Support", href: "/solutions/support" },
      { name: "Document Processing & Research", href: "/solutions/document-processing" },
    ],
  },
  {
    name: "INDUSTRY",
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
    name: "RESOURCES",
    items: [
      { name: "Success Stories", href: "/resources/success-stories" },
      { name: "AI Explained", href: "/resources/ai-explained" },
      { name: "Use Cases", href: "/resources/use-cases" },
    ],
  },
  {
    name: "COMPANY",
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  function handleMouseEnter(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileOpen
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/">
            <span className="text-[22px] font-black tracking-tight text-[#1A1F36] select-none">LYNCORE</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.items ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide text-[#1A1F36]/80 hover:text-[#1A1F36] transition-colors">
                    {link.name}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} />
                  </button>

                  {openDropdown === link.name && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64"
                      onMouseEnter={() => handleMouseEnter(link.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-5 py-2.5 text-sm text-[#1A1F36]/80 hover:text-[#1A1F36] hover:bg-gray-50 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href!}
                  className="px-4 py-2 text-[13px] font-semibold tracking-wide text-[#1A1F36]/80 hover:text-[#1A1F36] transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* LET'S TALK + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/company/contact-us" className="hidden lg:inline-flex">
              <button className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors shadow-sm">
                LET'S TALK
              </button>
            </Link>
            <button
              className="lg:hidden p-2 text-[#1A1F36]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) =>
              link.items ? (
                <div key={link.name}>
                  <button
                    className="flex items-center justify-between w-full py-3 text-sm font-bold text-[#1A1F36] tracking-wide"
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="py-2.5 text-sm text-[#1A1F36]/70 hover:text-[#1A1F36] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href!}
                  className="py-3 text-sm font-bold text-[#1A1F36] tracking-wide"
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link href="/company/contact-us">
                <button className="w-full py-3 rounded-full bg-primary text-white text-sm font-semibold">
                  LET'S TALK
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
