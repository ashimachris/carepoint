import React, { useState } from "react";
import { ShieldCheck, Search, CheckCircle, Eye, Users, Heart, ChevronDown } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const indicators = [
  {
    icon: ShieldCheck,
    title: "Verified Medication Sourcing",
    description: "We source authentic medications directly from verified pharmacies and authorized suppliers across Nigeria."
  },
  {
    icon: Search,
    title: "Built for Hard-to-Find Drugs",
    description: "Can't find your medicine in regular pharmacies? CarePoint focuses on sourcing rare and unavailable medications."
  },
  {
    icon: CheckCircle,
    title: "Authenticity First",
    description: "We work with verified suppliers only, checking batch numbers, expiry dates, and packaging."
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "We confirm availability before any payment, provide clear sourcing timelines, and keep you updated via WhatsApp so you always know what's happening."
  },
  {
    icon: Users,
    title: "Trusted by Real People",
    description: "CarePoint is helping individuals and families access medications they couldn't find elsewhere — with care, verification, and transparency."
  },
  {
    icon: Heart,
    title: "Health-Focused & Responsible",
    description: "CarePoint is a medication sourcing service and does not replace medical advice. Always consult your healthcare provider."
  }
];

const TrustIndicators: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="why-us" className="section bg-gradient-section relative overflow-hidden">
      <div className="container relative" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span 
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why Choose Us
          </span>
          <h2 
            className={`heading-display text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Why <span className="text-gradient">CarePoint</span>?
          </h2>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((indicator, index) => (
            <div
              key={indicator.title}
              className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <indicator.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {indicator.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Dropdown View */}
        <div className="md:hidden space-y-3">
          {indicators.map((indicator, index) => (
            <Collapsible
              key={indicator.title}
              open={openItems[index]}
              onOpenChange={() => toggleItem(index)}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 50}ms` : "0ms" }}
            >
              <CollapsibleTrigger className="w-full p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <indicator.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-medium text-foreground text-left flex-1">
                  {indicator.title}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openItems[index] ? "rotate-180" : ""
                  }`} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4">
                <div className="pt-3 pl-14">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {indicator.description}
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
