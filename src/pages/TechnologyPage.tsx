import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Smartphone, Cloud, Shield } from "lucide-react";

const TechnologyPage = () => {
  const solutions = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile app development",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/10 to-blue-400/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Technology
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving digital transformation with innovative technology solutions 
            that empower businesses to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Technology Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 text-cyan-600">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Innovation at Our Core
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe technology should be a catalyst for positive change. Our team 
              of experienced developers, engineers, and innovators work tirelessly to 
              create solutions that not only meet today's challenges but anticipate 
              tomorrow's opportunities.
            </p>
            <Button size="lg" className="btn-primary">
              Explore Our Technologies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;