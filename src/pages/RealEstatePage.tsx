import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, MapPin } from "lucide-react";

const RealEstatePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Modern Skyscraper
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop", // Apartments
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2673&auto=format&fit=crop", // Real estate exterior
    "https://images.unsplash.com/photo-1449844909324-982522691952?q=80&w=2670&auto=format&fit=crop"  // Urban city
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
            Real Estate
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto drop-shadow-sm">
            Redefining modern living and commercial excellence
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">

        {/* Item 01 - Shanti Life Spaces */}
        <div className="flex flex-col md:flex-row gap-12 mb-  32 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Building className="w-24 h-24 text-indigo-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2584&auto=format&fit=crop"
                  alt="Shanti Life Spaces"
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
                Shanti Life Spaces
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              A premier real estate subsidiary of Shanti Group, specializing in residential and commercial developments 
              that redefine modern living and business spaces.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                With over <strong className="text-indigo-900">500+ happy families</strong> and <strong className="text-indigo-900">25+ completed projects</strong>, we are committed to building not just structures, but spaces where life flourishes.
            </p>

            <Button
              className="bg-[#0f2c4a] hover:bg-[#0a1f35] text-white rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold transition-all group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Item 02 - Awadh Nagari */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <MapPin className="w-24 h-24 text-orange-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop"
                  alt="Awadh Nagari Construction"
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
                Awadh Nagari - Upcoming
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-left text-left">
              Be the first to experience our most ambitious development yet in <strong>Gondpipari, Maharashtra</strong>.
              Awadh Nagari is a township of dreams, designed to be a perfect blend of tradition and modernity,
              offering premium homes and world-class community living.
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

export default RealEstatePage;