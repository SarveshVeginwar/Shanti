
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Wheat, Leaf, Factory, Settings, Eye, Target, Calendar, Phone, Mail, MapPin, ChevronRight, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const VinodRiceMill = () => {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const offerings = [
        { icon: <Wheat className="w-10 h-10 text-amber-500" />, title: "Rice Milling", description: "Advanced milling processes that preserve the nutritional value and authentic taste of rice grains." },
        { icon: <CheckCircle2 className="w-10 h-10 text-emerald-500" />, title: "Sortex Cleaning", description: "Precision color sorting technology ensuring 100% purity and uniformity in every grain we pack." },
        { icon: <Factory className="w-10 h-10 text-blue-500" />, title: "Steam Curing", description: "State-of-the-art steam curing facilities for producing premium quality parboiled and steamed rice varieties." },
        { icon: <Settings className="w-10 h-10 text-slate-500" />, title: "Export Packaging", description: "Hygienic, moisture-proof, and export-grade packaging solutions customized for global markets." },
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000&auto=format&fit=crop", // Rice
        "https://images.unsplash.com/photo-1620662706532-6a3f4e1f74b4?q=80&w=2670&auto=format&fit=crop", // Milling Machine (Placeholder)
        "https://images.unsplash.com/photo-1599579737130-149b56f77c38?q=80&w=2670&auto=format&fit=crop", // Grains
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop", // Field
        "https://images.unsplash.com/photo-1605333333333-placeholder?q=80&w=2000&auto=format&fit=crop", // Warehouse placeholder
    ];

    const testimonials = [
        { name: "Suresh Patel", role: "Distributor", comment: "The consistency in grain quality is unmatched. Vinod Rice Mill delivers excellence every single time.", rating: 5 },
        { name: "Anjali Gupta", role: "Retail Chain Owner", comment: "Their Sortex cleaned rice has become a customer favorite. Packaging is also top-notch.", rating: 5 },
        { name: "Vikram Singh", role: "Exporter", comment: "Reliable partners for export-quality rice. Their steam curing process is the best in the region.", rating: 5 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-amber-500/30">
            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute -top-12 right-0 text-white hover:bg-white/10 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8" />
                            </Button>
                            <img
                                src={selectedImage}
                                alt="Enlarged facility view"
                                className="w-full h-full object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[90vh] flex items-center overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                >
                    <div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-white" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Button
                            variant="link"
                            onClick={() => navigate("/industries")}
                            className="text-amber-300 hover:text-amber-400 p-0 mb-8 flex items-center gap-2 group text-lg"
                        >
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> Back to Industries
                        </Button>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-4xl"
                    >
                        <motion.div variants={itemVariants}>
                            <Badge className="bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/30 mb-6 px-6 py-2 text-sm uppercase tracking-[0.2em]">
                                Premium Quality Grains
                            </Badge>
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tight leading-tight"
                        >
                            Vinod <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">Rice Mill</span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light mb-10"
                        >
                            Refining nature's harvest with precision and care. We deliver the finest rice varieties, processed to perfection for global tables.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300"
                            >
                                Explore Processes
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/20 hover:bg-white/10 text-white hover:text-white rounded-full px-8 py-6 text-lg backdrop-blur-sm"
                            >
                                Contact Sales
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section - Inherited from Shanti Group */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-50/50 via-white to-white" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Leadership</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full" />
                        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">Under the visionary guidance of the Shanti Group leadership.</p>
                    </motion.div>

                    <div className="flex flex-col gap-24">
                        {[
                            {
                                name: "Vilas R. Weginwar",
                                role: "Founder & CEO, Shanti Group",
                                image: "/images/leadership/vilas_weginwar.jpg",
                                bio: "A visionary entrepreneur and the cornerstone of Shanti Group. His commitment to quality extends to every grain processed at Vinod Rice Mill, ensuring we meet the highest standards of food safety and customer satisfaction."
                            },
                            {
                                name: "Pratik V. Weginwar",
                                role: "CEO, Shanti Group",
                                image: "/images/leadership/pratik_weginwar.jpg",
                                bio: "Driving modernization in agro-processing, Pratik V. Weginwar has integrated advanced sorting and milling technologies at Vinod Rice Mill to enhance efficiency and product quality for domestic and international markets."
                            }
                        ].map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-amber-200 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                                        <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
                                            />
                                        </div>
                                        {/* Decorative Element */}
                                        <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full opacity-20 -z-10 ${i % 2 === 1 ? 'right-auto -left-6' : ''}`} />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200 px-3 py-1">
                                        {leader.role.split(',')[0]}
                                    </Badge>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                                    <p className="text-amber-600 font-medium mb-6 text-lg">{leader.role}</p>
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">
                                        {leader.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Offerings Section */}
            <section className="py-32 bg-slate-950 text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Technological Excellence</h2>
                        <p className="text-slate-400 text-xl max-w-2xl">State-of-the-art milling solutions designed for purity, consistency, and premium quality.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offerings.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 group"
                            >
                                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-amber-500/20 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Profile - Modern Bento Grid */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-20 text-slate-900"
                    >
                        Our Commitment
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-rows-[auto_auto]">
                        {/* Box 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-4 bg-amber-50 rounded-3xl p-10 flex flex-col justify-between border border-amber-100 hover:shadow-xl transition-shadow duration-300 min-h-[300px]"
                        >
                            <div>
                                <Wheat className="w-12 h-12 text-amber-600 mb-6" />
                                <h3 className="text-2xl font-bold text-amber-900 mb-2">Capacity</h3>
                            </div>
                            <div>
                                <p className="text-6xl font-bold text-amber-600 tracking-tighter">100+</p>
                                <p className="text-amber-800 font-medium mt-2">Tons Processed Daily</p>
                            </div>
                        </motion.div>

                        {/* Box 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-8 bg-slate-50 rounded-3xl p-10 flex flex-col justify-center border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                                <Factory className="w-64 h-64 text-slate-900" />
                            </div>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                    <Settings className="w-8 h-8 text-amber-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Advanced Processing</h3>
                            </div>
                            <p className="text-xl text-slate-600 leading-relaxed relative z-10 max-w-2xl">
                                "Utilizing the latest Japanese sorting and milling technology to ensure every grain of rice meets international export standards."
                            </p>
                        </motion.div>

                        {/* Box 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-12 bg-slate-900 rounded-3xl p-10 md:p-14 text-white hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-slate-900/50" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
                                <div className="shrink-0">
                                    <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                                        <Leaf className="w-12 h-12 text-amber-400" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">Sustainability Focus</h3>
                                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                                        Vinod Rice Mill is committed to minimizing waste and maximizing energy efficiency in all our processing operations.
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-8">
                                        {['Hygienic Processing', 'No Chemical Polishing', 'Eco-friendly Packaging'].map((tag) => (
                                            <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-amber-300">
                                                <CheckCircle2 className="w-4 h-4" /> {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-32 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Inside The Mill</h2>
                            <p className="text-slate-500 text-lg">A glimpse into our advanced storage, milling, and packaging facilities.</p>
                        </div>
                    </div>

                    <Carousel className="w-full">
                        <CarouselContent className="-ml-4">
                            {galleryImages.map((src, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden rounded-2xl group cursor-zoom-in" onClick={() => setSelectedImage(src)}>
                                            <CardContent className="flex h-80 items-center justify-center p-0 relative">
                                                <img
                                                    src={src}
                                                    alt={`Facility ${index + 1}`}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                                    <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-end gap-4 mt-8 pr-4">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>
            </section>

            {/* Footer/Engagement */}
            <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                        {/* Contact Details */}
                        <div>
                            <h3 className="text-3xl font-bold mb-10 text-white flex items-center gap-4">
                                Contact Us
                            </h3>
                            <div className="space-y-8">
                                <a href="#" className="flex items-start gap-6 group">
                                    <div className="p-4 bg-slate-900 rounded-2xl group-hover:bg-amber-500/20 transition-colors border border-slate-800 group-hover:border-amber-500/30">
                                        <MapPin className="w-8 h-8 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-200 mb-1 group-hover:text-amber-400 transition-colors">Visit Us</h4>
                                        <p className="text-slate-400 leading-relaxed">Plot No. 123, GIDC Industrial Estate,<br />Navsari, Gujarat, India - 396445</p>
                                    </div>
                                </a>
                                <a href="tel:+919876543210" className="flex items-start gap-6 group">
                                    <div className="p-4 bg-slate-900 rounded-2xl group-hover:bg-amber-500/20 transition-colors border border-slate-800 group-hover:border-amber-500/30">
                                        <Phone className="w-8 h-8 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-200 mb-1 group-hover:text-amber-400 transition-colors">Call Us</h4>
                                        <p className="text-slate-400 font-mono text-lg">+91 98765 43210</p>
                                    </div>
                                </a>
                                <a href="mailto:info@vinodricemill.com" className="flex items-start gap-6 group">
                                    <div className="p-4 bg-slate-900 rounded-2xl group-hover:bg-amber-500/20 transition-colors border border-slate-800 group-hover:border-amber-500/30">
                                        <Mail className="w-8 h-8 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-200 mb-1 group-hover:text-amber-400 transition-colors">Email Us</h4>
                                        <p className="text-slate-400">info@vinodricemill.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 className="text-3xl font-bold mb-10 text-white">
                                Client Satisfaction
                            </h3>
                            <div className="grid gap-6">
                                {testimonials.map((t, idx) => (
                                    <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex flex-col">
                                                <h4 className="font-bold text-lg text-slate-200">{t.name}</h4>
                                                <span className="text-xs text-amber-500 font-semibold uppercase tracking-wider">{t.role}</span>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />)}
                                            </div>
                                        </div>
                                        <p className="text-slate-400 italic leading-relaxed">"{t.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 text-center">
                        <p className="text-slate-600 text-sm">
                            &copy; {new Date().getFullYear()} Vinod Rice Mill - A Division of Shanti Group.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VinodRiceMill;
