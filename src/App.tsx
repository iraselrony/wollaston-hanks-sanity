import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PlatformPage from "./pages/Platform.tsx";
import StrategicDevelopment from "./pages/StrategicDevelopment.tsx";
import AssetRepositioning from "./pages/AssetRepositioning.tsx";
import CapitalAdvisory from "./pages/CapitalAdvisory.tsx";
import SalesPage from "./pages/SalesPage.tsx";
import DevelopmentDelivery from "./pages/DevelopmentDelivery.tsx";
import DevelopmentsPage from "./pages/Developments.tsx";
import OpportunitiesPage from "./pages/Opportunities.tsx";
import RegionsPage from "./pages/Regions.tsx";
import UKRegionPage from "./pages/UKRegion.tsx";
import USRegionPage from "./pages/USRegion.tsx";
import AboutPage from "./pages/About.tsx";
import SubmitOpportunity from "./pages/SubmitOpportunity.tsx";
import ContactPage from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/strategic-development" element={<StrategicDevelopment />} />
          <Route path="/platform/asset-repositioning" element={<AssetRepositioning />} />
          <Route path="/platform/capital-advisory" element={<CapitalAdvisory />} />
          <Route path="/platform/sales" element={<SalesPage />} />
          <Route path="/platform/development-delivery" element={<DevelopmentDelivery />} />
          <Route path="/developments" element={<DevelopmentsPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/regions" element={<RegionsPage />} />
          <Route path="/regions/united-kingdom" element={<UKRegionPage />} />
          <Route path="/regions/united-states" element={<USRegionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/submit-opportunity" element={<SubmitOpportunity />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
