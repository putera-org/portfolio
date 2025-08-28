import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-gradient">Digital Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 border-putera-surface">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Book Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input 
                    placeholder="Your full name"
                    className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company/Business
                </label>
                <Input 
                  placeholder="Your company name"
                  className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project, goals, and requirements..."
                  className="bg-putera-surface border-putera-surface focus:border-putera-neon-blue min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Have questions about our services? Want to discuss your project in detail? 
                We're here to help you navigate your digital transformation journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-putera-neon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-putera-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@putera.digital</p>
                  <p className="text-muted-foreground">info@putera.digital</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-putera-neon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-putera-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+60 12-345 6789</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-putera-neon-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-putera-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">Kuala Lumpur, Malaysia</p>
                  <p className="text-sm text-muted-foreground">Remote-first company</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-neon p-6 text-center">
              <h4 className="text-xl font-semibold text-putera-dark-blue mb-2">
                Free Consultation
              </h4>
              <p className="text-putera-dark-blue/80 mb-4">
                Get expert advice on your digital transformation project
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-putera-dark-blue hover:bg-white/90">
                Schedule Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;