import React from "react";
import { Star, Quote } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Adaeze O.",
    location: "Lagos",
    content: "I couldn't find my mother's blood pressure medication anywhere. CarePoint sourced it within 48 hours and delivered it to our doorstep. Absolutely lifesaving!",
    rating: 5
  },
  {
    name: "Emmanuel K.",
    location: "Abuja",
    content: "The transparency is what got me. They confirmed availability before I paid, and kept me updated every step of the way. Highly recommend!",
    rating: 5
  },
  {
    name: "Funke A.",
    location: "Port Harcourt",
    content: "My child needed a specific antibiotic that was out of stock everywhere. CarePoint found it from a verified pharmacy and delivered it the next day.",
    rating: 5
  },
  {
    name: "Chidi M.",
    location: "Enugu",
    content: "Fast, reliable, and professional. CarePoint helped me find a rare insulin brand that wasn't available locally. Truly grateful!",
    rating: 5
  },
  {
    name: "Blessing N.",
    location: "Ibadan",
    content: "I was skeptical at first, but CarePoint exceeded my expectations. The medication was authentic and arrived on time. Will definitely use again!",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="section bg-gradient-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50 dark:opacity-30" />
      
      <div className="container relative" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span 
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Testimonials
          </span>
          <h2 
            className={`heading-display text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            What <span className="text-gradient">Our Customers</span> Say
          </h2>
        </div>

        <div 
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 dark:text-primary/20" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-primary-foreground font-display font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-display font-medium text-foreground text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
          
          {/* Mobile indicators */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <span className="text-xs text-muted-foreground">Swipe to see more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
