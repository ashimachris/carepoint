import React from "react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import logo from "@/assets/logo.png";

const Header: React.FC = () => {
  const whatsappLink = "https://wa.me/xxxxxxxxxxxx";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="CarePoint" className="h-14 md:h-16 w-auto" />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Why CarePoint
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="default" size="sm" asChild className="hidden sm:inline-flex gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              <span>Get Started</span>
            </a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
