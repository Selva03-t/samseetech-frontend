import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "./ui/Card";
import { Webhook, Smartphone, Search, Share2, FileText, Video } from "lucide-react";

const services = [
  { icon: Webhook, title: "Website Design & Development", desc: "Custom responsive websites tailored for your business." },
  { icon: Smartphone, title: "Mobile App UI/UX Design", desc: "Intuitive app interfaces that engage users." },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Boost your online presence with proven strategies." },
  { icon: Share2, title: "Social Media Page Handling", desc: "Manage and grow your social media effectively." },
  { icon: FileText, title: "Content Writing", desc: "Compelling content that converts visitors." },
  { icon: Video, title: "Video Editing", desc: "Professional videos to showcase your brand." },
];

const Services = () => {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-bg-dark to-deep-tech/30"
    >
      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 drop-shadow-lg"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => {

            const Icon = service.icon;

            return (
              <motion.div key={service.title} variants={childVariants}>
<Card
  className="h-full flex flex-col items-center justify-between backdrop-blur-sm bg-deep-tech/30 shadow-xl border border-primary-blue/20 hover:border-teal-accent/50 transition-colors"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  whileTap={{ scale: 0.98 }}
                >

                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="mb-4 flex justify-center"
                  >
                    <Icon className="w-12 h-12 text-teal-accent drop-shadow-lg" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-text text-center flex-grow">
                    {service.desc}
                  </p>

                </Card>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;