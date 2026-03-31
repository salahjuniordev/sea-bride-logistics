import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import TrackPage from "./pages/Track";
import QuotePage from "./pages/Quote";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FAQPage from "./pages/FAQ";
import AirFreightPage from "./pages/services/AirFreight";
import SeaFreightPage from "./pages/services/SeaFreight";
import RoadFreightPage from "./pages/services/RoadFreight";
import WarehousingPage from "./pages/services/Warehousing";
import CustomsClearancePage from "./pages/services/CustomsClearance";
import SupplyChainPage from "./pages/services/SupplyChain";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/air" element={<AirFreightPage />} />
              <Route path="/services/sea" element={<SeaFreightPage />} />
              <Route path="/services/road" element={<RoadFreightPage />} />
              <Route path="/services/warehousing" element={<WarehousingPage />} />
              <Route path="/services/customs" element={<CustomsClearancePage />} />
              <Route path="/services/supply-chain" element={<SupplyChainPage />} />
              <Route path="/track" element={<TrackPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
