import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Leaf, Pill, Home, Cpu, Factory } from "lucide-react";

const BusinessesPage = () => {
  const businesses = [
    {
      title: "Agriculture",
      description: "Sustainable farming solutions and agricultural innovation",
      icon: <Leaf className="h-8 w-8" />,
      href: "/agriculture",
      color: "text-green-600",
    },
    {
      title: "Pharmaceuticals",
      description: "Healthcare solutions and pharmaceutical development",
      icon: <Pill className="h-8 w-8" />,
      href: "/pharma",
      color: "text-blue-600",
    },
    {
      title: "Real Estate",
      description: "Property development and real estate services",
      icon: <Home className="h-8 w-8" />,
      href: "/real-estate",
      color: "text-purple-600",
    },
    {
      title: "Technology",
      description: "Digital innovation and technology solutions",
      icon: <Cpu className="h-8 w-8" />,
      href: "/technology",
      color: "text-cyan-600",
    },
    {
      title: "Manufacturing",
      description: "Industrial manufacturing and production solutions",
      icon: <Factory className="h-8 w-8" />,
      href: "/manufacturing",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Our Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of business sectors where we create value 
            and drive innovation across multiple industries.
          </p>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 ${business.color}`}>
                    {business.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{business.title}</CardTitle>
                  <CardDescription className="text-base">
                    {business.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <Link to={business.href}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about our business opportunities? 
            Get in touch with our team today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessesPage;