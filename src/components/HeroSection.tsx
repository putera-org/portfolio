import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-digital-transformation.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60"></div>

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-putera-surface px-4 py-2 rounded-full mb-8 glow-neon">
            <Sparkles className="w-4 h-4 text-putera-neon-blue" />
            <span className="text-sm text-putera-neon-blue font-medium">Computer + Era</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Begin Your</span>
            <br />
            <span className="text-gradient">Digital Era</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge websites, mobile apps, and management systems. 
            We help SMEs and entrepreneurs embrace the digital future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-neon" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-putera-surface">
            <div className="text-center">
              <div className="text-3xl font-bold text-putera-neon-blue mb-2">100+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-putera-neon-blue mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-putera-neon-blue mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;