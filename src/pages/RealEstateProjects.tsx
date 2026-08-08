import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, MapPin, Calendar, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const RealEstateProjects = () => {
    const navigate = useNavigate();

    // Placeholder image for now, can be updated later
    const heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop";

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-500/30">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Real Estate Projects Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Our Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto"
                    >
                        Discover our portfolio of premium residential and commercial developments that are shaping the skyline.
                    </motion.p>
                </div>
            </section>

            {/* Projects Listing Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Project 01: Awadh Nagari */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Image Side */}
                                <div className="relative h-80 lg:h-auto overflow-hidden group">
                                    <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop"
                                        alt="Awadh Nagari"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="bg-white/90 backdrop-blur-sm text-indigo-900 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
                                            Premium Residential
                                        </span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-10 lg:p-14 flex flex-col justify-center">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Awadh Nagari</h2>
                                    <div className="flex items-center gap-2 text-gray-500 mb-6">
                                        <MapPin className="w-5 h-5 text-indigo-600" />
                                        <span className="text-lg">Navsari, Gujarat</span>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        Experience the epitome of modern living at Awadh Nagari.
                                        A successfully completed residential township designed to provide comfort,
                                        security, and calm lifestyle for over 500 families.
                                        Featuring state-of-the-art amenities and lush green surroundings.
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-10">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-indigo-50 p-2 rounded-lg">
                                                <Users className="w-5 h-5 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">500+</h4>
                                                <p className="text-sm text-gray-500">Happy Families</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="bg-indigo-50 p-2 rounded-lg">
                                                <Star className="w-5 h-5 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Premium</h4>
                                                <p className="text-sm text-gray-500">Living Standard</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => navigate("/real-estate/projects/awadh-nagari")}
                                        className="w-full sm:w-auto bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 group"
                                    >
                                        Visit Now
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* More projects can be added here in similar structure */}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealEstateProjects;
