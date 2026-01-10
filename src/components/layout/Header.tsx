import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import shantiLogo from "@/assets/shanti-group-logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest < previous || latest < 100) {
      setIsVisible(true);
    } else if (latest > 100 && latest > previous) {
      setIsVisible(false);
    }
  });

  // Handle resize to close menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Businesses", href: "/businesses" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1, x: "-50%" },
        hidden: { y: -100, opacity: 0, x: "-50%" }
      }}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] lg:w-fit max-w-5xl bg-background/90 backdrop-blur-xl z-50 shadow-lg border border-border/30 ${isMenuOpen ? 'rounded-3xl' : 'rounded-full'}`}
    >
      <nav className="px-6 lg:px-8">
        <div className="flex justify-between lg:justify-center items-center py-2 lg:gap-12">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={shantiLogo} 
              alt="Shanti Group Logo" 
              className="h-12 md:h-16 lg:h-20 w-auto object-contain scale-150"
            />
          </Link>

          {/* Desktop Navigation and Contact Button */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="outline" className="btn-secondary-hero">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="outline" className="btn-secondary-hero w-full mt-4">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;