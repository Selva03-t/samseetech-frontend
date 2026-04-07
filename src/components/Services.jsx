import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Webhook, Smartphone, Search, Share2, FileText, Video, X, ExternalLink, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Webhook,
    title: "Website Design & Development",
    desc: "Custom responsive websites tailored for your business.",
    details: "We create modern, responsive websites for businesses, startups, and brands. Our websites are SEO-friendly, fast, and optimized for user experience.",
    color: "from-blue-500/20 to-blue-600/5",
    glow: "group-hover:shadow-blue-500/20",
    iconBg: "bg-blue-500/15 text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App UI/UX Design",
    desc: "Intuitive app interfaces that engage users.",
    details: "We design clean, modern mobile app interfaces that provide smooth user experiences and attractive UI design.",
    color: "from-teal-500/20 to-teal-600/5",
    glow: "group-hover:shadow-teal-500/20",
    iconBg: "bg-teal-500/15 text-teal-400",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Boost your online presence with proven strategies.",
    details: "Our SEO and digital marketing services help your business rank higher on Google and attract more customers.",
    color: "from-purple-500/20 to-purple-600/5",
    glow: "group-hover:shadow-purple-500/20",
    iconBg: "bg-purple-500/15 text-purple-400",
  },
  {
    icon: Share2,
    title: "Social Media Page Handling",
    desc: "Manage and grow your social media effectively.",
    details: "We manage social media accounts and create engaging content that helps your brand grow online.",
    color: "from-orange-500/20 to-orange-600/5",
    glow: "group-hover:shadow-orange-500/20",
    iconBg: "bg-orange-500/15 text-orange-400",
  },
  {
    icon: FileText,
    title: "Content Writing",
    desc: "Compelling content that converts visitors.",
    details: "Professional blog writing, website copy, and marketing content to attract your target audience.",
    color: "from-green-500/20 to-green-600/5",
    glow: "group-hover:shadow-green-500/20",
    iconBg: "bg-green-500/15 text-green-400",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional videos to showcase your brand.",
    details: "Creative video editing for social media, promotional videos, YouTube, and business marketing.",
    color: "from-red-500/20 to-red-600/5",
    glow: "group-hover:shadow-red-500/20",
    iconBg: "bg-red-500/15 text-red-400",
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to launch — we provide end-to-end digital solutions built for growth.
          </p>
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
                className={`group relative cursor-pointer rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.02]`}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-blue/0 to-teal-accent/0 group-hover:from-primary-blue/30 group-hover:to-teal-accent/20 transition-all duration-500" />

                <div className={`relative h-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] group-hover:border-primary-blue/30 rounded-2xl p-6 transition-all duration-500 overflow-hidden shadow-xl ${service.glow} group-hover:shadow-2xl`}>
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

                    <div className="flex items-center gap-1 text-primary-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-[#0B1D3A] border border-primary-blue/20 rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
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
            <p className="text-gray-400 mb-8 leading-relaxed">{selectedService.details}</p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfd4SLortk8j7J3P2zh67vVXzIHqaV1ZbWoSRoRReqqNB83lQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-blue to-teal-accent px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary-blue/30 transition-all duration-300"
            >
              <ExternalLink size={16} />
              Request This Service
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Services;