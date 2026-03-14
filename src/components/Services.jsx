import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Card from "./ui/Card";
import { Webhook, Smartphone, Search, Share2, FileText, Video, X } from "lucide-react";

const services = [
  {
    icon: Webhook,
    title: "Website Design & Development",
    desc: "Custom responsive websites tailored for your business.",
    details:
      "We create modern, responsive websites for businesses, startups, and brands. Our websites are SEO-friendly, fast, and optimized for user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile App UI/UX Design",
    desc: "Intuitive app interfaces that engage users.",
    details:
      "We design clean, modern mobile app interfaces that provide smooth user experiences and attractive UI design.",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Boost your online presence with proven strategies.",
    details:
      "Our SEO and digital marketing services help your business rank higher on Google and attract more customers.",
  },
  {
    icon: Share2,
    title: "Social Media Page Handling",
    desc: "Manage and grow your social media effectively.",
    details:
      "We manage social media accounts and create engaging content that helps your brand grow online.",
  },
  {
    icon: FileText,
    title: "Content Writing",
    desc: "Compelling content that converts visitors.",
    details:
      "Professional blog writing, website copy, and marketing content to attract your target audience.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional videos to showcase your brand.",
    details:
      "Creative video editing for social media, promotional videos, YouTube, and business marketing.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-bg-dark to-deep-tech/30">
      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer"
              >
                <Card className="h-full flex flex-col items-center justify-between backdrop-blur-sm bg-deep-tech/30 shadow-xl border border-primary-blue/20 hover:border-teal-accent/50 hover:scale-105 transition-all duration-300 p-6">

                  <Icon className="w-12 h-12 text-teal-accent mb-4" />

                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-text text-center">
                    {service.desc}
                  </p>

                </Card>
              </div>
            );
          })}

        </div>
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-deep-tech p-8 rounded-xl max-w-lg w-full relative">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {selectedService.title}
            </h3>

            <p className="text-gray-text mb-6">
              {selectedService.details}
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfd4SLortk8j7J3P2zh67vVXzIHqaV1ZbWoSRoRReqqNB83lQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-blue px-6 py-3 rounded-lg text-white hover:bg-blue-600 transition"
            >
              Request This Service
            </a>

          </div>

        </div>
      )}
    </section>
  );
};

export default Services;