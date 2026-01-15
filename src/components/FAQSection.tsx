import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "How does CarePoint source medications?",
    answer: "We have an extensive network of verified suppliers, distributors, and pharmacies across the region. When you request a medication, our team quickly searches this network to find the best available source."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary based on medication availability and your location. Most orders are fulfilled within 24-72 hours. We'll provide you with an estimated timeline when you place your order on WhatsApp."
  },
  {
    question: "Is CarePoint available for bulk orders?",
    answer: "Yes! We specialize in both individual patient orders and bulk orders for hospitals, clinics, and pharmacies. Contact us via WhatsApp to discuss your bulk medication needs."
  },
  {
    question: "What if the medication I need isn't available?",
    answer: "We rarely encounter medications we can't source. If availability is limited, we'll inform you immediately and suggest alternatives or provide an estimated restocking timeline."
  },
  {
    question: "How do I place an order?",
    answer: "Simply click any 'Order on WhatsApp' button on our website. Send us the medication name, dosage, and quantity you need. Our team will respond with availability and pricing within minutes."
  }
];

const FAQSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="faq" className="section bg-gradient-section relative overflow-hidden">
      <div className="container relative" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span 
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            FAQ
          </span>
          <h2 
            className={`heading-display text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div 
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
