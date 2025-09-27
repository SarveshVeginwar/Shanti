import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Wheat, Droplets, Sun } from "lucide-react";

const AgriculturePage = () => {
  const services = [
    {
      title: "Sustainable Farming",
      description: "Eco-friendly farming practices that preserve soil health and biodiversity",
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: "Crop Management",
      description: "Advanced crop rotation and management techniques for optimal yields",
      icon: <Wheat className="h-6 w-6" />,
    },
    {
      title: "Irrigation Solutions",
      description: "Efficient water management systems for sustainable agriculture",
      icon: <Droplets className="h-6 w-6" />,
    },
    {
      title: "Solar Farming",
      description: "Renewable energy solutions integrated with agricultural practices",
      icon: <Sun className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/10 to-green-400/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Agriculture
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the way in sustainable agriculture with innovative farming solutions 
            that nurture both the land and communities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Agricultural Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 text-green-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Agricultural Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are committed to revolutionizing agriculture through sustainable practices, 
              cutting-edge technology, and deep respect for the environment. Our mission is 
              to create farming solutions that not only increase productivity but also preserve 
              the earth for future generations.
            </p>
            <Button size="lg" className="btn-primary">
              Learn More About Our Approach
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriculturePage;