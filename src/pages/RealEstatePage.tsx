import { Building, MapPin, Phone, Mail, Users, Target, Award, TrendingUp, Home, Leaf, Shield, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import shantiLifespacesLogo from "@/assets/shanti-lifespaces-logo.png";

const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-4 px-4 text-center bg-gradient-primary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building className="h-8 w-8" />
            <div>
              <h1 className="text-5xl font-bold">Real Estate Division</h1>
              <p className="text-xl mt-2 text-white/90">Shanti Life Spaces</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Creating premium living spaces and commercial developments that blend modern innovation 
            with sustainable design, under the trusted Shanti Group umbrella.
          </p>
        </div>
      </section>

      {/* About Shanti Life Spaces */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <img 
                src={shantiLifespacesLogo} 
                alt="Shanti Lifespaces Logo" 
                className="h-32 w-auto object-contain"
              />
            </div>
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Projects</h2>
            <p className="text-xl text-muted-foreground">Exciting new developments coming soon</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="bg-gradient-primary p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Star className="h-8 w-8 text-secondary" />
                  <h3 className="text-4xl font-bold text-primary drop-shadow-lg">Awadh Nagari</h3>
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-4">
                    <Home className="h-6 w-6 text-secondary flex-shrink-0" />
                    <p className="text-black">A township where tradition meets modern living</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Leaf className="h-6 w-6 text-secondary flex-shrink-0" />
                    <p className="text-black">Inspired by culture, rooted in community</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-secondary flex-shrink-0" />
                    <p className="text-black">Located in Gondpipary</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Project Highlights</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Modern township design with traditional architectural elements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Community-centric living with cultural spaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Leaf className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Green spaces and sustainable development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Strategic location in Gondpipary</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Home className="h-6 w-6 text-primary mx-auto mb-2" />
                        <h5 className="font-semibold text-primary">Premium Homes</h5>
                        <p className="text-sm text-muted-foreground">2-4 BHK Options</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <h5 className="font-semibold text-primary">Amenities</h5>
                        <p className="text-sm text-muted-foreground">Club & Recreation</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                        <h5 className="font-semibold text-primary">Security</h5>
                        <p className="text-sm text-muted-foreground">24/7 Gated Community</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                        <h5 className="font-semibold text-primary">Launch</h5>
                        <p className="text-sm text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full" size="lg">
                        Register Interest
                      </Button>
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
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        placeholder="+91 98765 43210" 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="interest" className="text-sm font-semibold text-foreground">Property Interest</Label>
                    <Input 
                      id="interest" 
                      placeholder="Residential, Commercial, Investment Property..." 
                      className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20" 
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">Your Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, budget, preferred location, or any specific questions you have..." 
                      rows={5} 
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 resize-none" 
                    />
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
    </div>
  );
};

export default RealEstatePage;