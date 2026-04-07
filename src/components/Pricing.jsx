import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown, Zap, Shield } from "lucide-react";

const plans = [
  {
    id: "basic",
    name: "Basic Website",
    price: "₹4,999",
    period: "one-time",
    desc: "Perfect for individuals & small businesses getting started online.",
    icon: Zap,
    features: [
      "5 Pages Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "7 Days Delivery",
    ],
    popular: false,
    cta: "Get Started",
    border: "border-white/10",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    id: "business",
    name: "Business Website",
    price: "₹9,999",
    period: "one-time",
    desc: "The complete package for growing businesses serious about their online presence.",
    icon: Crown,
    features: [
      "10 Pages Website",
      "Custom Design",
      "SEO Optimization",
      "Admin Panel",
      "Social Media Integration",
      "14 Days Delivery",
    ],
    popular: true,
    cta: "Get Started",
    border: "border-primary-blue/40",
    iconBg: "bg-teal-accent/10 text-teal-accent",
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scrollToContactWithPlan = (plan) => {
    const element = document.getElementById("contact");
    if (element) {
      const planMessage = `I'm interested in the ${plan.name} plan (${plan.price}).`;
      window.history.replaceState(null, "", `?plan=${encodeURIComponent(planMessage)}`);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section id="pricing" ref={ref} className="relative py-24 bg-bg-dark overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent" />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Transparent Pricing</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Clear, straightforward pricing — no surprises. Select the plan that fits your business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => {
            const PlanIcon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`relative rounded-2xl border ${plan.border} overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary-blue/10 to-bg-dark shadow-2xl shadow-primary-blue/15"
                    : "bg-white/[0.04] shadow-xl"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-blue to-teal-accent text-white text-xs font-bold px-5 py-1.5 rounded-b-xl flex items-center gap-1.5 shadow-lg">
                      <Crown size={12} />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-8 pt-10">
                  {/* Plan icon & name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.iconBg}`}>
                      <PlanIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{plan.desc}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black font-display text-white">{plan.price}</span>
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-teal-accent/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-teal-accent" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToContactWithPlan(plan)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary-blue to-teal-accent text-white shadow-lg hover:shadow-xl hover:shadow-primary-blue/30"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10 flex items-center justify-center gap-2"
        >
          <Shield size={14} className="text-teal-accent" />
          Need a custom plan? <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-primary-blue hover:text-teal-accent underline transition-colors">Contact us for a quote</button>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;