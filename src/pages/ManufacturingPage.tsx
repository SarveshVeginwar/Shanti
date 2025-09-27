import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Cog, Truck, Award } from "lucide-react";

const ManufacturingPage = () => {
  const capabilities = [
    {
      title: "Production Excellence",
      description: "State-of-the-art manufacturing facilities with quality control",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      title: "Process Optimization",
      description: "Lean manufacturing principles for maximum efficiency",
      icon: <Cog className="h-6 w-6" />,
    },
    {
      title: "Supply Chain",
      description: "Integrated supply chain management and logistics solutions",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality standards and certification processes",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600/10 to-red-400/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Manufacturing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Excellence in manufacturing with advanced production capabilities, 
            quality assurance, and sustainable practices.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Manufacturing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 text-orange-600">
                    {capability.icon}
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our manufacturing division combines traditional craftsmanship with 
              modern technology to deliver products that meet the highest standards 
              of quality, reliability, and sustainability. We're committed to 
              continuous improvement and innovation in all our processes.
            </p>
            <Button size="lg" className="btn-primary">
              View Our Facilities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;