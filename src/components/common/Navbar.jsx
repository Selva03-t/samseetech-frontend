import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import Button from "../ui/Button";
import logo from "../../assets/Samsee.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(scrollY.get() > 60);
    return scrollY.on("change", handleScroll);
  }, [scrollY]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false) };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = useCallback((id) => {
    const scroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 350);
    } else {
      scroll();
    }
    setIsOpen(false);
  }, [location.pathname, navigate]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B1225]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary-blue/40 shadow-lg shadow-primary-blue/20">
                <img
                  src={logo}
                  alt="Samsee Tech Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-teal-accent rounded-full border-2 border-[#0B1225]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white font-display leading-tight">Samsee Tech</span>
              <span className="text-[10px] text-teal-accent font-medium leading-tight tracking-wider">SOLUTION</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.3 }}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-blue to-teal-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.button>
            ))}

            <Button
              onClick={() => scrollToSection("contact")}
              className="text-sm !px-5 !py-2.5"
            >
              <Zap size={14} />
              Get a Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-[#0B1225]/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl mb-4 p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </motion.button>
                ))}

                <div className="pt-2">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full text-sm"
                  >
                    <Zap size={14} />
                    Get a Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;