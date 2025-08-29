import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import heroImage from "@/assets/hero-digital-transformation.jpg";

const HeroSection = ({ lang, onToggleLang }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60"></div>

      {/* Language Toggle - Top Right */}
      <button
        onClick={onToggleLang}
        className="fixed bottom-6 right-6 flex items-center space-x-2 px-3 py-1 rounded-lg text-sm glass hover:bg-muted/20 transition z-20"
      >
        <Globe className="w-4 h-4 md:w-5 md:h-5" />
        <span>{lang === "en" ? "En" : "Vi"}</span>
      </button>

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 glow-neon">
            <Sparkles className="w-4 h-4 text-putera-neon-blue" />
            <span className="text-sm text-putera-neon-blue font-medium">
                {lang === "en"
                    ? "Unlocking potential with technology"
                    : "Khai phá tiềm năng với công nghệ"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">
              {lang === "en" ? "Begin Your" : "Bắt đầu"}
            </span>
            <br />
            <span className="text-gradient">
              {lang === "en" ? "Digital Era" : "Kỷ nguyên số"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {lang === "en"
              ? "Transform your business with cutting-edge websites, mobile apps, and management systems. We help SMEs and entrepreneurs embrace the digital future."
              : "Chuyển đổi doanh nghiệp của bạn với website, ứng dụng di động và hệ thống quản lý hiện đại. Chúng tôi giúp SMEs và doanh nhân bước vào kỷ nguyên số."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              {lang === "en"
                ? "Technology Consulting"
                : "Tư Vấn Công Nghệ"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-neon" size="xl">
              {lang === "en" ? "View Our Work" : "Xem dự án"}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 pt-16 border-t border-putera-surface">
            <div className="text-center">
              <div className="text-3xl font-bold text-putera-neon-blue mb-2">
                100+
              </div>
              <div className="text-muted-foreground">
                {lang === "en" ? "Projects Delivered" : "Dự án hoàn thành"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-putera-neon-blue mb-2">
                50+
              </div>
              <div className="text-muted-foreground">
                {lang === "en" ? "Happy Clients" : "Khách hàng hài lòng"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-putera-neon-blue mb-2">
                5+
              </div>
              <div className="text-muted-foreground">
                {lang === "en" ? "Years Experience" : "Năm kinh nghiệm"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

