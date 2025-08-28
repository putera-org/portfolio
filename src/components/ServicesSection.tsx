import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Settings, Megaphone, HeadphonesIcon } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Putera Web",
      subtitle: "Website Design & Development",
      description: "Modern, responsive websites that convert visitors into customers. From landing pages to e-commerce platforms.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"]
    },
    {
      icon: Smartphone,
      title: "Putera App",
      subtitle: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "Cross-platform", "Push Notifications", "App Store Optimization"]
    },
    {
      icon: Settings,
      title: "Putera Biz",
      subtitle: "Management Solutions",
      description: "Lightweight CRM and ERP systems tailored for SMEs. Streamline operations and boost productivity.",
      features: ["CRM Systems", "Inventory Management", "Financial Tracking", "Custom Workflows"]
    },
    {
      icon: Megaphone,
      title: "Putera Ads",
      subtitle: "Digital Marketing",
      description: "SEO optimization and digital marketing automation to increase your online visibility and reach.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: HeadphonesIcon,
      title: "Putera Care",
      subtitle: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your digital assets running smoothly and securely.",
      features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-putera-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and accelerate growth in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-putera-surface hover:border-putera-neon-blue/30 transition-all duration-300 hover:glow-neon group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-putera-neon-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-putera-neon-blue/20 transition-colors">
                  <service.icon className="w-6 h-6 text-putera-neon-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-putera-neon-blue font-medium">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-putera-neon-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;