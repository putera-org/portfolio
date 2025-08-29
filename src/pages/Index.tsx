import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "vi" : "en"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation lang={lang} />
      <HeroSection lang={lang} onToggleLang={toggleLang} />
      <ServicesSection lang={lang} />
      <ContactSection lang={lang} />

      {/* Footer */}
      <footer className="border-t border-putera-surface py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
                <span className="text-putera-dark-blue font-bold text-sm">P</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Putera</span>
            </div>
          </div>
          <p className="text-muted-foreground text-center md:text-right mt-4 md:mt-0">
            © 2025 Putera Digital.{" "}
            {lang === "en"
              ? "Begin Your Digital Era."
              : "Bắt đầu kỷ nguyên số của bạn."}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

