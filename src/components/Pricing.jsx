import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { Check, Crown } from "lucide-react";
const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activePlan, setActivePlan] = useState("business");

  // 🔥 Scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const plans = [
    {
      name: "Basic Website",
      price: "₹4999",
      features: [
        "5 Pages Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "7 Days Delivery",
      ],
      popular: false,
    },
    {
      name: "Business Website",
      price: "₹9999",
      features: [
        "10 Pages Website",
        "Custom Design",
        "SEO Optimization",
        "Admin Panel",
        "Social Media Integration",
        "14 Days Delivery",
      ],
      popular: true,
    },
  ];

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };
  return (
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-b from-bg-dark to-deep-tech/30">
      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16 drop-shadow-lg"
        >
          Pricing Plans
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={childVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.2 }}
              className={`relative backdrop-blur-md bg-deep-tech/30 border border-primary-blue/30 rounded-2xl p-8 shadow-2xl hover:shadow-primary-blue/20 transition-all ${
                plan.popular ? "ring-2 ring-teal-accent" : ""
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-accent text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                  <Crown size={16} /> Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>

              <p className="text-4xl font-bold text-primary-blue mb-8 text-center">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <motion.li
                    key={feature}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: fi * 0.1 }}
                    className="flex items-center gap-3 text-gray-text"
                  >
                    <Check className="w-5 h-5 text-teal-accent flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* 🔥 Interactive Button */}
             <Button
  onClick={() => {
    const element = document.getElementById("contact");

    if (element) {
      const planMessage = `I'm interested in the ${plan.name} plan (${plan.price}).`;

      window.history.replaceState(
        null,
        "",
        `?plan=${encodeURIComponent(planMessage)}`
      );

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className="w-full shadow-lg hover:shadow-primary-blue/50"
>
  Get Started
</Button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;