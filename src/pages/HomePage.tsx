import { ArrowRight, Leaf, Building2, Pill, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import shantiLogo from "@/assets/shanti-logo-light.jpeg";

const HomePage = () => {
  const sectors = [
    {
      icon: Leaf,
      name: "Agriculture",
      description: "Sustainable farming solutions and agricultural innovation for a better tomorrow.",
      href: "/agriculture",
      color: "text-green-600"
    },
    {
      icon: Pill,
      name: "Pharmaceuticals",
      description: "Quality healthcare products and medical solutions for global well-being.",
      href: "/pharma",
      color: "text-blue-600"
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Premium properties and urban development projects across the region.",
      href: "/real-estate",
      color: "text-orange-600"
    },
    {
      icon: Cpu,
      name: "Technology",
      description: "Cutting-edge technological solutions for modern business challenges.",
      href: "/technology",
      color: "text-purple-600"
    }
  ];

  const stats = [
    { number: "60+", label: "Years of Excellence" },
    { number: "4", label: "Major Sectors" },
    { number: "50+", label: "Successful Projects" },
    { number: "1000+", label: "Employees" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center mb-8">
              <img 
                src={shantiLogo} 
                alt="Shanti Group Logo" 
                className="h-24 w-auto object-contain animate-fade-in"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient leading-tight">
              Shanti Group
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building a sustainable future across <span className="text-primary font-semibold">agriculture</span>, 
              <span className="text-primary font-semibold"> pharmaceuticals</span>, 
              <span className="text-primary font-semibold"> real estate</span>, and 
              <span className="text-primary font-semibold"> technology</span> since 1960.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button className="btn-hero">
                Explore Our Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="btn-secondary-hero">
                View Our Sectors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Legacy of <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From humble beginnings in 1960 to becoming a leading multi-sector conglomerate, 
                Shanti Group has consistently delivered innovation and quality across diverse industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Started in 1960 with a vision to create sustainable value across multiple sectors, 
                    Shanti Group has grown from a single agricultural venture to a diversified conglomerate 
                    that touches millions of lives every day.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we operate across four major sectors, each contributing to our mission of 
                    building a better tomorrow through innovation, sustainability, and excellence.
                  </p>
                </div>
                <Link to="/about">
                  <Button variant="outline" className="btn-secondary-hero">
                    Learn More About Us
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                  <p className="leading-relaxed mb-6">
                    To be a leader in sustainable business practices while creating value for 
                    stakeholders and contributing to societal development across all our sectors.
                  </p>
                  <div className="flex items-center space-x-2 text-primary-foreground/80">
                    <span className="w-8 h-0.5 bg-primary-foreground/60"></span>
                    <span className="text-sm">Since 1960</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Sectors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diversified excellence across four major industries, each contributing to 
              sustainable growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="card-premium hover-lift group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <sector.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {sector.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {sector.description}
                  </p>
                  <Link to={sector.href}>
                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                      Explore Sector
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-gradient">Partner</span> with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hands with Shanti Group to explore opportunities across our diverse sectors 
              and be part of our journey towards sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Link to="/projects">
                <Button variant="outline" className="btn-secondary-hero">
                  View Upcoming Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;