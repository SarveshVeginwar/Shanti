import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Mail, CheckCircle2, Star, TreePine, Warehouse, ShieldCheck, Gamepad2, Landmark, Droplets, Armchair, GitFork, Calendar, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AwadhNagariProject = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    // Image Paths (User must place these files in public/images/projects/awadh-nagari/)
    const entranceImage = "/images/projects/awadh-nagari/entrance.jpg";
    const layoutImage = "/images/projects/awadh-nagari/layout.jpg";
    // Fallback if images are missing (using robust placeholders to avoid broken UI)
    const fallbackEntrance = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop";
    const fallbackLayout = "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2574&auto=format&fit=crop";

    // Helper to handle image error by switching to fallback
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = e.currentTarget.id === "entrance" ? fallbackEntrance : fallbackLayout;
    };

    const amenities = [
        { icon: Landmark, title: "Grand Temple", description: "Spiritual sanctuary for peace." },
        { icon: TreePine, title: "Green Gym", description: "Health amidst nature." },
        { icon: Gamepad2, title: "Kids Play Area", description: "Safe zone for children." },
        { icon: TreePine, title: "Open Lawn", description: "Lush green recreational area." },
        { icon: Warehouse, title: "Concrete Road", description: "Durable internal infrastructure." },
        { icon: Droplets, title: "Concrete Drain", description: "Advanced drainage system." },
        { icon: Star, title: "Street Lights", description: "24/7 Illumination & safety." },
        { icon: GitFork, title: "Walk Way", description: "Paved jogging tracks." },
        { icon: Droplets, title: "Water Features", description: "Aesthetic corner pools." },
        { icon: Armchair, title: "Sitting Areas", description: "Community social spots." },
        { icon: ShieldCheck, title: "Gated Security", description: "Precast boundary walls." },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-50 font-sans selection:bg-blue-900/30">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div style={{ y }} className="w-full h-full">
                        <img
                            id="entrance"
                            src={entranceImage}
                            onError={handleImageError}
                            alt="Awadh Nagari Entrance"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f2c4a]/90 via-[#0f2c4a]/60 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-white h-full flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Button
                            variant="link"
                            onClick={() => navigate("/real-estate/projects")}
                            className="text-orange-200 hover:text-white p-0 mb-6 flex items-center gap-2 group text-lg tracking-wide"
                        >
                            <ArrowLeft className="w-10 h-10 transition-transform group-hover:-translate-x-1" /> Return to Projects
                        </Button>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-orange-600 text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm">Premium Plots</span>
                            <span className="bg-white/20 text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm backdrop-blur-sm">RERA Approved</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold mb-4 tracking-tight drop-shadow-xl font-serif">
                            AWADH NAGARI
                        </h1>
                        <p className="text-xl md:text-3xl font-light text-slate-200 max-w-2xl drop-shadow-md border-l-4 border-orange-500 pl-6 mb-10">
                            Experience the grandeur of modern living rooted in tradition.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-none shadow-lg transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Enquire Now
                            </Button>
                            <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#0f2c4a] px-8 py-6 text-lg rounded-none backdrop-blur-sm transition-all" onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })}>
                                View Amenities
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-[#0f2c4a] font-bold tracking-widest uppercase text-sm mb-4">Project Overview</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                                A Sanctuary of <br /><span className="text-orange-600">Peace & Prosperity</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 border-b border-gray-100 pb-6">
                                Inspired by the divine ethos of Ayodhya, <strong>Awadh Nagari</strong> is meticulously designed to offer a balanced lifestyle.
                                Spread across a sprawling 11 acres, this township integrates wide concrete roads, essential infrastructure, and lush green spaces to create a thriving community.
                            </p>
                            <ul className="space-y-4">
                                {["Strategic Location", "Secure Gated Community", "High Appreciation Potential"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-orange-100 rounded-lg transform rotate-2"></div>
                            <div className="relative bg-[#0f2c4a] text-white p-10 md:p-16 rounded-lg shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-5">
                                    <Landmark className="w-64 h-64" />
                                </div>
                                <div className="grid grid-cols-2 gap-10 relative z-10">
                                    <div>
                                        <p className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-2">Total Area</p>
                                        <p className="text-5xl font-bold font-serif">11</p>
                                        <p className="text-slate-400">Acres</p>
                                    </div>
                                    <div>
                                        <p className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-2">Inventory</p>
                                        <p className="text-5xl font-bold font-serif">177</p>
                                        <p className="text-slate-400">Plots & Homes</p>
                                    </div>
                                    <div className="col-span-2 pt-8 border-t border-white/10">
                                        <p className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-2">Possession</p>
                                        <p className="text-2xl font-bold">Ready for Construction</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Layout Plan Section - Highlighting the User's Image */}
            <section className="py-24 bg-slate-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Master Layout Plan</h2>
                        <p className="text-gray-500 mt-3">Thoughtfully planned spaces for optimal living.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-5xl mx-auto shadow-2xl rounded-sm overflow-hidden border-8 border-white bg-white group"
                    >
                        <img
                            id="layout"
                            src={layoutImage}
                            onError={handleImageError}
                            alt="Awadh Nagari Master Plan"
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-center font-medium">Click to view high resolution Map</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Amenities */}
            <section id="amenities" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
                        <div>
                            <h4 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Lifestyle</h4>
                            <h2 className="text-4xl font-bold text-[#0f2c4a] font-serif">World-Class Amenities</h2>
                        </div>
                        <p className="text-gray-500 max-w-md mt-4 md:mt-0 text-right md:text-left">
                            Designed to enhance your quality of life with recreation, fitness, and spiritual well-being.
                        </p>
                    </div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200"
                    >
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="bg-white p-10 hover:bg-slate-50 transition-colors group flex flex-col items-center text-center cursor-default"
                            >
                                <amenity.icon className="w-8 h-8 text-slate-400 group-hover:text-orange-600 transition-colors mb-6" />
                                <h3 className="font-bold text-gray-900 mb-2">{amenity.title}</h3>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">{amenity.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Future Proximities & Corporate Investments */}
            <section className="py-24 bg-[#0f2c4a] text-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Location Advantage</h4>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Future Corporate Investments</h2>
                            <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
                                Awadh Nagari is strategically positioned near massive industrial developments, ensuring high appreciation and robust economic growth in the region.
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-white/20 to-transparent transform md:-translate-x-1/2"></div>

                        {[
                            {
                                distance: "6 km",
                                location: "Karanji MIDC",
                                items: [
                                    { name: "Vow Iron And Steel Pvt. Ltd.", investment: "₹4,300 Cr." },
                                    { name: "Shankar Gokuldas Agrawal", investment: "₹250 Cr." }
                                ]
                            },
                            {
                                distance: "21 km",
                                location: "Pombhurna / Konsari",
                                items: [
                                    { name: "Laxmi Mittal Group", investment: "₹40,000 Cr." },
                                    { name: "Lloyds Metals & Energy Ltd.", investment: "₹4,500 Cr." }
                                ]
                            },
                            {
                                distance: "36 km",
                                location: "Lagam",
                                items: [
                                    { name: "Surjagarh Ispat Pvt. Ltd.", investment: "₹10,000 Cr." },
                                    { name: "Tata Group Project", investment: "In News" }
                                ]
                            },
                            {
                                distance: "47 km",
                                location: "Chamorshi",
                                items: [
                                    { name: "JSW Steel Plant", investment: "₹1,00,000 Cr." }
                                ]
                            },
                            {
                                distance: "58 km",
                                location: "Aheri",
                                items: [
                                    { name: "Dalmia Cement", investment: "In News" }
                                ]
                            }
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Spacer for alternate side */}
                                <div className="hidden md:block w-1/2"></div>

                                {/* Center Connector */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#0f2c4a] border-4 border-orange-500 transform md:-translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group">
                                        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                                            <div className="flex items-center gap-2 text-orange-400 font-bold text-xl">
                                                <MapPin className="w-5 h-5" />
                                                {point.distance}
                                            </div>
                                            <div className="text-slate-300 text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
                                                {point.location}
                                            </div>
                                        </div>

                                        <ul className="space-y-4">
                                            {point.items.map((item, i) => (
                                                <li key={i} className="flex flex-col">
                                                    <span className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">{item.name}</span>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <TrendingUp className="w-4 h-4 text-green-400" />
                                                        <span className="text-orange-300 font-medium">Investment: {item.investment}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12 bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 p-6 rounded-xl max-w-3xl mx-auto">
                        <p className="text-white text-lg">
                            <span className="font-bold text-orange-400">Note:</span> These massive industrial projects are set to transform the regional economy, making property in Awadh Nagari a high-potential asset for future generations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Investment & Contact Unified Section */}
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto bg-slate-50 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    >

                        {/* Left: Investment Details */}
                        <div className="md:w-5/12 bg-gray-900 text-white p-10 md:p-14 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-serif font-bold mb-2">Easy Ownership</h3>
                                    <p className="text-slate-400 text-sm mb-10">Minimal paperwork, maximum transparency.</p>

                                    <div className="space-y-8">
                                        <div>
                                            <p className="text-xs text-orange-500 uppercase font-bold tracking-widest mb-1">Booking Amount</p>
                                            <p className="text-4xl font-bold">₹21,000</p>
                                            <p className="text-xs text-slate-500 mt-1">*Refundable for 7 days</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-orange-500 uppercase font-bold tracking-widest mb-1">Payment Plan</p>
                                            <p className="text-3xl font-bold flex items-center gap-2"><Calendar className="w-6 h-6" /> 9 Months</p>
                                            <p className="text-xs text-slate-500 mt-1">Interest-free installments</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <p className="text-sm font-semibold mb-2">Contact Support</p>
                                    <p className="text-2xl font-bold tracking-wide text-orange-400">+91 9607771727</p>
                                    <p className="text-sm text-slate-500 mt-1">Available 9 AM - 7 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="md:w-7/12 p-10 md:p-14 bg-white">
                            <h3 className="text-2xl font-bold text-[#0f2c4a] mb-2 font-serif">Schedule a Site Visit</h3>
                            <p className="text-gray-500 mb-8 text-sm">Fill out the form below and our team will get back to you shortly.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                                        <Input className="bg-slate-50 border-gray-200 focus:border-orange-500 rounded-none h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                                        <Input className="bg-slate-50 border-gray-200 focus:border-orange-500 rounded-none h-12" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone Number</label>
                                    <Input className="bg-slate-50 border-gray-200 focus:border-orange-500 rounded-none h-12" placeholder="+91" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Message</label>
                                    <Textarea className="bg-slate-50 border-gray-200 focus:border-orange-500 rounded-none min-h-[120px]" placeholder="I am interested in..." />
                                </div>
                                <Button className="w-full bg-[#0f2c4a] hover:bg-orange-600 text-white font-bold py-7 text-sm uppercase tracking-widest rounded-none transition-all duration-300">
                                    Submit Request
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AwadhNagariProject;
