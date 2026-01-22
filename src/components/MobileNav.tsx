import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About Us" },
  { href: "#why-us", label: "Why CarePoint" },
  { href: "#faq", label: "FAQ" },
];

const MobileNav: React.FC = () => {
  const whatsappLink = "https://wa.me/2347070703862?text=Hello%20CarePoint%20%F0%9F%91%8B%0AI%20need%20help%20finding%20a%20medication.%20Please%20assist.";

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] p-0">
          <div className="flex flex-col h-full">
            {/* Header with logo */}
            <div className="p-4 border-b border-border">
              <img src={logo} alt="CarePoint" className="h-10 w-auto" />
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 py-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-6"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            
            {/* Footer with CTA */}
            <div className="p-4 border-t border-border mt-auto">
              <SheetClose asChild>
                <Button variant="whatsapp" size="lg" asChild className="w-full gap-2">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={20} />
                    Order on WhatsApp
                  </a>
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
