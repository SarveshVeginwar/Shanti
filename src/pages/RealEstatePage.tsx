import { Building, MapPin, Phone, Mail, Users, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-primary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building className="h-12 w-12" />
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
              <div className="bg-gradient-primary text-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">✨</span>
                  <h3 className="text-3xl font-bold">Awadh Nagari</h3>
                  <span className="text-3xl">✨</span>
                </div>
                <div className="space-y-3 text-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏘️</span>
                    <p>A township where tradition meets modern living</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌿</span>
                    <p>Inspired by culture, rooted in community</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💎</span>
                    <p>Located in Gondpipary</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Project Highlights</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <span>Modern township design with traditional architectural elements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <span>Community-centric living with cultural spaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <span>Green spaces and sustainable development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">•</span>
                        <span>Strategic location in Gondpipary</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-primary">Premium Homes</h5>
                        <p className="text-sm text-muted-foreground">2-4 BHK Options</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-primary">Amenities</h5>
                        <p className="text-sm text-muted-foreground">Club & Recreation</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <h5 className="font-semibold text-primary">Security</h5>
                        <p className="text-sm text-muted-foreground">24/7 Gated Community</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Contact Shanti Life Spaces</h2>
            <p className="text-xl text-muted-foreground">
              Ready to find your perfect space? Get in touch with our real estate experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Office Address</h4>
                    <p className="text-muted-foreground">
                      Shanti Life Spaces<br />
                      Real Estate Division, Shanti Group<br />
                      Business District, Mumbai - 400001
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 22 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@shantilifespaces.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Property Interest</Label>
                    <Input id="interest" placeholder="Residential/Commercial/Investment" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements..." rows={4} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;