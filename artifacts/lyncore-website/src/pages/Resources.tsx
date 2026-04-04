import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function SuccessStories() {
  return (
    <PageLayout title="Success Stories">
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl text-gray-600">See how home service businesses are transforming their operations with Lyncore.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { company: "Comfort Air HVAC", stat: "100%", metric: "Appointment Automation", desc: "How Comfort Air completely automated their after-hours dispatch and seasonal tune-up scheduling." },
                { company: "Elite Plumbing", stat: "99%+", metric: "Accuracy Rate", desc: "Eliminating dispatch errors and routing emergency plumbing calls with near-perfect precision." },
                { company: "BrightClean Services", stat: "60%", metric: "Call Volume Reduction", desc: "Allowing customers to manage recurring cleaning schedules via SMS, freeing up the front desk." },
                { company: "GreenThumb Lawn Care", stat: "3x", metric: "Faster Booking", desc: "Automating lot size estimation and quote generation for new seasonal customers." }
              ].map((story, i) => (
                <div key={i} className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="text-5xl font-black text-primary mb-2">{story.stat}</div>
                  <div className="text-xl font-bold mb-6">{story.metric}</div>
                  <h3 className="text-2xl font-bold mb-4">{story.company}</h3>
                  <p className="text-gray-600 mb-8">{story.desc}</p>
                  <Button variant="outline" className="rounded-full">Read Case Study</Button>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function AIExplained() {
  return (
    <PageLayout title="AI Explained">
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">How Lyncore AI Works</h1>
              <p className="text-xl text-gray-600 mb-16 text-center">The technology powering intelligent, reliable conversations.</p>

              <div className="space-y-12">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4">Natural Language Processing (NLP)</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Lyncore doesn't rely on rigid phone trees or keyword matching. Our AI understands context, slang, and complex multi-part questions just like a human receptionist would.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4">Intent Recognition & Routing</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The system instantly identifies whether a caller needs emergency service, a quote, or just has a billing question, and routes the logic flow accordingly.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-6 text-sm font-mono text-gray-300 overflow-x-auto">
<pre>
<span className="text-blue-400">const</span> agent = lyncore.<span className="text-yellow-300">create</span>({`
  name: `}<span className="text-green-400">'HVAC Assistant'</span>{`,
  voice: `}<span className="text-green-400">'natural'</span>{`,
  language: `}<span className="text-green-400">'en-US'</span>{`,
  capabilities: [
    `}<span className="text-green-400">'booking'</span>{`,
    `}<span className="text-green-400">'support'</span>{`,
    `}<span className="text-green-400">'quotes'</span>{`
  ]
`});
</pre>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4">Conversation Management</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Unlike standard chatbots, Lyncore handles interruptions, pauses, and context switching gracefully, guiding the user back to the primary goal (booking the job).
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function UseCases() {
  const cases = [
    "Appointment Booking", "Lead Qualification", "Customer Support", 
    "Document Processing", "Outbound Campaigns", "Emergency Dispatch", 
    "Follow-up Automation", "Quote Generation"
  ];

  return (
    <PageLayout title="Use Cases">
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Use Cases</h1>
              <p className="text-xl text-gray-600">Explore all the ways Lyncore automates your daily operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cases.map((uc, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center items-center text-center h-48 hover:border-primary hover:shadow-md transition-all cursor-pointer">
                  <h3 className="font-bold text-lg">{uc}</h3>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}

export function Blogs() {
  const articles = [
    "How AI is Transforming HVAC Customer Service",
    "5 Ways to Reduce No-Shows with AI Scheduling",
    "The Future of Home Service Automation",
    "Case Study: How Comfort Air Doubled Their Bookings"
  ];

  return (
    <PageLayout title="Blog">
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Lyncore Blog</h1>
              <p className="text-xl text-gray-600">Insights, updates, and strategies for home service automation.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((title, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group cursor-pointer flex flex-col">
                  <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-sm text-primary font-bold mb-3">ARTICLE</div>
                    <h3 className="text-2xl font-bold mb-4">{title}</h3>
                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100 text-sm text-gray-500">
                      <span>Read Article &rarr;</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageLayout>
  );
}
