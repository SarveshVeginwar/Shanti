import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BusinessesPage from "./pages/BusinessesPage";
import RealEstatePage from "./pages/RealEstatePage";
import PharmaPage from "./pages/PharmaPage";
import IndustriesPage from "./pages/IndustriesPage";
import TechnologyPage from "./pages/TechnologyPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import ContactPage from "./pages/ContactPage";
import ShantiAgroIndustry from "./pages/ShantiAgroIndustry";
import VinodRiceMill from "./pages/VinodRiceMill";
import RohitMedicalAgency from "./pages/RohitMedicalAgency";
import RealEstateProjects from "./pages/RealEstateProjects";
import AwadhNagariProject from "./pages/AwadhNagariProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/pharma" element={<PharmaPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industries/shanti-agro" element={<ShantiAgroIndustry />} />
            <Route path="/industries/vinod-rice-mill" element={<VinodRiceMill />} />
            <Route path="/pharma/rohit-medical" element={<RohitMedicalAgency />} />
            <Route path="/real-estate/projects" element={<RealEstateProjects />} />
            <Route path="/real-estate/projects/awadh-nagari" element={<AwadhNagariProject />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
