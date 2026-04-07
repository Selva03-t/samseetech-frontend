import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Webhook, Smartphone, Search, Share2, FileText, Video, X, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Webhook,
    title: "Web Design & Development",
    desc: "Turn visitors into paying customers with a website that wows.",
    details: "We craft blazing-fast, conversion-optimised websites that rank on Google and convert browsers into buyers. Every element is designed with your business growth in mind.",
    benefits: [
      "SEO-friendly structure that ranks higher on Google",
      "Mobile-first, responsive design for every device",
      "Lightning-fast performance for better conversions",
    ],
    color: "from-blue-500/20 to-blue-600/5",
    glow: "group-hover:shadow-blue-500/20",
    iconBg: "bg-blue-500/15 text-blue-400",
    accentColor: "#1F6FEB",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    desc: "Design so intuitive that users stay longer and engage more.",
    details: "We design interfaces that users love. Our UX-driven approach reduces bounce rates, improves engagement and makes your product memorable.",
    benefits: [
      "User research-backed design decisions",
      "Wireframes, prototypes & pixel-perfect handoff",
      "Reduced bounce rate & improved user retention",
    ],
    color: "from-teal-500/20 to-teal-600/5",
    glow: "group-hover:shadow-teal-500/20",
    iconBg: "bg-teal-500/15 text-teal-400",
    accentColor: "#0FB9B1",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Rank on Google and attract customers who are ready to buy.",
    details: "We implement data-driven SEO strategies that push you to the top of search results, bringing in organic traffic that converts into real revenue.",
    benefits: [
      "Keyword research & on-page optimisation",
      "Technical SEO & core web vitals improvements",
      "Monthly performance reports with real metrics",
    ],
    color: "from-purple-500/20 to-purple-600/5",
    glow: "group-hover:shadow-purple-500/20",
    iconBg: "bg-purple-500/15 text-purple-400",
    accentColor: "#7C3AED",
  },
  {
    icon: Share2,
    title: "Digital Solutions",
    desc: "Grow your audience and turn followers into loyal brand fans.",
    details: "From social media management to complete digital strategy, we help you build a powerful online presence that keeps your brand top-of-mind and drives consistent growth.",
    benefits: [
      "Content strategy & social media management",
      "Brand storytelling that builds trust & authority",
      "Consistent posting schedule with analytics",
    ],
    color: "from-orange-500/20 to-orange-600/5",
    glow: "group-hover:shadow-orange-500/20",
    iconBg: "bg-orange-500/15 text-orange-400",
    accentColor: "#F59E0B",
  },
  {
    icon: FileText,
    title: "Content Writing",
    desc: "Words that sell — compelling content crafted for your audience.",
    details: "Professional copy that speaks your customer's language, builds trust and drives action. From blog posts to landing pages, every word earns its place.",
    benefits: [
      "SEO-optimised blog posts & web copy",
      "Conversion-focused landing page content",
      "Brand voice consistency across all content",
    ],
    color: "from-green-500/20 to-green-600/5",
    glow: "group-hover:shadow-green-500/20",
    iconBg: "bg-green-500/15 text-green-400",
    accentColor: "#22C55E",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional videos that showcase your brand and drive results.",
    details: "Eye-catching video content for social media, promotional campaigns and YouTube that stops the scroll and keeps viewers engaged with your brand story.",
    benefits: [
      "Reels, shorts & YouTube-optimised edits",
      "Motion graphics & brand animations",
      "Fast turnaround with unlimited revisions",
    ],
    color: "from-red-500/20 to-red-600/5",
    glow: "group-hover:shadow-red-500/20",
    iconBg: "bg-red-500/15 text-red-400",
    accentColor: "#EF4444",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="services" ref={ref} className="relative py-24 bg-bg-dark">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">What We Offer</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `linear-gradient(135deg, ${service.accentColor}44, ${service.accentColor}11)` }}
                />

                <div className={`relative h-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] group-hover:border-white/20 rounded-2xl p-6 transition-all duration-500 overflow-hidden shadow-xl ${service.glow} group-hover:shadow-2xl`}>
                  {/* Card inner glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.iconBg} mb-5 transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    <div className="flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ color: service.accentColor }}>
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-[#0B1D3A] border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ borderColor: `${selectedService.accentColor}33` }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
              >
                <X size={16} />
              </button>

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${selectedService.iconBg} mb-5`}>
                <selectedService.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{selectedService.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{selectedService.details}</p>

              {/* Benefits list */}
              <ul className="space-y-3 mb-8">
                {selectedService.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: selectedService.accentColor }} />
                    <span className="text-gray-300 text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfd4SLortk8j7J3P2zh67vVXzIHqaV1ZbWoSRoRReqqNB83lQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, ${selectedService.accentColor}, #0FB9B1)` }}
              >
                <ExternalLink size={16} />
                Request This Service
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;