import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import logo from "../../assets/Samsee.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(scrollY.get() > 50);
    return scrollY.on("change", handleScroll);
  }, [scrollY]);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const scroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 300);
    } else {
      scroll();
    }

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 bg-deep-tech/80 backdrop-blur-md border-b border-primary-blue/20 transition-all duration-300 py-3 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="flex justify-between items-center">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-blue shadow-md">
              <img
                src={logo}
                alt="Samsee Tech Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
              Samsee Tech
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                className="text-gray-text hover:text-white transition-colors"
              >
                <button onClick={() => scrollToSection(link.id)}>
                  {link.name}
                </button>
              </motion.div>
            ))}

            <Button onClick={() => scrollToSection("contact")}>
              Get a Quote
            </Button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-deep-tech border border-primary-blue/20 rounded-lg p-4 space-y-4"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-text hover:text-white py-2"
                >
                  {link.name}
                </button>
              </div>
            ))}

            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
            >
              Get a Quote
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;