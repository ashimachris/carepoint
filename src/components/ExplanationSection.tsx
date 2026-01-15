import React from "react";
import { MessageCircle, Search, Truck } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Tell Us What You Need",
    description: "Send us the medication name, dosage, and quantity via WhatsApp."
  },
  {
    icon: Search,
    step: "02",
    title: "We Source It",
    description: "Our team searches our network of verified suppliers to locate your medication."
  },
  {
    icon: Truck,
    step: "03",
    title: "Get It Delivered",
    description: "Receive your medication delivered straight to your doorstep."
  }
];

const ExplanationSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="section bg-gradient-section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 dark:opacity-30" />
      
      <div className="container relative" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span 
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            How It Works
          </span>
          <h2 
            className={`heading-display text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Get Your Medications in <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p 
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            CarePoint helps you source hard-to-find medicine through our wide sourcing network and delivers them straight to you as quickly as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-5xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.step}
              </span>
              
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;
