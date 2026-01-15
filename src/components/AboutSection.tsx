import React from "react";
import { Heart, Target, Users } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Every decision we make centers around getting patients the medications they need, when they need them."
  },
  {
    icon: Target,
    title: "Reliable Sourcing",
    description: "Our extensive network of verified suppliers ensures we can locate even the hardest-to-find medications."
  },
  {
    icon: Users,
    title: "Trusted Partnerships",
    description: "We work closely with hospitals, pharmacies, and healthcare providers to streamline medication access."
  }
];

const AboutSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="section bg-gradient-section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 dark:opacity-30" />
      
      <div className="container relative" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span 
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Us
          </span>
          <h2 
            className={`heading-display text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Bridging the Gap in <span className="text-gradient">Medication Access</span>
          </h2>
          <p 
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            CarePoint was founded with a simple mission: to ensure no patient goes without their essential medications due to supply chain challenges or stock shortages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
