import { ArrowRight, Leaf, Building2, Pill, Cpu, Cog, Star, Award, Users, Heart, Globe, Calendar, Trophy, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "@/components/ui/typewriter";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { InteractiveHeroBackground } from "@/components/InteractiveHeroBackground";
import shantiLogo from "@/assets/shanti-group-logo-new.png";

const HomePage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Parallax hook
  const sustainabilityRef = useRef(null);
  const { scrollYProgress: sustainabilityScroll } = useScroll({
      target: sustainabilityRef,
      offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(sustainabilityScroll, [0, 1], [0, 200]);

  const testimonials = [
    {
      id: 1,
      text: "Shanti Group's agricultural solutions have transformed our farming practices. Their sustainable approach has not only increased our yield but also improved soil health.",
      author: "Rajesh Singh",
      role: "Farmer, Punjab",
      initials: "RS",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 2,
      text: "Living in a Shanti Lifespaces property has been wonderful. The build quality, amenities, and community atmosphere exceed our expectations.",
      author: "Anita Patel",
      role: "Homeowner, Mumbai",
      initials: "AP",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      text: "Shanti Pharma's commitment to quality and innovation in healthcare solutions has made them our preferred partner for medical supplies.",
      author: "Dr. Meera",
      role: "Hospital Director",
      initials: "DM",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      text: "The technological infrastructure provided by Shanti Tech has revolutionized our business operations and increased efficiency by 40%.",
      author: "Vikram Kumar",
      role: "IT Manager, Delhi",
      initials: "VK",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      id: 5,
      text: "Shanti Manufacturing's products are industry-leading. Their attention to detail and quality control is unmatched in the market.",
      author: "Sarah Johnson",
      role: "Supply Chain Director",
      initials: "SJ",
      gradient: "from-red-400 to-red-600"
    },
    {
      id: 6,
      text: "Working with Shanti Group has been transformative. Their commitment to sustainability and corporate responsibility is truly inspiring.",
      author: "Michael Chen",
      role: "Business Partner",
      initials: "MC",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      id: 7,
      text: "Shanti Group's agricultural solutions have transformed our farming practices. It has increased our yield but also improved soil health.",
      author: "Rajesh Singh",
      role: "Farmer, Punjab",
      initials: "RS",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 8,
      text: "Living in a Shanti Lifespaces property has been wonderful. The build quality, amenities, and community atmosphere exceed our expectations.",
      author: "Anita Patel",
      role: "Homeowner, Mumbai",
      initials: "AP",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 9,
      text: "Shanti Pharma's commitment to quality and innovation in healthcare solutions has made them our preferred partner for medical supplies.",
      author: "Dr. Meera",
      role: "Hospital Director",
      initials: "DM",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: 10,
      text: "The technological infrastructure provided by Shanti Tech has revolutionized our business operations and increased efficiency by 40%.",
      author: "Vikram Kumar",
      role: "IT Manager, Delhi",
      initials: "VK",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      id: 11,
      text: "Shanti Manufacturing's products are industry-leading. Their attention to detail and quality control is unmatched in the market.",
      author: "Sarah Johnson",
      role: "Supply Chain Director",
      initials: "SJ",
      gradient: "from-red-400 to-red-600"
    },
    {
      id: 12,
      text: "Working with Shanti Group has been transformative. Their commitment to sustainability and corporate responsibility is truly inspiring.",
      author: "Michael Chen",
      role: "Business Partner",
      initials: "MC",
      gradient: "from-cyan-400 to-cyan-600"
    }
  ];

  // Continuous scroller will handle auto-advance; no interval needed
  const sectors = [
    {
      icon: Leaf,
      name: "Agriculture",
      description: "Sustainable farming solutions and agricultural innovation for a better tomorrow.",
      href: "/agriculture",
      color: "text-green-600"
    },
    {
      icon: Pill,
      name: "Pharmaceuticals",
      description: "Quality healthcare products and medical solutions for global well-being.",
      href: "/pharma",
      color: "text-blue-600"
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Premium properties and urban development projects across the region.",
      href: "/real-estate",
      color: "text-orange-600"
    },
    {
      icon: Cpu,
      name: "Technology",
      description: "Cutting-edge technological solutions for modern business challenges.",
      href: "/technology",
      color: "text-purple-600"
    },
    {
      icon: Cog,
      name: "Manufacturing",
      description: "Advanced manufacturing solutions and industrial excellence for diverse sectors.",
      href: "/manufacturing",
      color: "text-red-600"
    }
  ];

  const stats = [
    { number: "60+", label: "Years of Excellence" },
    { number: "5", label: "Major Sectors" },
    { number: "50+", label: "Successful Projects" },
    { number: "1000+", label: "Employees" }
  ];

  // Sector diagram layout - matching the image design
  const getSectorData = (name: string) => sectors.find(s => s.name === name)!;
  
  const sectorsTop = [
    getSectorData("Agriculture"),
    getSectorData("Real Estate"),
    getSectorData("Manufacturing")
  ];
  
  const sectorsBottom = [
    getSectorData("Pharmaceuticals"),
    getSectorData("Technology")
  ];

// Simple animated counter component
const AnimatedCounter = ({ value }: { value: string }) => {
    // Extract numeric part if present
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 15 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
    }, [springValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return () => unsubscribe();
    }, [springValue]);

    const handleViewportEnter = () => {
        motionValue.set(numericValue);
    };

    return (
        <span className="inline-flex">
            <motion.span
                onViewportEnter={handleViewportEnter}
                viewport={{ once: false }}
            >
                {displayValue}
            </motion.span>
            {suffix}
        </span>
    );
};

  return (
    <div className="min-h-screen -mt-16 sm:-mt-20 lg:-mt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden pt-16 sm:pt-20 lg:pt-24">
        {/* Interactive Metamask-style Background */}
        <InteractiveHeroBackground />
        
        {/* Floating Icons - Apple-style subtle parallax */}
        <motion.div
            className="absolute top-1/4 left-1/4 text-primary/30 pointer-events-none"
            animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <Leaf size={40} />
        </motion.div>
        <motion.div
            className="absolute top-1/3 right-1/4 text-secondary/30 pointer-events-none"
            animate={{
                y: [0, -25, 0],
                rotate: [0, -5, 5, 0],
            }}
            transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
            }}
        >
            <Sparkles size={35} />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              className="flex justify-center mb-2"
              initial={{ scale: 0, opacity: 0, rotateX: 90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            >
              <motion.img
                src={shantiLogo}
                alt="Shanti Group Logo"
                className="h-64 md:h-80 w-auto object-contain drop-shadow-4xl"
                animate={{
                  y: [0, -15, 0],
                  filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} /* Allow reverse animation */
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gradient leading-tight min-h-[1.2em]">
                <Typewriter
                    text="Shanti Group"
                    speed={150}
                    delay={800}
                    className="text-gradient drop-shadow-sm"
                    showCursor={true}
                    loop={true}
                    pauseTime={3000}
                    eraseSpeed={50}
                />
                </h1>
            </motion.div>
            
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building a sustainable future across <span className="text-primary font-semibold">agriculture</span>,
              <span className="text-primary font-semibold"> pharmaceuticals</span>,
              <span className="text-primary font-semibold"> real estate</span>, and
              <span className="text-primary font-semibold"> technology</span> since 1960.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about">
                  <Button className="btn-hero btn-glow-effect relative overflow-hidden group shadow-lg hover:shadow-primary/25">
                    <span className="relative z-10 flex items-center">
                      Explore Our Journey
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20"
                      initial={false}
                      whileHover={{ opacity: 0.2 }}
                    />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link to="/businesses">
                  <Button variant="outline" className="btn-secondary-hero btn-glow-effect relative overflow-hidden group shadow-lg hover:shadow-secondary/25">
                    <span className="relative z-10">Upcoming Projects</span>
                    <motion.div
                      className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100"
                      initial={false}
                    />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counters */}
      <section className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2 relative inline-block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1 + 0.3,
                  }}
                >
                  <AnimatedCounter value={stat.number} />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl rounded-full"
                    initial={false}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  className="text-muted-foreground font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Legacy of <span className="text-gradient">Excellence</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <ScrollRevealText 
                  text="From humble beginnings in 1960 to becoming a leading multi-sector conglomerate, Shanti Group has consistently delivered innovation and quality across diverse industries."
                  className="text-xl text-muted-foreground font-medium"
                  contianerClassName="justify-center"
                />
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Started in 1960 with a vision to create sustainable value across multiple sectors, 
                    Shanti Group has grown from a single agricultural venture to a diversified conglomerate 
                    that touches millions of lives every day.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we operate across four major sectors, each contributing to our mission of 
                    building a better tomorrow through innovation, sustainability, and excellence.
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/about">
                    <Button variant="outline" className="btn-secondary-hero btn-glow-effect relative overflow-hidden group">
                      <span className="relative z-10 flex items-center">
                        Learn More About Us
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100"
                        initial={false}
                      />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                    <p className="leading-relaxed mb-6">
                      To be a leader in sustainable business practices while creating value for 
                      stakeholders and contributing to societal development across all our sectors.
                    </p>
                    <div className="flex items-center space-x-2 text-primary-foreground/80">
                      <span className="w-8 h-0.5 bg-primary-foreground/60"></span>
                      <span className="text-sm">Since 1960</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Diagram - Apple-style Scroll Reveal */}
      <section className="section-padding bg-muted/30 overflow-hidden">
        <div className="container mx-auto sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Sectors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Diversified excellence across five major industries, each contributing to 
              sustainable growth and innovation.
            </p>
          </motion.div>

          {/* Staggered Container */}
          <motion.div 
            className="relative max-w-6xl mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: { 
                    opacity: 1,
                    transition: { 
                        staggerChildren: 0.15,
                        delayChildren: 0.2
                    }
                }
            }}
          >
            <div className="relative flex flex-col items-center min-h-[400px] md:min-h-[450px]">
              {/* Top Row */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-12 md:mb-16 lg:mb-20 w-full">
                {/* Agriculture */}
                <motion.div
                  className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 100, damping: 12 }
                    }
                  }}
                >
                  <Link to={sectorsTop[0].href}>
                    <motion.div
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -8, rotateX: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-32 bg-card border-2 border-primary/30 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 shadow-md group-hover:shadow-elegant">
                        {(() => {
                          const Icon = sectorsTop[0].icon;
                          return <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />;
                        })()}
                        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center px-2">
                          {sectorsTop[0].name}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Real Estate */}
                <motion.div
                  className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 100, damping: 12 }
                    }
                  }}
                >
                  <Link to={sectorsTop[1].href}>
                    <motion.div
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -8, rotateX: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-32 bg-card border-2 border-primary/30 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 shadow-md group-hover:shadow-elegant">
                        {(() => {
                          const Icon = sectorsTop[1].icon;
                          return <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />;
                        })()}
                        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center px-2">
                          {sectorsTop[1].name}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Manufacturing */}
                <motion.div
                  className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 100, damping: 12 }
                    }
                  }}
                >
                  <Link to={sectorsTop[2].href}>
                    <motion.div
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -8, rotateX: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-32 bg-card border-2 border-primary/30 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 shadow-md group-hover:shadow-elegant">
                        {(() => {
                          const Icon = sectorsTop[2].icon;
                          return <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />;
                        })()}
                        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center px-2">
                          {sectorsTop[2].name}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full">
                {/* Spacer */}
                <div className="hidden md:block w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
                
                {/* Pharmaceuticals */}
                <motion.div
                  className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 100, damping: 12 }
                    }
                  }}
                >
                  <Link to={sectorsBottom[0].href}>
                    <motion.div
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -8, rotateX: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-32 bg-card border-2 border-primary/30 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 shadow-md group-hover:shadow-elegant">
                        {(() => {
                          const Icon = sectorsBottom[0].icon;
                          return <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />;
                        })()}
                        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center px-2">
                          {sectorsBottom[0].name}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Technology */}
                <motion.div
                  className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 100, damping: 12 }
                    }
                  }}
                >
                  <Link to={sectorsBottom[1].href}>
                    <motion.div
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -8, rotateX: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-full h-32 bg-card border-2 border-primary/30 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 shadow-md group-hover:shadow-elegant">
                        {(() => {
                          const Icon = sectorsBottom[1].icon;
                          return <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />;
                        })()}
                        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center px-2">
                          {sectorsBottom[1].name}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Spacer */}
                <div className="hidden md:block w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section ref={sustainabilityRef} className="relative section-padding overflow-hidden bg-gradient-to-b from-background via-green-50/30 to-background dark:via-green-950/10">
        <motion.div 
            style={{ y: parallaxY }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/40 via-transparent to-transparent dark:from-green-950/20 pointer-events-none" 
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20 md:mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 px-5 py-2.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-green-100 dark:border-green-900/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Leaf className="h-4 w-4" />
                Sustainability First
              </motion.div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                Building a <span className="text-gradient">Sustainable</span> Future
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Our commitment to environmental responsibility and social impact drives every decision we make across all our business sectors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-500/10 group-hover:to-green-500/5 rounded-3xl transition-all duration-700 ease-out"
                  initial={false}
                />
                <Card className="card-premium text-center border-0 bg-card/40 backdrop-blur-xl hover:bg-card/60 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <CardContent className="p-10 md:p-12">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-xl group-hover:blur-2xl group-hover:w-24 group-hover:h-24 transition-all duration-700"
                          initial={false}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.7 }}
                        />
                      </div>
                      <motion.div
                        className="relative w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/30 rounded-3xl flex items-center justify-center mx-auto mb-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ duration: 0.7 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -3 }}
                          transition={{ duration: 0.7 }}
                        >
                          <Globe className="h-10 w-10 text-green-600 dark:text-green-400" />
                        </motion.div>
                      </motion.div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-5 tracking-tight leading-tight">Carbon Neutral by 2030</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">
                      Committed to achieving net-zero carbon emissions across all operations through renewable energy and efficient practices.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 rounded-3xl transition-all duration-700 ease-out"
                  initial={false}
                />
                <Card className="card-premium text-center border-0 bg-card/40 backdrop-blur-xl hover:bg-card/60 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <CardContent className="p-10 md:p-12">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl group-hover:w-24 group-hover:h-24 transition-all duration-700"
                          initial={false}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.7 }}
                        />
                      </div>
                      <motion.div
                        className="relative w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-3xl flex items-center justify-center mx-auto mb-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ duration: 0.7 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -3 }}
                          transition={{ duration: 0.7 }}
                        >
                          <Heart className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                      </motion.div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-5 tracking-tight leading-tight">Community Impact</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">
                      Supporting local communities through education, healthcare initiatives, and sustainable livelihood programs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/10 group-hover:to-purple-500/5 rounded-3xl transition-all duration-700 ease-out"
                  initial={false}
                />
                <Card className="card-premium text-center border-0 bg-card/40 backdrop-blur-xl hover:bg-card/60 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <CardContent className="p-10 md:p-12">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl group-hover:w-24 group-hover:h-24 transition-all duration-700"
                          initial={false}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.7 }}
                        />
                      </div>
                      <motion.div
                        className="relative w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 rounded-3xl flex items-center justify-center mx-auto mb-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ duration: 0.7 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -3 }}
                          transition={{ duration: 0.7 }}
                        >
                          <Target className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                        </motion.div>
                      </motion.div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-5 tracking-tight leading-tight">Ethical Business</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-xs mx-auto">
                      Maintaining the highest standards of corporate governance and ethical business practices in all our operations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left side - Heading */}
            <motion.div 
              className="lg:w-2/5 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                Awards & Recognition
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Recognized for <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Our commitment to quality and innovation has been acknowledged by industry leaders and prestigious organizations worldwide.
              </p>
            </motion.div>

            {/* Right side - Semicircle of awards */}
            <div className="lg:w-3/5 relative">
              <div className="grid grid-cols-2 gap-6 md:block relative w-full h-auto md:h-[550px]">
                {/* Award 1 - Top Left */}
                <motion.div
                  className="md:absolute md:left-[5%] md:top-[5%] text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  <motion.div 
                    className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Trophy className="h-12 w-12 md:h-14 md:w-14 text-white" />
                  </motion.div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 max-w-[140px] mx-auto">Excellence in Agriculture</h3>
                  <p className="text-xs text-muted-foreground max-w-[140px] mx-auto">National Agriculture Innovation Award 2023</p>
                </motion.div>

                {/* Award 2 - Top Right */}
                <motion.div
                  className="md:absolute md:right-[5%] md:top-[5%] text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  <motion.div 
                    className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="h-12 w-12 md:h-14 md:w-14 text-white" />
                  </motion.div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 max-w-[140px] mx-auto">Healthcare Innovation</h3>
                  <p className="text-xs text-muted-foreground max-w-[140px] mx-auto">Best Pharma Company Award 2023</p>
                </motion.div>

                {/* Award 3 - Bottom Left */}
                <motion.div
                  className="md:absolute md:left-[5%] md:bottom-[5%] text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  <motion.div 
                    className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Leaf className="h-12 w-12 md:h-14 md:w-14 text-white" />
                  </motion.div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 max-w-[140px] mx-auto">Sustainability Leader</h3>
                  <p className="text-xs text-muted-foreground max-w-[140px] mx-auto">Green Business Excellence Award 2023</p>
                </motion.div>

                {/* Award 4 - Bottom Right */}
                <motion.div
                  className="md:absolute md:right-[5%] md:bottom-[5%] text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  <motion.div 
                    className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Building2 className="h-12 w-12 md:h-14 md:w-14 text-white" />
                  </motion.div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 max-w-[140px] mx-auto">Real Estate Excellence</h3>
                  <p className="text-xs text-muted-foreground max-w-[140px] mx-auto">Developer of the Year 2023</p>
                </motion.div>

                {/* Decorative connecting arc (optional visual enhancement) */}
                <svg 
                  className="hidden md:block absolute inset-0 w-full h-full pointer-events-none opacity-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 10,20 Q 50,5 90,20 Q 95,50 90,80 Q 50,95 10,80 Q 5,50 10,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-primary"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              What People Say
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our partners, customers, and stakeholders about their experience working with Shanti Group.
            </p>
          </div>

          <div className="relative w-full overflow-hidden py-8">
            <style>{`
              .testimonial-track { display: flex; gap: 24px; align-items: center; width: max-content; }
              .testimonial-item { flex: 0 0 360px; height: auto; }
              @keyframes scrollTestimonials { from { transform: translateX(0px); } to { transform: translateX(calc(-360px * 6 - 144px)); } }
            `}</style>

            {(() => {
              const loopItems = [...testimonials, ...testimonials];
              const duration = Math.max(12, testimonials.length * 3); // seconds
              return (
                <div
                  className="w-full"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div
                    className="testimonial-track"
                    style={{
                      animation: `scrollTestimonials ${duration}s linear infinite`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  >
                    {loopItems.map((testimonial, idx) => {
                      const baseIndex = idx % testimonials.length;
                      const isHovered = hoveredIndex === baseIndex;
                      return (
                        <div
                          key={`${testimonial.id}-${idx}`}
                          className="testimonial-item"
                          onMouseEnter={() => { setHoveredIndex(baseIndex); setIsPaused(true); }}
                          onMouseLeave={() => { setHoveredIndex(null); setIsPaused(false); }}
                        >
                          <Card className={`card-premium h-full transition-all duration-200 ${hoveredIndex === null ? '' : isHovered ? 'shadow-2xl' : 'opacity-30'}`}>
                            <CardContent className="p-6 h-full flex flex-col justify-between">
                              <div>
                                <div className="flex items-center gap-1 mb-3">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <p className="text-muted-foreground italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>{testimonial.initials}</div>
                                <div>
                                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              News & <span className="text-gradient">Announcements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest developments, achievements, and upcoming initiatives across all our business sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-premium hover-lift">
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-3">December 2024</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">New Sustainable Agriculture Initiative Launched</h3>
                <p className="text-muted-foreground mb-4">Introducing our latest organic farming program that aims to help 10,000 farmers transition to sustainable practices by 2025.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift">
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-3">November 2024</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Awadh Nagari Township Project Announced</h3>
                <p className="text-muted-foreground mb-4">Exciting new residential township project in Gondpipary featuring modern amenities and traditional architectural elements.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift">
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-3">October 2024</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare Innovation Center Opens</h3>
                <p className="text-muted-foreground mb-4">Our new research facility focuses on developing next-generation pharmaceutical solutions for emerging health challenges.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-gradient">Partner</span> with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hands with Shanti Group to explore opportunities across our diverse sectors 
              and be part of our journey towards sustainable growth.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button className="btn-hero btn-glow-effect relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      Get in Touch
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20"
                      initial={false}
                      whileHover={{ opacity: 0.2 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 blur-2xl"
                      initial={false}
                      whileHover={{ opacity: 1, scale: 1.5 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;