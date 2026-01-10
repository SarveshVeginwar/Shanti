import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Pill, Home, Cpu, Factory, ArrowRight, Rocket } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { InteractiveHeroBackground } from "@/components/InteractiveHeroBackground";
import { motion, useScroll, useTransform } from "framer-motion";

const BusinessesPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const businesses = [
    {
      title: "Agriculture",
      description: "Sustainable farming solutions and agricultural innovation",
      icon: <Leaf className="h-10 w-10" />,
      href: "/agriculture",
      color: "bg-green-100 text-green-600",
      image: "https://plus.unsplash.com/premium_photo-1661838839770-af57e3768189?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2010"
    },
    {
      title: "Pharmaceuticals",
      description: "Healthcare solutions and pharmaceutical development",
      icon: <Pill className="h-10 w-10" />,
      href: "/pharma",
      color: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000",
      year: "2012"
    },
    {
      title: "Real Estate",
      description: "Property development and real estate services",
      icon: <Home className="h-10 w-10" />,
      href: "/real-estate",
      color: "bg-purple-100 text-purple-600",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      year: "2015"
    },
    {
      title: "Technology",
      description: "Digital innovation and technology solutions",
      icon: <Cpu className="h-10 w-10" />,
      href: "/technology",
      color: "bg-cyan-100 text-cyan-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      year: "2018"
    },
    {
      title: "Manufacturing",
      description: "Industrial manufacturing and production solutions",
      icon: <Factory className="h-10 w-10" />,
      href: "/manufacturing",
      color: "bg-orange-100 text-orange-600",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      year: "2020"
    },
  ];

  // Horizontal transform for desktop
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center perspective-1000">
              <motion.h1 
                className="text-6xl md:text-8xl font-black text-foreground mb-6 tracking-tight"
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Businesses</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
              A timeline of innovation and growth across diverse sectors.              </motion.p>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        >
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            </div>
        </motion.div>
      </section>

      {/* Horizontal Scroll Journey Section */}
      <section ref={targetRef} className="relative h-[175vh] hidden lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            {/* Timeline Line/Path Background */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -translate-y-1/2 blur-sm" />
            
            <motion.div style={{ x }} className="flex gap-20 px-20">
            {businesses.map((business, index) => (
              <div key={index} className="relative flex flex-col items-center justify-center min-w-[500px] group">
                 {/* Connection Point to Timeline */}
                 <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_20px_rgba(var(--primary),0.5)] hidden" />
                 
                 <div className={`relative w-full transition-all duration-500 hover:-translate-y-4 ${index % 2 === 0 ? '-translate-y-12' : 'translate-y-12'}`}>
                    
                    <Card className="card-premium overflow-hidden border-none shadow-2xl bg-card/50 backdrop-blur-md w-full h-full relative z-10">
                        {/* Image Header */}
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <img src={business.image} alt={business.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className={`absolute top-4 right-4 p-3 rounded-xl ${business.color} bg-white/90 backdrop-blur z-20 shadow-lg`}>
                                {business.icon}
                            </div>
                        </div>

                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">{business.title}</CardTitle>
                            <CardDescription className="text-lg">{business.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link to={business.href}>
                                <Button className="w-full btn-primary group/btn">
                                    Explore Sector
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Desktop CTA Section (Moved below scroll) */}
      {/* Desktop CTA Section (Moved below scroll) */}
      <section className="py-32 hidden lg:block bg-gradient-to-br from-[#0f2c4a] to-[#1a3b5c] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
             <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6">
                    <Rocket className="w-4 h-4" />
                    <span>Future Growth</span>
                </div>
                <h3 className="text-5xl font-bold mb-6 tracking-tight">What's Next for Shanti Group?</h3>
                <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
                    We are constantly expanding our horizons. Join us as we continue to build the future through sustainable innovation and strategic partnerships across the globe.
                </p>
                <Link to="/contact">
                    <Button size="lg" className="bg-white text-[#0f2c4a] hover:bg-blue-50 text-lg px-10 py-6 h-auto rounded-none font-semibold transition-all hover:scale-105 shadow-xl">
                        Partner With Us
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
             </ScrollReveal>
          </div>
      </section>

      {/* Mobile/Tablet Vertical Legacy View (Fallback) */}
      <section className="py-20 lg:hidden container mx-auto px-4">
         <div className="relative border-l-2 border-primary/20 ml-4 space-y-12 pl-8">
            {businesses.map((business, index) => (
               <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  
                  <Card className="card-premium overflow-hidden group">
                        <div className="h-40 overflow-hidden relative">
                            <img src={business.image} alt={business.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                             <div className={`absolute top-4 right-4 p-2 rounded-lg ${business.color} bg-white/90 shadow-sm`}>
                                {business.icon}
                            </div>
                        </div>
                        <CardHeader>
                           <CardTitle className="text-2xl">{business.title}</CardTitle>
                           <CardDescription>{business.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link to={business.href}>
                                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Explore</Button>
                            </Link>
                        </CardContent>
                  </Card>
               </motion.div>
            ))}
         </div>
         <div className="mt-16 text-center">
            <Link to="/contact">
                <Button size="lg" className="btn-primary w-full">Partner With Us</Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default BusinessesPage;