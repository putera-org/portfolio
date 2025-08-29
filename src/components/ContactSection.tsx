import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type Lang = "vi" | "en";

const texts: Record<Lang, Record<string, string>> = {
  en: {
    heading: "Start Your Digital Journey",
    subheading:
      "Ready to transform your business? Let's discuss your project and explore how we can help you succeed.",
    formTitle: "Book Your Free Consultation",
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "your@email.com",
    company: "Company/Business",
    companyPlaceholder: "Your company name",
    details: "Project Details",
    detailsPlaceholder:
      "Tell us about your project, goals, and requirements...",
    send: "Send Message",
    contactHeading: "Get in Touch",
    contactText:
      "Have questions about our services? Want to discuss your project in detail? We're here to help you navigate your digital transformation journey.",
    emailUs: "Email Us",
    callUs: "Call Us",
    visitUs: "Visit Us",
    ctaTitle: "Free Consultation",
    ctaText: "Get expert advice on your digital transformation project",
    ctaButton: "Schedule Call",
  },
  vi: {
    heading: "Bắt đầu hành trình số của bạn",
    subheading:
      "Sẵn sàng chuyển đổi doanh nghiệp? Hãy thảo luận về dự án của bạn và khám phá cách chúng tôi có thể giúp bạn thành công.",
    formTitle: "Đặt lịch tư vấn miễn phí",
    name: "Họ và tên",
    namePlaceholder: "Tên đầy đủ của bạn",
    email: "Email",
    emailPlaceholder: "ban@email.com",
    company: "Công ty/Doanh nghiệp",
    companyPlaceholder: "Tên công ty của bạn",
    details: "Chi tiết dự án",
    detailsPlaceholder:
      "Hãy cho chúng tôi biết về dự án, mục tiêu và yêu cầu của bạn...",
    send: "Gửi tin nhắn",
    contactHeading: "Liên hệ với chúng tôi",
    contactText:
      "Bạn có thắc mắc về dịch vụ của chúng tôi? Muốn thảo luận chi tiết về dự án của bạn? Chúng tôi sẵn sàng hỗ trợ bạn trong hành trình chuyển đổi số.",
    emailUs: "Gửi Email",
    callUs: "Gọi cho chúng tôi",
    visitUs: "Đến thăm",
    ctaTitle: "Tư vấn miễn phí",
    ctaText: "Nhận lời khuyên chuyên gia cho dự án chuyển đổi số của bạn",
    ctaButton: "Đặt lịch gọi",
  },
};

interface ContactSectionProps {
  lang?: Lang;
}

const ContactSection = ({ lang = "en" }: ContactSectionProps) => {
  const t = texts[lang];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.heading.includes("Digital") ? (
              <>
                Start Your <span className="text-gradient">Digital Journey</span>
              </>
            ) : (
              t.heading
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 border-putera-surface">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                {t.formTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.name}
                  </label>
                  <Input
                    placeholder={t.namePlaceholder}
                    className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.company}
                </label>
                <Input
                  placeholder={t.companyPlaceholder}
                  className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.details}
                </label>
                <Textarea
                  placeholder={t.detailsPlaceholder}
                  className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                {t.send}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {t.contactHeading}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t.contactText}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-putera-neon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-putera-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {t.emailUs}
                  </h4>
                  <p className="text-muted-foreground">hello@putera.digital</p>
                  <p className="text-muted-foreground">info@putera.digital</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-putera-neon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-putera-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {t.callUs}
                  </h4>
                  <p className="text-muted-foreground">+60 12-345 6789</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri, 9AM-6PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-putera-neon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-putera-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {t.visitUs}
                  </h4>
                  <p className="text-muted-foreground">Kuala Lumpur, Malaysia</p>
                  <p className="text-sm text-muted-foreground">
                    Remote-first company
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <Card className="relative overflow-hidden p-6 text-center rounded-2xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-neon" />
              <div className="absolute inset-0 bg-black/20" /> {/* overlay for readability */}
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-2">{t.ctaTitle}</h4>
                <p className="text-white/90 mb-4">{t.ctaText}</p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-putera-neon-blue text-white hover:bg-putera-neon-blue/90"
                >
                  {t.ctaButton}
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

