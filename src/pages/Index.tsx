import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExplanationSection from "@/components/ExplanationSection";
import AboutSection from "@/components/AboutSection";
import TrustIndicators from "@/components/TrustIndicators";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExplanationSection />
        <AboutSection />
        <TrustIndicators />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
