import { Calendar, Users, Award, TrendingUp, User } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { InteractiveHeroBackground } from "@/components/InteractiveHeroBackground";

const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

  const milestones = [
    {
      year: "1960",
      title: "Foundation",
      description: "Shanti Group was founded with a vision to create sustainable value in agriculture."
    },
    {
      year: "1975",
      title: "Agricultural Expansion",
      description: "Expanded operations across multiple states, introducing modern farming techniques."
    },
    {
      year: "1985",
      title: "Pharmaceutical Entry",
      description: "Entered the pharmaceutical sector with our first manufacturing facility."
    },
    {
      year: "1995",
      title: "Real Estate Ventures",
      description: "Diversified into real estate development, focusing on sustainable urban planning."
    },
    {
      year: "2005",
      title: "Technology Innovation",
      description: "Launched our technology division to embrace digital transformation."
    },
    {
      year: "2015",
      title: "Global Presence",
      description: "Established international partnerships and expanded to global markets."
    },
    {
      year: "2020",
      title: "Sustainability Focus",
      description: "Implemented comprehensive sustainability initiatives across all sectors."
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing our journey with next-generation innovations and sustainable growth."
    }
  ];

  const values = [
    {
      id: "excellence",
      icon: Award,
      title: "Excellence",
      description: "Setting the highest standards across all our operations.",
      color: "#FFB84C" // Warm Orange/Yellow
    },
    {
      id: "integrity",
      icon: Users,
      title: "Integrity",
      description: "Built on trust, transparency, and ethical business practices.",
      color: "#60A5FA" // Blue
    },
    {
      id: "innovation",
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing continuous improvement to stay ahead.",
      color: "#34D399" // Green
    },
    {
      id: "sustainability",
      icon: Calendar,
      title: "Sustainability",
      description: "Committed to practices that ensure a better future.",
      color: "#A78BFA" // Purple
    }
  ];

  const boardMembers = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Chairman & Managing Director",
      experience: "35+ years in Agriculture & Business"
    },
    {
      name: "Mrs. Priya Agarwal",
      position: "Independent Director",
      experience: "20+ years in Corporate Governance"
    },
    {
      name: "Mr. Anil Kumar",
      position: "Executive Director",
      experience: "25+ years in Pharmaceuticals"
    },
    {
      name: "Dr. Sunita Mehta",
      position: "Independent Director",
      experience: "30+ years in Technology & Innovation"
    },
    {
      name: "Mr. Vikash Gupta",
      position: "Director - Finance",
      experience: "28+ years in Financial Management"
    }
  ];

  // Interactive values state
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringValues, setIsHoveringValues] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const ImmersiveValuesSection = () => {
      const activeValue = values[activeIndex];
      
      return (
        <section className="relative py-16 lg:py-32 overflow-hidden transition-colors duration-1000 ease-in-out cursor-pointer"
            style={{ backgroundColor: `${activeValue.color}15` }} // 15 = 8% opacity hex
            onMouseEnter={() => setIsHoveringValues(true)}
            onMouseLeave={() => setIsHoveringValues(false)}
        >
            {/* Animated Background blobs based on active color */}
            <motion.div 
                key={activeIndex}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ backgroundColor: activeValue.color }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
                            Core Values
                        </h2>
                        <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
                            The compass that guides our every decision.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
                    {/* The Orbit/Circle */}
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 scale-75 md:scale-100 origin-center">
                        {/* Central Active Icon */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeValue.title}
                                    initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 relative z-20"
                                    style={{ borderColor: activeValue.color }}
                                >
                                    <activeValue.icon size={48} style={{ color: activeValue.color }} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                        <div 
                            className="absolute inset-0 animate-spin-slow"
                            style={{ 
                                // animationPlayState: isHoveringValues ? 'paused' : 'running', // Continuous rotation requested
                            }}
                        >
                             {values.map((val, idx) => {
                                 const angle = (idx * 360) / values.length;
                                 const radius = 160; 
                                 const isActive = idx === activeIndex;
                                 
                                 return (
                                     <div
                                        key={val.id}
                                        className="absolute w-16 h-16"
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-2rem', 
                                            marginLeft: '-2rem', 
                                            transform: `rotate(${angle}deg) translate(${radius}px)`,
                                        }}
                                     >
                                         <div 
                                            className="w-full h-full animate-reverse-spin"
                                            style={{ 
                                                animationDuration: '20s' 
                                            }}
                                         >
                                             <div className="w-full h-full flex items-center justify-center" style={{ transform: `rotate(-${angle}deg)` }}>
                                                 <button
                                                    className={`w-full h-full rounded-full shadow-lg flex items-center justify-center border-2 transition-all duration-300
                                                        ${isActive ? 'scale-125 ring-4 ring-white/50' : 'scale-100 bg-white/90 hover:scale-110'}
                                                    `}
                                                    style={{
                                                        backgroundColor: isActive ? val.color : 'white',
                                                        borderColor: isActive ? 'white' : 'transparent',
                                                    }}
                                                    onClick={() => setActiveIndex(idx)}
                                                    onMouseEnter={() => setActiveIndex(idx)} // Display card info on hover
                                                 >
                                                    <val.icon size={24} className={isActive ? 'text-white' : 'text-gray-600'} />
                                                 </button>
                                             </div>
                                         </div>
                                     </div>
                                 )
                             })}
                        </div>
                        
                        {/* Decorative Rings - Static or independent spin */}
                        <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin-slower opacity-30 pointer-events-none" />
                        <div className="absolute inset-[15%] border border-gray-200 rounded-full opacity-50 pointer-events-none" />
                    </div>

                    {/* Content Detail */}
                    <div className="max-w-lg text-center lg:text-left h-[200px] flex flex-col justify-center">
                         <AnimatePresence mode="wait">
                            <motion.div
                                key={activeValue.title}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="text-4xl font-bold mb-4" style={{ color: activeValue.color }}>
                                    {activeValue.title}
                                </h3>
                                <div className="h-1 w-20 bg-gray-200 rounded-full mb-6 mx-auto lg:mx-0 overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-current"
                                        style={{ backgroundColor: activeValue.color }}
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </div>
                                <p className="text-2xl text-muted-foreground leading-relaxed font-light">
                                    {activeValue.description}
                                </p>
                            </motion.div>
                         </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
      )
  }

  return (
    <div className="min-h-screen relative" ref={containerRef}>
        {/* Scroll Progress Bar */}
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
            style={{ scaleX }}
        />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <InteractiveHeroBackground />
        <div className="container mx-auto px-4 z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center perspective-1000">
              <motion.h1 
                className="text-6xl md:text-8xl font-black text-foreground mb-6 tracking-tight"
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Story</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Six decades of innovation, creating sustainable value <br className="hidden md:block"/> across agriculture, pharma, and technology.
              </motion.p>
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

      {/* Company Overview */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Building Tomorrow, <span className="text-gradient">Today</span>
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded in 1960, Shanti Group began as a modest agricultural venture with a bold vision: 
                    to create sustainable value that would benefit communities and drive economic growth. 
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-2 gap-6 pt-2">
                        <motion.div 
                            className="text-center p-6 bg-secondary/10 rounded-2xl border border-secondary/20"
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                        >
                            <div className="text-4xl font-bold text-primary mb-2">1960</div>
                            <div className="text-muted-foreground font-medium">Founded</div>
                        </motion.div>
                        <motion.div 
                            className="text-center p-6 bg-primary/10 rounded-2xl border border-primary/20"
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                        >
                            <div className="text-4xl font-bold text-primary mb-2">4+</div>
                            <div className="text-muted-foreground font-medium">Major Sectors</div>
                        </motion.div>
                    </div>
                </ScrollReveal>
              </div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} /* Allow reverse */
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 transform rotate-6 rounded-[3rem]" />
                <div className="relative bg-card rounded-[2rem] p-8 md:p-12 shadow-2xl border border-border/50">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                  <p className="text-lg leading-relaxed mb-8 text-foreground/80">
                    To be a globally recognized conglomerate that creates lasting value through 
                    innovation, sustainability, and excellence.
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">Our Mission</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    To leverage our diverse expertise and resources to build a sustainable future, 
                    create meaningful employment, and contribute positively.
                  </p>
                </div>
              </motion.div>
            </div>
            </div>
        </div>
      </section>

      {/* Founders / Leadership Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Visionary <span className="text-gradient">Leadership</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Guiding Shanti Group with wisdom, integrity, and a commitment to excellence.
                    </p>
                </div>
            </ScrollReveal>

            <div className="space-y-24 mt-16">
                {boardMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-5/12">
                           <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0" />
                                <div className="absolute inset-0 bg-card/10 backdrop-blur-sm z-10" />
                                
                                {/* Placeholder Visual */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-white/20">
                                        <User size={64} className="text-foreground/20 md:w-24 md:h-24" />
                                    </div>
                                </div>
                                
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                           </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-7/12 text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{member.name}</h3>
                            <div className="text-xl font-medium text-primary mb-6">{member.position}</div>
                            
                            <div className="relative">
                                <span className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif leading-none">"</span>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic relative z-10">
                                    {member.experience}
                                </p>
                            </div>
                            
                            <div className={`h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-8 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto md:mr-auto md:ml-0'}`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* New Immersive Values Section */}
      <ImmersiveValuesSection />

      {/* Timeline Section */}
      <section className="section-padding relative" id="history">
        {/* Connecting Line for Timeline */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-background inline-block px-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }} /* Allow reverse */
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="flex-1 w-full">
                         <div className={`bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-xl transition-all duration-300 relative group
                            ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                         `}>
                            {/* Connector Dot */}
                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background
                                ${index % 2 === 0 ? '-left-[calc(2rem_+_10px)]' : '-right-[calc(2rem_+_10px)]'}
                            `} />
                            
                            <div className="text-5xl font-black text-primary/10 absolute -top-4 right-8 select-none group-hover:text-primary/20 transition-colors">
                                {milestone.year}
                            </div>
                            <h3 className="text-2xl font-bold text-gradient mb-2 relative z-10">{milestone.year}</h3>
                            <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">{milestone.title}</h4>
                            <p className="text-muted-foreground leading-relaxed relative z-10">
                                {milestone.description}
                            </p>
                         </div>
                    </div>
                    <div className="w-12 h-12 hidden md:flex items-center justify-center shrink-0 z-10">
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;