import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavigationProps = {
  lang: "vi" | "en";
};

const Navigation = ({ lang }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const labels = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Book Free Consultation",
    },
    vi: {
      home: "Trang chủ",
      about: "Giới thiệu",
      services: "Dịch vụ",
      portfolio: "Dự án",
      contact: "Liên hệ",
      cta: "Đặt lịch tư vấn miễn phí",
    },
  };

  const navItems = [
    { name: labels[lang].home, href: "#home" },
    { name: labels[lang].about, href: "#about" },
    { name: labels[lang].services, href: "#services" },
    { name: labels[lang].portfolio, href: "#portfolio" },
    { name: labels[lang].contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
              <span className="text-putera-dark-blue font-bold text-sm">P</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Putera</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-putera-neon-blue transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              {labels[lang].cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-putera-surface">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-putera-neon-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4">
                {labels[lang].cta}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

