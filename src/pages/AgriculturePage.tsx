import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Wheat } from "lucide-react";

const AgriculturePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1625246333195-bf404ec0e24f?q=80&w=2626&auto=format&fit=crop", // Farming field
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2540&auto=format&fit=crop", // Wheat close up
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000&auto=format&fit=crop", // Rice grains
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"  // Green field landscape
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
            Agriculture Division
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto drop-shadow-sm">
            Cultivating quality and sustainability for a better future
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">

        {/* Item 01 - Shanti Agro Industries */}
        <div className="flex flex-col md:flex-row gap-12 mb-32 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              {/* Placeholder for the "Shanti Agro" image from reference */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Leaf className="w-24 h-24 text-emerald-600/20" />
                <img
                  src="https://plus.unsplash.com/premium_photo-1722945635992-8eda6a907978?q=80&w=3460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Agriculture Soil"
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
                Shanti Agro Industries
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Established in 2004, we introduce ourselves as M/s. Shanti Agro Industries.
              We are located at Navsari, Gujarat. We manufacture and supply high quality
              Zinc Sulphate Monohydrate (fertilizer grade) and Copper Sulphate, ensuring
              excellence in agricultural productivity.
            </p>

            <Button
              className="bg-[#0f2c4a] hover:bg-[#0a1f35] text-white rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold transition-all group"
            >
              Visit Page
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Item 02 - Vinod Rice Mill */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden aspect-[4/3] shadow-xl">
              {/* Placeholder for the "Rice Mill" image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Wheat className="w-24 h-24 text-amber-600/20" />
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000&auto=format&fit=crop"
                  alt="Rice Grains"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pr-8 text-right md:text-left">
            {/* For the reverse layout, we align text right on mobile if desired, but left is usually better for reading. 
                Applying standard left alignment for readability on desktop, maybe correct ordering.
                The reference image has text on right, image on left for 01. 
                Let's stick to consistent text alignment (left) even if flex direction swaps.
            */}
            <div className="relative mb-6 md:text-left text-left">
              <span className="text-8xl font-bold text-transparent absolute -top-16 -left-4 md:-left-8 opacity-20 select-none pointer-events-none"
                style={{ WebkitTextStroke: "2px #1a1a1a" }}>
                02
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 relative z-10">
                Vinod Rice Mill
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg md:text-left text-left">
              Processing the finest grains with state-of-the-art rice milling technology.
              We ensure purity, quality, and nutritional value in every grain we process,
              delivering premium rice products to markets across the region.
            </p>

            <div className="flex justify-start">
              <Button
                className="bg-[#0f2c4a] hover:bg-[#0a1f35] text-white rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold transition-all group"
              >
                Visit Page
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgriculturePage;