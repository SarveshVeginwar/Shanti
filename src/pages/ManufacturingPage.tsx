import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Settings } from "lucide-react";

const ManufacturingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop", // Industrial Factory
    "https://images.unsplash.com/photo-1565439396656-e4ef6595a8bf?q=80&w=2670&auto=format&fit=crop", // Machinery 1
    "https://images.unsplash.com/photo-1537462713205-e513d5509d36?q=80&w=2670&auto=format&fit=crop", // Modern Factory
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop"  // Engineering
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
            Manufacturing Division
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto drop-shadow-sm">
            Excellence in industrial production and quality engineering
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">

        {/* Item 01 - Industrial Manufacturing */}
        <div className="flex flex-col md:flex-row gap-12 mb-32 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Factory className="w-24 h-24 text-slate-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1635334657371-q=80&w=2670&auto=format&fit=crop" // Note: This URL might be invalid if cut off, using a simpler reliable one below
                  srcSet="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                  alt="Industrial Manufacturing"
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
                Industrial Manufacturing
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              We specialize in the large-scale production of essential industrial chemicals and fertilizers. 
              Our state-of-the-art facilities in Gujarat are equipped to manufacture high-grade 
              Zinc Sulphate Monohydrate and Copper Sulphate.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Committed to supporting both industrial and agricultural sectors, we ensure consistent supply chains and 
                superior product purity.
            </p>

            <Button
              className="bg-[#0f2c4a] hover:bg-[#0a1f35] text-white rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold transition-all group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Item 02 - Quality Production */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Settings className="w-24 h-24 text-stone-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop"
                  alt="Quality Production"
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
                Quality Engineering
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-left text-left">
              Our manufacturing processes are driven by precision and quality. We adhere to strict global standards, 
              utilizing advanced engineering techniques to minimize waste and maximize efficiency. 
              Every batch undergoes rigorous quality control testing.
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

export default ManufacturingPage;