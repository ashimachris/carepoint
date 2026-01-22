import React from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = "https://wa.me/2347070703862?text=Hello%20CarePoint%20%F0%9F%91%8B%0AI%20need%20help%20finding%20a%20medication.%20Please%20assist.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
