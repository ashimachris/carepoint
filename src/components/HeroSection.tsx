import React from "react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const HeroSection: React.FC = () => {
  const whatsappLink = "https://wa.me/2347070703862?text=Hello%20CarePoint%20%F0%9F%91%8B%0AI%20need%20help%20finding%20a%20medication.%20Please%20assist.";
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 dark:bg-secondary/15 rounded-full blur-3xl" />
      
      <div className="container relative py-12 md:py-20" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span 
              className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Medication Sourcing Made Easy
            </span>

            <h1 
              className={`heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              A Faster Way to Find the{" "}
              <span className="text-gradient">Medications You Need</span>
            </h1>

            <p 
              className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              We help you source hard-to-find or out-of-stock medications instantly — delivered straight to you.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Button variant="whatsapp" size="xl" asChild className="gap-2.5 shadow-lg hover:shadow-xl transition-shadow">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={22} />
                  Order on WhatsApp
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div 
              className={`flex flex-wrap gap-8 justify-center lg:justify-start transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div>
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Trusted Suppliers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">20mins</div>
                <div className="text-sm text-muted-foreground">Avg. Response Time</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">97%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              {/* Flexible aspect ratio */}
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CarePoint Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10 dark:from-primary/30 dark:to-secondary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
