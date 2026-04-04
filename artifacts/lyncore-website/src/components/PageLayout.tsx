import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "wouter";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) {
      document.title = `${title} | Lyncore`;
    } else {
      document.title = "Lyncore | AI Chatbot & Receptionist for Home Services";
    }
  }, [location, title]);

  return (
    <div className="min-h-screen flex flex-col w-full bg-background font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
