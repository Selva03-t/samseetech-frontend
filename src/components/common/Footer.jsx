import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-deep-tech pt-16 pb-8">
      <div className="container mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">

          {/* COMPANY */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Samsee Tech Solution
            </h3>

            <p className="text-gray-text mb-4">
              We help startups, businesses, restaurants and brands build
              powerful digital experiences with websites, apps and marketing.
            </p>

            <p className="text-gray-text">
              Chennai, Tamil Nadu, India
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-text">

              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-white">
                  Home
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white">
                  Services
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("portfolio")} className="hover:text-white">
                  Portfolio
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("pricing")} className="hover:text-white">
                  Pricing
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white">
                  Contact
                </button>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h4>

            <ul className="space-y-3 text-gray-text">

              <li>Website Design & Development</li>
              <li>Mobile App UI/UX Design</li>
              <li>SEO & Digital Marketing</li>
              <li>Social Media Management</li>
              <li>Content Writing</li>
              <li>Video Editing</li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>

            {/* PHONE */}
            <div className="flex items-center gap-2 text-gray-text mb-3">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>

            {/* CALL BUTTON */}
            <a
              href="tel:+919025370797"
              className="inline-block bg-primary-blue px-4 py-2 rounded-lg text-sm mb-4 hover:bg-primary-blue/80"
            >
              Call Now
            </a>

            {/* EMAIL */}
            <div className="flex items-center gap-2 text-gray-text mb-6">
              <Mail size={18} />
              <span>info.samseetech@gmail.com</span>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4">

              <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white" />

            </div>

          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-gray-text hover:text-white"
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-primary-blue/20 mt-8 pt-6 text-center text-gray-text text-sm"
        >
          © 2026 Samsee Tech Solution. All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;