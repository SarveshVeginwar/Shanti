import { ArrowRight, Leaf, Building2, Pill, Cpu, Cog, Star, Award, Users, Heart, Globe, Calendar, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import shantiLogo from "@/assets/shanti-group-logo-new.png";

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
    },
    {
      icon: Cog,
      name: "Manufacturing",
      description: "Advanced manufacturing solutions and industrial excellence for diverse sectors.",
      href: "/manufacturing",
      color: "text-red-600"
    }
  ];

  const stats = [
    { number: "60+", label: "Years of Excellence" },
    { number: "5", label: "Major Sectors" },
    { number: "50+", label: "Successful Projects" },
    { number: "1000+", label: "Employees" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero-bg)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center mb-12">
              <img 
                src={shantiLogo} 
                alt="Shanti Group Logo" 
                className="h-48 w-auto object-contain animate-fade-in"
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
              Diversified excellence across five major industries, each contributing to 
              sustainable growth and innovation.
            </p>
          </div>

          <div className="space-y-6">
            {sectors.map((sector, index) => (
              <Card key={index} className="card-premium hover-lift group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <sector.icon size={40} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {sector.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {sector.description}
                      </p>
                      <Link to={sector.href}>
                        <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary group">
                          Explore Sector
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="h-4 w-4" />
                Sustainability First
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Building a <span className="text-gradient">Sustainable</span> Future
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to environmental responsibility and social impact drives every decision we make across all our business sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Carbon Neutral by 2030</h3>
                  <p className="text-muted-foreground">Committed to achieving net-zero carbon emissions across all operations through renewable energy and efficient practices.</p>
                </CardContent>
              </Card>

              <Card className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Community Impact</h3>
                  <p className="text-muted-foreground">Supporting local communities through education, healthcare initiatives, and sustainable livelihood programs.</p>
                </CardContent>
              </Card>

              <Card className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Ethical Business</h3>
                  <p className="text-muted-foreground">Maintaining the highest standards of corporate governance and ethical business practices in all our operations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Awards & Recognition
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recognized for <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality and innovation has been acknowledged by industry leaders and prestigious organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence in Agriculture</h3>
              <p className="text-sm text-muted-foreground">National Agriculture Innovation Award 2023</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Healthcare Innovation</h3>
              <p className="text-sm text-muted-foreground">Best Pharma Company Award 2023</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sustainability Leader</h3>
              <p className="text-sm text-muted-foreground">Green Business Excellence Award 2023</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real Estate Excellence</h3>
              <p className="text-sm text-muted-foreground">Developer of the Year 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              What People Say
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our partners, customers, and stakeholders about their experience working with Shanti Group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Shanti Group's agricultural solutions have transformed our farming practices. Their sustainable approach has not only increased our yield but also improved soil health."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    RS
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Rajesh Singh</h4>
                    <p className="text-sm text-muted-foreground">Farmer, Punjab</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Living in a Shanti Lifespaces property has been wonderful. The build quality, amenities, and community atmosphere exceed our expectations."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    AP
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Anita Patel</h4>
                    <p className="text-sm text-muted-foreground">Homeowner, Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Shanti Pharma's commitment to quality and innovation in healthcare solutions has made them our preferred partner for medical supplies."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    DM
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dr. Meera</h4>
                    <p className="text-sm text-muted-foreground">Hospital Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              News & <span className="text-gradient">Announcements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest developments, achievements, and upcoming initiatives across all our business sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-premium hover-lift">
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-3">December 2024</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">New Sustainable Agriculture Initiative Launched</h3>
                <p className="text-muted-foreground mb-4">Introducing our latest organic farming program that aims to help 10,000 farmers transition to sustainable practices by 2025.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift">
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-3">November 2024</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Awadh Nagari Township Project Announced</h3>
                <p className="text-muted-foreground mb-4">Exciting new residential township project in Gondpipary featuring modern amenities and traditional architectural elements.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift">
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-3">October 2024</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare Innovation Center Opens</h3>
                <p className="text-muted-foreground mb-4">Our new research facility focuses on developing next-generation pharmaceutical solutions for emerging health challenges.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
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