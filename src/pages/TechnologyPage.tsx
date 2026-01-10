import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Shield } from "lucide-react";

const TechnologyPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop", // Circuit board/Chip
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // Cybersecurity/Matrix
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", // Network/Globe
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"  // Code/Screen
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Background Slideshow */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}

        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-md">
            Technology Division
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto drop-shadow-sm">
            Driving digital transformation with innovation and excellence
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">

        {/* Item 01 - Digital Solutions */}
        <div className="flex flex-col md:flex-row gap-12 mb-32 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Cpu className="w-24 h-24 text-cyan-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop"
                  alt="Digital Solutions"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="relative mb-6">
              <span className="text-8xl font-bold text-transparent absolute -top-16 -left-4 md:-left-8 opacity-20 select-none pointer-events-none"
                style={{ WebkitTextStroke: "2px #1a1a1a" }}>
                01
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 relative z-10">
                Digital Solutions
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              We empower businesses to thrive in the digital age through custom software development and 
              cutting-edge mobile applications. Our solutions are tailored to meet unique business needs, 
              ensuring scalability and performance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                From native mobile apps to complex enterprise systems, our expert team delivers robust 
                digital products that drive growth and efficiency.
            </p>

            <Button
              className="bg-[#0f2c4a] hover:bg-[#0a1f35] text-white rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold transition-all group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Item 02 - Infrastructure & Security */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Shield className="w-24 h-24 text-blue-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
                  alt="Infrastructure & Security"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pr-8 text-right md:text-left">
            <div className="relative mb-6 md:text-left text-left">
              <span className="text-8xl font-bold text-transparent absolute -top-16 -left-4 md:-left-8 opacity-20 select-none pointer-events-none"
                style={{ WebkitTextStroke: "2px #1a1a1a" }}>
                02
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 relative z-10">
                Infrastructure & Security
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-left text-left">
              Protecting your digital assets is our priority. We offer comprehensive cybersecurity services 
              and scalable cloud infrastructure solutions. Our focus involves securing your data while enabling 
              seamless global accessibility and reliability.
            </p>

            <div className="flex justify-start">
              <Button
                className="bg-[#0f2c4a] hover:bg-[#0a1f35] text-white rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold transition-all group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechnologyPage;