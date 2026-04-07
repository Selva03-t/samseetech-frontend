import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown, Zap, Shield, Star } from "lucide-react";

const plans = [
  {
    id: "basic",
    name: "Basic",
    badge: "Starter",
    priceFrom: "₹4,999",
    priceTo: "₹9,999",
    period: "one-time",
    desc: "Perfect for individuals & small businesses getting started online.",
    icon: Zap,
    features: [
      "5 Pages Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "7 Days Delivery",
      "1 Month Support",
    ],
    popular: false,
    cta: "Get Started",
    border: "border-white/10",
    iconBg: "bg-blue-500/10 text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: "standard",
    name: "Standard",
    badge: "Most Popular",
    priceFrom: "₹10,000",
    priceTo: "₹19,999",
    period: "one-time",
    desc: "The complete package for growing businesses serious about their online presence.",
    icon: Crown,
    features: [
      "10 Pages Website",
      "Custom Design",
      "Full SEO Optimization",
      "Admin Panel",
      "Social Media Integration",
      "WhatsApp Integration",
      "14 Days Delivery",
      "3 Months Support",
    ],
    popular: true,
    cta: "Get Started",
    border: "border-primary-blue/40",
    iconBg: "bg-teal-accent/10 text-teal-accent",
    glowColor: "rgba(31, 111, 235, 0.20)",
  },
  {
    id: "premium",
    name: "Premium",
    badge: "Enterprise",
    priceFrom: "₹20,000",
    priceTo: "Custom",
    period: "one-time",
    desc: "Full-scale digital solution for established businesses ready to dominate online.",
    icon: Star,
    features: [
      "Unlimited Pages",
      "Custom Full-Stack Dev",
      "Advanced SEO Strategy",
      "E-commerce / Booking System",
      "CRM & API Integrations",
      "Priority 24/7 Support",
      "21+ Days Delivery",
      "6 Months Ongoing Support",
    ],
    popular: false,
    cta: "Get a Quote",
    border: "border-purple-500/30",
    iconBg: "bg-purple-500/10 text-purple-400",
    glowColor: "rgba(124, 58, 237, 0.15)",
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scrollToContactWithPlan = (plan) => {
    const element = document.getElementById("contact");
    if (element) {
      const planMessage = `I'm interested in the ${plan.name} plan (${plan.priceFrom}–${plan.priceTo}).`;
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-3xl" />
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
        </motion.div>

        {/* Cards — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                style={{
                  boxShadow: plan.popular
                    ? `0 25px 60px ${plan.glowColor}`
                    : undefined,
                }}
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

                <div className="p-7 pt-10">
                  {/* Plan badge */}
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                    style={{
                      background: plan.popular
                        ? 'rgba(31,111,235,0.15)'
                        : plan.id === 'premium'
                        ? 'rgba(124,58,237,0.15)'
                        : 'rgba(255,255,255,0.06)',
                      color: plan.popular ? '#1F6FEB' : plan.id === 'premium' ? '#a855f7' : '#6b7280',
                    }}
                  >
                    {plan.badge}
                  </span>

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

                  {/* Price range */}
                  <div className="mb-8 pb-6 border-b border-white/[0.06]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black font-display text-white">{plan.priceFrom}</span>
                      {plan.priceTo !== 'Custom' && (
                        <>
                          <span className="text-gray-500 text-sm mx-1">–</span>
                          <span className="text-2xl font-bold font-display text-gray-300">{plan.priceTo}</span>
                        </>
                      )}
                      {plan.priceTo === 'Custom' && (
                        <span className="text-gray-400 text-sm ml-1">& above</span>
                      )}
                    </div>
                    <span className="text-gray-500 text-xs">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: plan.id === 'premium'
                              ? 'rgba(124,58,237,0.15)'
                              : plan.popular
                              ? 'rgba(15,185,177,0.15)'
                              : 'rgba(31,111,235,0.1)',
                          }}
                        >
                          <Check
                            className="w-3 h-3"
                            style={{
                              color: plan.id === 'premium' ? '#a855f7' : plan.popular ? '#0FB9B1' : '#1F6FEB',
                            }}
                          />
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
                        : plan.id === 'premium'
                        ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30"
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
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 text-sm mt-10 flex items-center justify-center gap-2"
        >
          <Shield size={14} className="text-teal-accent" />
          Not sure which plan fits? <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-primary-blue hover:text-teal-accent underline transition-colors">Get a free consultation</button>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;