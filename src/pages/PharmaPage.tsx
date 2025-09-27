import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pill, Users, Building2, Award, Heart, ShieldCheck, Handshake, Star } from "lucide-react";

const PharmaPage = () => {
  const partnerCompanies = [
    "Sun Pharmaceutical", "Dr. Reddy's", "Cipla", "Lupin", "Torrent Pharma",
    "Glenmark", "Cadila Healthcare", "Alkem Labs", "Biocon", "Divis Labs",
    "Aurobindo Pharma", "Piramal Healthcare", "Abbott India", "Pfizer India"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Pill className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Pharmaceutical <span className="text-blue-600">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Delivering quality healthcare solutions and wholesale pharmaceutical distribution 
              with trusted partnerships across the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Rohit Medical Agency Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Pharmaceutical Division
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading wholesale distribution of medicines with extensive industry partnerships
              </p>
            </div>

            {/* Main Content Card */}
            <Card className="mb-8 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Rohit Medical Agency</CardTitle>
                    <CardDescription className="text-blue-100">
                      Wholesale Pharmaceutical Distribution & Medical Solutions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Company Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">About Our Company</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Rohit Medical Agency specializes in wholesale distribution of medicines, 
                      serving healthcare providers across the region. With our extensive network 
                      and strategic partnerships, we ensure reliable supply of quality pharmaceutical 
                      products to hospitals, clinics, and medical institutions.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Handshake className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">50+ Partner Companies</h4>
                          <p className="text-sm text-muted-foreground">Strategic partnerships with leading pharmaceutical manufacturers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <ShieldCheck className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                          <p className="text-sm text-muted-foreground">Strict quality control and regulatory compliance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Heart className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Healthcare Focus</h4>
                          <p className="text-sm text-muted-foreground">Committed to improving healthcare accessibility</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CEO Info Card */}
                  <div>
                    <Card className="border-2 border-blue-100">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                          <Users className="h-12 w-12 text-white" />
                        </div>
                        <CardTitle className="text-xl">Anup Arun Veginwar</CardTitle>
                        <CardDescription className="font-medium text-blue-600">
                          Chief Executive Officer
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Leading Rohit Medical Agency with a vision to revolutionize 
                          pharmaceutical distribution through innovation, quality, and 
                          strategic partnerships in the healthcare sector.
                        </p>
                        <div className="flex justify-center gap-2 mb-4">
                          <Badge variant="secondary" className="text-xs">Healthcare Leader</Badge>
                          <Badge variant="secondary" className="text-xs">Industry Expert</Badge>
                        </div>
                        <div className="flex justify-center items-center gap-1 text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Industry Recognition</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partner Companies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="h-6 w-6 text-blue-600" />
                  Our Pharmaceutical Partners
                </CardTitle>
                <CardDescription>
                  Trusted partnerships with leading pharmaceutical companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {partnerCompanies.slice(0, 16).map((company, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="justify-center py-2 px-3 text-sm hover:bg-blue-50 transition-colors"
                    >
                      {company}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="gap-2">
                    <Building2 className="h-4 w-4" />
                    View All Partners
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive pharmaceutical solutions for healthcare providers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 bg-blue-100 rounded-full w-fit mb-4">
                    <Pill className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Wholesale Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bulk supply of medicines to hospitals, clinics, and healthcare institutions 
                    with competitive pricing and reliable delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 bg-green-100 rounded-full w-fit mb-4">
                    <ShieldCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Rigorous quality control processes ensuring all pharmaceutical products 
                    meet regulatory standards and safety requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 bg-purple-100 rounded-full w-fit mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full compliance with pharmaceutical regulations, licensing, 
                    and documentation for seamless business operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PharmaPage;