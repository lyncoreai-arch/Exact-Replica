import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export function AboutUs() {
  return (
    <PageLayout title="About Us">
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Lyncore</h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-12">
              Founded to help home service businesses automate customer interactions. We believe in innovation, reliability, and a customer-first approach.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower home service professionals with intelligent AI tools that work 24/7, ensuring no lead is missed and every customer receives immediate, accurate responses.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  A world where local businesses can scale effortlessly, providing enterprise-grade customer experiences without the enterprise-grade overhead.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function Careers() {
  return (
    <PageLayout title="Careers">
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Lyncore</h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-16">
              Help us build the future of AI automation for home service businesses.
            </p>
            
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="grid gap-6">
              {[
                { title: "AI Engineer", type: "Full-time", location: "Remote" },
                { title: "Sales Development Rep", type: "Full-time", location: "New York / Remote" },
                { title: "Customer Success Manager", type: "Full-time", location: "Remote" },
                { title: "Frontend Engineer", type: "Full-time", location: "San Francisco / Remote" }
              ].map((job, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary transition-colors">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{job.type}</span>
                      <span>&bull;</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <Button className="mt-4 sm:mt-0 rounded-full">Apply Now</Button>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function ContactUs() {
  return (
    <PageLayout title="Contact Us">
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Talk</h1>
                <p className="text-xl text-gray-600 mb-12">
                  Ready to transform your customer interactions? Get in touch with our team for a personalized demo.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center font-bold text-xl shrink-0">@</div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-gray-600">hello@lyncore.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center font-bold text-xl shrink-0">#</div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-gray-600">+1 (888) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center font-bold text-xl shrink-0">&</div>
                    <div>
                      <h3 className="font-bold text-lg">Office</h3>
                      <p className="text-gray-600">100 Innovation Drive<br/>San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Book a Demo</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
                  </div>
                  <Button className="w-full rounded-full py-6 text-lg font-bold">Talk to Lyncore</Button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}
