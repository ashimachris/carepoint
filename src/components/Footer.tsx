import React from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/xxxxxxxxxxxx";

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-footer pointer-events-none" />
      
      <div className="container relative py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img src={logo} alt="CarePoint" className="h-14 md:h-16 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for sourcing hard-to-find medications across the country.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Why CarePoint
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Get in Touch</h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <WhatsAppIcon size={18} className="text-whatsapp" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CarePoint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
