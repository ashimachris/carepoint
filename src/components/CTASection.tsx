import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const CTASection: React.FC = () => {
  const whatsappLink = "https://wa.me/xxxxxxxxxxxx";
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section bg-gradient-cta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ready to Find Your Medication?
          </h2>
          <p 
            className={`text-primary-foreground/80 text-lg md:text-xl mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Just tell us what you need on WhatsApp. Our team responds within minutes.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Button 
              variant="outline" 
              size="xl" 
              asChild 
              className="gap-2.5 bg-background text-secondary border-transparent hover:bg-background/90 shadow-lg"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={22} />
                Order on WhatsApp
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              asChild 
              className="gap-2.5 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Building2 className="w-5 h-5" />
                Bulk Order (Hospitals)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
