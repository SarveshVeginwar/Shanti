import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import shantiLogo from "@/assets/shanti-logo-dark.jpeg";

const Footer = () => {
  const sectors = [
    { name: "Agriculture", href: "/agriculture" },
    { name: "Pharmaceuticals", href: "/pharma" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Technology", href: "/technology" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our History", href: "/about#history" },
    { name: "Upcoming Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src={shantiLogo} 
              alt="Shanti Group Logo" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-muted-foreground leading-relaxed">
              Building a sustainable future across multiple industries since 1960. 
              A trusted name in agriculture, pharmaceuticals, real estate, and technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Phone size={18} className="text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <MapPin size={18} className="text-primary" />
              </div>
            </div>
          </div>

          {/* Our Sectors */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Our Sectors</h3>
            <ul className="space-y-3">
              {sectors.map((sector) => (
                <li key={sector.name}>
                  <Link 
                    to={sector.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>Shanti Group Headquarters</p>
                  <p>Business District, Mumbai</p>
                  <p>Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+91 (22) 1234-5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">info@shantigroup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Shanti Group. All rights reserved. Building the future since 1960.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;