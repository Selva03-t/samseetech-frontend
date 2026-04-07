import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, Mail, ArrowUp, MapPin, Zap } from "lucide-react";
import logo from "../../assets/Samsee.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    "Website Design & Development",
    "Mobile App UI/UX Design",
    "SEO & Digital Marketing",
    "Social Media Management",
    "Content Writing",
    "Video Editing",
  ];

  const socials = [
    {
      icon: Facebook,
      href: "https://facebook.com/yourpage",
      label: "Facebook",
      color: "hover:text-blue-400 hover:border-blue-400/40",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/samsee.tech?igsh=MW9oODF1Znhhanc4Ng==",
      label: "Instagram",
      color: "hover:text-pink-400 hover:border-pink-400/40",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/yourpage",
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:border-blue-500/40",
    },
  ];

  return (
    <footer className="relative bg-[#060E1A] border-t border-white/[0.06]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary-blue/40">
                <img src={logo} alt="Samsee Tech" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base leading-tight block">Samsee Tech</span>
                <span className="text-teal-accent text-[10px] font-semibold tracking-wider">SOLUTION</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              We help startups, businesses, restaurants and brands build powerful digital experiences with websites, apps and marketing.
            </p>

            {/* Location */}
            <div className="flex items-start gap-2 text-gray-500 text-sm mb-6">
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-teal-accent" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-500 transition-all duration-300 ${color} hover:scale-110 hover:-translate-y-0.5`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, id }) => (
                <li key={name}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-blue/60 group-hover:bg-teal-accent transition-colors" />
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc} className="text-gray-500 text-sm flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-teal-accent/60 mt-2 flex-shrink-0" />
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-wider">Contact Us</h4>

            <div className="space-y-4">
              <a
                href="tel:+919025370797"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                  <Phone size={13} className="text-primary-blue" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Phone</p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">+91 90253 70797</p>
                </div>
              </a>

              <a
                href="mailto:info.samseetech@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                  <Mail size={13} className="text-primary-blue" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors break-all">info.samseetech@gmail.com</p>
                </div>
              </a>

              {/* CTA Button */}
              <a
                href="tel:+919025370797"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue to-teal-accent text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-primary-blue/30 hover:scale-105 transition-all duration-300 mt-2"
              >
                <Zap size={14} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 text-xs"
          >
            © 2026 Samsee Tech Solution. All rights reserved. Built with ❤️ in Chennai.
          </motion.p>

          {/* Back to top */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-gray-600 hover:text-white text-xs transition-colors group"
          >
            Back to Top
            <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-blue/20 group-hover:border-primary-blue/30 transition-all">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;