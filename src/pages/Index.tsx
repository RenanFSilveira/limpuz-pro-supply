import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import MechanismSection from "@/components/landing/MechanismSection";
import ProductCatalog from "@/components/landing/ProductCatalog";
import SocialProof from "@/components/landing/SocialProof";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <MechanismSection />
      <ProductCatalog />
      <SocialProof />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
