import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/not-found";

import { AboutUs, Careers, ContactUs } from "@/pages/Company";
import { SalesSolution, SupportSolution, DocumentProcessingSolution } from "@/pages/Solutions";
import { HvacIndustry, PlumbingIndustry, ElectricalIndustry, RoofingIndustry, ResidentialCleaningIndustry, LawnCareIndustry, PestControlIndustry } from "@/pages/Industry";
import { SuccessStories, AIExplained, UseCases } from "@/pages/Resources";
import { TermsOfService, PrivacyPolicy, DataProcessingAgreement, BusinessAssociateAgreement } from "@/pages/Legal";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      
      {/* Company Routes */}
      <Route path="/company/about-us" component={AboutUs} />
      <Route path="/company/careers" component={Careers} />
      <Route path="/company/contact-us" component={ContactUs} />
      
      {/* Solutions Routes */}
      <Route path="/solutions/sales" component={SalesSolution} />
      <Route path="/solutions/support" component={SupportSolution} />
      <Route path="/solutions/document-processing" component={DocumentProcessingSolution} />
      
      {/* Industry Routes */}
      <Route path="/industry/hvac" component={HvacIndustry} />
      <Route path="/industry/plumbing" component={PlumbingIndustry} />
      <Route path="/industry/electrical" component={ElectricalIndustry} />
      <Route path="/industry/roofing" component={RoofingIndustry} />
      <Route path="/industry/residential-cleaning" component={ResidentialCleaningIndustry} />
      <Route path="/industry/lawn-care" component={LawnCareIndustry} />
      <Route path="/industry/pest-control" component={PestControlIndustry} />
      
      {/* Resources Routes */}
      <Route path="/resources/success-stories" component={SuccessStories} />
      <Route path="/resources/ai-explained" component={AIExplained} />
      <Route path="/resources/use-cases" component={UseCases} />
      
      {/* Legal Routes */}
      <Route path="/legal/terms" component={TermsOfService} />
      <Route path="/legal/privacy-policy" component={PrivacyPolicy} />
      <Route path="/legal/dpa" component={DataProcessingAgreement} />
      <Route path="/legal/baa" component={BusinessAssociateAgreement} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
