import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      
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
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 Putera Digital. Begin Your Digital Era.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;