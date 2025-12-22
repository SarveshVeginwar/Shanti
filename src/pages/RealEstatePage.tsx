import { Building, MapPin, Phone, Mail, Users, Target, Award, TrendingUp, Home, Leaf, Shield, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import shantiLifespacesLogo from "@/assets/shanti-group-logo-new.png";
const RealEstatePage = () => {
  return <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-4 px-4 text-center bg-gradient-primary text-white">
        <div className="container mx-auto max-w-4xl border-2">
          <img alt="Shanti Lifespaces Logo" src="/lovable-uploads/a3607ed9-f394-4c99-aa4f-0feed9978c15.png" className="h-64 w-64 mx-auto rounded-lg" />
        </div>
      </section>

      {/* About Shanti Life Spaces */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            
            <h2 className="text-4xl font-bold text-foreground mb-4">About Shanti Life Spaces</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A premier real estate subsidiary of Shanti Group, specializing in residential and commercial developments 
              that redefine modern living and business spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To create exceptional real estate developments that enhance communities and provide 
                lasting value for our customers. We believe in building not just structures, but 
                spaces where life flourishes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">500+</h4>
                  <p className="text-sm text-muted-foreground">Happy Families</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">25+</h4>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <h4 className="text-2xl font-bold text-foreground mb-4">Core Values</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Quality First</h5>
                    <p className="text-sm text-muted-foreground">Uncompromising standards in construction and design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Customer Satisfaction</h5>
                    <p className="text-sm text-muted-foreground">Building long-term relationships through excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Innovation</h5>
                    <p className="text-sm text-muted-foreground">Embracing modern technology and sustainable practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive real estate solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Residential Projects</CardTitle>
                <CardDescription>Premium apartments, villas, and gated communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Luxury apartments with modern amenities</li>
                  <li>• Independent villas and row houses</li>
                  <li>• Gated communities with security</li>
                  <li>• Smart home integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Commercial Spaces</CardTitle>
                <CardDescription>Office complexes, retail spaces, and business centers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Corporate office buildings</li>
                  <li>• Shopping malls and retail outlets</li>
                  <li>• Business parks and IT complexes</li>
                  <li>• Co-working spaces</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Property Management</CardTitle>
                <CardDescription>End-to-end property management and maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Property maintenance services</li>
                  <li>• Tenant management and relations</li>
                  <li>• Financial management and reporting</li>
                  <li>• Legal compliance and documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section id="awadh-nagari" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-dark px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Star className="h-4 w-4" />
              Coming Soon to Gondpipari
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6">Upcoming Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be the first to experience our most ambitious development yet — a perfect blend of tradition and modernity
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-2 border-primary/20">
              {/* Hero Banner */}
              <div className="bg-gradient-to-r from-primary via-primary-dark to-primary p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <Star className="h-10 w-10 text-secondary animate-float" />
                    <div className="text-center">
                      <h3 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg tracking-tight">Awadh Nagari</h3>
                      <p className="text-secondary font-semibold text-lg mt-2">A Township of Dreams</p>
                    </div>
                    <Star className="h-10 w-10 text-secondary animate-float" style={{
                    animationDelay: '0.5s'
                  }} />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <Home className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <p className="text-white font-medium">Tradition Meets Modernity</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <Leaf className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <p className="text-white font-medium">Culture & Community</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <p className="text-white font-medium">Gondpipari, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Overview Video */}
              <div className="p-8 bg-muted/30">
                <h4 className="text-2xl font-bold text-foreground mb-4 text-center flex items-center justify-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Project Overview
                </h4>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                  <video className="w-full h-full object-cover" controls poster="/videos/awadh-nagari-overview.mp4">
                    <source src="/videos/awadh-nagari-overview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Target className="h-8 w-8 text-primary" />
                      Project Highlights
                    </h4>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-4 p-3 bg-muted/20 rounded-lg">
                        <Building className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">Modern Township Design</span>
                          <p className="text-sm mt-1">Traditional architectural elements blended with contemporary living spaces</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 bg-muted/20 rounded-lg">
                        <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">Community-Centric Living</span>
                          <p className="text-sm mt-1">Dedicated cultural spaces, community halls, and gathering areas</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 bg-muted/20 rounded-lg">
                        <Leaf className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">Green & Sustainable</span>
                          <p className="text-sm mt-1">Eco-friendly construction with ample green spaces and parks</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 bg-muted/20 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">Prime Location</span>
                          <p className="text-sm mt-1">Strategic location in Gondpipari with excellent connectivity</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Award className="h-8 w-8 text-primary" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                        <Home className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h5 className="font-bold text-primary text-lg">Premium Homes</h5>
                        <p className="text-sm text-muted-foreground mt-1">2, 3 & 4 BHK Options</p>
                      </div>
                      <div className="text-center p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20">
                        <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h5 className="font-bold text-primary text-lg">World-Class Amenities</h5>
                        <p className="text-sm text-muted-foreground mt-1">Club, Gym & Recreation</p>
                      </div>
                      <div className="text-center p-5 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
                        <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h5 className="font-bold text-primary text-lg">24/7 Security</h5>
                        <p className="text-sm text-muted-foreground mt-1">Gated Community</p>
                      </div>
                      <div className="text-center p-5 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl border border-orange-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-bl-lg">
                          NEW
                        </div>
                        <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h5 className="font-bold text-primary text-lg">Launch</h5>
                        <p className="text-sm text-muted-foreground mt-1">Coming Soon 2026</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Button className="w-full h-14 text-lg font-semibold" size="lg">
                        Register Your Interest
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        Be among the first to know about exclusive pre-launch offers
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-background/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="h-4 w-4" />
              Get in Touch
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Contact Shanti Life Spaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to find your perfect space? Connect with our real estate experts and discover premium properties that match your vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            <Card className="card-premium group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Visit Our Office</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Shanti Life Spaces<br />
                  Real Estate Division, Shanti Group<br />
                  Business District, Mumbai - 400001
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Call Us Today</h3>
                <p className="text-muted-foreground mb-2">Sales & Inquiries</p>
                <p className="text-lg font-semibold text-primary">+91 22 1234 5678</p>
              </CardContent>
            </Card>

            <Card className="card-premium group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-2">General Inquiries</p>
                <p className="text-lg font-semibold text-primary">shantigroup.w@gmail.com</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-foreground mb-3">Send us a Message</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 98765 43210" className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="interest" className="text-sm font-semibold text-foreground">Property Interest</Label>
                    <Input id="interest" placeholder="Residential, Commercial, Investment Property..." className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">Your Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements, budget, preferred location, or any specific questions you have..." rows={5} className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 resize-none" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="btn-hero flex-1 h-12 text-lg font-semibold">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="btn-secondary-hero flex-1 h-12 text-lg font-semibold">
                      <Phone className="h-5 w-5 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Shanti Life Spaces?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Happy Families</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default RealEstatePage;