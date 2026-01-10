import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pill, ShieldCheck, Building2 } from "lucide-react";

const PharmaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1631549916768-4119b2d5f926?q=80&w=2679&auto=format&fit=crop", // Pills/Pharmacy
    "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2669&auto=format&fit=crop", // Lab/Clean
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2669&auto=format&fit=crop", // Medical shelves
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2660&auto=format&fit=crop"  // Research/Blue theme
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
            Pharmaceutical Division
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto drop-shadow-sm">
            Excellence in healthcare distribution and medical solutions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">

        {/* Item 01 - Rohit Medical Agency */}
        <div className="flex flex-col md:flex-row gap-12 mb-32 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Building2 className="w-24 h-24 text-blue-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2673&auto=format&fit=crop"
                  alt="Rohit Medical Agency"
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
                Rohit Medical Agency
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Leading wholesale distribution of medicines with extensive industry partnerships.
              Under the visionary leadership of our CEO, <strong>Anup Arun Veginwar</strong>, we ensure reliable supply of quality pharmaceutical
              products to hospitals, clinics, and medical institutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We bridge the gap between manufacturers and healthcare providers, ensuring accessibility to vital medications.
            </p>

            <Button
              className="bg-[#0f2c4a] hover:bg-[#0a1f35] text-white rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold transition-all group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaPage;