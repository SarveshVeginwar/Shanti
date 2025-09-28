import { Calendar, Users, Award, TrendingUp, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const milestones = [
    {
      year: "1960",
      title: "Foundation",
      description: "Shanti Group was founded with a vision to create sustainable value in agriculture."
    },
    {
      year: "1975",
      title: "Agricultural Expansion",
      description: "Expanded operations across multiple states, introducing modern farming techniques."
    },
    {
      year: "1985",
      title: "Pharmaceutical Entry",
      description: "Entered the pharmaceutical sector with our first manufacturing facility."
    },
    {
      year: "1995",
      title: "Real Estate Ventures",
      description: "Diversified into real estate development, focusing on sustainable urban planning."
    },
    {
      year: "2005",
      title: "Technology Innovation",
      description: "Launched our technology division to embrace digital transformation."
    },
    {
      year: "2015",
      title: "Global Presence",
      description: "Established international partnerships and expanded to global markets."
    },
    {
      year: "2020",
      title: "Sustainability Focus",
      description: "Implemented comprehensive sustainability initiatives across all sectors."
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing our journey with next-generation innovations and sustainable growth."
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, setting the highest standards across all our operations."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Our foundation is built on trust, transparency, and ethical business practices that benefit all stakeholders."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace innovation and continuous improvement to stay ahead in a rapidly evolving world."
    },
    {
      icon: Calendar,
      title: "Sustainability",
      description: "We are committed to sustainable practices that ensure a better future for generations to come."
    }
  ];

  const boardMembers = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Chairman & Managing Director",
      experience: "35+ years in Agriculture & Business"
    },
    {
      name: "Mrs. Priya Agarwal",
      position: "Independent Director",
      experience: "20+ years in Corporate Governance"
    },
    {
      name: "Mr. Anil Kumar",
      position: "Executive Director",
      experience: "25+ years in Pharmaceuticals"
    },
    {
      name: "Dr. Sunita Mehta",
      position: "Independent Director",
      experience: "30+ years in Technology & Innovation"
    },
    {
      name: "Mr. Vikash Gupta",
      position: "Director - Finance",
      experience: "28+ years in Financial Management"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Six decades of innovation, growth, and commitment to building a sustainable future 
              across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Building Tomorrow, <span className="text-gradient">Today</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 1960, Shanti Group began as a modest agricultural venture with a bold vision: 
                  to create sustainable value that would benefit communities and drive economic growth. 
                  Over six decades, we have evolved into a diversified conglomerate operating across 
                  four major sectors.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our journey from a single-sector company to a multi-industry leader reflects our 
                  commitment to innovation, excellence, and sustainable growth. Today, we employ over 
                  1,000 people and our operations touch millions of lives across the region.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-3xl font-bold text-gradient mb-2">1960</div>
                    <div className="text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-3xl font-bold text-gradient mb-2">4</div>
                    <div className="text-muted-foreground">Major Sectors</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
                  <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    To be a globally recognized conglomerate that creates lasting value through 
                    innovation, sustainability, and excellence across all our business sectors.
                  </p>
                  <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
                  <p className="text-lg leading-relaxed">
                    To leverage our diverse expertise and resources to build a sustainable future, 
                    create meaningful employment, and contribute positively to the communities we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture across all sectors and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-premium hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <value.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding" id="history">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From our humble beginnings in 1960 to becoming a leading multi-sector conglomerate, 
              here are the key milestones that shaped our growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gradient">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-foreground">{milestone.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership & <span className="text-gradient">Governance</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our success is driven by experienced leadership that combines strategic vision with 
              operational excellence. Our management team brings decades of industry experience 
              and a shared commitment to sustainable growth.
            </p>
            <div className="bg-card rounded-2xl p-8 shadow-card mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Board of Directors</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our board consists of industry veterans and independent directors who provide 
                strategic guidance and ensure strong governance practices across all our business units. 
                Their collective expertise spans agriculture, pharmaceuticals, real estate, technology, 
                and corporate governance.
              </p>
              
              <div className="space-y-4">
                {boardMembers.map((member, index) => (
                  <Card key={index} className="card-premium hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <User size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {member.name}
                          </h4>
                          <p className="text-sm font-medium text-primary mb-1">
                            {member.position}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {member.experience}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;